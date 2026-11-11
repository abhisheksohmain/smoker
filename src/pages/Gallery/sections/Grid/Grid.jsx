
import { useState } from 'react';
import { FiX, FiZoomIn } from 'react-icons/fi';
import SectionHead from '@/components/common/SectionHead/SectionHead';
import Img from '@/components/common/Img';
import './Grid.css';

const BASE = import.meta.env.BASE_URL;

const PICS = [
  { s: `${BASE}images/shisha-red.jpg`, c: 'Shisha', t: 'tall', id: 1 },
  { s: `${BASE}images/lounge.jpg`, c: 'Lounge', t: 'wide', id: 2 },
  { s: `${BASE}images/coals.jpg`, c: 'Shisha', t: '', id: 3 },
  { s: `${BASE}images/sign.jpg`, c: 'Lounge', t: '', id: 4 },
  { s: `${BASE}images/torch.jpg`, c: 'Shisha', t: 'tall', id: 5 },
  { s: `${BASE}images/lounge.jpg`, c: 'Lounge', t: '', id: 6 },
  { s: `${BASE}images/tower.jpg`, c: 'Shisha', t: 'tall', id: 7 },
  { s: `${BASE}images/coals.jpg`, c: 'Shisha', t: '', id: 8 },
  { s: `${BASE}images/lounge.jpg`, c: 'Lounge', t: 'wide', id: 9 },
];

const FILTERS = ['All', 'Shisha', 'Lounge', 'Drinks'];

export default function Grid() {
  const [f, setF] = useState('All');
  const [open, setOpen] = useState(null);

  const list = PICS.filter(
    (p) => f === 'All' || p.c === f
  );

  return (
    <section className="section">
      <div className="container">
        <SectionHead
          eyebrow="Photo gallery"
          title="Moments from the lounge"
        />

        <div className="gg-filters">
          {FILTERS.map((x) => (
            <button
              key={x}
              className={`btn ${
                f === x ? 'btn-primary' : 'btn-ghost'
              }`}
              onClick={() => setF(x)}
            >
              <span>{x}</span>
            </button>
          ))}
        </div>

        <div className="gg-grid">
          {list.map((p) => (
            <button
              key={p.id}
              className={`card zoom gg-item ${p.t}`}
              onClick={() => setOpen(p.s)}
              aria-label={`Open ${p.c} photo`}
            >
              <Img src={p.s} alt={`${p.c} photo`} />
              <span className="gg-zoom">
                <FiZoomIn size={28} />
              </span>
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="gg-lb"
          onClick={() => setOpen(null)}
        >
          <button
            className="gg-close"
            aria-label="Close"
            onClick={() => setOpen(null)}
          >
            <FiX size={30} />
          </button>

          <div onClick={(e) => e.stopPropagation()}>
            <Img src={open} alt="Gallery preview" />
          </div>
        </div>
      )}
    </section>
  );
}
