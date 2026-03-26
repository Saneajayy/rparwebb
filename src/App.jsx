import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Working from './pages/Working';
import Services from './pages/Services';
import Partner from './pages/Partner';
import Contact from './pages/Contact';
import './index.css';

function App() {
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
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  return (
    <Layout>
      <div id="home"><Home /></div>
      <div id="working"><Working /></div>
      <div id="services"><Services /></div>
      <div id="partner"><Partner /></div>
      <div id="contact"><Contact /></div>
    </Layout>
  );
}

export default App;
