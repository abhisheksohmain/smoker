import Reveal from '../Reveal';
import './SectionHead.css';

export default function SectionHead({ eyebrow, title, text, align = 'center' }) {
  return (
    <Reveal className={`shead shead-${align}`}>
      {eyebrow && <span className="shead-eyebrow">{eyebrow}</span>}
      <h2 className="shead-title">{title}</h2>
      <span className="shead-line" />
      {text && <p className="shead-text">{text}</p>}
    </Reveal>
  );
}
