import { FaGem, FaCouch, FaLeaf, FaMusic, FaWifi, FaUsers } from 'react-icons/fa';
import SectionHead from '@/components/common/SectionHead/SectionHead';
import Reveal from '@/components/common/Reveal';
import { LOCAL } from '@/data/images';
import './Features.css';

const F = [
  { icon: <FaGem />, t: 'Premium hookahs', d: 'Steel and crystal bases, silicone hoses, replaced and sanitised every session.' },
  { icon: <FaCouch />, t: 'Majlis seating', d: 'Deep cushions, carved timber frames and enough room to stretch out.' },
  { icon: <FaLeaf />, t: 'Fresh flavours', d: 'Premium tobacco blended in-house, with herbal options available.' },
  { icon: <FaMusic />, t: 'Good vibes', d: 'A playlist that suits the mood, from chilled lounge to Arabic classics.' },
  { icon: <FaWifi />, t: 'Free WiFi', d: 'Stay connected while you relax, work or share the night online.' },
  { icon: <FaUsers />, t: 'Groups & events', d: 'Birthdays, team nights and private bookings, planned with you.' },
];

export default function Features() {
  return (
    <section className="section ft" style={{ '--bgimg': `url(${LOCAL.lounge})` }}>
      <div className="ft-bg" />
      <div className="container">
        <SectionHead eyebrow="The experience" title="Everything you need for a great night" />
        <div className="grid g3">
          {F.map((x, i) => (
            <Reveal key={x.t} delay={i * 70}>
              <div className="card ft-card">
                <span className="ft-icon">{x.icon}</span>
                <h3>{x.t}</h3>
                <p>{x.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
