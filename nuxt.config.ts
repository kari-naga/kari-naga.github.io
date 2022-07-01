import { defineNuxtConfig } from 'nuxt'
import Icons from 'unplugin-icons/vite'
import tailwindTypography from '@tailwindcss/typography'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  vite: {
    plugins: [
      Icons({
        autoInstall: true
      }),
    ],
  },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
})
