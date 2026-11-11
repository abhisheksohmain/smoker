
import { FaClock } from 'react-icons/fa';
import SectionHead from '@/components/common/SectionHead/SectionHead';
import Reveal from '@/components/common/Reveal';
import Img from '@/components/common/Img';
import { SITE } from '@/data/site';
import './Hours.css';

const BASE = import.meta.env.BASE_URL;
const loungeImage = `${BASE}images/lounge.jpg`;

export default function Hours() {
  return (
    <section className="section section-alt">
      <div className="container grid g2 ch-grid">

        <Reveal>
          <div className="card zoom ch-img">
            <Img src={loungeImage} alt="Inside the lounge" />
          </div>
        </Reveal>

        <div>
          <SectionHead
            align="left"
            eyebrow="Opening hours"
            title="Open late, every week"
          />

          <Reveal delay={120} className="card ch-card">
            {SITE.hours.map(([d, t]) => (
              <div key={d} className="ch-row">
                <span>
                  <FaClock /> {d}
                </span>
                <strong>{t}</strong>
              </div>
            ))}

            <p className="ch-note">
              Hours may change on public holidays — message us to confirm.
            </p>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
