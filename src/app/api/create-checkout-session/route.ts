
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    // apiVersion: '2025-01-27.acacia',
});

export async function POST(req: Request) {
    try {
        const { items, email } = await req.json();

        if (!items || items.length === 0) {
            return NextResponse.json({ error: 'No items provided' }, { status: 400 });
        }

        const lineItems = items.map((item: any) => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.name,
                },
                unit_amount: Math.round(item.price * 100), // Stripe expects cents
            },
            quantity: 1,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: `${req.headers.get('origin')}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.get('origin')}/vanguard-checkout`,
            customer_email: email, // Pre-fill email
            metadata: {
                // Add any metadata you want to track
                email: email
            },
            custom_text: {
                submit: {
                    message: "We accept all major cards globally. Your bank will automatically convert USD to your local currency."
                }
            }
        });

        return NextResponse.json({ url: session.url, sessionId: session.id });
    } catch (err: any) {
        console.error('Stripe Session Creation Error:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
