import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import WelcomeEmail from '@/components/emails/WelcomeEmail';
import NewSubscriberEmail from '@/components/emails/NewSubscriberEmail';
import React from 'react';

const NOTIFICATION_EMAIL = process.env.AUDIT_NOTIFICATION_EMAIL || 'sales@reignitinc.com';
const FROM_EMAIL = process.env.AUDIT_FROM_EMAIL || 'noreply@reignitinc.com';

export async function POST(req: NextRequest) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    try {
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        // Parallel execution: Send welcome email to user AND notification to admin
        await Promise.all([
            // 1. Welcome Email to User
            resend.emails.send({
                from: `Reignit AI <${FROM_EMAIL}>`,
                to: [email],
                subject: 'Welcome to Reignit The AI Vanguard',
                react: React.createElement(WelcomeEmail),
            }),

            // 2. Notification Email to Admin (Sales)
            resend.emails.send({
                from: `Reignit Systems <${FROM_EMAIL}>`,
                to: [NOTIFICATION_EMAIL],
                subject: `New Vanguard Subscriber: ${email}`,
                react: React.createElement(NewSubscriberEmail, { email }),
            })
        ]);

        return NextResponse.json({ message: 'Subscribed successfully' }, { status: 200 });

    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
    }
}
