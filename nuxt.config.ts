// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      wsUrl: process.env.NUXT_PUBLIC_WS_URL || '',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://mm-smart.eu',
    },
    mailUser: process.env.MAIL_USER,
    mailPass: process.env.MAIL_PASS,
    mailTo: process.env.MAIL_TO,
  },

  devtools: { enabled: false },

  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css',
    '@/assets/styles/main.scss',
  ],

  build: {
    transpile: ['vuetify'],
  },

  vite: {
    plugins: [vuetify({ autoImport: true })],
    vue: { template: { transformAssetUrls } },
  },

  nitro: {
    compatibilityDate: '2025-08-12',
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@vite-pwa/nuxt',
    '@nuxtjs/sitemap',
  ],

  pwa: {
    registerType: 'autoUpdate',
    // SSR-friendly: žiadny index.html fallback
    workbox: {
      navigateFallback: null,
      globPatterns: ['**/*.{js,css,ico,png,svg,webp}'],
      runtimeCaching: [
        // HTML navigácie (SSR)
        {
          urlPattern: ({ request }) => request.mode === 'navigate',
          handler: 'NetworkFirst',
          options: {
            cacheName: 'html-cache',
            networkTimeoutSeconds: 5,
          },
        },
        // Bundly a workeri
        {
          urlPattern: ({ request }) =>
            ['style', 'script', 'worker'].includes(request.destination),
          handler: 'StaleWhileRevalidate',
          options: { cacheName: 'asset-cache' },
        },
        // Obrázky a fonty
        {
          urlPattern: ({ request }) =>
            ['image', 'font'].includes(request.destination),
          handler: 'CacheFirst',
          options: {
            cacheName: 'static-cache',
            expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 30 },
          },
        },
      ],
    },
    manifest: {
      name: 'MM Smart Portfolio',
      short_name: 'MM Portfolio',
      description:
        'Portfólio vývojára s reálnym backendom, API a moderným frontendom.',
      theme_color: '#424242', // zjednotené s meta theme-color
      background_color: '#f4f4f4',
      display: 'standalone',
      start_url: '/',
      lang: 'sk',
      icons: [
        { src: '/pwa-icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/pwa-icon-512.png', sizes: '512x512', type: 'image/png' },
      ],
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'sk' },
      title: 'Matus Matko – Fullstack Developer Portfolio',
      link: [{ rel: 'canonical', href: 'https://mm-smart.eu/' }],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#424242' },

        // ✅ primárny description pre SEO
        { property: 'article:author', content: 'Matus Matko' },
        { property: 'article:published_time', content: '2025-08-16T09:00:00Z' },
        {
          name: 'description',
          content:
            'Portfólio vývojára: Nuxt 3 + .NET WebSocket demo, reálne nasadenie (PM2, Nginx), PWA, SEO a prístupnosť.',
        },

        // ✅ Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://mm-smart.eu/' },
        {
          property: 'og:title',
          content: 'Matus Matko – Fullstack Developer Portfolio',
        },
        {
          property: 'og:description',
          content:
            'Reálne projekty, Nuxt + .NET, vlastný server, live backend – všetko v jednom.',
        },
        {
          property: 'og:image',
          content: 'https://mm-smart.eu/social-preview.jpg',
        },

        // ✅ Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:title',
          content: 'Matus Matko – Fullstack Developer Portfolio',
        },
        {
          name: 'twitter:description',
          content:
            'Reálne projekty, Nuxt + .NET, vlastný server, live backend – všetko v jednom.',
        },
        {
          name: 'twitter:image',
          content: 'https://mm-smart.eu/social-preview.jpg',
        },
      ],
    },
  },

  site: {
    url: 'https://mm-smart.eu',
    name: 'MM Smart', // voliteľné, pre XSL UI
  },
});
