import { defineNuxtConfig } from 'nuxt'
const defaultTheme = require('tailwindcss/defaultTheme')

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: [],
  },
  modules: ['@nuxtjs/tailwindcss'],
  // tailwindcss: {
  //   // configPath: '~/tailwind.config.ts',
  //   config: {
  //     darkMode: 'class',
  //     presets: [],
  //     content: [
  //       'components/**/*.{vue,js}',
  //       'layouts/*.vue',
  //       'pages/**/*.vue',
  //       'composables/**/*.{js,ts}',
  //       'plugins/**/*.{js,ts}',
  //       'App.{js,ts,vue}',
  //       'app.{js,ts,vue}',
  //     ],
  //     theme: {
  //       extend: {
  //         fontFamily: {
  //           sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
  //         },
  //         /* colors: { */
  //         /*   primary: colors.emerald, */
  //         /*   secondary: colors.slate, */
  //         /*   success: colors.green, */
  //         /*   warning: colors.yellow, */
  //         /*   error: colors.red, */
  //         /* }, */
  //       },
  //     },
  //     plugins: [],
  //   },
  // },
})
