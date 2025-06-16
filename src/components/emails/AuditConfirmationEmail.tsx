import React from 'react';

interface AuditConfirmationEmailProps {
  fullName: string;
}

const AuditConfirmationEmail: React.FC<AuditConfirmationEmailProps> = ({ fullName }) => {
  return (
    <div style={{ fontFamily: 'sans-serif', color: '#333', lineHeight: '1.6' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #eee', borderRadius: '8px' }}>
        <h1 style={{ color: '#7F00FF', textAlign: 'center' }}>Thank You for Your Interest in Reignit Inc.</h1>
        <p>Hi {fullName},</p>
        <p>Thank you for submitting your request for a Free AI Audit. We've received your information and are excited to learn more about your business goals.</p>
        <p>Our team is reviewing your submission and will get back to you within <strong>1-2 business days</strong> to schedule a brief call or request any additional information needed.</p>
        <p>In the meantime, feel free to browse our <a href="https://reignitinc.com/case-studies" style={{ color: '#7F00FF', textDecoration: 'none' }}>case studies</a> to see how we've helped other businesses like yours succeed with AI.</p>
        <p>We look forward to connecting with you soon!</p>
        <br />
        <p>Best regards,</p>
        <p><strong>The Reignit Inc. Team</strong></p>
        <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '20px 0' }} />
        <p style={{ fontSize: '12px', color: '#999', textAlign: 'center' }}>
          <a href="https://reignitinc.com" style={{ color: '#999' }}>Reignit Inc.</a> | AI Solutions for Business Growth
        </p>
      </div>
    </div>
  );
};

export default AuditConfirmationEmail;
