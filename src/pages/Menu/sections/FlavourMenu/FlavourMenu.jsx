import { useState } from 'react';
import SectionHead from '@/components/common/SectionHead/SectionHead';
import Img from '@/components/common/Img';
import { IMG, LOCAL } from '@/data/images';
import './FlavourMenu.css';

const CATS = {
  Fruity: { img: IMG.strawberry, items: ['Double Apple', 'Strawberry Kiwi', 'Peach Ice', 'Grape Berry', 'Mango Tango', 'Cherry Blossom'] },
  'Mint & Fresh': { img: IMG.lemon, items: ['Blueberry Mint', 'Lemon Mint', 'Watermelon Ice', 'Cool Cucumber', 'Arctic Spearmint', 'Mojito Twist'] },
  'Sweet & Creamy': { img: IMG.dessert, items: ['Vanilla Cream', 'Caramel Latte', 'Strawberry Cream', 'Chocolate Mint', 'Honey Bun', 'Coconut Kiss'] },
  Signature: { img: LOCAL.coals, items: ['Smoky Chai', 'Hauz Special Blend', 'Rose Pomegranate', 'Midnight Berry', 'Gold Rush', 'Chef’s Surprise Mix'] },
};

export default function FlavourMenu() {
  const [tab, setTab] = useState('Fruity');
  const c = CATS[tab];
  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHead eyebrow="Flavour menu" title="Find your favourite blend" />
        <div className="fm-tabs" role="tablist">
          {Object.keys(CATS).map((k) => (
            <button key={k} role="tab" aria-selected={tab === k} className={`fm-tab btn ${tab === k ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setTab(k)}><span>{k}</span></button>
          ))}
        </div>
        <div key={tab} className="card fm-panel">
          <div className="zoom fm-img"><Img src={c.img} alt={tab} /></div>
          <ul className="fm-list">{c.items.map((i) => <li key={i}><span>{i}</span><i /></li>)}</ul>
        </div>
      </div>
    </section>
  );
}
