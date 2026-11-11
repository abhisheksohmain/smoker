import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Reveal from '@/components/common/Reveal';
import { SITE, waLink } from '@/data/site';
import './Info.css';

const items = () => [
  { i: <FaPhoneAlt />, t: 'Call us', v: SITE.phone, h: `tel:${SITE.phone}` },
  { i: <FaWhatsapp />, t: 'WhatsApp', v: 'Chat with us now', h: waLink() },
  { i: <FaEnvelope />, t: 'Email', v: SITE.email, h: `mailto:${SITE.email}` },
  { i: <FaMapMarkerAlt />, t: 'Find us', v: SITE.address, h: `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}` },
];

export default function Info() {
  return (
    <section className="section">
      <div className="container grid g4">
        {items().map((x, k) => (
          <Reveal key={x.t} delay={k * 80}>
            <a className="card ci-card" href={x.h} target="_blank" rel="noreferrer">
              <span className="ci-i">{x.i}</span><h3>{x.t}</h3><p>{x.v}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
