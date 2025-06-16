import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-dark-canvas text-neutral-smoke min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-neutral-white">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none text-neutral-smoke">
          {/* <p className="text-accent border border-accent p-4 rounded-md"><strong>Disclaimer:</strong> This is a template and not legal advice. Please consult with a legal professional to ensure this policy is complete and compliant for your specific needs.</p> */}

          <h2>1. Introduction</h2>
          <p>Welcome to Reignit Inc. We are committed to protecting your privacy and keeping your personal information secure. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website reignitinc.com. Your privacy is our priority, and we do not share your personal data with third parties for commercial purposes.</p>

          <h2>2. Information We Collect</h2>
          <p>We collect minimal information necessary to provide our services. The information we may collect includes:</p>
          <ul>
            <li><strong>Personal Data:</strong> Information you voluntarily provide, such as your name, email address, and telephone number when you fill out a contact form or use our chatbot.</li>
            <li><strong>Technical Data:</strong> Basic information our servers automatically collect for security and functionality purposes, such as your IP address, browser type, operating system, access times, and pages viewed on our Site.</li>
          </ul>

          <h2>3. Use of Your Information</h2>
          <p>We use your information solely to enhance your experience with our services. Specifically, we use collected information to:</p>
          <ul>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Improve our website functionality and user experience</li>
            <li>Ensure website security and prevent fraudulent activity</li>
            <li>Send you requested information or updates (only with your explicit consent)</li>
          </ul>

          <h2>4. Protection of Your Information</h2>
          <p>We are committed to keeping your data private and secure:</p>
          <ul>
            <li><strong>No Third-Party Sharing:</strong> We do not sell, trade, or share your personal information with third parties for marketing or commercial purposes.</li>
            <li><strong>Limited Service Providers:</strong> We only work with essential service providers (such as hosting services) who are contractually bound to protect your data and use it solely for providing services to us.</li>
            <li><strong>Legal Compliance Only:</strong> We will only disclose your information if required by law or to protect our legal rights, and only to the extent necessary.</li>
          </ul>

          <h2>5. Security of Your Information</h2>
          <p>We implement comprehensive security measures to protect your personal information:</p>
          <ul>
            <li>Administrative, technical, and physical safeguards are in place to secure your data</li>
            <li>Regular security assessments and updates to our protection systems</li>
            <li>Restricted access to your information on a need-to-know basis</li>
            <li>While we maintain industry-standard security practices, we encourage you to also take precautions when sharing information online</li>
          </ul>

          <h2>6. Your Rights and Control</h2>
          <p>You have full control over your personal information:</p>
          <ul>
            <li>You may request to review, update, or delete your personal data at any time</li>
            <li>You can opt out of any communications from us</li>
            <li>You have the right to know what information we have collected about you</li>
          </ul>

          <h2>7. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy or how we handle your information, please contact us. We are committed to addressing your privacy concerns promptly and transparently. For any inquiries, please email us at <a href="mailto:legal@reignitinc.com">legal@reignitinc.com</a>.</p>

          <p><em>Last updated: June 16, 2024</em></p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
