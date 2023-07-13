import cloudflare from '@astrojs/cloudflare';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import solidJs from '@astrojs/solid-js';

// https://astro.-/config
export default defineConfig({
  integrations: [solidJs(), react()],
  output: 'hybrid',
  adapter: cloudflare(),
  // Cloudflare does not support vite environment variables at build time
  // so we define these VITE globals here - the string values will be replaced
  // See: https://github.com/withastro/astro/issues/5234#issuecomment-1301903470
  vite: {
    define: {
      // eslint-disable-next-line no-undef
      VITE_DEFINE_SWELL_STORE_ID: process.env.SWELL_STORE_ID,
      // eslint-disable-next-line no-undef
      VITE_DEFINE_SWELL_PUBLIC_KEY: process.env.SWELL_PUBLIC_KEY,
    },
  },
});
