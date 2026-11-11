
import SectionHead from '@/components/common/SectionHead/SectionHead';
import Reveal from '@/components/common/Reveal';
import Img from '@/components/common/Img';
import './Vibes.css';

const BASE = import.meta.env.BASE_URL;

const V = [
  {
    img: `${BASE}images/tower.jpg`,
    t: 'Crafted hookahs',
    d: 'Red anodised steel, crystal bases and silicone hoses.',
  },
  {
    img: `${BASE}images/coals.jpg`,
    t: 'Hand-lit coals',
    d: 'Even heat for a smooth, flavourful session.',
  },
  {
    img: `${BASE}images/lounge.jpg`,
    t: 'Majlis seating',
    d: 'Traditional fabrics and warm timber frames.',
  },
];

export default function Vibes() {
  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHead
          eyebrow="Details"
          title="The little things we care about"
        />

        <div className="grid g3">
          {V.map((x, i) => (
            <Reveal key={x.t} delay={i * 100}>
              <div className="card gvb-card">
                <Img src={x.img} alt={x.t} />

                <div className="gvb-cap">
                  <h3>{x.t}</h3>
                  <p>{x.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
