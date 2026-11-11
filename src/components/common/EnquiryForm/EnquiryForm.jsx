import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Button from '../Button';
import { waLink } from '@/data/site';
import './EnquiryForm.css';

const empty = { name: '', phone: '', date: '', guests: '2', occasion: 'Casual night out', message: '' };

// Sends the enquiry to WhatsApp (opens wa.me with a pre-filled message)
export default function EnquiryForm({ title = 'Book Your Table' }) {
  const [f, setF] = useState(empty);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const msg =
      `*New Enquiry – The Smoke Hauz*\n\n` +
      `*Name:* ${f.name}\n*Phone:* ${f.phone}\n*Date:* ${f.date || 'Not decided'}\n` +
      `*Guests:* ${f.guests}\n*Occasion:* ${f.occasion}\n*Message:* ${f.message || '-'}`;
    window.open(waLink(msg), '_blank', 'noopener');
    setF(empty);
  };

  return (
    <form className="card enq" onSubmit={submit}>
      <h3 className="enq-title">{title}</h3>
      <div className="enq-row">
        <label>Full name<input required value={f.name} onChange={set('name')} placeholder="Your name" /></label>
        <label>Phone<input required type="tel" value={f.phone} onChange={set('phone')} placeholder="+61 ..." /></label>
      </div>
      <div className="enq-row">
        <label>Date<input type="date" value={f.date} onChange={set('date')} /></label>
        <label>Guests
          <select value={f.guests} onChange={set('guests')}>
            {[1,2,3,4,5,6,8,10,15,20].map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
        </label>
      </div>
      <label>Occasion
        <select value={f.occasion} onChange={set('occasion')}>
          {['Casual night out','Birthday','Date night','Corporate / group','Private party'].map((o) => <option key={o}>{o}</option>)}
        </select>
      </label>
      <label>Message<textarea rows="4" value={f.message} onChange={set('message')} placeholder="Flavour requests, seating, anything else..." /></label>
      <Button variant="wa" icon={<FaWhatsapp size={20} />} type="submit">Send on WhatsApp</Button>
    </form>
  );
}
