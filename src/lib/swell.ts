import swell from 'swell-js';
const SWELL_STORE_ID = 'process.env.SWELL_STORE_ID';
const SWELL_PUBLIC_KEY = 'process.env.SWELL_PUBLIC_KEY';
console.log('SWELL_PUBLIC_KEY', SWELL_PUBLIC_KEY);
console.log('SWELL_STORE_ID', SWELL_STORE_ID);
console.log('SWELL_STORE_ID -original', import.meta.env.SWELL_STORE_ID);
console.log('SWELL_PUBLIC_KEY -original', import.meta.env.SWELL_PUBLIC_KEY);
const str = import.meta.env.SWELL_PUBLIC_KEY;
console.log(
  'SWELL_PUBLIC_KEY',
  str.substring(0, 2) +
    'X'.repeat(str.length - 4) +
    str.substring(str.length - 2),
);

swell.init(import.meta.env.SWELL_STORE_ID, import.meta.env.SWELL_PUBLIC_KEY);

export const swellClient = swell;
