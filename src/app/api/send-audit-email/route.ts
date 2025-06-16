import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import AuditNotificationEmail from '@/components/emails/AuditNotificationEmail';
import AuditConfirmationEmail from '@/components/emails/AuditConfirmationEmail';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

// Email address to send notifications to. Should be a verified domain on Resend.
const NOTIFICATION_EMAIL = process.env.AUDIT_NOTIFICATION_EMAIL || 'sales@reignitinc.com';
const FROM_EMAIL = process.env.AUDIT_FROM_EMAIL || 'noreply@reignitinc.com';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();
    const { fullName, workEmail } = formData;

    if (!fullName || !workEmail) {
      return NextResponse.json({ error: 'Missing required form data.' }, { status: 400 });
    }

    // 1. Send notification email to the sales team
    const notificationEmail = await resend.emails.send({
      from: `Reignit AI Audit Form <${FROM_EMAIL}>`,
      to: [NOTIFICATION_EMAIL],
      subject: `New AI Audit Lead: ${fullName}`,
      react: React.createElement(AuditNotificationEmail, { formData }),
    });

    if (notificationEmail.error) {
      console.error('Resend notification error:', notificationEmail.error);
      // Still try to send the confirmation email to the user
    }

    // 2. Send confirmation email to the user
    const confirmationEmail = await resend.emails.send({
      from: `Reignit Inc. <${FROM_EMAIL}>`,
      to: [workEmail],
      subject: 'Thank you for your AI Audit request!',
      react: React.createElement(AuditConfirmationEmail, { fullName }),
    });

    if (confirmationEmail.error) {
      console.error('Resend confirmation error:', confirmationEmail.error);
      return NextResponse.json({ error: 'Failed to send confirmation email.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Emails sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Error in send-audit-email route:', error);
    return NextResponse.json({ error: 'An internal server error occurred.' }, { status: 500 });
  }
}
