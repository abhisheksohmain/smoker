import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import Button from '@/components/common/Button';
import { NAV } from '@/data/site';
import { LOCAL } from '@/data/images';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav-solid' : ''}`}>
      <div className="container nav-inner">
        <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
          <img src={LOCAL.logo} alt="The Smoke Hauz logo" />
        </Link>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>
              {n.label}
            </NavLink>
          ))}
          <Button to="/contact" className="nav-cta" onClick={() => setOpen(false)}>Reserve</Button>
        </nav>
        <button className="nav-burger" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>
    </header>
  );
}
