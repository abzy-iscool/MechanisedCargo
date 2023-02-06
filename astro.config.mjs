import { defineConfig } from 'astro/config';

// https://astro.build/config
import compressor from "astro-compressor";

import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [compressor()],
});