import { FaCheck, FaCrown } from 'react-icons/fa';
import SectionHead from '@/components/common/SectionHead/SectionHead';
import Reveal from '@/components/common/Reveal';
import Button from '@/components/common/Button';
import { waLink } from '@/data/site';
import './Packages.css';

const PK = [
  { n: 'Classic', p: '$35', d: 'A solid session for 2–3 people.', f: ['1 premium hookah', 'Any standard flavour', 'Fresh coals on request', 'Complimentary water'] },
  { n: 'Premium', p: '$49', d: 'Our most popular choice.', f: ['1 premium hookah', 'Signature or mixed flavour', 'Unlimited coal changes', '2 mocktails included'], hot: true },
  { n: 'Royal Table', p: '$89', d: 'For groups and celebrations.', f: ['2 premium hookahs', 'Custom flavour blends', 'Reserved majlis seating', 'Dessert platter included'] },
];

export default function Packages() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead eyebrow="Sheesha packages" title="Pick the session that suits your night" text="Sample pricing — update it in this file to match your real menu." />
        <div className="grid g3 pk-grid">
          {PK.map((x, i) => (
            <Reveal key={x.n} delay={i * 100}>
              <div className={`card pk-card ${x.hot ? 'hot' : ''}`}>
                {x.hot && <span className="pk-badge"><FaCrown /> Most popular</span>}
                <h3>{x.n}</h3>
                <p className="pk-d">{x.d}</p>
                <strong className="pk-price grad-text">{x.p}</strong>
                <ul>{x.f.map((t) => <li key={t}><FaCheck /> {t}</li>)}</ul>
                <Button href={waLink(`Hi, I'd like to book the ${x.n} package.`)} variant={x.hot ? 'primary' : 'ghost'}>Choose {x.n}</Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
