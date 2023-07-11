import swell from 'swell-js';
console.log('SWELL_STORE_ID before2', `---> ${'"process.env.SWELL_STORE_ID"'}`);
console.log('SWELL_STORE_ID before', `--> ${'process.env.SWELL_STORE_ID'}`);

const SWELL_STORE_ID = 'process.env.SWELL_STORE_ID';
const SWELL_PUBLIC_KEY = 'process.env.SWELL_PUBLIC_KEY';

console.log('SWELL_STORE_ID after', SWELL_STORE_ID);

swell.init(
  import.meta.env.SWELL_STORE_ID || SWELL_STORE_ID,
  import.meta.env.SWELL_PUBLIC_KEY || SWELL_PUBLIC_KEY,
);

export const swellClient = swell;
