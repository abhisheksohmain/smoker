
import { FaInstagram } from 'react-icons/fa';
import SectionHead from '@/components/common/SectionHead/SectionHead';
import Img from '@/components/common/Img';
import Button from '@/components/common/Button';
import { SITE } from '@/data/site';
import './Instagram.css';

const BASE = import.meta.env.BASE_URL;

const PICS = [
  `${BASE}images/torch.jpg`,
  `${BASE}images/lounge.jpg`,
  `${BASE}images/shisha-red.jpg`,
  `${BASE}images/tower.jpg`,
  `${BASE}images/coals.jpg`,
  `${BASE}images/sign.jpg`,
];

export default function Instagram() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          eyebrow="Follow along"
          title="Share your night with us"
          text="Tag us for a chance to be featured on our page."
        />

        <div className="gi-grid">
          {PICS.map((src, i) => (
            <a
              key={i}
              href={SITE.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="card zoom gi-item"
              aria-label="Open Instagram"
            >
              <Img src={src} alt="The Smoke Hauz lounge" />
              <span>
                <FaInstagram size={30} />
              </span>
            </a>
          ))}
        </div>

        <div className="gi-cta">
          <Button
            href={SITE.socials.instagram}
            icon={<FaInstagram size={18} />}
          >
            Follow on Instagram
          </Button>
        </div>
      </div>
    </section>
  );
}
