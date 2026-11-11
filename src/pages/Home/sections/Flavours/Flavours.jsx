import SectionHead from '@/components/common/SectionHead/SectionHead';
import Reveal from '@/components/common/Reveal';
import Img from '@/components/common/Img';
import Button from '@/components/common/Button';
import { IMG } from '@/data/images';
import './Flavours.css';

const ITEMS = [
  { name: 'Double Apple', tag: 'Classic', img: IMG.grapes, text: 'Sweet red apple with a soft anise finish — the all-time favourite.' },
  { name: 'Blueberry Mint', tag: 'Fresh', img: IMG.blueberry, text: 'Ripe blueberries cooled with a clean hit of spearmint.' },
  { name: 'Strawberry Cream', tag: 'Sweet', img: IMG.strawberry, text: 'Juicy strawberries folded into a smooth vanilla cream.' },
  { name: 'Watermelon Ice', tag: 'Cool', img: IMG.watermelon, text: 'Summer in a bowl: crisp watermelon with an icy finish.' },
  { name: 'Lemon Mint', tag: 'Zesty', img: IMG.lemon, text: 'Sharp citrus and fresh mint. Light, bright and refreshing.' },
  { name: 'Smoky Chai', tag: 'Signature', img: IMG.coffee, text: 'Warm spiced tea with cardamom and a touch of caramel.' },
];

export default function Flavours() {
  return (
    <section className="section section-alt fl">
      <div className="container">
        <SectionHead eyebrow="Signature flavours" title="Taste that keeps you coming back" text="A few of our most-ordered blends. Ask the host for a custom mix — we love experimenting." />
        <div className="grid g3">
          {ITEMS.map((f, i) => (
            <Reveal key={f.name} delay={i * 80}>
              <article className="card fl-card">
                <div className="zoom fl-img"><Img src={f.img} alt={f.name} /><span className="fl-tag">{f.tag}</span></div>
                <div className="fl-body"><h3>{f.name}</h3><p>{f.text}</p></div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="fl-cta"><Button to="/menu" variant="ghost">See the full menu</Button></div>
      </div>
    </section>
  );
}
