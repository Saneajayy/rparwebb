import React, { useState, useRef } from 'react';
import * as Icons from 'lucide-react';

const TiltCard = ({ children, className }) => {
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

    cardRef.current.style.transition = 'transform 0.1s ease-out';
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const onMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
      style={{
        transformStyle: 'preserve-3d'
      }}
    >
      <div style={{ transform: 'translateZ(30px)', height: '100%', display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Icons.Smartphone size={24} className="text-white" />,
      title: 'Mobile Repair',
      desc: 'Screen replacements, battery issues, charging ports, and software problems for all major brands.',
    },
    {
      icon: <Icons.Laptop size={24} className="text-white" />,
      title: 'Laptop Repair',
      desc: 'Hardware repairs, keyboard replacements, screen fixes, and performance upgrades for laptops and MacBooks.',
    },
    {
      icon: <Icons.Tv size={24} className="text-white" />,
      title: 'TV Repair',
      desc: 'LED panel issues, sound problems, HDMI port faults, and smart TV software diagnostics.',
    },
    {
      icon: <Icons.Home size={24} className="text-white" />,
      title: 'Home Appliance Repair',
      desc: 'Washing machines, refrigerators, air conditioners, microwave ovens, and other home appliances.',
    },
    {
      icon: <Icons.Wrench size={24} className="text-white" />,
      title: 'Vehicle Services (Coming Soon)',
      desc: 'Two-wheeler and four-wheeler servicing, diagnostics, and minor repairs from trusted workshops.',
    },
    {
      icon: <Icons.Zap size={24} className="text-yellow-400" />,
      title: 'Electronics Repair',
      desc: 'Cameras, printers, speakers, gaming consoles, and other consumer electronics diagnosed and repaired.',
    }
  ];

  return (
    <div className="services-container max-w-7xl section">
      <div className="text-center mb-16 reveal">
        <h1 className="text-5xl font-bold mb-6"><span className="highlight" style={{ color: '#000262' }}>Repair</span> services for all<br/>your devices</h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          From smartphones to home appliances, we have verified<br/>professionals ready to help.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <TiltCard key={index} className={`service-card reveal delay-${index + 1}`}>
            <div className="service-icon-wrapper">
              {service.icon}
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.desc}</p>
          </TiltCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
