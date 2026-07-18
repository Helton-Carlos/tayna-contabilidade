import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss() as any],
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  css: ['~/assets/css/index.css'],
});
