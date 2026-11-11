import { FaCheckCircle } from 'react-icons/fa';
import Reveal from '@/components/common/Reveal';
import SectionHead from '@/components/common/SectionHead/SectionHead';
import Button from '@/components/common/Button';
import Img from '@/components/common/Img';
import { LOCAL } from '@/data/images';
import './Intro.css';

const POINTS = ['Premium hookahs cleaned and prepared fresh for every table', 'Natural coconut coals lit by hand — smooth, never harsh', 'Comfortable majlis-style seating for groups of any size'];

export default function Intro() {
  return (
    <section id="intro" className="section in">
      <div className="container in-grid">
        <Reveal className="in-media">
          <div className="card in-img1 zoom"><Img src={LOCAL.tower} alt="Premium red and steel hookah" /></div>
          <div className="card in-img2 zoom"><Img src={LOCAL.torch} alt="Lighting coals with a torch" /></div>
        </Reveal>
        <div>
          <SectionHead align="left" eyebrow="Welcome to The Smoke Hauz" title="A lounge crafted around the perfect session" text="We believe a great sheesha is about patience, quality and atmosphere. Every hookah is built with care, every flavour is blended by our team, and every night feels a little like a celebration." />
          <Reveal delay={150}>
            <ul className="in-list">{POINTS.map((p) => <li key={p}><FaCheckCircle /> {p}</li>)}</ul>
            <Button to="/about">Our story</Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
