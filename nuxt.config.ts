import { fileURLToPath, URL } from "node:url";
import { repositoryName } from './slicemachine.config.json';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // future: {
  //   compatibilityVersion: 4
  // },

  devtools: { enabled: true },

  app: {
    head: {
      title: 'Glide.ai',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    }
  },

  css: ['./app/assets/css/main.css'],

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/prismic',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/icon',
    // '@nuxthub/core',
  ],

  prismic: {
    endpoint: repositoryName,
    preview: '/api/preview',
    clientConfig: {
    routes: [
      { 
        type: 'homepage',
        uid: 'home', 
        path: '/' 
      },
      { 
        type: 'case_study', 
        path: '/case-study/:uid' 
      },
      { 
        type: 'settings',
        path: '/:uid' 
      }, 
    ],
  }
  },

  compatibilityDate: '2025-01-06',

  nitro: {
    preset: 'vercel'
  },

  alias: {
    '~/slices': fileURLToPath(new URL('./slices', import.meta.url))
  }
})