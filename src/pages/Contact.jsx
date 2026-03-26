import * as Icons from 'lucide-react';

const Contact = () => {
  const supportCards = [
    {
      icon: <Icons.MessageCircle size={28} className="text-white" />,
      title: 'Customer Support',
      desc: 'For booking help, repair queries, and general questions.',
      linkText: 'support@rpar.in',
      linkUrl: 'mailto:support@rpar.in'
    },
    {
      icon: <Icons.Handshake size={28} className="text-white" />,
      title: 'Partner Inquiries',
      desc: 'Interested in joining RPAR as a repair shop partner?',
      linkText: 'partner@rpar.in',
      linkUrl: 'mailto:partner@rpar.in'
    },
    {
      icon: <Icons.MapPin size={28} className="text-white" />,
      title: 'Our Office',
      desc: 'Una, Himachal Pradesh - 177209',
      linkText: 'India',
      linkUrl: '#'
    }
  ];

  return (
    <div className="contact-container max-w-7xl section">
      <div className="text-center mb-16 reveal">
        <h1 className="text-5xl font-bold mb-6">We're here to <span className="highlight">help</span></h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          Have a question, concern, or feedback? Reach out to us anytime.
        </p>
      </div>

      <div className="contact-grid reveal delay-1">
        {supportCards.map((card, index) => (
          <div key={index} className="contact-card">
            <div className="contact-icon-wrapper">
              {card.icon}
            </div>
            <h3 className="contact-title">{card.title}</h3>
            <p className="contact-desc">{card.desc}</p>
            <a href={card.linkUrl} className="contact-link">{card.linkText}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
