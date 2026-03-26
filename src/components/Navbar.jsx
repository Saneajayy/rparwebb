import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Working', id: 'working' },
    { name: 'Services', id: 'services' },
    { name: 'Partner', id: 'partner' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    if (location.pathname !== '/') return;

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
  }, [location.pathname]);

  const handleNavClick = (e, id) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on a legal page, navigating directly with a hash might not trigger a scroll
      // but react-router-dom usually handles it or browser does it automatically if href is correct
      // To be safe, navigate first.
      navigate(`/#${id}`);
    }
  };

  return (
    <div className="navbar-wrapper">
      <nav className="navbar max-w-7xl">
        <Link to="/#home" className="navbar-logo" onClick={(e) => handleNavClick(e, 'home')}>
          <img src="/rpar-logo.png" alt="RPAR" className="logo-image" />
        </Link>

        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={location.pathname === '/' ? `#${link.id}` : `/#${link.id}`}
                className={`nav-link ${activeSection === link.id && location.pathname === '/' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <a href="https://drive.google.com/uc?export=download&id=1K3f2aPZzdNz3K2-opAlxA8cmqZjDVrB4" download className="btn nav-download-btn">
            Download App
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

