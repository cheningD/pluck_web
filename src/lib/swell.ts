import swell from 'swell-js';

// const SWELL_STORE_ID = '"process.env.SWELL_STORE_ID"';
// const SWELL_PUBLIC_KEY = '"process.env.SWELL_PUBLIC_KEY"';

swell.init(`${process.env.SWELL_STORE_ID}`, `${process.env.SWELL_PUBLIC_KEY}`);

// swell.init(
//   import.meta.env.SWELL_STORE_ID || `${SWELL_STORE_ID}`,
//   import.meta.env.SWELL_PUBLIC_KEY || `${SWELL_PUBLIC_KEY}`,
// );

export const swellClient = swell;
