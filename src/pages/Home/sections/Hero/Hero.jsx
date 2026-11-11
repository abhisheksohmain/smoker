
import { FaWhatsapp, FaChevronDown } from 'react-icons/fa';

import Button from '@/components/common/Button';
import { waLink } from '@/data/site';
import './Hero.css';

export default function Hero() {
  // GitHub Pages compatible asset paths
  const BASE = import.meta.env.BASE_URL;

  const logoPath = `${BASE}images/logo.png`;
  const heroImage = `${BASE}images/shisha-red.jpg`;

  // Video paths: update filenames/extensions if your actual files differ
  const heroVideo = `${BASE}videos/hero.mp4`;
  const videoPoster = heroImage;

  return (
    <section className="hh">

      {/* Background Image */}
      <div
        className="hh-bg"
        style={{
          backgroundImage: `url("${heroImage}")`,
        }}
      />

      {/* Background Video */}
      <video
        className="hh-video"
        autoPlay
        muted
        loop
        playsInline
        poster={videoPoster}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="hh-overlay" />

      {/* Smoke Animation */}
      {[...Array(7)].map((_, i) => (
        <span
          key={i}
          className="hh-smoke"
          style={{
            left: `${8 + i * 13}%`,
            animationDelay: `${i * 1.3}s`,
          }}
        />
      ))}

      {/* Hero Content */}
      <div className="container hh-content">

        <img
          className="hh-logo reflect"
          src={logoPath}
          alt="The Smoke Hauz Sheesha Lounge"
          onError={(e) => {
            console.error('Hero logo failed to load:', logoPath);
            e.currentTarget.style.display = 'none';
          }}
        />

        <h1 className="hh-title">
          Where every puff becomes an{' '}
          <span className="grad-text">experience</span>
        </h1>

        <p className="hh-sub">
          Handpicked flavours, hand-lit coals and a lounge
          built for long nights with good company.
        </p>

        {/* Hero Buttons */}
        <div className="hh-btns">

          <Button to="/contact">
            Book Your Table
          </Button>

          <Button to="/menu" variant="ghost">
            View Menu
          </Button>

          <Button
            href={waLink()}
            variant="wa"
            icon={<FaWhatsapp size={18} />}
          >
            Chat on WhatsApp
          </Button>

        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#intro"
        className="hh-scroll"
        aria-label="Scroll down"
      >
        <FaChevronDown />
      </a>

    </section>
  );
}
