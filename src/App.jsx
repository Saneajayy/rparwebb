import { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Layout from './components/Layout';
import Home from './pages/Home';
import Working from './pages/Working';
import Services from './pages/Services';
import Partner from './pages/Partner';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import ShippingPolicy from './pages/ShippingPolicy';
import CancellationRefunds from './pages/CancellationRefunds';
import './index.css';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // If there's no hash, scroll to top. 
    // If there IS a hash, let the browser/other logic handle it.
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // Small timeout to allow the section to render before jumping to it
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname, hash]);
  return null;
}


function App() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const { pathname } = useLocation();

  // Initialization: Mouse Tracking and Smooth Scrolling
  useEffect(() => {
    // Mouse Tracking Logic
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    let rafId;
    // Animation Loop for Cursor
    const animate = () => {
      // Very fast for dot
      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.25;
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.25;
      
      // Slower lerp for ring (premium feel)
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };
    animate();

    // Lenis Smooth Momentum Scrolling
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Intersection Observer for Reveal Animations (runs on every route change)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    // Allow DOM to settle before querying
    const timeout = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => {
        // Remove active class to re-animate if necessary, or just track new elements
        // Usually, we just want to observe everything that's currently on the page
        observer.observe(el);
      });
    }, 200);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <>
      <ScrollToTop />
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={ringRef} className="cursor-ring"></div>
      <Layout>
        <Routes>
          <Route path="/" element={
            <>
              <div id="home"><Home /></div>
              <div id="working"><Working /></div>
              <div id="services"><Services /></div>
              <div id="partner"><Partner /></div>
              <div id="contact"><Contact /></div>
            </>
          } />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/cancellation-refunds" element={<CancellationRefunds />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;


