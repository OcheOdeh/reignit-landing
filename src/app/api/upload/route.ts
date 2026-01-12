
import { NextResponse } from 'next/server';
import { Storage } from '@google-cloud/storage';

export async function POST(request: Request) {
    try {
        const { filename, contentType } = await request.json();

        if (!filename || !contentType) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const projectId = process.env.GCP_PROJECT_ID;
        const clientEmail = process.env.GCP_CLIENT_EMAIL;
        const privateKey = process.env.GCP_PRIVATE_KEY?.replace(/\\n/g, '\n'); // Handle newlines in env var
        const bucketName = process.env.GCP_BUCKET_NAME;

        if (!projectId || !clientEmail || !privateKey || !bucketName) {
            console.error("Missing GCP credentials");
            return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
        }

        const storage = new Storage({
            projectId,
            credentials: {
                client_email: clientEmail,
                private_key: privateKey,
            },
        });

        const bucket = storage.bucket(bucketName);
        const file = bucket.file(`truth-engine-uploads/${Date.now()}-${filename}`);

        // Generate a signed URL for uploading
        const [url] = await file.getSignedUrl({
            version: 'v4',
            action: 'write',
            expires: Date.now() + 15 * 60 * 1000, // 15 minutes
            contentType,
        });

        return NextResponse.json({ url, publicUrl: file.publicUrl() });

    } catch (error) {
        console.error('Error generating signed URL:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
