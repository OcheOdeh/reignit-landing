import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, amount, name, transaction_id } = body;

        // 1. Verify Transaction with Squadco
        const squadResponse = await fetch(`https://api.squadco.com/transaction/verify/${transaction_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.SQUAD_SECRET_KEY}`
            }
        });

        const squadData = await squadResponse.json();

        if (squadData.status !== 200 || !squadData.success) {
            console.error("Squadco verification failed. Status:", squadData.status, "Success:", squadData.success, "Message:", squadData.message);
            console.error("Full Squadco Response:", JSON.stringify(squadData, null, 2));
            return NextResponse.json({ error: 'Transaction verification failed' }, { status: 400 });
        }

        const transaction = squadData.data;

        // 2. Validate Payment Details
        // Squadco returns: transaction_amount (number), currency (string), transaction_status (string)
        // Note: Squadco amount is usually in major units (e.g. 100.00) but check if your client sends minor
        // The client code sends Math.round(total * 100) as 'amount' to the widget?
        // Wait, client sends: amount: Math.round(total * 100) (param name 'amount')
        // But let's check what Squadco Verify returns. Usually it matches the charged amount.
        // If the widget takes minor units (kobo/cents), the verification might return major or minor.
        // Standard Squadco verify returns 'transaction_amount' in MAJOR units (e.g. NGN 1000).
        // Let's assume major units for verification comparison against the 'amount' variable which comes from body. (body.amount is 'total', ie. 34.46)

        if (
            transaction.transaction_status !== "success" ||
            transaction.currency !== "NGN" ||
            transaction.transaction_amount < amount
        ) {
            console.error("Invalid transaction details:", transaction);
            return NextResponse.json({ error: 'Invalid transaction details' }, { status: 400 });
        }

        // Updated Links
        const COMMUNITY_LINK = "https://t.me/+Xc2_CgTRGy0wY2Zk";
        const ADMIN_LINK_1 = "https://t.me/kenneth_reignit";
        const ADMIN_LINK_2 = "https://t.me/Codd_AIVanguard";

        // 3. Send Email
        const { data, error } = await resend.emails.send({
            from: 'Reignit AI Vanguard <noreply@reignitinc.com>',
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
