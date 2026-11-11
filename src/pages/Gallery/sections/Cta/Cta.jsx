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
        <Reveal className="card gl-cta">
          <img className="gl-cta-logo reflect" src={LOCAL.logo} alt="" />
          <h2>Want to be in the next photo?</h2>
          <p>Reserve a table and become part of the story.</p>
          <div className="gl-cta-btns">
            <Button to="/contact">Book Your Table</Button>
            <Button href={waLink()} variant="wa" icon={<FaWhatsapp size={18} />}>Message Us on WhatsApp</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
