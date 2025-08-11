// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  runtimeConfig: {
    public: { wsUrl: process.env.NUXT_PUBLIC_WS_URL || '' },
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
    vue: {
      template: {
        transformAssetUrls,
      },
    },
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
  ],

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'MM Smart Portfolio',
      short_name: 'MM Portfolio',
      description:
        'Portfólio vývojára s reálnym backendom, API a moderným frontendom.',
      theme_color: '#ffffff',
      background_color: '#f4f4f4',
      display: 'standalone',
      start_url: '/',
      lang: 'sk',
      icons: [
        {
          src: '/pwa-icon-192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/pwa-icon-512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      runtimeCaching: [
        {
          urlPattern: ({ url }) => url.origin === self.location.origin,
          handler: 'CacheFirst',
          options: {
            cacheName: 'static-assets',
          },
        },
      ],
    },
  },

  app: {
    head: {
      title: 'Matus Matko – Fullstack Developer Portfolio',
      meta: [
        {
          name: 'theme-color',
          content: '#424242',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          charset: 'utf-8',
        },
        // ✅ Open Graph tags
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
        {
          property: 'og:image',
          content: 'https://mm-smart.eu/social-preview.jpg',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },

        // ✅ Optional: Twitter card
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
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
});
