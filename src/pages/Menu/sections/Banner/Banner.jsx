import { Link } from 'react-router-dom';
import { LOCAL, IMG } from '@/data/images';
import './Banner.css';

export default function Banner() {
  return (
    <section className="mn-banner" style={{ backgroundImage: `url(${IMG.cocktail})` }}>
      <div className="mn-banner-ov" />
      <div className="container mn-banner-in">
        <h1>Our <span className="grad-text">Menu</span></h1>
        <p>Sheesha packages, signature flavours, mocktails and café bites.</p>
        <span className="mn-crumb"><Link to="/">Home</Link> / Menu</span>
      </div>
    </section>
  );
}
