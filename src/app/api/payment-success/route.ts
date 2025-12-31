import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, amount, name, transaction_id } = body;

        // 1. Verify Transaction with Flutterwave
        const flwResponse = await fetch(`https://api.flutterwave.com/v3/transactions/${transaction_id}/verify`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.FLUTTERWAVE_SECRET_KEY}`
            }
        });

        const flwData = await flwResponse.json();

        if (flwData.status !== 'success') {
            return NextResponse.json({ error: 'Transaction verification failed' }, { status: 400 });
        }

        const transaction = flwData.data;

        // 2. Validate Payment Details
        if (
            transaction.status !== "successful" ||
            transaction.currency !== "USD" ||
            transaction.amount < amount
        ) {
            return NextResponse.json({ error: 'Invalid transaction details' }, { status: 400 });
        }

        // Updated Links
        const COMMUNITY_LINK = "https://t.me/ReignitTheAIVanguard";
        const ADMIN_LINK_1 = "https://t.me/kenneth_reignit";
        const ADMIN_LINK_2 = "https://t.me/codd_AI_Vanguard";

        // 3. Send Email
        const { data, error } = await resend.emails.send({
            from: 'Reignit AI Vanguard <noreply@reignitinc.com>', // Ensure this domain is verified in Resend
            to: [email],
            subject: 'Welcome to Reignit AI Vanguard - Access Details',
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h1>Payment Successful!</h1>
                    <p>Hi ${name || 'there'},</p>
                    <p>Thank you for your payment of <strong>$${amount}</strong>. We are excited to have you on board!</p>
                    
                    <div style="background-color: #f0f9ff; padding: 20px; border-radius: 10px; margin: 20px 0;">
                        <h3 style="color: #0284c7; margin-top: 0;">🚀 Next Steps</h3>
                        <p><strong>1. Join the Community</strong><br/>
                        Get daily updates, handbooks, and resources here:<br/>
                        <a href="${COMMUNITY_LINK}" style="background-color: #0284c7; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 5px;">Join Telegram Community</a>
                        </p>

                        <p><strong>2. Contact Admins (For Service Setup)</strong><br/>
                        If you paid for Business Registration or other custom services, please contact the admins with your details:<br/>
                        <a href="${ADMIN_LINK_1}" style="color: #0284c7; font-weight: bold; display: block; margin-top: 5px;">Message Admin 1 (Kenneth)</a>
                        <a href="${ADMIN_LINK_2}" style="color: #0284c7; font-weight: bold; display: block; margin-top: 5px;">Message Admin 2 (Codd)</a>
                        </p>
                    </div>

                    <p style="font-size: 12px; color: #666;">Transaction Ref: ${transaction_id}</p>
                </div>
            `,
        });

        if (error) {
            console.error("Resend Error:", error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ message: 'Email sent successfully', data });
    } catch (error) {
        console.error("Server Error:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
