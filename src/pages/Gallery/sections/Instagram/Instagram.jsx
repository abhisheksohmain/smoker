import { FaInstagram } from 'react-icons/fa';
import SectionHead from '@/components/common/SectionHead/SectionHead';
import Img from '@/components/common/Img';
import Button from '@/components/common/Button';
import { LOCAL, IMG } from '@/data/images';
import { SITE } from '@/data/site';
import './Instagram.css';

const PICS = [LOCAL.torch, IMG.cocktail, LOCAL.red, IMG.lounge2, LOCAL.coals, IMG.drink];

export default function Instagram() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead eyebrow="Follow along" title="Share your night with us" text="Tag us for a chance to be featured on our page." />
        <div className="gi-grid">
          {PICS.map((s, i) => (
            <a key={i} href={SITE.socials.instagram} target="_blank" rel="noreferrer" className="card zoom gi-item" aria-label="Open Instagram">
              <Img src={s} alt="" /><span><FaInstagram size={30} /></span>
            </a>
          ))}
        </div>
        <div className="gi-cta"><Button href={SITE.socials.instagram} icon={<FaInstagram size={18} />}>Follow on Instagram</Button></div>
      </div>
    </section>
  );
}
