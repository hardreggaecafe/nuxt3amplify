// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  srcDir: 'src/',
  runtimeConfig: {
    apiKey: '',
    public: {
      baseURL: process.env.BASE_URL || 'http://locahost:3000',
      apiURL: process.env.API_URL || 'http://localhost:3333',
      undefined: process.env.UNDEFINED || 'undefined, isnt it?',
      secret: process.env.SECRET_KEY,
    }
  },
})
