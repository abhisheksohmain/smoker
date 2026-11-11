import { Link } from 'react-router-dom';
import { LOCAL, IMG } from '@/data/images';
import './Banner.css';

export default function Banner() {
  return (
    <section className="gl-banner" style={{ backgroundImage: `url(${LOCAL.red})` }}>
      <div className="gl-banner-ov" />
      <div className="container gl-banner-in">
        <h1>Inside <span className="grad-text">The Smoke Hauz</span></h1>
        <p>Smoke, coals, cushions and good company. Take a look around.</p>
        <span className="gl-crumb"><Link to="/">Home</Link> / Gallery</span>
      </div>
    </section>
  );
}
