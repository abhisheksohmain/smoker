import SectionHead from '@/components/common/SectionHead/SectionHead';
import Reveal from '@/components/common/Reveal';
import { SITE } from '@/data/site';
import './Map.css';

export default function Map() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead eyebrow="Location" title="Find us inside the café" text={SITE.address} />
        <Reveal>
          <div className="card cm-wrap">
            <iframe title="The Smoke Hauz location" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
