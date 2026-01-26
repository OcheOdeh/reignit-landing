
import { NextResponse } from 'next/server';
import { Storage } from '@google-cloud/storage';

export const runtime = 'nodejs'; // Force Node.js runtime
export const dynamic = 'force-dynamic'; // Prevent static optimization

// Helper to sanitize and format the private key
const formatPrivateKey = (key: string) => {
    if (!key) return '';

    // 1. Remove outer quotes and handle literal newlines
    let cleanKey = key.replace(/(^"|"$)/g, '').split(String.raw`\n`).join('\n');

    // 2. If it's already multi-line, return it
    if (cleanKey.includes('\n-----')) return cleanKey;

    // 3. If it's a one-liner, attempt to fix it by inserting newlines around headers
    cleanKey = cleanKey.replace('-----BEGIN PRIVATE KEY-----', '-----BEGIN PRIVATE KEY-----\n');
    cleanKey = cleanKey.replace('-----END PRIVATE KEY-----', '\n-----END PRIVATE KEY-----');

    // 4. If space-separated instead of newline-separated (common copy-paste issue)
    if (!cleanKey.includes('\n')) {
        cleanKey = cleanKey.replace(/ /g, '\n');
        // Fix headers broken by space replacement
        cleanKey = cleanKey.replace('-----\nBEGIN\nPRIVATE\nKEY-----', '-----BEGIN PRIVATE KEY-----');
        cleanKey = cleanKey.replace('-----\nEND\nPRIVATE\nKEY-----', '-----END PRIVATE KEY-----');
    }

    return cleanKey;
};

export async function POST(request: Request) {
    console.log("Upload API invoked - forcing fresh build"); // Trigger rebuild
    try {
        const { filename, contentType } = await request.json();

        if (!filename || !contentType) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const projectId = process.env.GCP_PROJECT_ID;
        const clientEmail = process.env.GCP_CLIENT_EMAIL;
        const rawPrivateKey = process.env.GCP_PRIVATE_KEY;
        const bucketName = process.env.GCP_BUCKET_NAME;

        if (!projectId || !clientEmail || !rawPrivateKey || !bucketName) {
            console.error("Missing GCP credentials");
            const availableKeys = Object.keys(process.env).filter(k => k.startsWith('GCP_') || k.startsWith('NEXT_') || k === 'NODE_ENV');
            return NextResponse.json({
                error: 'Server configuration error',
                details: {
                    hasProjectId: !!projectId,
                    hasClientEmail: !!clientEmail,
                    hasPrivateKey: !!rawPrivateKey,
                    hasBucketName: !!bucketName,
                    availableEnvKeys: availableKeys // Debug info
                }
            }, { status: 500 });
        }

        const storage = new Storage({
            projectId,
            credentials: {
                client_email: clientEmail,
                private_key: formatPrivateKey(rawPrivateKey),
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
