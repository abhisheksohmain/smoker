
import Img from '@/components/common/Img';
import './Marquee.css';

const BASE = import.meta.env.BASE_URL;

const PICS = [
  `${BASE}images/shisha-red.jpg`,
  `${BASE}images/sign.jpg`,
  `${BASE}images/lounge.jpg`,
  `${BASE}images/tower.jpg`,
  `${BASE}images/coals.jpg`,
  `${BASE}images/lounge.jpg`,
  `${BASE}images/torch.jpg`,
  `${BASE}images/shisha-red.jpg`,
];

export default function Marquee() {
  return (
    <section className="gm">
      <div className="gm-track">
        {[...PICS, ...PICS].map((src, i) => (
          <div key={i} className="card zoom gm-item">
            <Img src={src} alt="The Smoke Hauz lounge gallery" />
          </div>
        ))}
      </div>
    </section>
  );
}
