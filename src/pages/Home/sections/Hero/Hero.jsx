import { FaWhatsapp, FaChevronDown } from 'react-icons/fa';
import Button from '@/components/common/Button';
import { LOCAL, VIDEO } from '@/data/images';
import { waLink } from '@/data/site';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hh">
      <div className="hh-bg" style={{ backgroundImage: `url(${LOCAL.red})` }} />
      <video className="hh-video" autoPlay muted loop playsInline poster={VIDEO.poster}>
        <source src={VIDEO.hero} type="video/mp4" />
      </video>
      <div className="hh-overlay" />
      {[...Array(7)].map((_, i) => <span key={i} className="hh-smoke" style={{ left: `${8 + i * 13}%`, animationDelay: `${i * 1.3}s` }} />)}
      <div className="container hh-content">
        <img className="hh-logo reflect" src={LOCAL.logo} alt="The Smoke Hauz Sheesha Lounge" />
        <h1 className="hh-title">Where every puff becomes an <span className="grad-text">experience</span></h1>
        <p className="hh-sub">Handpicked flavours, hand-lit coals and a lounge built for long nights with good company.</p>
        <div className="hh-btns">
          <Button to="/contact">Reserve a table</Button>
          <Button to="/menu" variant="ghost">Explore the menu</Button>
          <Button href={waLink()} variant="wa" icon={<FaWhatsapp size={18} />}>WhatsApp us</Button>
        </div>
      </div>
      <a href="#intro" className="hh-scroll" aria-label="Scroll down"><FaChevronDown /></a>
    </section>
  );
}
