import SectionHead from '@/components/common/SectionHead/SectionHead';
import Reveal from '@/components/common/Reveal';
import Img from '@/components/common/Img';
import { IMG } from '@/data/images';
import './Drinks.css';

const D = [
  { n: 'Hauz Mojito', p: '$9', img: IMG.drink, d: 'Mint, lime and soda, served over crushed ice.' },
  { n: 'Berry Sunset', p: '$10', img: IMG.cocktail, d: 'Mixed berries, orange and a splash of sparkling.' },
  { n: 'Copper Cold Brew', p: '$7', img: IMG.coffee, d: 'Slow-steeped coffee with vanilla and cream.' },
  { n: 'Midnight Lounge', p: '$11', img: IMG.bar, d: 'Passionfruit, pineapple and a hint of ginger.' },
];

export default function Drinks() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead eyebrow="Mocktails & drinks" title="Something cold to go with the smoke" />
        <div className="grid g4">
          {D.map((x, i) => (
            <Reveal key={x.n} delay={i * 80}>
              <div className="card dr-card">
                <div className="zoom dr-img"><Img src={x.img} alt={x.n} /></div>
                <div className="dr-body"><div><h3>{x.n}</h3><strong className="grad-text">{x.p}</strong></div><p>{x.d}</p></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
