import React, { useState, useRef } from 'react';
import * as Icons from 'lucide-react';

const TiltCard = ({ children, className, index }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const onMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current.getBoundingClientRect();
    const x = e.clientX - card.left;
    const y = e.clientY - card.top;
    const centerX = card.width / 2;
    const centerY = card.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: rotate.x === 0 ? 'transform 0.5s ease' : 'none'
      }}
    >
      {children}
    </div>
  );
};

const Working = () => {
  const steps = [
    {
      icon: <Icons.CalendarDays size={24} className="text-primary" />,
      title: 'Book a Service',
      desc: 'Choose your device category and describe the issue. Pick a convenient time slot in the app.',
      colorClass: 'step-blue'
    },
    {
      icon: <Icons.ClipboardList size={24} className="text-yellow-600" />,
      title: 'Receive an Estimate',
      desc: 'A verified repair partner reviews your request and sends a transparent cost estimate for your approval.',
      colorClass: 'step-yellow'
    },
    {
      icon: <Icons.Lock size={24} className="text-white" />,
      title: 'OTP Verified Pickup',
      desc: 'Your device is only collected after you confirm with a secure one-time password. Zero risk of unauthorized handling.',
      colorClass: 'step-blue-solid'
    },
    {
      icon: <Icons.Wrench size={24} className="text-gray-600" />,
      title: 'Repair & Updates',
      desc: 'Track your repair in real time. Get notified at each stage so you always know what\'s happening.',
      colorClass: 'step-gray'
    },
    {
      icon: <Icons.CheckSquare size={24} className="text-green-600" />,
      title: 'Payment & Safe Delivery',
      desc: 'Pay securely through the app once you\'re satisfied. Your device is returned with another OTP verification.',
      colorClass: 'step-green'
    }
  ];

  return (
    <div className="working-container max-w-7xl section">
      <div className="text-center mb-16 reveal">
        <div className="badge">HOW IT WORKS</div>
        <h1 className="text-5xl font-bold mb-6">A simple, <span className="highlight">secure</span><br/>process from start to finish</h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          Every step is designed to protect your device and give you complete peace of mind.
        </p>
      </div>

      <div className="timeline-container">
        <div className="timeline-line reveal"></div>
        <div className="timeline-steps">
          {steps.map((step, index) => (
            <TiltCard key={index} index={index} className={`timeline-step reveal delay-${index + 1}`}>
              <div className={`step-icon-wrapper ${step.colorClass}`}>
                {step.icon}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Working;
