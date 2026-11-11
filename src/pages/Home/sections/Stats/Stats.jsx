import { FaUsers, FaFire, FaStar, FaGlassMartiniAlt } from 'react-icons/fa';
import useCountUp from '@/hooks/useCountUp';
import './Stats.css';

const DATA = [
  { icon: <FaUsers />, end: 5000, suffix: '+', label: 'Happy guests' },
  { icon: <FaFire />, end: 40, suffix: '+', label: 'Signature flavours' },
  { icon: <FaStar />, end: 4.9, suffix: '/5', label: 'Guest rating' },
  { icon: <FaGlassMartiniAlt />, end: 25, suffix: '+', label: 'Mocktails & drinks' },
];

function Stat({ icon, end, suffix, label }) {
  const [ref, v] = useCountUp(end);
  return (
    <div ref={ref} className="card st-card">
      <span className="st-icon">{icon}</span>
      <strong className="st-num grad-text">{v}{suffix}</strong>
      <span className="st-label">{label}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="section st">
      <div className="container grid g4">{DATA.map((d) => <Stat key={d.label} {...d} />)}</div>
    </section>
  );
}
