import SectionHead from '@/components/common/SectionHead/SectionHead';
import Reveal from '@/components/common/Reveal';
import { VIDEO } from '@/data/images';
import './Video.css';

export default function Video() {
  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHead eyebrow="Watch" title="Feel the atmosphere" text="A short look at the smoke, the coals and the lounge after dark." />
        <Reveal>
          <div className="card gv-wrap">
            <video controls playsInline preload="metadata" poster={VIDEO.poster}>
              <source src={VIDEO.hero} type="video/mp4" />
            </video>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
