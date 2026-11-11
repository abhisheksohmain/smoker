// 👉 Change these details to the real business details
export const SITE = {
  name: 'The Smoke Hauz',
  tag: 'Sheesha Lounge',
  whatsapp: '61415694109', // country code + number, no "+" or spaces
  phone: '+61 415 694 109',
  email: 'hello@thesmokehauz.com',
  address: '83 Haldon Street, Lakemba NSW 2195',
  mapQuery: '83 Haldon Street, Lakemba NSW 2195',
  hours: [
    ['Monday – Thursday', '4:00 PM – 12:00 AM'],
    ['Friday – Saturday', '2:00 PM – 2:00 AM'],
    ['Sunday', '2:00 PM – 12:00 AM'],
  ],
  socials: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
    tiktok: 'https://tiktok.com/',
  },
};
export const telHref = SITE.phone.replace(/\s+/g, '');
export const waLink = (text = 'Hi The Smoke Hauz, I would like to know more.') =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/menu', label: 'Menu' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];
