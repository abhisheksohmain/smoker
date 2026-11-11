const u = (id, w = 1400) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

// Your own photos (public/images)
export const LOCAL = {
  logo: '/images/logo.png',
  red: '/images/shisha-red.jpg',
  coals: '/images/coals.jpg',
  tower: '/images/tower.jpg',
  torch: '/images/torch.jpg',
  sign: '/images/sign.jpg',
  lounge: '/images/lounge.jpg',
};
// Unsplash dummy images (replace anytime). Broken links auto-fallback to local photos.
export const IMG = {
  lounge1: u('1517248135467-4c7edcad34c4'),
  lounge2: u('1514933651103-005eec06c04b'),
  cafe: u('1501339847302-ac426a4a7cbb'),
  coffee: u('1495474472287-4d71bcdd2085', 900),
  drink: u('1544145945-f90425340c7e', 900),
  cocktail: u('1551024709-8f23befc6f87', 900),
  bar: u('1470337458703-46ad1756a187'),
  dessert: u('1578985545062-69928b1d9587', 900),
  food: u('1414235077428-338989a2e8c0', 900),
  burger: u('1568901346375-23c9450c58cd', 900),
  strawberry: u('1464965911861-746a04b4bca6', 900),
  blueberry: u('1498557850523-fd3d118b962e', 900),
  grapes: u('1537640538966-79f369143f8f', 900),
  watermelon: u('1563114773-84221bd62daa', 900),
  lemon: u('1590502593747-42a996133562', 900),
  p1: u('1500648767791-00dcc994a43e', 600),
  p2: u('1494790108377-be9c29b29330', 600),
  p3: u('1472099645785-5658abf4ff4e', 600),
  p4: u('1438761681033-6461ffad8d80', 600),
};
// Hero video: put your own file at public/videos/hero.mp4 (a poster image shows until it loads)
export const VIDEO = { hero: '/videos/hero.mp4', poster: LOCAL.red };
