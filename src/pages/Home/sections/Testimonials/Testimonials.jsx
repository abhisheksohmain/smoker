import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import SectionHead from '@/components/common/SectionHead/SectionHead';
import Reveal from '@/components/common/Reveal';
import Img from '@/components/common/Img';
import { IMG } from '@/data/images';
import './Testimonials.css';

const T = [
  { n: 'Daniel R.', r: 'Regular guest', img: IMG.p1, t: 'Best sheesha in the area. The coals were perfect, the smoke was smooth and the staff remembered our order on the second visit.' },
  { n: 'Sara K.', r: 'Birthday booking', img: IMG.p2, t: 'We booked a table for 12 and everything was ready when we arrived. Great seating, great flavours, and no rush at all.' },
  { n: 'Michael T.', r: 'Date night', img: IMG.p3, t: 'Cosy, clean and properly premium. The blueberry mint is now my go-to. Already planning the next night out.' },
];

export default function Testimonials() {
  return (
    <section className="section section-alt ts">
      <div className="container">
        <SectionHead eyebrow="Guest stories" title="What our guests say" />
        <div className="grid g3">
          {T.map((x, i) => (
            <Reveal key={x.n} delay={i * 100}>
              <figure className="card ts-card">
                <FaQuoteLeft className="ts-quote" />
                <div className="ts-stars">{[...Array(5)].map((_, k) => <FaStar key={k} />)}</div>
                <blockquote>{x.t}</blockquote>
                <figcaption><Img src={x.img} alt={x.n} /><div><strong>{x.n}</strong><span>{x.r}</span></div></figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
