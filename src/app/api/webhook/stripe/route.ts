import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';
import VanguardWelcomeEmail from '@/components/emails/VanguardWelcomeEmail';
import React from 'react';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    // apiVersion: '2025-01-27.acacia',
});

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = 'noreply@reignitinc.com';

export async function POST(req: NextRequest) {
    const body = await req.text();
    const sig = req.headers.get('stripe-signature') as string;

    let event: Stripe.Event;

    try {
        if (process.env.STRIPE_WEBHOOK_SECRET) {
            event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);
        } else {
            // WARNING: For production, you MUST provide a webhook secret to verify signatures.
            // Providing a fallback for initial testing if secret is not yet set.
            console.warn("⚠️ STRIPE_WEBHOOK_SECRET is missing. Skipping signature verification. This is unsafe for production.");
            event = JSON.parse(body);
        }
    } catch (err: any) {
        console.error(`Webhook Error: ${err.message}`);
        return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
    }

    // Handle the event
    if (event.type === 'checkout.session.completed') {
        const session = event.data.object as Stripe.Checkout.Session;

        // Check if this is a Vanguard transaction
        const transactionType = session.metadata?.type;

        console.log(`Processing checkout.session.completed for ${session.id}. Type: ${transactionType}`);

        if (transactionType === 'vanguard') {
            const customerEmail = session.customer_email || session.metadata?.email;
            const customerName = session.metadata?.name || 'Vanguard Member';

            if (customerEmail) {
                try {
                    console.log(`Sending Vanguard Welcome Email to: ${customerEmail}`);

                    const { data, error } = await resend.emails.send({
                        from: `Reignit AI Vanguard <${FROM_EMAIL}>`,
                        to: [customerEmail],
                        subject: 'Access Granted: Welcome to the Vanguard',
                        react: React.createElement(VanguardWelcomeEmail),
                    });

                    if (error) {
                        console.error('Error sending welcome email:', error);
                        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
                    }

                    console.log('Welcome email sent successfully:', data);
                } catch (emailErr) {
                    console.error('Unexpected error sending email:', emailErr);
                    return NextResponse.json({ error: 'Internal Server Error sending email' }, { status: 500 });
                }
            } else {
                console.warn('No customer email found in session.');
            }
        } else {
            console.log('Transaction type is not "vanguard". Skipping welcome email.');
        }
    }

    return NextResponse.json({ received: true });
}
