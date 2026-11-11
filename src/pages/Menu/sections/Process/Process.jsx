import { FaCalendarCheck, FaBlender, FaFire, FaSmile } from 'react-icons/fa';
import SectionHead from '@/components/common/SectionHead/SectionHead';
import Reveal from '@/components/common/Reveal';
import './Process.css';

const S = [
  { i: <FaCalendarCheck />, t: 'Reserve', d: 'Book on WhatsApp or walk in.' },
  { i: <FaBlender />, t: 'Choose', d: 'Pick a flavour or let us mix one.' },
  { i: <FaFire />, t: 'We prepare', d: 'Fresh hookah, hand-lit coals.' },
  { i: <FaSmile />, t: 'Enjoy', d: 'Relax. We handle the refills.' },
];

export default function Process() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead eyebrow="How it works" title="From booking to first puff" />
        <div className="grid g4">
          {S.map((s, i) => (
            <Reveal key={s.t} delay={i * 90}>
              <div className="card pr-card"><span className="pr-i">{s.i}</span><h3>{s.t}</h3><p>{s.d}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
