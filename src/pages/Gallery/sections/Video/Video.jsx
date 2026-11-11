
import SectionHead from '@/components/common/SectionHead/SectionHead';
import Reveal from '@/components/common/Reveal';
import './Video.css';

const BASE = import.meta.env.BASE_URL;

// Video and poster paths
const VIDEO_URL = `${BASE}videos/hero.mp4`;
const POSTER_URL = `${BASE}images/shisha-red.jpg`;

export default function Video() {
  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHead
          eyebrow="Watch"
          title="Feel the atmosphere"
          text="A short look at the smoke, the coals and the lounge after dark."
        />

        <Reveal>
          <div className="card gv-wrap">
            <video
              controls
              playsInline
              preload="metadata"
              poster={POSTER_URL}
            >
              <source src={VIDEO_URL} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
