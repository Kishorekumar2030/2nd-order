export interface WeddingEvent {
  id: string;
  name: string;
  when: string;
  place: string;
  dress: string;
  swatch: string;
  image: string;
  headerGradient: string;
  accentHex: string;
  highlightNote: string;
}

export interface CreatorContact {
  name: string;
  tagline: string;
  whatsappDisplay: string;
  whatsappUrl: string;
}

export interface WeddingConfig {
  slug: string;
  pageTitle: string;
  coverTitle: string;
  coverSubtitle: string;
  coverEmblem: string;
  coverEmblemType: 'monogram' | 'devanagari';
  coverFooter: string;
  coverYearLine: string;
  invocation: string;
  invocationIsDevanagari: boolean;
  heroLead: string;
  groom: string;
  groomParents: string;
  bride: string;
  brideParents: string;
  dateISO: string;
  dateDisplayDay: string;
  dateDisplayMonth: string;
  dateDisplayYear: string;
  dateLine: string;
  summaryLine: string;
  venue: string;
  address: string;
  plusCode: string;
  mapAreaLabel: string;
  mapCityLabel: string;
  mapQuery: string;
  storyLead: string;
  storyHighlight: string;
  storyTail: string;
  closing: string;
  youtubeVideoId: string;
  youtubeStartSeconds: number;
  songTitle: string;
  audioSrc: string;
  creatorContact?: CreatorContact;
  events: WeddingEvent[];
}

const HALDI_IMG = '/src/assets/images/haldi_marigold_blush_1795364671528.jpg';
const SANGEET_IMG = '/src/assets/images/sangeet_floral_evening_1795364669930.jpg';
const MEHNDI_IMG = '/src/assets/images/mehndi_henna_ivory_1795364669491.jpg';
const WEDDING_IMG = '/src/assets/images/wedding_mandap_blush_1795364669972.jpg';

const kabirZara: WeddingConfig = {
  slug: 'kabir-zara',
  pageTitle: 'Kabir & Zara – Royal Wedding Invitation',
  coverTitle: 'WEDDING INVITATION',
  coverSubtitle: 'A Royal Celebration',
  coverEmblem: 'K & Z',
  coverEmblemType: 'monogram',
  coverFooter: 'December 26, 2026 · The Grand Courtyard',
  coverYearLine: '26 · 12 · 2026',
  invocation: 'With Love & Warmest Wishes',
  invocationIsDevanagari: false,
  heroLead: 'Together with their families',
  groom: 'Kabir',
  groomParents: 'Mr. & Mrs. Singhania',
  bride: 'Zara',
  brideParents: 'Mr. & Mrs. Merchant',
  dateISO: '2026-12-26T20:00:00+05:00',
  dateDisplayDay: '26',
  dateDisplayMonth: 'December',
  dateDisplayYear: '2026',
  dateLine: 'Wedding & Reception · 8 pm to 1 am · The Grand Courtyard',
  summaryLine: 'See you on Saturday, 26 December 2026',
  venue: 'The Grand Courtyard',
  address: 'Garden Avenue, Clifton Promenade',
  plusCode: '7R9P+M42 Clifton',
  mapAreaLabel: 'GARDEN AVENUE',
  mapCityLabel: 'CLIFTON',
  mapQuery: 'Clifton Promenade',
  storyLead: 'Two families, one',
  storyHighlight: 'beautiful beginning',
  storyTail:
    'We would be honoured to have your presence, laughter, and blessings as we celebrate our wedding together.',
  closing: 'With love, the Singhania & Merchant families',
  youtubeVideoId: 'rrgLlH8wxV8',
  youtubeStartSeconds: 0,
  songTitle: 'Dilruba Dilnasheen – Reto Riba',
  audioSrc: '/audio/indian-wedding-melody.mp3',
  creatorContact: {
    name: 'Kishore Kumar',
    tagline: 'Want a custom digital wedding invitation website like this?',
    whatsappDisplay: '0314-1423622',
    whatsappUrl:
      'https://wa.me/923141423622?text=Hi%20Kishore%20Kumar%2C%20I%20saw%20your%20digital%20wedding%20invitation%20demo%20and%20would%20like%20to%20order%20a%20custom%20invitation%20website.',
  },
  events: [
    {
      id: 'haldi',
      name: 'Haldi & Mayoon',
      when: 'THU · 24 DEC 2026 · 5 PM – 8 PM',
      place: 'The Lawn Terrace, Grand Courtyard',
      dress: 'Yellow & ivory',
      swatch: '#F4C542',
      image: HALDI_IMG,
      headerGradient: 'linear-gradient(155deg, #FFF0D1 0%, #FADEE5 55%, #F2C4D0 100%)',
      accentHex: '#C8962E',
      highlightNote: 'A sunlit afternoon of golden turmeric, marigold blossoms, and joyful blessings.',
    },
    {
      id: 'sangeet',
      name: 'Sangeet Night',
      when: 'FRI · 25 DEC 2026 · 7 PM – 11 PM',
      place: 'Royal Ballroom, Grand Courtyard',
      dress: 'Colourful & festive',
      swatch: '#C86D8E',
      image: SANGEET_IMG,
      headerGradient: 'linear-gradient(155deg, #F6D8E2 0%, #ECC0CE 55%, #DF9EB2 100%)',
      accentHex: '#9E3356',
      highlightNote: 'An evening of dholak rhythms, family dances, and shimmering candlelight.',
    },
    {
      id: 'mehndi',
      name: 'Mehndi',
      when: 'SAT · 26 DEC 2026 · 2 PM – 5 PM',
      place: 'Jasmine Pavilion, Grand Courtyard',
      dress: 'Green & pastels',
      swatch: '#6F9A4D',
      image: MEHNDI_IMG,
      headerGradient: 'linear-gradient(155deg, #EFF5EA 0%, #F5DDE4 55%, #ECC2CF 100%)',
      accentHex: '#4F7A33',
      highlightNote: 'Intricate henna artistry, fresh mogra garlands, and music beneath the garden pavilion.',
    },
    {
      id: 'wedding',
      name: 'Wedding & Reception',
      when: 'SAT · 26 DEC 2026 · 8 PM – 1 AM',
      place: 'The Grand Courtyard, Garden Avenue',
      dress: 'Traditional red & gold',
      swatch: '#B83249',
      image: WEDDING_IMG,
      headerGradient: 'linear-gradient(155deg, #FADCE4 0%, #F0BECA 55%, #E39BAE 100%)',
      accentHex: '#A6344C',
      highlightNote: 'Baraat welcome, sacred wedding vows under the floral mandap, followed by dinner & reception.',
    },
  ],
};

