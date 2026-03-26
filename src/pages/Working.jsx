import { useEffect, useRef, useState } from 'react';
import * as Icons from 'lucide-react';

const steps = [
  {
    icon: <Icons.CalendarDays size={28} />,
    number: '01',
    title: 'Book a Service',
    desc: 'Choose your device, describe the issue, and pick a convenient time slot right from the app.',
  },
  {
    icon: <Icons.ClipboardList size={28} />,
    number: '02',
    title: 'Receive an Estimate',
    desc: 'A verified repair partner reviews your request and sends a transparent cost estimate.',
  },
  {
    icon: <Icons.Lock size={28} />,
    number: '03',
    title: 'OTP Verified Pickup',
    desc: 'Your device is only collected after you confirm with a secure one-time password.',
  },
  {
    icon: <Icons.Wrench size={28} />,
    number: '04',
    title: 'Repair & Updates',
    desc: 'Track your repair in real time. Get notified at every stage so you always know what\'s happening.',
  },
  {
    icon: <Icons.CheckSquare size={28} />,
    number: '05',
    title: 'Payment & Delivery',
    desc: 'Pay securely through the app. Your device is returned with another OTP verification.',
  },
];

const Working = () => {
  const [activeStep, setActiveStep] = useState(-1);
  const [progressWidth, setProgressWidth] = useState(0);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateSteps();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const animateSteps = () => {
    steps.forEach((_, i) => {
      setTimeout(() => {
        setActiveStep(i);
        setProgressWidth(((i + 1) / steps.length) * 100);
      }, i * 500);
    });
  };

  return (
    <div className="working-container max-w-7xl section">
      <div className="text-center mb-16 reveal">
        <h1 className="text-5xl font-bold mb-6">
          A simple, <span className="highlight" style={{ color: '#000262' }}>secure</span><br />process from start to finish
        </h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          Every step is designed to protect your device and give you complete peace of mind.
        </p>
      </div>

      <div className="working-flow" ref={sectionRef}>
        {/* Progress connector bar */}
        <div className="flow-track">
          <div
            className="flow-progress"
            style={{ width: `${progressWidth}%` }}
          />
          {/* Step dots on the track */}
          {steps.map((_, i) => (
            <div
              key={i}
              className={`flow-dot ${activeStep >= i ? 'active' : ''}`}
              style={{ left: `${(i / (steps.length - 1)) * 100}%` }}
            />
          ))}
        </div>

        {/* Step cards */}
        <div className="flow-steps">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flow-step ${activeStep >= i ? 'active' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={`flow-step-icon ${activeStep >= i ? 'active' : ''}`}>
                {step.icon}
              </div>
              <span className="flow-step-number">{step.number}</span>
              <h3 className="flow-step-title">{step.title}</h3>
              <p className="flow-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Working;
