// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  runtimeConfig: {
    public: {},
    mailUser: process.env.MAIL_USER,
    mailPass: process.env.MAIL_PASS,
    mailTo: process.env.MAIL_TO,
  },

  devtools: { enabled: false },

  css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.css'],

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

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    // … ďalšie moduly …
  ],
});
