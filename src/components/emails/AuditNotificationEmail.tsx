import React from 'react';

interface AuditNotificationEmailProps {
  formData: Record<string, any>;
}

const AuditNotificationEmail: React.FC<AuditNotificationEmailProps> = ({ formData }) => {
  const { fullName, workEmail, phoneNumber, company, role, services, budget, goals, additionalNotes, wizardId, utmSource, utmCampaign } = formData;

  return (
    <div style={{ fontFamily: 'sans-serif', color: '#333' }}>
      <h1 style={{ color: '#7F00FF' }}>New AI Audit Lead! 🚀</h1>
      <p>A new potential client has submitted the AI Audit form. Here are their details:</p>
      
      <h2 style={{ borderBottom: '1px solid #eee', paddingBottom: '5px' }}>Contact Information</h2>
      <ul>
        <li><strong>Name:</strong> {fullName}</li>
        <li><strong>Email:</strong> {workEmail}</li>
        <li><strong>Phone:</strong> {phoneNumber || 'Not provided'}</li>
        <li><strong>Company:</strong> {company || 'Not provided'}</li>
        <li><strong>Role:</strong> {role}</li>
      </ul>

      <h2 style={{ borderBottom: '1px solid #eee', paddingBottom: '5px' }}>Project Scope</h2>
      <ul>
        <li><strong>Interested Services:</strong> {services?.join(', ') || 'Not specified'}</li>
        <li><strong>Estimated Budget:</strong> {budget || 'Not specified'}</li>
        <li><strong>Primary Goals:</strong> {goals || 'Not specified'}</li>
      </ul>

      {additionalNotes && (
        <>
          <h2 style={{ borderBottom: '1px solid #eee', paddingBottom: '5px' }}>Additional Notes</h2>
          <p style={{ whiteSpace: 'pre-wrap' }}>{additionalNotes}</p>
        </>
      )}

      <h2 style={{ borderBottom: '1px solid #eee', paddingBottom: '5px' }}>Metadata</h2>
      <ul>
        <li><strong>Wizard ID:</strong> {wizardId}</li>
        <li><strong>UTM Source:</strong> {utmSource || 'N/A'}</li>
        <li><strong>UTM Campaign:</strong> {utmCampaign || 'N/A'}</li>
      </ul>

      <p style={{ marginTop: '20px', fontSize: '12px', color: '#999' }}>
        This email was generated automatically from the Reignit Inc. website.
      </p>
    </div>
  );
};

export default AuditNotificationEmail;
