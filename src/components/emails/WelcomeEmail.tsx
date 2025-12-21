import React from 'react';

const WelcomeEmail = () => {
    return (
        <div style={{ fontFamily: 'sans-serif', color: '#e0e0e0', lineHeight: '1.6', backgroundColor: '#000000', padding: '20px' }}>
            <div style={{ maxWidth: '600px', margin: '0 auto', padding: '40px', border: '1px solid #333', borderRadius: '12px', backgroundColor: '#111' }}>
                <h1 style={{ color: '#39FF14', textAlign: 'center', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '30px' }}>
                    Welcome to Reignit The AI Vanguard
                </h1>

                <p style={{ fontSize: '16px', marginBottom: '20px' }}>
                    You've successfully joined the inner circle.
                </p>

                <p style={{ fontSize: '16px', marginBottom: '20px' }}>
                    As a member of the Vanguard, you now have priority access to our latest AI intelligence, tools, and strategic insights. We don't spam—we only send alpha.
                </p>

                <p style={{ fontSize: '16px', marginBottom: '30px' }}>
                    Consider this your download link to the future. Stay tuned for our next dispatch.
                </p>

                <div style={{ textAlign: 'center', marginTop: '40px', marginBottom: '20px' }}>
                    <a href="https://reignitinc.com" style={{
                        backgroundColor: 'transparent',
                        border: '1px solid #39FF14',
                        color: '#39FF14',
                        padding: '12px 24px',
                        textDecoration: 'none',
                        borderRadius: '4px',
                        fontWeight: 'bold',
                        fontFamily: 'monospace',
                        textTransform: 'uppercase'
                    }}>
                        Explore The Toolkit
                    </a>
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid #333', margin: '40px 0' }} />

                <p style={{ fontSize: '12px', color: '#666', textAlign: 'center' }}>
                    <a href="https://reignitinc.com" style={{ color: '#666', textDecoration: 'none' }}>Reignit Inc.</a> | AI Command Center
                </p>
            </div>
        </div>
    );
};

export default WelcomeEmail;