const santoshRameela: WeddingConfig = {
  slug: 'santosh-rameela',
  pageTitle: 'Santosh Weds Rameela – Wedding Invitation',
  coverTitle: 'SHUBH VIVAAH',
  coverSubtitle: 'Royal Invitation',
  coverEmblem: 'ॐ',
  coverEmblemType: 'devanagari',
  coverFooter: 'December 11, 2026 · Umerkot',
  coverYearLine: '11 · 12 · 2026',
  invocation: '॥ श्री गणेशाय नमः ॥',
  invocationIsDevanagari: true,
  heroLead: 'With the blessings of the Almighty & their families',
  groom: 'Santosh',
  groomParents: 'Mr. Rejhu Mal',
  bride: 'Rameela',
  brideParents: 'Mr. Hiralal Tamsani',
  dateISO: '2026-12-11T22:00:00+05:00',
  dateDisplayDay: '11',
  dateDisplayMonth: 'December',
  dateDisplayYear: '2026',
  dateLine: 'Wedding · 10 pm to 4 am · Hiralal Tamsani House',
  summaryLine: 'See you on Friday, 11 December 2026',
  venue: 'Hiralal Tamsani House',
  address: 'Shewani Mohallah, Umerkot, Sindh',
  plusCode: '9P5J+H92 Umerkot',
  mapAreaLabel: 'SHEWANI MOHALLAH',
  mapCityLabel: 'UMERKOT',
  mapQuery: '9P5J+H92 Umerkot',
  storyLead: 'Two families, one',
  storyHighlight: 'beautiful beginning',
  storyTail:
    'We would be honoured to have your blessings and your presence as we start our journey together.',
  closing: 'With love, the Rejhu Mal & Tamsani families',
  youtubeVideoId: 'rrgLlH8wxV8',
  youtubeStartSeconds: 0,
  songTitle: 'Dilruba Dilnasheen – Reto Riba',
  audioSrc: '/audio/wedding-song.mp3',
  creatorContact: kabirZara.creatorContact,
  events: [
    {
      id: 'haldi',
      name: 'Haldi',
      when: 'TUE · 8 DEC 2026 · 6 PM – 9 PM',
      place: 'Hiralal Tamsani House, Shewani Mohallah',
      dress: 'Yellow & white',
      swatch: '#F4C542',
      image: HALDI_IMG,
      headerGradient: 'linear-gradient(155deg, #FFF0D1 0%, #FADEE5 55%, #F2C4D0 100%)',
      accentHex: '#C8962E',
      highlightNote: 'Sacred turmeric rituals, folk songs, and warm family blessings.',
    },
    {
      id: 'sangeet',
      name: 'Sangeet',
      when: 'WED · 9 DEC 2026 · 7 PM – 10 PM',
      place: 'Hiralal Tamsani House, Shewani Mohallah',
      dress: 'Colourful & festive',
      swatch: '#C86D8E',
      image: SANGEET_IMG,
      headerGradient: 'linear-gradient(155deg, #F6D8E2 0%, #ECC0CE 55%, #DF9EB2 100%)',
      accentHex: '#9E3356',
      highlightNote: 'Joyful melodies, traditional dances, and celebration with loved ones.',
    },
    {
      id: 'mehndi',
      name: 'Mehndi',
      when: 'THU · 10 DEC 2026 · 8 PM – 6 AM',
      place: 'Hiralal Tamsani House, Shewani Mohallah',
      dress: 'Green & pastels',
      swatch: '#6F9A4D',
      image: MEHNDI_IMG,
      headerGradient: 'linear-gradient(155deg, #EFF5EA 0%, #F5DDE4 55%, #ECC2CF 100%)',
      accentHex: '#4F7A33',
      highlightNote: 'An all-night Mehndi celebration filled with henna, music, and floral grace.',
    },
    {
      id: 'wedding',
      name: 'Wedding',
      when: 'FRI · 11 DEC 2026 · 10 PM – 4 AM',
      place: 'Hiralal Tamsani House, Shewani Mohallah',
      dress: 'Traditional red & gold',
      swatch: '#B83249',
      image: WEDDING_IMG,
      headerGradient: 'linear-gradient(155deg, #FADCE4 0%, #F0BECA 55%, #E39BAE 100%)',
      accentHex: '#A6344C',
      highlightNote: 'Baraat procession, sacred pheras, and wedding feast with both families.',
    },
  ],
};

