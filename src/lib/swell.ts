import swell from 'swell-js';

const SWELL_STORE_ID = 'VITE_DEFINE_SWELL_STORE_ID';
const SWELL_PUBLIC_KEY = 'VITE_DEFINE_SWELL_PUBLIC_KEY';
console.log('SWELL_STORE_ID--~->', SWELL_STORE_ID);
console.log('SWELL_PUBLIC_KEY--~->', SWELL_PUBLIC_KEY.substring(0, 5));

swell.init(`${SWELL_STORE_ID}`, `${SWELL_PUBLIC_KEY}`);

// swell.init(
//   import.meta.env.SWELL_STORE_ID || `${SWELL_STORE_ID}`,
//   import.meta.env.SWELL_PUBLIC_KEY || `${SWELL_PUBLIC_KEY}`,
// );

export const swellClient = swell;
