
import { Link } from 'react-router-dom';
import './Banner.css';

const BASE = import.meta.env.BASE_URL;
const bannerImage = `${BASE}images/sign.jpg`;

export default function Banner() {
  return (
    <section
      className="ct-banner"
      style={{
        backgroundImage: `url("${bannerImage}")`,
      }}
    >
      <div className="ct-banner-ov" />

      <div className="container ct-banner-in">
        <h1>
          Get in <span className="grad-text">Touch</span>
        </h1>

        <p>
          Questions, bookings or events — we reply fast on WhatsApp.
        </p>

        <span className="ct-crumb">
          <Link to="/">Home</Link> / Contact
        </span>
      </div>
    </section>
  );
}
