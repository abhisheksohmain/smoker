
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

import Button from '@/components/common/Button';
import { NAV } from '@/data/site';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // GitHub Pages compatible logo path
  const logoPath = `${import.meta.env.BASE_URL}images/logo.png`;

  useEffect(() => {
    const on = () => {
      setScrolled(window.scrollY > 40);
    };

    on();

    window.addEventListener('scroll', on, { passive: true });

    return () => {
      window.removeEventListener('scroll', on);
    };
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav-solid' : ''}`}>
      <div className="container nav-inner">

        {/* Logo */}
        <Link
          to="/"
          className="nav-logo"
          onClick={() => setOpen(false)}
        >
          <img
            src={logoPath}
            alt="The Smoke Hauz logo"
            onError={(e) => {
              console.error('Navbar logo failed to load:', logoPath);
              e.currentTarget.style.display = 'none';
            }}
          />
        </Link>

        {/* Navigation Links */}
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? 'active' : ''
              }
            >
              {n.label}
            </NavLink>
          ))}

          <Button
            to="/contact"
            className="nav-cta"
            onClick={() => setOpen(false)}
          >
            Reserve
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
