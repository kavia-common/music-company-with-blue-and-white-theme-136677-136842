export const artists = [
  {
    id: 1,
    name: 'Aurora Sky',
    tagline: 'Ethereal vocals and atmospheric pop',
    genre: 'Pop',
    origin: 'Oslo, Norway',
    yearsActive: '2016–Present',
    bio: 'Aurora Sky blends cinematic soundscapes with intimate songwriting, creating immersive pop experiences.',
    social: {
      website: 'https://example.com/aurorasky',
      twitter: 'https://twitter.com/aurora',
      instagram: 'https://instagram.com/aurora'
    },
    popularity: 90,
    addedAt: '2024-06-01'
  },
  {
    id: 2,
    name: 'Neon Coast',
    tagline: 'Retro-futuristic synthwave duo',
    genre: 'Electronic',
    origin: 'Miami, USA',
    yearsActive: '2019–Present',
    bio: 'Neon Coast channels neon-lit nostalgia with pulsating synths and driving rhythms for late-night cruises.',
    social: {
      website: 'https://example.com/neoncoast'
    },
    popularity: 75,
    addedAt: '2024-07-10'
  },
  {
    id: 3,
    name: 'River & Stone',
    tagline: 'Soulful folk with modern textures',
    genre: 'Folk',
    origin: 'Dublin, Ireland',
    yearsActive: '2015–Present',
    bio: 'An indie folk duo weaving harmony-driven storytelling with modern acoustic arrangements.',
    social: {},
    popularity: 65,
    addedAt: '2024-05-15'
  }
];

export const albums = [
  {
    id: 101,
    artistId: 1,
    title: 'Crystal Echoes',
    releaseYear: 2024,
    genre: 'Pop',
    label: 'BlueWave Records',
    description: 'A shimmering collection of anthems and ballads that echo across dreamscapes.',
    tracks: [
      { title: 'Echo Chamber', duration: '3:44' },
      { title: 'Glassheart', duration: '4:02' },
      { title: 'Northern Lights', duration: '3:30' }
    ],
    links: {
      spotify: 'https://open.spotify.com',
      apple: 'https://music.apple.com',
      buy: 'https://bandcamp.com'
    },
    popularity: 88
  },
  {
    id: 102,
    artistId: 2,
    title: 'Midnight Drive',
    releaseYear: 2023,
    genre: 'Electronic',
    label: 'BlueWave Records',
    description: 'A synth-heavy cruise through neon nights and electric dreams.',
    tracks: [
      { title: 'Highway Neon', duration: '3:20' },
      { title: 'Rearview', duration: '4:10' },
      { title: 'Dawn Patrol', duration: '3:58' }
    ],
    links: {
      spotify: 'https://open.spotify.com',
      apple: 'https://music.apple.com'
    },
    popularity: 79
  },
  {
    id: 103,
    artistId: 3,
    title: 'Roots and Rivers',
    releaseYear: 2022,
    genre: 'Folk',
    label: 'BlueWave Records',
    description: 'Warm harmonies and acoustic textures reflecting on journeys and home.',
    tracks: [
      { title: 'Homeward', duration: '2:58' },
      { title: 'Stone & Sky', duration: '3:40' },
      { title: 'River Song', duration: '4:12' }
    ],
    links: { buy: 'https://bandcamp.com' },
    popularity: 64
  }
];

export const services = [
  { id: 1, title: 'Music Production', summary: 'Recording, mixing, and mastering services.' },
  { id: 2, title: 'Artist Management', summary: 'Career development and brand growth.' },
  { id: 3, title: 'Event Management', summary: 'Planning and delivering live experiences.' },
  { id: 4, title: 'Consulting', summary: 'Advisory services for music businesses.' }
];

/**
 * PUBLIC_INTERFACE
 * In the future, replace these static arrays with async API functions:
 * - getArtists(), getArtist(id)
 * - getAlbums(), getAlbum(id)
 * - getServices()
 * Each should return normalized data structures to keep UI components stable.
 */
