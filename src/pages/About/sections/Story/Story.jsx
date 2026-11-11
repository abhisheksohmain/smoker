import SectionHead from '@/components/common/SectionHead/SectionHead';
import Reveal from '@/components/common/Reveal';
import Img from '@/components/common/Img';
import { LOCAL } from '@/data/images';
import './Story.css';

export default function Story() {
  return (
    <section className="section ast">
      <div className="container grid g2 ast-grid">
        <div>
          <SectionHead align="left" eyebrow="Our story" title="Born from a love of slow, good evenings" />
          <Reveal delay={120}>
            <p className="ast-p">The Smoke Hauz started with a simple idea: sheesha should feel special. Not rushed, not generic — just well made, in a room where you actually want to stay.</p>
            <p className="ast-p">We selected every hookah by hand, upholstered our seating in traditional woven fabrics and built a flavour list that balances the classics with new blends. Tucked inside the café, our lounge is a warm escape from the street outside.</p>
            <p className="ast-sign">— The Smoke Hauz team</p>
          </Reveal>
        </div>
        <Reveal delay={200}><div className="card zoom ast-img"><Img src={LOCAL.sign} alt="The Smoke Hauz entrance sign" /></div></Reveal>
      </div>
    </section>
  );
}
