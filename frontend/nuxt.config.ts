import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({

  devtools: { enabled: true },
  css: ['~/assets/css/index.css'], compatibilityDate: '2025-07-15',
  vite: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    plugins: [tailwindcss() as any],
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
})
