import { FaGem, FaHeart, FaSnowflake, FaHandsHelping } from 'react-icons/fa';
import SectionHead from '@/components/common/SectionHead/SectionHead';
import Reveal from '@/components/common/Reveal';
import './Values.css';

const V = [
  { i: <FaGem />, t: 'Quality first', d: 'Premium tobacco, quality coals and equipment we would use ourselves.' },
  { i: <FaSnowflake />, t: 'Spotless hygiene', d: 'Fresh mouth tips, washed bowls and cleaned hoses for every table.' },
  { i: <FaHeart />, t: 'Real hospitality', d: 'We greet you, remember your flavour and look after the details.' },
  { i: <FaHandsHelping />, t: 'Responsible service', d: '18+ only, with honest guidance on pacing and safe enjoyment.' },
];

export default function Values() {
  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHead eyebrow="What we stand for" title="Our promise to every guest" />
        <div className="grid g4">
          {V.map((v, i) => (
            <Reveal key={v.t} delay={i * 80}>
              <div className="card av-card"><span className="av-i">{v.i}</span><h3>{v.t}</h3><p>{v.d}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
