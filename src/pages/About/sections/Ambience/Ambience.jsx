import SectionHead from '@/components/common/SectionHead/SectionHead';
import Reveal from '@/components/common/Reveal';
import Img from '@/components/common/Img';
import { LOCAL, IMG } from '@/data/images';
import './Ambience.css';

const PICS = [
  { src: LOCAL.lounge, c: 'big', a: 'Lounge seating' },
  { src: LOCAL.red, c: 'tall', a: 'Red hookah with smoke' },
  { src: IMG.lounge2, c: '', a: 'Warm lounge lighting' },
  { src: LOCAL.coals, c: '', a: 'Coals on a hookah bowl' },
  { src: IMG.bar, c: 'wide', a: 'Drinks at the bar' },
];

export default function Ambience() {
  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHead eyebrow="The space" title="Warm light, rich fabrics, slow smoke" />
        <div className="am-grid">
          {PICS.map((p, i) => (
            <Reveal key={p.a} delay={i * 80} className={`am-cell ${p.c}`}>
              <div className="card zoom am-card"><Img src={p.src} alt={p.a} /></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
