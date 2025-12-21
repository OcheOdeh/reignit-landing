import React from 'react';

interface NewSubscriberEmailProps {
    email: string;
}

const NewSubscriberEmail: React.FC<NewSubscriberEmailProps> = ({ email }) => {
    return (
        <div style={{ fontFamily: 'sans-serif', color: '#333', lineHeight: '1.6' }}>
            <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #eee', borderRadius: '8px' }}>
                <h2 style={{ color: '#39FF14', textAlign: 'center', backgroundColor: '#000', padding: '10px', borderRadius: '4px' }}>
                    New Newsletter Subscriber
                </h2>

                <p>A new user has joined the Vanguard via the newsletter form.</p>

                <div style={{ backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '4px', margin: '20px 0', borderLeft: '4px solid #39FF14' }}>
                    <p style={{ margin: 0, fontWeight: 'bold' }}>Email Address:</p>
                    <p style={{ margin: '5px 0 0', fontFamily: 'monospace', fontSize: '16px' }}>{email}</p>
                </div>

                <p>This user has been sent the "Welcome to Reignit The AI Vanguard" email.</p>

                <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '20px 0' }} />
                <p style={{ fontSize: '12px', color: '#999', textAlign: 'center' }}>
                    Reignit Inc. Internal Notification
                </p>
            </div>
        </div>
    );
};

export default NewSubscriberEmail;
