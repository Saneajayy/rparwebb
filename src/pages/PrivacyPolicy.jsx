import { Shield } from 'lucide-react';
import './Legal.css';

const PrivacyPolicy = () => {
  return (
    <div className="legal-container max-w-7xl section">
      <div className="legal-header reveal">
        <div className="legal-icon-wrapper"><Shield size={32} /></div>
        <div className="badge">LEGAL</div>
        <h1 className="text-5xl font-bold mb-4">Privacy <span className="highlight">Policy</span></h1>
        <p className="text-muted text-sm">Last updated: March 2026</p>
      </div>

      <div className="legal-body reveal delay-1">

        <div className="legal-section">
          <p>RPAR, located at <strong>Una, Himachal Pradesh, India</strong>, respects user privacy and processes personal data in accordance with Indian law, including the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023.</p>
          <p>By using the Platform, you consent to the collection and processing of your personal data as described in this policy.</p>
        </div>

        <div className="legal-section">
          <h2>1. Data We Collect</h2>
          <ul>
            <li>Mobile number and name</li>
            <li>Location (for service fulfillment)</li>
            <li>Device information and repair history</li>
            <li>Payment transaction metadata</li>
            <li>Usage data via third-party services including Google Fonts, Firebase, and analytics tools</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>2. How We Use Your Data</h2>
          <ul>
            <li>To facilitate repair bookings and service delivery</li>
            <li>To process payments through third-party gateways</li>
            <li>To send OTPs, notifications, and service updates</li>
            <li>To improve platform performance and user experience</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>3. Data Sharing</h2>
          <p>RPAR does not sell personal data. Data may be shared with:</p>
          <ul>
            <li>Service providers for repair fulfillment</li>
            <li>Payment gateways (e.g. Razorpay)</li>
            <li>Legal authorities when required by law</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>4. Data Retention</h2>
          <p>User data is retained for a period of <strong>3 years</strong> from last activity or until deletion is requested. Users may request deletion of their data by contacting <a href="mailto:support@rpar.in">support@rpar.in</a>.</p>
        </div>

        <div className="legal-section">
          <h2>5. Security</h2>
          <p>RPAR implements reasonable security practices as per IT Act Section 43A to protect your personal information from unauthorized access, disclosure, or misuse.</p>
        </div>

        <div className="legal-section">
          <h2>6. Contact</h2>
          <p>For privacy-related queries, contact us at: <a href="mailto:support@rpar.in">support@rpar.in</a></p>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
