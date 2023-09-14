import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
    site: "https://koire.github.io",
    output: "server",
    adapter: node({
        mode: 'standalone'
    })
});
