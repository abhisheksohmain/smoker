import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import SectionHead from '@/components/common/SectionHead/SectionHead';
import Reveal from '@/components/common/Reveal';
import Img from '@/components/common/Img';
import { IMG } from '@/data/images';
import './Team.css';

const TEAM = [
  { n: 'Omar A.', r: 'Founder & Head Blender', img: IMG.p1 },
  { n: 'Layla H.', r: 'Lounge Manager', img: IMG.p4 },
  { n: 'Yusuf M.', r: 'Master Hookah Host', img: IMG.p3 },
  { n: 'Nadia S.', r: 'Drinks & Café', img: IMG.p2 },
];

export default function Team() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead eyebrow="Meet the hosts" title="The people behind your session" />
        <div className="grid g4">
          {TEAM.map((m, i) => (
            <Reveal key={m.n} delay={i * 80}>
              <div className="card tm-card">
                <div className="zoom tm-img"><Img src={m.img} alt={m.n} /></div>
                <div className="tm-body"><h3>{m.n}</h3><span>{m.r}</span>
                  <div className="tm-soc"><FaInstagram /><FaWhatsapp /></div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
