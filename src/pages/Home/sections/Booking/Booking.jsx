import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import SectionHead from '@/components/common/SectionHead/SectionHead';
import Reveal from '@/components/common/Reveal';
import EnquiryForm from '@/components/common/EnquiryForm/EnquiryForm';
import { SITE } from '@/data/site';
import { LOCAL } from '@/data/images';
import './Booking.css';

export default function Booking() {
  return (
    <section className="section bk" style={{ '--bgimg': `url(${LOCAL.coals})` }}>
      <div className="bk-bg" />
      <div className="container bk-grid">
        <div>
          <SectionHead align="left" eyebrow="Reservations" title="Save your seat for tonight" text="Send us your details and we will confirm your table on WhatsApp — usually within minutes." />
          <Reveal className="bk-info">
            <p><FaClock /> {SITE.hours[1][0]}: {SITE.hours[1][1]}</p>
            <p><FaMapMarkerAlt /> {SITE.address}</p>
            <p><FaPhoneAlt /> {SITE.phone}</p>
          </Reveal>
        </div>
        <Reveal delay={150}><EnquiryForm /></Reveal>
      </div>
    </section>
  );
}
