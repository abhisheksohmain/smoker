import SectionHead from '@/components/common/SectionHead/SectionHead';
import Reveal from '@/components/common/Reveal';
import Img from '@/components/common/Img';
import { IMG } from '@/data/images';
import './Bites.css';

const B = [
  { n: 'Loaded Fries', p: '$12', img: IMG.food, d: 'Crisp fries, cheese sauce, jalapeño and herbs.' },
  { n: 'Smash Burger', p: '$16', img: IMG.burger, d: 'Double patty, pickles and house sauce.' },
  { n: 'Molten Cake', p: '$13', img: IMG.dessert, d: 'Warm chocolate centre with vanilla ice cream.' },
];

export default function Bites() {
  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHead eyebrow="Café bites" title="Fresh from the café kitchen" text="Order straight to your table while you relax." />
        <div className="grid">
          {B.map((x, i) => (
            <Reveal key={x.n} delay={i * 80}>
              <div className="card bt-card">
                <div className="zoom bt-img"><Img src={x.img} alt={x.n} /></div>
                <div className="bt-body"><h3>{x.n}</h3><p>{x.d}</p></div>
                <strong className="bt-price grad-text">{x.p}</strong>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
