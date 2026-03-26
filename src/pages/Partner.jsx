import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';

const Partner = () => {
  const benefits = [
    {
      icon: <Icons.Megaphone size={20} className="text-blue" />,
      title: 'Reach More Customers',
      desc: 'Get discovered by customers actively looking for your services in your area.',
    },
    {
      icon: <Icons.Smartphone size={20} className="text-gray" />,
      title: 'Digital Booking Management',
      desc: 'Manage all your repair orders, schedules, and updates from a single dashboard.',
    },
    {
      icon: <Icons.Star size={20} className="text-yellow" />,
      title: 'Build Verified Trust',
      desc: 'A verified RPAR badge tells customers your shop meets our quality standards.',
    },
    {
      icon: <Icons.LineChart size={20} className="text-blue" />,
      title: 'Grow With Technology',
      desc: "Use RPAR's platform to scale your business without spending on expensive infrastructure.",
    }
  ];

  return (
    <div className="partner-container max-w-7xl section">
      <div className="partner-layout">
        
        <div className="partner-content reveal">
          <div className="badge">FOR REPAIR SHOPS</div>
          <h1 className="text-5xl font-bold mb-6">Own a Repair Shop? <span className="highlight">Grow With RPAR.</span></h1>
          <p className="text-muted text-lg mb-10 max-w-2xl">
            Join a growing network of trusted repair professionals. RPAR gives you the technology to reach more customers, manage bookings digitally, and build a reputation that works for you.
          </p>

          <div className="benefits-grid mb-10">
            {benefits.map((benefit, i) => (
              <div key={i} className="benefit-card">
                <div className="benefit-icon">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="benefit-title">{benefit.title}</h4>
                  <p className="benefit-desc">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="btn btn-blue btn-lg">
            Become a Repair Partner <Icons.ArrowRight size={18} />
          </button>
        </div>

        <div className="partner-visual reveal delay-1">
          <div className="partner-dashboard-card glass">
           
            
            <div className="dashboard-metrics">
              <div className="metric">
                <span className="metric-value text-primary">3X</span>
                <span className="metric-label">More customer reach</span>
              </div>
              <div className="metric">
                <span className="metric-value text-primary">100%</span>
                <span className="metric-label">Digital workflow</span>
              </div>
            </div>

            <div className="dashboard-checklist">
              <div className="check-item"><Icons.CheckCircle2 size={16} className="text-primary"/> Verified partner badge & profile</div>
              <div className="check-item"><Icons.CheckCircle2 size={16} className="text-primary"/> Booking management dashboard</div>
              <div className="check-item"><Icons.CheckCircle2 size={16} className="text-primary"/> Customer rating system</div>
              <div className="check-item"><Icons.CheckCircle2 size={16} className="text-primary"/> Secure in-app payment collection</div>
              <div className="check-item"><Icons.CheckCircle2 size={16} className="text-primary"/> Dedicated partner support</div>
            </div>

            <button className="btn btn-primary w-full mt-8">
              Apply to Partner <Icons.ArrowRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Partner;
