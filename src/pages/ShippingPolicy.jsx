import { Truck } from 'lucide-react';
import './Legal.css';

const ShippingPolicy = () => {
  return (
    <div className="legal-container max-w-7xl section">
      <div className="legal-header reveal">
        <div className="legal-icon-wrapper"><Truck size={32} /></div>
        <div className="badge">LEGAL</div>
        <h1 className="text-5xl font-bold mb-4">Shipping <span className="highlight">Policy</span></h1>
        <p className="text-muted text-sm">Last updated: March 2026</p>
      </div>

      <div className="legal-body reveal delay-1">

        <div className="legal-section">
          <p>RPAR is a <strong>service-based platform</strong>. We do not sell or ship any physical products. This policy explains how device pickup, delivery, and service fulfillment works on our platform.</p>
        </div>

        <div className="legal-section">
          <h2>1. No Physical Product Shipping</h2>
          <p>RPAR does not manufacture, stock, or ship any physical goods. All transactions on the RPAR platform relate exclusively to repair services for electronic devices and appliances.</p>
        </div>

        <div className="legal-section">
          <h2>2. Device Pickup & Delivery</h2>
          <ul>
            <li>Repair services are fulfilled either at the user's location or at a partner service center, depending on the service selected</li>
            <li>Device pickup is initiated only after the user confirms with a secure <strong>OTP verification</strong></li>
            <li>Device delivery after repair is also confirmed via OTP to ensure safe and authorized handover</li>
            <li>Pickup and delivery timelines depend on the individual service provider and the nature of the repair</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>3. Service Timelines</h2>
          <ul>
            <li>Standard repairs: typically completed within <strong>1–3 working days</strong></li>
            <li>Complex repairs: timelines communicated by the service provider before confirmation</li>
            <li>RPAR does not guarantee specific completion timelines as these are controlled by independent service providers</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>4. Responsibility During Transit</h2>
          <p>RPAR acts solely as a technology intermediary. The responsibility for safe handling of the device during pickup and delivery lies with the service provider. Users are advised to document the device condition before handover.</p>
        </div>

        <div className="legal-section">
          <h2>5. Contact</h2>
          <p>For queries related to device pickup or delivery, contact: <a href="mailto:support@rpar.in">support@rpar.in</a></p>
        </div>

      </div>
    </div>
  );
};

export default ShippingPolicy;
