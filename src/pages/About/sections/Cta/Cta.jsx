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
        <Reveal className="card acta" >
          <img className="acta-logo" src={LOCAL.logo} alt="" />
          <h2>Come see why guests keep coming back</h2>
          <p>Book a table or message us on WhatsApp — we will have your hookah ready.</p>
          <div className="acta-btns">
            <Button to="/contact">Book Your Table</Button>
            <Button href={waLink()} variant="wa" icon={<FaWhatsapp size={18} />}>Message Us on WhatsApp</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
