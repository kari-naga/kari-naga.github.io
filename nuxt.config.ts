import { defineNuxtConfig } from 'nuxt/config'
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
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    classSuffix: '',
  },
  css: [
    '@fontsource/montserrat/variable.css',
    '@fontsource/montserrat/variable-italic.css',
  ],
})
