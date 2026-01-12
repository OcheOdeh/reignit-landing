
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with fallback to avoid build errors if env var is missing
const resend = new Resend(process.env.RESEND_API_KEY || 're_123');

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            fileName,
            fileUrl,
            contributorName,
            countryOfOrigin,
            residence,
            email,
            phone
        } = body;

        // Basic validation
        if (!fileUrl || !email) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Send Email
        const { data, error } = await resend.emails.send({
            from: 'Reignit Data <onboarding@resend.dev>', // Update this if you have a custom domain
            to: ['sales@reignitinc.com'],
            subject: `New Data Donation: ${fileName}`,
            html: `
                <h1>New Data Donation Received</h1>
                <p><strong>File:</strong> <a href="${fileUrl}">${fileName}</a></p>
                
                <h2>Contributor Details</h2>
                <ul>
                    <li><strong>Name:</strong> ${contributorName}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Phone:</strong> ${phone || 'N/A'}</li>
                    <li><strong>Country of Origin:</strong> ${countryOfOrigin}</li>
                    <li><strong>Current Residence:</strong> ${residence}</li>
                </ul>
                
                <p><em>This file has been uploaded to your Google Cloud Storage bucket.</em></p>
            `,
        });

        if (error) {
            console.error('Resend Error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });

    } catch (error) {
        console.error('Server Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