const rohanAmara: WeddingConfig = {
  slug: 'rohan-amara',
  pageTitle: 'Rohan & Amara – Wedding Invitation',
  coverTitle: 'THE WEDDING INVITATION',
  coverSubtitle: 'With Love & Blessings',
  coverEmblem: 'R & A',
  coverEmblemType: 'monogram',
  coverFooter: 'December 19, 2026 · Heritage Courtyard',
  coverYearLine: '19 · 12 · 2026',
  invocation: 'Wedding Invitation',
  invocationIsDevanagari: false,
  heroLead: 'Together with their families',
  groom: 'Rohan',
  groomParents: 'Mr. Vikram & Mrs. Saira Oberoi',
  bride: 'Amara',
  brideParents: 'Mr. Farhan & Mrs. Elena Merchant',
  dateISO: '2026-12-19T20:00:00+05:00',
  dateDisplayDay: '19',
  dateDisplayMonth: 'December',
  dateDisplayYear: '2026',
  dateLine: 'Wedding & Reception · 8 pm to 1 am · The Heritage Courtyard',
  summaryLine: 'See you on Saturday, 19 December 2026',
  venue: 'The Heritage Courtyard',
  address: 'Rose Garden Estate, Lakeview Boulevard',
  plusCode: '8Q6M+X4F Rose Garden',
  mapAreaLabel: 'ROSE GARDEN ESTATE',
  mapCityLabel: 'LAKEVIEW BLVD',
  mapQuery: 'The Heritage Courtyard Rose Garden Estate',
  storyLead: 'Two families, one',
  storyHighlight: 'beautiful beginning',
  storyTail:
    'We would be honoured to have your warm wishes and presence as we begin our journey together.',
  closing: 'With love, the Oberoi & Merchant families',
  youtubeVideoId: 'rrgLlH8wxV8',
  youtubeStartSeconds: 0,
  songTitle: 'Dilruba Dilnasheen – Reto Riba',
  audioSrc: '/audio/indian-wedding-melody.mp3',
  creatorContact: kabirZara.creatorContact,
  events: [
    {
      id: 'haldi',
      name: 'Haldi & Mayoon',
      when: 'THU · 17 DEC 2026 · 5 PM – 8 PM',
      place: 'The Courtyard Lawns, Rose Garden Estate',
      dress: 'Yellow & ivory',
      swatch: '#F4C542',
      image: HALDI_IMG,
      headerGradient: 'linear-gradient(155deg, #FFF5DB 0%, #FCEAD2 55%, #F8DCE1 100%)',
      accentHex: '#C8962E',
      highlightNote: 'Morning-glow courtyard gathering with marigold showers and traditional sweets.',
    },
    {
      id: 'sangeet',
      name: 'Sangeet Night',
      when: 'FRI · 18 DEC 2026 · 7 PM – 11 PM',
      place: 'Grand Marquee, Rose Garden Estate',
      dress: 'Colourful & festive',
      swatch: '#C86D8E',
      image: SANGEET_IMG,
      headerGradient: 'linear-gradient(155deg, #F9E6EC 0%, #F3D4DF 55%, #EBC3D2 100%)',
      accentHex: '#9E3356',
      highlightNote: 'Festive music, choreographed performances, and dinner under starlit drapes.',
    },
    {
      id: 'mehndi',
      name: 'Mehndi',
      when: 'SAT · 19 DEC 2026 · 3 PM – 6 PM',
      place: 'The Olive Terrace, Rose Garden Estate',
      dress: 'Green & pastels',
      swatch: '#6F9A4D',
      image: MEHNDI_IMG,
      headerGradient: 'linear-gradient(155deg, #F3F8EE 0%, #E7F0E0 55%, #F7E5EA 100%)',
      accentHex: '#4F7A33',
      highlightNote: 'Relaxed afternoon henna, floral bangles, and acoustic tunes on the terrace.',
    },
    {
      id: 'wedding',
      name: 'Wedding & Reception',
      when: 'SAT · 19 DEC 2026 · 8 PM – 1 AM',
      place: 'The Heritage Courtyard, Rose Garden Estate',
      dress: 'Traditional red & gold',
      swatch: '#B83249',
      image: WEDDING_IMG,
      headerGradient: 'linear-gradient(155deg, #FCEBEE 0%, #F6D5DC 55%, #EFBFCA 100%)',
      accentHex: '#A6344C',
      highlightNote: 'Grand Baraat welcome, wedding ceremony, and evening reception banquet.',
    },
  ],
};

