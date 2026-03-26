import * as Icons from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import './Home.css';

const AnimatedCounter = ({ end, duration = 1500 }) => {
  const numberRef = useRef(null);

  useEffect(() => {
    let startTimestamp = null;
    let animationFrameId;
    let lastCount = 0;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // EaseOut Quad: smoother ending without lingering
      const easeProgress = 1 - (1 - progress) * (1 - progress);
      const currentCount = Math.round(easeProgress * end);
      
      if (numberRef.current && currentCount !== lastCount) {
        numberRef.current.innerText = currentCount;
        
        // Dynamic motion blur based on velocity to create a smooth fade illusion
        const velocity = Math.abs(currentCount - lastCount);
        if (velocity > 2) {
          numberRef.current.style.filter = 'blur(0.8px)';
          numberRef.current.style.opacity = '0.85';
        } else {
          numberRef.current.style.filter = 'blur(0px)';
          numberRef.current.style.opacity = '1';
        }
        
        lastCount = currentCount;
      }
      
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else if (numberRef.current) {
        numberRef.current.innerText = end;
        numberRef.current.style.filter = 'blur(0px)';
        numberRef.current.style.opacity = '1';
      }
    };
    
    if (numberRef.current) {
      numberRef.current.innerText = "0";
      numberRef.current.style.transition = "filter 0.05s ease-out, opacity 0.05s ease-out";
    }
    
    animationFrameId = window.requestAnimationFrame(step);
    
    return () => {
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration]);

  return <span ref={numberRef} style={{ display: 'inline-block' }}>0</span>;
};

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Simplified.";

  useEffect(() => {
    let i = -1; // Wait 1 cycle for dramatic effect
    const typingInterval = setInterval(() => {
      if (i >= 0 && i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
      }
      i++;
      if (i >= fullText.length) {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="hero-section">
      <div className="max-w-7xl hero-content-wrapper">
        <div className="hero-text-content reveal">
          <h1 className="hero-title">
            Online <span style={{ color: '#2563eb' }}>Repairs</span><br />
            <span className="highlight">
              {typedText}
              <span className="cursor-blink">|</span>
            </span>
          </h1>

          <p className="hero-desc">
            Connect with verified repair professionals for your Electronics. Enjoy transparent pricing, secure pickup, and real-time repair tracking.
          </p>

          <div className="hero-buttons reveal delay-1">
            <button className="btn hero-btn">
              <Icons.Play size={15} fill="currentColor" /> Download on Play Store
            </button>
            <button className="btn hero-btn">
              <Icons.Flag size={15} /> Become a Repair Partner
            </button>
          </div>

          <div className="hero-trust reveal delay-2">
            <div className="trust-stats">
              <h2 className="trust-number"><AnimatedCounter end={999} />+</h2>
              <p className="trust-text">
                Satisfied <span style={{ color: '#2563eb' }}>Repairs</span><br />Across India
              </p>
            </div>
          </div>
        </div>

        <div className="hero-visual reveal delay-3">
          <div className="phone-mockup">
            <div className="phone-notch"></div>
            <div className="phone-screen">
              <div className="phone-logo">
                <Icons.Wrench size={16} className="text-white" />
                <span className="text-white font-bold">RPAR App</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
