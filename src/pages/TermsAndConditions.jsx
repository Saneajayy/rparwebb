import { FileText } from 'lucide-react';
import './Legal.css';

const TermsAndConditions = () => {
  return (
    <div className="legal-container max-w-7xl section">
      <div className="legal-header reveal">
        <div className="legal-icon-wrapper"><FileText size={32} /></div>
        <div className="badge">LEGAL</div>
        <h1 className="text-5xl font-bold mb-4">Terms & <span className="highlight">Conditions</span></h1>
        <p className="text-muted text-sm">Last updated: March 2026</p>
      </div>

      <div className="legal-body reveal delay-1">

        <div className="legal-section">
          <p>This document is an electronic record in terms of the Information Technology Act, 2000 and the rules made thereunder, including the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021.</p>
          <p>The Platform is currently operated by <strong>RPAR</strong>, located at <strong>Una, Himachal Pradesh, India</strong>. By accessing or using the Platform in any manner, you agree to be bound by these Terms of Use.</p>
        </div>

        <div className="legal-section">
          <h2>1. Platform Nature and Role</h2>
          <p>RPAR is a technology-based intermediary platform that facilitates:</p>
          <ul>
            <li>Discovery of electronics repair service providers</li>
            <li>Communication between users and service centers</li>
            <li>Booking of repair services</li>
            <li>Payment facilitation where applicable</li>
          </ul>
          <p>RPAR does not itself provide repair services, does not employ technicians, and does not guarantee the quality or outcome of any service provided by third-party service providers. All repair contracts are strictly between the User and the respective service provider.</p>
        </div>

        <div className="legal-section">
          <h2>2. User Eligibility</h2>
          <ul>
            <li>Users must be competent to contract under the Indian Contract Act, 1872</li>
            <li>Users below 18 years of age may use the Platform only under parental or legal guardian supervision</li>
            <li>RPAR reserves the right to suspend or terminate accounts found to be in violation of eligibility requirements</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>3. User Account Responsibilities</h2>
          <ul>
            <li>Users are responsible for maintaining confidentiality of login credentials and OTP access</li>
            <li>Any activity performed using a registered mobile number or account shall be deemed performed by that user</li>
            <li>Users must provide accurate, current, and complete information during registration and service booking</li>
            <li>Providing false identity, fake addresses, or fraudulent intent shall result in immediate account suspension</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>4. Prohibited Activities</h2>
          <p>Users agree not to misuse the Platform, including but not limited to:</p>
          <ul>
            <li>Placing fake repair requests or providing false device conditions</li>
            <li>Switching devices after service request or claiming fake damage</li>
            <li>Refusing payment after service completion or attempting chargebacks after valid service</li>
            <li>Abusing service providers or using the Platform for illegal purposes</li>
            <li>Manipulating pricing or reviews, exploiting offers dishonestly</li>
            <li>Using stolen devices or attempting to bypass the platform for fraudulent intent</li>
          </ul>
          <p>Such activity may result in permanent suspension, forfeiture of refunds, reporting to authorities, and legal action.</p>
        </div>

        <div className="legal-section">
          <h2>5. Payments and Refunds</h2>
          <ul>
            <li>Payments made through the Platform are collected on behalf of service providers</li>
            <li>Refunds, cancellations, and service disputes are subject to our Cancellation & Refund Policy</li>
            <li>In case of fraudulent behavior detected from the User, RPAR reserves the right to withhold refunds</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>6. Limitation of Liability</h2>
          <p>RPAR shall not be liable for device damage during repair, data loss, technician behavior, counterfeit parts, service delays, incorrect diagnosis, pricing disputes, or service quality. RPAR's liability, if any, shall be limited to the platform service fee collected.</p>
        </div>

        <div className="legal-section">
          <h2>7. Governing Law & Jurisdiction</h2>
          <p>These Terms shall be governed by the laws of India. Courts of <strong>Una, Himachal Pradesh</strong> shall have exclusive jurisdiction over any disputes arising from the use of this Platform.</p>
        </div>

        <div className="legal-section">
          <h2>8. Modifications</h2>
          <p>RPAR may modify these Terms at any time. Continued use of the Platform implies acceptance of the revised Terms.</p>
        </div>

        <div className="legal-section">
          <h2>9. Contact</h2>
          <p>For queries related to these Terms, contact: <a href="mailto:support@rpar.in">support@rpar.in</a></p>
        </div>

      </div>
    </div>
  );
};

export default TermsAndConditions;
