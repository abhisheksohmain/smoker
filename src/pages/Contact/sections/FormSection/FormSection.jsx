import SectionHead from '@/components/common/SectionHead/SectionHead';
import Reveal from '@/components/common/Reveal';
import EnquiryForm from '@/components/common/EnquiryForm/EnquiryForm';
import Img from '@/components/common/Img';
import { LOCAL } from '@/data/images';
import './FormSection.css';

export default function FormSection() {
  return (
    <section className="section section-alt">
      <div className="container cf-grid">
        <Reveal><EnquiryForm title="Send an Enquiry" /></Reveal>
        <div>
          <SectionHead align="left" eyebrow="Reservations & events" title="Tell us about your night" text="Fill in the form and tap send. Your message opens in WhatsApp so we can reply to you directly." />
          <Reveal delay={150}><div className="card zoom cf-img"><Img src={LOCAL.torch} alt="Coals being lit" /></div></Reveal>
        </div>
      </div>
    </section>
  );
}
