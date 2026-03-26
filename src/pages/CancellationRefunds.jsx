import { RotateCcw } from 'lucide-react';
import './Legal.css';

const CancellationRefunds = () => {
  return (
    <div className="legal-container max-w-7xl section">
      <div className="legal-header reveal">
        <div className="legal-icon-wrapper"><RotateCcw size={32} /></div>
        <div className="badge">LEGAL</div>
        <h1 className="text-5xl font-bold mb-4">Cancellation & <span className="highlight">Refunds</span></h1>
        <p className="text-muted text-sm">Last updated: March 2026</p>
      </div>

      <div className="legal-body reveal delay-1">

        <div className="legal-section">
          <p>Payments processed through the RPAR Platform are routed via third-party payment gateways. This policy outlines the conditions under which cancellations and refunds are applicable.</p>
        </div>

        <div className="legal-section">
          <h2>1. Cancellation Policy</h2>
          <ul>
            <li>Users may cancel a booking <strong>before the service provider accepts the request</strong> — no charges apply</li>
            <li>Cancellations after acceptance but before pickup may attract a nominal cancellation fee at the discretion of the service provider</li>
            <li>Cancellations after device pickup will not be eligible for a full refund</li>
            <li>RPAR reserves the right to cancel bookings in cases of fraud, abuse, or platform misuse without any refund</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>2. Refund Eligibility</h2>
          <p>Refunds are initiated only in the following cases:</p>
          <ul>
            <li>Service provider cancels the booking</li>
            <li>Service is not delivered as confirmed</li>
            <li>Technical payment failure occurs (double charge, failed transaction)</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>3. No Refund Situations</h2>
          <p>No refund shall be provided for:</p>
          <ul>
            <li>User negligence or wrong information provided during booking</li>
            <li>Change of mind after service has been initiated</li>
            <li>Misuse of the platform or fraudulent activity</li>
            <li>Damage caused by factors outside the service provider's control</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>4. Refund Timelines</h2>
          <ul>
            <li>Approved refunds are processed within <strong>5–7 working days</strong></li>
            <li>Actual credit timelines depend on your bank or payment provider</li>
            <li>UPI refunds are typically faster than card refunds</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>5. Chargeback Policy</h2>
          <p>Initiating a chargeback for a valid completed service is considered fraud. RPAR reserves the right to suspend accounts involved in chargeback abuse and report such cases to relevant authorities.</p>
        </div>

        <div className="legal-section">
          <h2>6. Disputes</h2>
          <p>For any payment disputes or refund requests, contact us within <strong>7 days</strong> of the transaction at: <a href="mailto:support@rpar.in">support@rpar.in</a></p>
        </div>

      </div>
    </div>
  );
};

export default CancellationRefunds;
