// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode', 'nuxt-icon'],
  // app: {
  //   pageTransition: { name: 'page', mode: 'out-in' },
  // },
  eslint: {
    lintOnStart: false,
  },
  colorMode: {
    classSuffix: '',
  },
  css: ['@fontsource/montserrat/variable.css', '@fontsource/montserrat/variable-italic.css'],
})
