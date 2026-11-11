
import SectionHead from '@/components/common/SectionHead/SectionHead';
import Reveal from '@/components/common/Reveal';
import Img from '@/components/common/Img';
import './Ambience.css';

const BASE = import.meta.env.BASE_URL;

const PICS = [
  {
    src: `${BASE}images/lounge.jpg`,
    c: 'big',
    a: 'Lounge seating',
  },
  {
    src: `${BASE}images/shisha-red.jpg`,
    c: 'tall',
    a: 'Red hookah with smoke',
  },
  {
    src: `${BASE}images/tower.jpg`,
    c: '',
    a: 'Premium hookah display',
  },
  {
    src: `${BASE}images/coals.jpg`,
    c: '',
    a: 'Coals on a hookah bowl',
  },
  {
    src: `${BASE}images/sign.jpg`,
    c: 'wide',
    a: 'Smoke Hauz lounge sign',
  },
];

export default function Ambience() {
  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHead
          eyebrow="The space"
          title="Warm light, rich fabrics, slow smoke"
        />

        <div className="am-grid">
          {PICS.map((p, i) => (
            <Reveal
              key={p.a}
              delay={i * 80}
              className={`am-cell ${p.c}`}
            >
              <div className="card zoom am-card">
                <Img src={p.src} alt={p.a} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
