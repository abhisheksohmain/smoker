import SectionHead from '@/components/common/SectionHead/SectionHead';
import Reveal from '@/components/common/Reveal';
import './Journey.css';

const STEPS = [
  { y: 'The idea', t: 'A lounge with a point of view', d: 'We sketched a space that blends Middle-Eastern warmth with a modern, clean finish.' },
  { y: 'The build', t: 'Hand-picked details', d: 'Timber seating, woven cushions, statement lighting and custom wall art went in piece by piece.' },
  { y: 'The launch', t: 'Doors open', d: 'Our first guests came in for one session and stayed for three.' },
  { y: 'Today', t: 'A growing community', d: 'Regulars, new friends and celebration groups make every night different.' },
];

export default function Journey() {
  return (
    <section className="section aj">
      <div className="container">
        <SectionHead eyebrow="Our journey" title="From a sketch to your favourite spot" />
        <div className="aj-line">
          {STEPS.map((s, i) => (
            <Reveal key={s.y} delay={i * 90} className={`aj-item ${i % 2 ? 'right' : ''}`}>
              <div className="card aj-card"><span className="aj-y">{s.y}</span><h3>{s.t}</h3><p>{s.d}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
