import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Working', id: 'working' },
    { name: 'Services', id: 'services' },
    { name: 'Partner', id: 'partner' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPos = window.scrollY + 200; // offset

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="navbar-wrapper">
      <nav className="navbar max-w-7xl">
        <a href="#home" className="navbar-logo">
          <div className="logo-icon">R</div>
          <span className="logo-text">RPAR</span>
        </a>

        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <button className="btn btn-outline" style={{ borderRadius: '999px', fontWeight: 600, padding: '10px 24px' }}>
            Download App
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
