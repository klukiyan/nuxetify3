
import vuetify from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config
// alternative nuxt.config.js without vite plugin
export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.css'],
  build: {
    transpile: ["vuetify"],
  },
});
//https://levelup.gitconnected.com/kickstart-your-next-project-with-nuxt3-and-vuetify3-2257427bd80d
