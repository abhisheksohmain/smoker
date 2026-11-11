
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp
} from 'react-icons/fa';

import { SITE, NAV, waLink } from '@/data/site';
import './Footer.css';

export default function Footer() {
  const logoPath = `${import.meta.env.BASE_URL}images/logo.png`;

  return (
    <footer className="foot">
      <div className="container foot-grid">

        {/* Brand */}
        <div>
          <img
            className="foot-logo"
            src={logoPath}
            alt="The Smoke Hauz"
            loading="lazy"
            onError={(e) => {
              console.error('Footer logo failed to load:', logoPath);
              e.currentTarget.style.display = 'none';
            }}
          />

          <p className="foot-text">
            Premium sheesha, handpicked flavours and a lounge
            made for long conversations.
          </p>

          <div className="foot-social">
            <a
              href={SITE.socials.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href={SITE.socials.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href={SITE.socials.tiktok}
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>

            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4>Explore</h4>

          <ul>
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h4>Opening hours</h4>

          <ul>
            {SITE.hours.map(([d, t]) => (
              <li key={d}>
                <span>{d}</span>
                <br />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4>Visit us</h4>

          <ul className="foot-contact">
            <li>
              <FaMapMarkerAlt />
              {SITE.address}
            </li>

            <li>
              <FaPhoneAlt />
              <a href={`tel:${SITE.phone}`}>
                {SITE.phone}
              </a>
            </li>

            <li>
              <FaEnvelope />
              <a href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="foot-bottom">
        © {new Date().getFullYear()} The Smoke Hauz Sheesha Lounge.
        All rights reserved. Smoking is harmful to health. 18+ only.
      </div>
    </footer>
  );
}
