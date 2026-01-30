import React from 'react';

const VanguardWelcomeEmail = () => {
    return (
        <div style={{ fontFamily: 'Courier New, monospace', color: '#e0e0e0', lineHeight: '1.6', backgroundColor: '#050505', padding: '20px' }}>
            <div style={{ maxWidth: '600px', margin: '0 auto', padding: '40px', border: '1px solid #1a1a1a', borderRadius: '4px', backgroundColor: '#0a0a0a' }}>
                {/* Header / Logo Area */}
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h1 style={{ color: '#FFD700', fontSize: '24px', letterSpacing: '4px', textTransform: 'uppercase', margin: '0' }}>
                        REIGNIT
                    </h1>
                    <p style={{ color: '#4CBB17', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '5px' }}>
                        AI VANGUARD // ACCESS GRANTED
                    </p>
                </div>

                {/* Main Content */}
                <div style={{ borderLeft: '2px solid #4CBB17', paddingLeft: '20px', marginBottom: '30px' }}>
                    <p style={{ fontSize: '16px', color: '#fff', marginBottom: '15px' }}>
                        Welcome to the inner circle.
                    </p>
                    <p style={{ fontSize: '14px', color: '#aaa', marginBottom: '0' }}>
                        You have secured your place in the Vanguard. We are building the sovereign truth engine, and you are now part of the architecture.
                    </p>
                </div>

                {/* CTA Button */}
                <div style={{ textAlign: 'center', margin: '40px 0' }}>
                    <a href="https://t.me/+Xc2_CgTRGy0wY2Zk" style={{
                        backgroundColor: '#4CBB17',
                        color: '#000',
                        padding: '15px 30px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        textTransform: 'uppercase',
                        display: 'inline-block',
                        boxShadow: '0 0 15px rgba(76, 187, 23, 0.4)'
                    }}>
                        Initialize Protocol (Join Telegram)
                    </a>
                    <p style={{ fontSize: '12px', color: '#666', marginTop: '10px' }}>
                        *Encrypted Channel Access
                    </p>
                </div>

                {/* Contact Info */}
                <div style={{ backgroundColor: '#111', padding: '20px', borderRadius: '4px', marginTop: '40px', border: '1px solid #222' }}>
                    <h3 style={{ color: '#fff', fontSize: '14px', textTransform: 'uppercase', marginTop: '0', marginBottom: '15px', borderBottom: '1px solid #333', paddingBottom: '10px' }}>
                        Direct Command Lines
                    </h3>
                    <p style={{ fontSize: '13px', margin: '5px 0' }}>
                        <span style={{ color: '#888' }}>ADMIN // KENNETH:</span>{' '}
                        <a href="https://t.me/Kenneth_reignitinc" style={{ color: '#4CBB17', textDecoration: 'none' }}>@Kenneth_reignitinc</a>
                    </p>
                    <p style={{ fontSize: '13px', margin: '5px 0' }}>
                        <span style={{ color: '#888' }}>ADMIN // CODD:</span>{' '}
                        <a href="https://t.me/Codd_AIVanguard" style={{ color: '#4CBB17', textDecoration: 'none' }}>@Codd_AIVanguard</a>
                    </p>
                    <p style={{ fontSize: '12px', color: '#666', marginTop: '15px', fontStyle: 'italic' }}>
                        Use these contacts for high-priority enquiries only.
                    </p>
                </div>

                {/* Footer */}
                <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #1a1a1a', textAlign: 'center', fontSize: '10px', color: '#444' }}>
                    <p>REIGNIT INC. | SOVEREIGN INTELLIGENCE</p>
                    <p>SYSTEM ID: VANGUARD-001</p>
                </div>
            </div>
        </div>
    );
};

export default VanguardWelcomeEmail;
