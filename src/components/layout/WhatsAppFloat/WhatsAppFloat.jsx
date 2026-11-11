import { FaWhatsapp } from 'react-icons/fa';
import { waLink } from '@/data/site';
import './WhatsAppFloat.css';

export default function WhatsAppFloat() {
  return (
    <a className="wa-float" href={waLink()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
      <FaWhatsapp size={32} />
    </a>
  );
}
