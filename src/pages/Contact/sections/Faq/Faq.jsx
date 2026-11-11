import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import SectionHead from '@/components/common/SectionHead/SectionHead';
import './Faq.css';

const Q = [
  ['Do I need to book a table?', 'Walk-ins are welcome, but we recommend booking on weekends and for groups of 5 or more.'],
  ['Is there an age limit?', 'Yes. Guests must be 18+ and may be asked for ID.'],
  ['Can I request a custom flavour mix?', 'Absolutely. Tell your host what you like and we will blend something for you.'],
  ['Do you host private events?', 'Yes — birthdays, team nights and celebrations. Send an enquiry with your date and group size.'],
  ['Is food available?', 'Our café serves fresh bites, desserts, hot drinks and mocktails right to your table.'],
];

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section">
      <div className="container cq-wrap">
        <SectionHead eyebrow="FAQ" title="Quick answers" />
        {Q.map(([q, a], i) => (
          <div key={q} className={`card cq-item ${open === i ? 'open' : ''}`}>
            <button className="cq-q" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
              <span>{q}</span><FaPlus />
            </button>
            <div className="cq-a"><p>{a}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}
