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
        <Reveal className="card mn-cta">
          <img className="mn-cta-logo reflect" src={LOCAL.logo} alt="" />
          <h2>Hungry, thirsty or just curious?</h2>
          <p>Tell us what you like and we will build the perfect table for you.</p>
          <div className="mn-cta-btns">
            <Button to="/contact">Book Your Table</Button>
            <Button href={waLink()} variant="wa" icon={<FaWhatsapp size={18} />}>Message Us on WhatsApp</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
