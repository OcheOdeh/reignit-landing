const { Storage } = require('@google-cloud/storage');
const path = require('path');

// Path to your downloaded JSON key
const keyFilePath = 'c:\\Users\\KENNETH\\Downloads\\reignit-storage-2507caf8f5a9.json';
const bucketName = 'reignit-uploads-pro';

async function configureCors() {
    const storage = new Storage({
        keyFilename: keyFilePath,
        projectId: 'reignit-storage', // From the JSON file content we saw earlier
    });

    const bucket = storage.bucket(bucketName);

    const corsConfiguration = [
        {
            maxAgeSeconds: 3600,
            method: ['GET', 'PUT', 'POST', 'HEAD', 'DELETE', 'OPTIONS'],
            origin: ['*'], // Allow all origins for now to fix the issue quickly. Can be restricted later.
            responseHeader: ['Content-Type', 'x-goog-resumable', 'Access-Control-Allow-Origin'],
        },
    ];

    try {
        console.log(`Setting CORS for bucket ${bucketName}...`);
        await bucket.setCorsConfiguration(corsConfiguration);
        console.log(`CORS configuration updated successfully for ${bucketName}!`);

        // Verify
        const [metadata] = await bucket.getMetadata();
        console.log('New CORS Configuration:', JSON.stringify(metadata.cors, null, 2));
    } catch (err) {
        console.error('Error setting CORS:', err);
    }
}

configureCors();
