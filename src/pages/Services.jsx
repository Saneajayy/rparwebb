import * as Icons from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Icons.Smartphone size={32} className="text-gray-800" />,
      title: 'Mobile Repair',
      desc: 'Screen replacements, battery issues, charging ports, and software problems for all major brands.',
    },
    {
      icon: <Icons.Laptop size={32} className="text-gray-800" />,
      title: 'Laptop Repair',
      desc: 'Hardware repairs, keyboard replacements, screen fixes, and performance upgrades for laptops and MacBooks.',
    },
    {
      icon: <Icons.Tv size={32} className="text-gray-800" />,
      title: 'TV Repair',
      desc: 'LED panel issues, sound problems, HDMI port faults, and smart TV software diagnostics.',
    },
    {
      icon: <Icons.Home size={32} className="text-gray-800" />,
      title: 'Home Appliance Repair',
      desc: 'Washing machines, refrigerators, air conditioners, microwave ovens, and other home appliances.',
    },
    {
      icon: <Icons.Wrench size={32} className="text-gray-800" />,
      title: 'Vehicle Services',
      desc: 'Two-wheeler and four-wheeler servicing, diagnostics, and minor repairs from trusted workshops.',
    },
    {
      icon: <Icons.Zap size={32} className="text-yellow-500" />,
      title: 'Electronics Repair',
      desc: 'Cameras, printers, speakers, gaming consoles, and other consumer electronics diagnosed and repaired.',
    }
  ];

  return (
    <div className="services-container max-w-7xl section">
      <div className="text-center mb-16 reveal">
        <div className="badge">SERVICES</div>
        <h1 className="text-5xl font-bold mb-6">Repair <span className="highlight">services</span> for all<br/>your devices</h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          From smartphones to home appliances, we have verified<br/>professionals ready to help.
        </p>
      </div>

      <div className="services-grid reveal delay-1">
        {services.map((service, index) => (
          <div key={index} className={`service-card ${index === 0 ? 'active-card' : ''}`}>
            <div className="service-icon-wrapper">
              {service.icon}
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
