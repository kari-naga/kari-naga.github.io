// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxt/icon'],
  colorMode: {
    classSuffix: '',
  },
  icon: {
    mode: "svg",
  },
  css: ['@fontsource-variable/montserrat/wght.css', '@fontsource-variable/montserrat/wght-italic.css'],
})
