import React from 'react';

const TermsOfServicePage = () => {
  return (
    <div className="bg-dark-canvas text-neutral-smoke min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-neutral-white">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-none text-neutral-smoke">
          <p className="text-accent border border-accent p-4 rounded-md"><strong>Disclaimer:</strong> This is a template and not legal advice. Please consult with a legal professional to ensure these terms are complete and compliant for your specific needs.</p>

          <h2>1. Agreement to Terms</h2>
          <p>By using our website, reignitinc.com, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Site.</p>

          <h2>2. Intellectual Property Rights</h2>
          <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.</p>

          <h2>3. User Representations</h2>
          <p>By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Service; (2) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise; (3) you will not use the Site for any illegal or unauthorized purpose; and (4) your use of the Site will not violate any applicable law or regulation.</p>

          <h2>4. Prohibited Activities</h2>
          <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>

          <h2>5. Term and Termination</h2>
          <p>These Terms of Service shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF SERVICE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON.</p>

          <h2>6. Governing Law</h2>
          <p>These Terms of Service and your use of the Site are governed by and construed in accordance with the laws of the State of California applicable to agreements made and to be entirely performed within the State of California, without regard to its conflict of law principles.</p>

          <h2>7. Contact Us</h2>
          <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: <a href="mailto:legal@reignitinc.com">legal@reignitinc.com</a></p>

          <p><em>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</em></p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
