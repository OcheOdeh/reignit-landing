
const https = require('https');

const data = JSON.stringify({
    filename: 'debug-probe.txt',
    contentType: 'text/plain'
});

const options = {
    hostname: 'www.reignitinc.com',
    port: 443,
    path: '/api/upload',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

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
