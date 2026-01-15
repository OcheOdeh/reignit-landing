
import { NextResponse } from 'next/server';
// Trigger Vercel rebuild to load environment variables
import { Storage } from '@google-cloud/storage';

export async function POST(request: Request) {
    try {
        const { filename, contentType } = await request.json();

        if (!filename || !contentType) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const projectId = process.env.GCP_PROJECT_ID;
        const clientEmail = process.env.GCP_CLIENT_EMAIL;
        let privateKey = process.env.GCP_PRIVATE_KEY;
        const bucketName = process.env.GCP_BUCKET_NAME;

        if (!projectId || !clientEmail || !privateKey || !bucketName) {
            console.error("Missing GCP credentials");
            return NextResponse.json({
                error: 'Server configuration error',
                details: {
                    hasProjectId: !!projectId,
                    hasClientEmail: !!clientEmail,
                    hasPrivateKey: !!privateKey,
                    hasBucketName: !!bucketName
                }
            }, { status: 500 });
        }

        // SANITIZATION: Handle Vercel newlines and potential quotes
        if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
            privateKey = privateKey.slice(1, -1);
        }
        privateKey = privateKey.replace(/\\n/g, '\n');

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

    } catch (error: any) {
        console.error('Error generating signed URL:', error);
        return NextResponse.json({
            error: 'Internal Server Error',
            message: error.message,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        }, { status: 500 });
    }
}
