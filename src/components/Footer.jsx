import { Play } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="max-w-7xl footer-content">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <div className="logo-icon-alt">R</div>
            <span className="logo-text-alt">RPAR</span>
          </a>
          <p className="footer-desc text-sm">
            Trusted repair services, simplified. Connecting customers with verified repair professionals through a secure, transparent platform.
          </p>
          <div className="social-links">
            <div className="social-icon"></div>
            <div className="social-icon"></div>
            <div className="social-icon"></div>
          </div>
        </div>

        <div className="footer-links-grid">
          <div className="footer-col">
            <h4 className="footer-heading">COMPANY</h4>
            <ul className="footer-links">
              <li><a href="#home">About RPAR</a></li>
              <li><a href="#working">How It Works</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">FOR PARTNERS</h4>
            <ul className="footer-links">
              <li><a href="#partner">Partner With Us</a></li>
              <li><a href="#partner">Apply Now</a></li>
              <li><a href="#partner">Partner Support</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">LEGAL</h4>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Refund Policy</a></li>
            </ul>

            <button className="btn btn-outline footer-app-btn mt-8">
              <Play size={16} fill="currentColor" /> Google Play
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom max-w-7xl">
        <p>© 2026 RPAR Technologies. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
