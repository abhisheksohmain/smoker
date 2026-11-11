import { useState } from 'react';
import { FiX, FiZoomIn } from 'react-icons/fi';
import SectionHead from '@/components/common/SectionHead/SectionHead';
import Img from '@/components/common/Img';
import { LOCAL, IMG } from '@/data/images';
import './Grid.css';

const PICS = [
  { s: LOCAL.red, c: 'Shisha', t: 'tall' }, { s: LOCAL.lounge, c: 'Lounge', t: 'wide' }, { s: LOCAL.coals, c: 'Shisha', t: '' },
  { s: IMG.cocktail, c: 'Drinks', t: '' }, { s: LOCAL.torch, c: 'Shisha', t: 'tall' }, { s: IMG.lounge1, c: 'Lounge', t: '' },
  { s: LOCAL.tower, c: 'Shisha', t: 'tall' }, { s: IMG.drink, c: 'Drinks', t: '' }, { s: IMG.lounge2, c: 'Lounge', t: 'wide' },
];
const FILTERS = ['All', 'Shisha', 'Lounge', 'Drinks'];

export default function Grid() {
  const [f, setF] = useState('All');
  const [open, setOpen] = useState(null);
  const list = PICS.filter((p) => f === 'All' || p.c === f);
  return (
    <section className="section">
      <div className="container">
        <SectionHead eyebrow="Photo gallery" title="Moments from the lounge" />
        <div className="gg-filters">
          {FILTERS.map((x) => <button key={x} className={`btn ${f === x ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setF(x)}><span>{x}</span></button>)}
        </div>
        <div className="gg-grid">
          {list.map((p) => (
            <button key={p.s} className={`card zoom gg-item ${p.t}`} onClick={() => setOpen(p.s)} aria-label="Open photo">
              <Img src={p.s} alt={`${p.c} photo`} /><span className="gg-zoom"><FiZoomIn size={28} /></span>
            </button>
          ))}
        </div>
      </div>
      {open && (
        <div className="gg-lb" onClick={() => setOpen(null)}>
          <button className="gg-close" aria-label="Close"><FiX size={30} /></button>
          <Img src={open} alt="Gallery preview" />
        </div>
      )}
    </section>
  );
}
