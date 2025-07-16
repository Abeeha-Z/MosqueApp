// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxtjs/sanity'

  ],
    runtimeConfig: {
    public: {
      sanity: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        studioUrl: process.env.SANITY_STUDIO_URL,
        token: process.env.SANITY_VIEWER_TOKEN,
        useCdn: false,
        apiVersion: '2023-07-16'
      }
}}})