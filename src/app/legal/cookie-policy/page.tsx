import React from 'react';

const CookiePolicyPage = () => {
  return (
    <div className="bg-dark-canvas text-neutral-smoke min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-neutral-white">Cookie Policy</h1>
        
        <div className="prose prose-invert max-w-none text-neutral-smoke">
          <p className="text-accent border border-accent p-4 rounded-md"><strong>Disclaimer:</strong> This is a template and not legal advice. Please consult with a legal professional to ensure this policy is complete and compliant for your specific needs.</p>

          <h2>1. What Are Cookies</h2>
          <p>As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store these cookies.</p>

          <h2>2. How We Use Cookies</h2>
          <p>We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>

          <h2>3. The Cookies We Set</h2>
          <ul>
            <li><strong>Site preferences cookies:</strong> In order to provide you with a great experience on this site, we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences, we need to set cookies so that this information can be called whenever you interact with a page that is affected by your preferences.</li>
            <li><strong>Analytics cookies:</strong> We use third-party analytics (like Vercel Analytics and Google Analytics) to track and measure usage of this site so that we can continue to produce engaging content. These cookies may track things such as how long you spend on the site or pages you visit which helps us to understand how we can improve the site for you.</li>
          </ul>

          <h2>4. Disabling Cookies</h2>
          <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site.</p>

          <h2>5. More Information</h2>
          <p>Hopefully, that has clarified things for you. If you are still looking for more information, then you can contact us through one of our preferred contact methods:</p>
          <p>Email: <a href="mailto:legal@reignitinc.com">legal@reignitinc.com</a></p>

          <p><em>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</em></p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyPage;
