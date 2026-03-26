import * as Icons from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

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

const PhoneAnimation = () => {
  const [step, setStep] = useState(0);

  const appSteps = [
    { title: 'Device Selected', iconSmall: <Icons.Smartphone size={14} color="#0ea5e9" />, desc: 'Screen Repair - iPhone 14' },
    { title: 'Cost Estimated', iconSmall: <Icons.FileText size={14} color="#14b8a6" />, desc: '₹1499 Approved by Customer' },
    { title: 'Pickup Verified', iconSmall: <Icons.ShieldCheck size={14} color="#0ea5e9" />, desc: 'Agent OTP Verified' },
    { title: 'Repair Active', iconSmall: <Icons.Wrench size={14} color="#14b8a6" />, desc: 'Diagnostics & Repair Ongoing' },
    { title: 'Delivered', iconSmall: <Icons.Home size={14} color="#0ea5e9" />, desc: 'Payment securely processed.' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => {
        if (prev >= appSteps.length + 1) return 0;
        return prev + 1;
      });
    }, 800); // 800ms per step hits exactly 4-5 seconds total
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="phone-screen-content" style={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100%', width: '100%', backgroundColor: '#f0f9ff', borderRadius: '40px', overflow: 'hidden', padding: '16px' }}>

      {/* App Header (Sky Blue/Teal Theme) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '54px', marginBottom: '20px', padding: '0 8px', gap: '12px' }}>
        <img src="/rpar-logo.png" alt="R" style={{ width: '28px', height: '28px', objectFit: 'contain', flexShrink: 0 }} />

        {/* Search Bar */}
        <div style={{ flex: 1, height: '32px', backgroundColor: '#f0f9ff', borderRadius: '20px', border: '1px solid #94a3b8', display: 'flex', alignItems: 'center', padding: '0 12px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', border: '1.5px solid #64748b', marginRight: '6px', position: 'relative' }}>
            <div style={{ position: 'absolute', width: '4px', height: '1.5px', background: '#64748b', bottom: '-2px', right: '-2px', transform: 'rotate(45deg)' }}></div>
          </div>
          <div style={{ color: '#64748b', fontSize: '12px', fontWeight: 500 }}>Search...</div>
        </div>

        <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#e0f2fe', border: '2px solid #bae6fd', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Icons.User size={18} color="#0ea5e9" />
        </div>
      </div>

      {/* Dynamic Vertical Checklist (Cascading Waterfall) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }}>
        {appSteps.map((s, i) => {
          const isVisible = step >= i;
          const isCompleted = step > i;
          const isActive = step === i;

          return (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '14px',
              backgroundColor: isActive ? '#e0f2fe' : '#ffffff',
              padding: '12px 14px', borderRadius: '16px',
              border: isActive ? '1px solid #38bdf8' : '1px solid transparent',
              boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(15px) scale(0.95)',
              transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}>
              <div style={{
                minWidth: '32px', height: '32px', borderRadius: '50%',
                backgroundColor: isCompleted ? '#14b8a6' : '#bae6fd',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background-color 0.4s ease'
              }}>
                {isCompleted ? <Icons.Check size={16} color="white" /> : s.iconSmall}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <span style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a' }}>{s.title}</span>
                <span style={{ fontSize: '11px', color: '#64748b', marginTop: '2px', lineHeight: 1.2 }}>{s.desc}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Nav (Theme) */}
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '8px', padding: '16px 12px', backgroundColor: '#ffffff', borderRadius: '28px', boxShadow: '0 -10px 40px rgba(0,0,0,0.05)', position: 'relative', zIndex: 10 }}>
        <Icons.Home size={20} color="#0ea5e9" />
        <Icons.Search size={20} color="#94a3b8" />
        <Icons.Bell size={20} color="#94a3b8" />
        <Icons.User size={20} color="#94a3b8" />
      </div>

      {/* Success Giant Checkmark Overlay */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(240,249,255,0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        opacity: step >= appSteps.length ? 1 : 0,
        pointerEvents: 'none',
        transition: 'opacity 0.3s ease',
        zIndex: 15
      }}>
        <div style={{
          backgroundColor: '#14b8a6',
          borderRadius: '50%',
          padding: '24px',
          marginBottom: '20px',
          transform: step >= appSteps.length ? 'scale(1)' : 'scale(0.5)',
          transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}>
          <Icons.Check size={48} color="white" />
        </div>
        <h4 style={{ fontWeight: 800, fontSize: '20px', color: '#0369a1' }}>Fixed it</h4>
      </div>
    </div>
  );
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
            Online <span className="repair-gradient">Repair</span><br />
            <span className="highlight">
              {typedText}
              <span className="cursor-blink">|</span>
            </span>
          </h1>

          <p className="hero-desc">
            Connect with verified repair professionals for<br />your Electronics. Enjoy transparent pricing<br />secure pickup and real-time repair tracking.
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
                Satisfied <span style={{ color: '#0e0178' }}>Repairs</span><br />Across India
              </p>
            </div>
          </div>
        </div>

        <div className="hero-visual reveal delay-3">
          <div className="phone-mockup">
            <div className="phone-notch"></div>
            <div className="phone-screen" style={{ padding: 0, backgroundColor: '#000' }}>
              <PhoneAnimation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
