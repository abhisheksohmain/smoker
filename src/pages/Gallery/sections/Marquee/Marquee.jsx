import Img from '@/components/common/Img';
import { LOCAL, IMG } from '@/data/images';
import './Marquee.css';

const PICS = [LOCAL.red, IMG.cocktail, LOCAL.lounge, IMG.strawberry, LOCAL.coals, IMG.lounge1, LOCAL.torch, IMG.blueberry];

export default function Marquee() {
  return (
    <section className="gm">
      <div className="gm-track">
        {[...PICS, ...PICS].map((s, i) => <div key={i} className="card zoom gm-item"><Img src={s} alt="" /></div>)}
      </div>
    </section>
  );
}
