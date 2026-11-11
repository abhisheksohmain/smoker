import { FaWhatsapp } from 'react-icons/fa';
import Reveal from '@/components/common/Reveal';
import Button from '@/components/common/Button';
import { waLink } from '@/data/site';
import { LOCAL } from '@/data/images';
import './Cta.css';

export default function Cta() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="card ct-cta">
          <img className="ct-cta-logo reflect" src={LOCAL.logo} alt="" />
          <h2>Prefer to chat? We are one tap away</h2>
          <p>Message us now and we will confirm your booking in minutes.</p>
          <div className="ct-cta-btns">
            <Button to="/contact">Book a table</Button>
            <Button href={waLink()} variant="wa" icon={<FaWhatsapp size={18} />}>Chat on WhatsApp</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
