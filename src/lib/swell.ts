import swell from 'swell-js';

console.log(`SWELL_STORE_ID--~-> VITE_DEFINE_SWELL_STORE_ID <  ---`);
console.log(`SWELL_PUBLIC_KEY--~-> VITE_DEFINE_SWELL_PUBLIC_KEY <  ---`);

swell.init(
  `${'VITE_DEFINE_SWELL_STORE_ID'}`,
  `${'VITE_DEFINE_SWELL_PUBLIC_KEY'}`,
);

// swell.init(
//   import.meta.env.SWELL_STORE_ID || `${SWELL_STORE_ID}`,
//   import.meta.env.SWELL_PUBLIC_KEY || `${SWELL_PUBLIC_KEY}`,
// );

export const swellClient = swell;
