import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import IdeaSubmissionEmail from '@/components/emails/IdeaSubmissionEmail';
import React from 'react';

const NOTIFICATION_EMAIL = process.env.AUDIT_NOTIFICATION_EMAIL || 'sales@reignitinc.com';
const FROM_EMAIL = process.env.AUDIT_FROM_EMAIL || 'noreply@reignitinc.com';

export async function POST(req: NextRequest) {
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const { email, idea } = await req.json();

        if (!email || !idea) {
            return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
        }

        const data = await resend.emails.send({
            from: `Reignit Builders <${FROM_EMAIL}>`,
            to: [NOTIFICATION_EMAIL],
            subject: `New Idea from Builder: ${email}`,
            react: React.createElement(IdeaSubmissionEmail, { senderEmail: email, idea }),
        });

        if (data.error) {
            console.error('Resend error:', data.error);
            return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
        }

        return NextResponse.json({ message: 'Idea sent successfully!' }, { status: 200 });

    } catch (error) {
        console.error('Error in submit-idea route:', error);
        return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
    }
}
