import { Link } from 'react-router-dom';
import { LOCAL, IMG } from '@/data/images';
import './Banner.css';

export default function Banner() {
  return (
    <section className="ct-banner" style={{ backgroundImage: `url(${LOCAL.sign})` }}>
      <div className="ct-banner-ov" />
      <div className="container ct-banner-in">
        <h1>Get in <span className="grad-text">Touch</span></h1>
        <p>Questions, bookings or events — we reply fast on WhatsApp.</p>
        <span className="ct-crumb"><Link to="/">Home</Link> / Contact</span>
      </div>
    </section>
  );
}
