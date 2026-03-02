import { qwikCity } from '@builder.io/qwik-city/vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { join } from 'path';

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      qwikCity(),
      qwikVite(),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '~': join(__dirname, 'src'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    build: {
      target: 'es2022',
      minify: true,
      ssr: mode === 'ssr',
    },
    preview: {
      headers: {
        'Cache-Control': 'no-store',
      },
    },
  };
});
