// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  app: {
    head: {
      title: 'The Good Practice Company Media',
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.ico"},
        { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/video.js/8.3.0/video-js.min.css" }
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'We understand the unique needs of health and social providers, and we\'re committed to creating user-centric experiences that leave a lasting impact.' }
      ],
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/video.js/8.3.0/video.min.js',
          defer: true
        },
        // {
        //   src: '/checkLS.ts',
        //   defer: true
        // }
      ]
    }
  },
  css: ['~/assets/main.scss'],
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxtjs/google-fonts', 'nuxt-swiper'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_colors.scss" as *;'
        }
      }
    }
  },
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
      Sora: [400, 500, 600, 700]
    }
  }
})
