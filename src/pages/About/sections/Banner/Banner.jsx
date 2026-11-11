
import { Link } from 'react-router-dom';
import './Banner.css';

const BASE = import.meta.env.BASE_URL;
const bannerImage = `${BASE}images/lounge.jpg`;

export default function Banner() {
  return (
    <section
      className="ab-banner"
      style={{
        backgroundImage: `url("${bannerImage}")`,
      }}
    >
      <div className="ab-banner-ov" />

      <div className="container ab-banner-in">
        <h1>
          About <span className="grad-text">The Smoke Hauz</span>
        </h1>

        <p>
          <Link to="/">Home</Link> / About
        </p>
      </div>
    </section>
  );
}
