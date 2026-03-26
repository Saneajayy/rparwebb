import * as Icons from 'lucide-react';

const Partner = () => {
  const benefits = [
    {
      icon: <Icons.Megaphone size={24} className="text-white" />,
      title: 'Reach More Customers',
      desc: 'Get discovered by customers actively looking for your services in your area.',
    },
    {
      icon: <Icons.Smartphone size={24} className="text-white" />,
      title: 'Digital Booking Management',
      desc: 'Manage all your repair orders, schedules, and updates from a single dashboard.',
    },
    {
      icon: <Icons.Star size={24} className="text-white" />,
      title: 'Build Verified Trust',
      desc: 'A verified RPAR badge tells customers your shop meets our quality standards.',
    },
    {
      icon: <Icons.LineChart size={24} className="text-white" />,
      title: 'Grow With Technology',
      desc: "Use RPAR's platform to scale your business without spending on expensive infrastructure.",
    }
  ];

  return (
    <div className="partner-container max-w-7xl section">
      <div className="text-center mb-20 reveal">
        <h1 className="text-5xl font-bold mb-6">Own a <span className="highlight" style={{ color: '#000262' }}>repair</span> shop?</h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          Join a growing network of trusted repair professionals. RPAR gives you the technology to reach more customers, manage bookings digitally, and build a reputation that works for you.
        </p>
      </div>

      <div className="partner-layout">
        <div className="partner-content reveal">
          <div className="benefits-grid">
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


        </div>

        <div className="partner-visual reveal delay-1">
          <div className="partner-dashboard-card glass">
            <div className="dashboard-metrics">
              <div className="metric">
                <span className="metric-value" style={{ color: '#000262' }}>3X</span>
                <span className="metric-label">More customer reach</span>
              </div>
              <div className="metric">
                <span className="metric-value" style={{ color: '#000262' }}>100%</span>
                <span className="metric-label">Digital workflow</span>
              </div>
            </div>

            <div className="dashboard-checklist">
              <div className="check-item"><Icons.CheckCircle2 size={16} style={{ color: '#000262' }}/> Verified partner badge & profile</div>
              <div className="check-item"><Icons.CheckCircle2 size={16} style={{ color: '#000262' }}/> Booking management dashboard</div>
              <div className="check-item"><Icons.CheckCircle2 size={16} style={{ color: '#000262' }}/> Customer rating system</div>
              <div className="check-item"><Icons.CheckCircle2 size={16} style={{ color: '#000262' }}/> Secure in-app payment collection</div>
              <div className="check-item"><Icons.CheckCircle2 size={16} style={{ color: '#000262' }}/> Dedicated partner support</div>
            </div>

            <button className="hero-btn primary-btn w-full mt-8">
              Become a Repair Partner <Icons.ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
