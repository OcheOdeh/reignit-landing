
const https = require('https');

const data = JSON.stringify({
    filename: 'debug-probe-direct.txt',
    contentType: 'text/plain'
});

const options = {
    hostname: 'reignit-landing-24ud.vercel.app',
    port: 443,
    path: '/api/upload',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

console.log('Probing: https://' + options.hostname + options.path);

const req = https.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);

    let body = '';
    res.on('data', (chunk) => {
        body += chunk;
    });

    res.on('end', () => {
        console.log('Response Body:');
        console.log(body);
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

req.write(data);
req.end();
