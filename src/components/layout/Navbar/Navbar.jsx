import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

import Button from '@/components/common/Button';
import { NAV, SITE } from '@/data/site';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // GitHub Pages compatible logo path
  const logoPath = `${import.meta.env.BASE_URL}images/logo.png`;
  const telHref = `tel:${SITE.phone.replace(/\s+/g, '')}`;

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  // lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'nav-solid' : ''}`}>
      {/* Top info bar */}
      <div className="nav-top">
        <div className="container nav-top-inner">
          <span className="nav-top-item nav-top-addr">
            <FaMapMarkerAlt /> {SITE.address}
          </span>
          <span className="nav-top-item nav-top-hours">
            <FaClock /> {SITE.hours[1][0]}: {SITE.hours[1][1]}
          </span>
          <a className="nav-top-item nav-top-call" href={telHref}>
            <FaPhoneAlt /> {SITE.phone}
          </a>
        </div>
      </div>

      <div className="container nav-inner">
        {/* Logo */}
        <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
          <img
            src={logoPath}
            alt="The Smoke Hauz logo"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </Link>

        {/* Navigation Links */}
        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Main">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {n.label}
            </NavLink>
          ))}

          <Button to="/contact" className="nav-cta" onClick={() => setOpen(false)}>
            Book Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="nav-burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>
    </header>
  );
}