function selectWeddingConfig(): WeddingConfig {
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname.toLowerCase();
    const cardParam = (new URLSearchParams(window.location.search).get('card') || '').toLowerCase();

    if (
      pathname.includes('santosh-rameela') ||
      pathname === '/santosh' ||
      cardParam === 'santosh-rameela' ||
      cardParam === 'santosh'
    ) {
      return santoshRameela;
    }
    if (
      pathname.includes('rohan-amara') ||
      pathname === '/rohan' ||
      cardParam === 'rohan-amara' ||
      cardParam === 'rohan'
    ) {
      return rohanAmara;
    }
    if (
      pathname.includes('kabir-zara') ||
      pathname === '/demo' ||
      cardParam === 'kabir-zara' ||
      cardParam === 'demo'
    ) {
      return kabirZara;
    }
  }
  return kabirZara;
}

export const weddingConfig: WeddingConfig = selectWeddingConfig();

export function getGoogleCalendarUrl(cfg: WeddingConfig = weddingConfig): string {
  const start = new Date(cfg.dateISO);
  const end = new Date(start.getTime() + 6 * 60 * 60 * 1000);
  const fmt = (d: Date) => d.toISOString().replace(/[-:]|\.\d{3}/g, '');
  const title = `${cfg.groom} weds ${cfg.bride}`;
  const location = `${cfg.plusCode} ${cfg.venue}, ${cfg.address}`;
  const details = `${cfg.dateLine}\n${cfg.venue}, ${cfg.address}`;

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title
  )}&dates=${fmt(start)}/${fmt(end)}&location=${encodeURIComponent(
    location
  )}&details=${encodeURIComponent(details)}`;
}

export function getGoogleMapsUrl(cfg: WeddingConfig = weddingConfig): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cfg.mapQuery)}`;
}

export function downloadIcsFile(cfg: WeddingConfig = weddingConfig): void {
  const start = new Date(cfg.dateISO);
  const end = new Date(start.getTime() + 6 * 60 * 60 * 1000);
  const fmt = (d: Date) => d.toISOString().replace(/[-:]|\.\d{3}/g, '');
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    `PRODID:-//${cfg.slug}//WeddingInvitation//EN`,
    'BEGIN:VEVENT',
    `UID:${cfg.slug}-2026@wedding`,
    `DTSTAMP:${fmt(new Date())}`,
    `DTSTART:${fmt(start)}`,
    `DTEND:${fmt(end)}`,
    `SUMMARY:${cfg.groom} weds ${cfg.bride}`,
    `DESCRIPTION:${cfg.dateLine}`,
    `LOCATION:${cfg.venue}, ${cfg.address} (${cfg.plusCode})`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], {type: 'text/calendar;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `${cfg.groom}-Weds-${cfg.bride}.ics`;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}
