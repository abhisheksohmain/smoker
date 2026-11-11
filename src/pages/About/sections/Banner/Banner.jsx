import { Link } from 'react-router-dom';
import { LOCAL } from '@/data/images';
import './Banner.css';

export default function Banner() {
  return (
    <section className="ab-banner" style={{ backgroundImage: `url(${LOCAL.lounge})` }}>
      <div className="ab-banner-ov" />
      <div className="container ab-banner-in">
        <h1>About <span className="grad-text">The Smoke Hauz</span></h1>
        <p><Link to="/">Home</Link> / About</p>
      </div>
    </section>
  );
}
