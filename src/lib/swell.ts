import swell from 'swell-js';

swell.init(
  import.meta.env.SWELL_STORE_ID || `${'VITE_DEFINE_SWELL_STORE_ID'}`,
  import.meta.env.SWELL_PUBLIC_KEY || `${'VITE_DEFINE_SWELL_PUBLIC_KEY'}`,
);

export const swellClient = swell;
