import cloudflare from '@astrojs/cloudflare';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import solidJs from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), react()],
  output: 'hybrid',
  adapter: cloudflare(),
  vite: {
    define: {
      'process.env.SWELL_STORE_ID': process.env.SWELL_STORE_ID,
      'process.env.SWELL_PUBLIC_KEY': process.env.SWELL_PUBLIC_KEY,
    },
  },
});
