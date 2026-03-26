import { Play } from 'lucide-react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="max-w-7xl footer-content">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src="/rpar-logo.png" alt="RPAR" className="logo-image" style={{ width: '32px', height: '32px' }} />
            <span className="logo-text-alt">RPAR</span>
          </Link>
          <p className="footer-desc text-sm">
            Trusted repair services, simplified. Connecting customers with verified repair professionals through a secure, transparent platform.
          </p>
     <div className="social-links flex gap-4 mt-4">
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
    <FaInstagram size={20} />
  </a>

  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
    <FaLinkedin size={20} />
  </a>

  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
    <FaXTwitter size={20} />
  </a>
</div>
        </div>

        <div className="footer-links-grid">
          <div className="footer-col">
            <h4 className="footer-heading">COMPANY</h4>
            <ul className="footer-links">
              <li><a href="/#home">About RPAR</a></li>
              <li><a href="/#working">How It Works</a></li>
              <li><a href="/#services">Services</a></li>
              <li><a href="/#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">FOR PARTNERS</h4>
            <ul className="footer-links">
              <li><a href="/#partner">Partner With Us</a></li>
              <li><a href="/#partner">Apply Now</a></li>
              <li><a href="/#partner">Partner Support</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">LEGAL</h4>
            <ul className="footer-links">
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
              <li><Link to="/shipping-policy">Shipping Policy</Link></li>
              <li><Link to="/cancellation-refunds">Cancellation & Refunds</Link></li>
            </ul>

            <a href="https://github.com/Utkarsh1087/rpar-web/releases/download/v1.0.0/rpar.3.apk" className="btn btn-outline footer-app-btn mt-8">
              <Play size={16} fill="currentColor" /> Click to Download App
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom max-w-7xl" style={{ justifyContent: 'center', textAlign: 'center' }}>
        <p>© 2026 RPAR Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

