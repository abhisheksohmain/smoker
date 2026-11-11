
import { Link } from 'react-router-dom';
import './Banner.css';

const BASE = import.meta.env.BASE_URL;
const bannerImage = `${BASE}images/shisha-red.jpg`;

export default function Banner() {
  return (
    <section
      className="gl-banner"
      style={{
        backgroundImage: `url("${bannerImage}")`,
      }}
    >
      <div className="gl-banner-ov" />

      <div className="container gl-banner-in">
        <h1>
          Inside <span className="grad-text">The Smoke Hauz</span>
        </h1>

        <p>
          Smoke, coals, cushions and good company. Take a look around.
        </p>

        <span className="gl-crumb">
          <Link to="/">Home</Link> / Gallery
        </span>
      </div>
    </section>
  );
}
