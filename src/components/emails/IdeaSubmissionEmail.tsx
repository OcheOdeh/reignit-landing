import * as React from 'react';

interface IdeaSubmissionEmailProps {
    senderEmail: string;
    idea: string;
}

export const IdeaSubmissionEmail: React.FC<IdeaSubmissionEmailProps> = ({
    senderEmail,
    idea,
}) => (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', color: '#333' }}>
        <h2 style={{ color: '#10b981' }}>New Builder Idea Submission 💡</h2>
        <p><strong>From:</strong> {senderEmail}</p>
        <hr style={{ borderColor: '#eee' }} />
        <h3 style={{ marginTop: '20px' }}>The Idea:</h3>
        <div style={{
            backgroundColor: '#f3f4f6',
            padding: '15px',
            borderRadius: '8px',
            whiteSpace: 'pre-wrap',
            lineHeight: '1.6'
        }}>
            {idea}
        </div>
    </div>
);

export default IdeaSubmissionEmail;
