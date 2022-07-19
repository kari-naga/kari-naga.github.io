import { defineNuxtConfig } from 'nuxt'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  vite: {
    plugins: [
      Components({
        resolvers: [
          IconsResolver(),
        ],
      }),
      Icons({
        autoInstall: true
      }),
    ],
  },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
})
