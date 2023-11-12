// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: [
    "~/assets/css/main.css",
    "primevue/resources/themes/lara-light-blue/theme.css",
    "primevue/resources/primevue.min.css",
    "primeicons/primeicons.css",
  ],

  build: {
    transpile: ["primevue", "vee-validate/dist/rules"],
  },
  plugins: ["~/plugins/i18n.client.ts","~/plugins/guest_token.js"],
  modules: [
    "nuxt-swiper",
    "@vee-validate/nuxt",
    "@pinia/nuxt",
    [
      "@nuxtjs/i18n",
      {
        locales: [
          {
            name: "English",
            code: "en",
            iso: "en-US",
            file: "en.json",
            dir: "ltr",
          },
          {
            name: "عربي ",
            code: "ar",
            iso: "ar-AR",
            file: "ar.json",
            dir: "rtl",
          },
        ],
        lazy: true,
        langDir: "locales/",
        defaultLocale: "en",
        // strategy: "prefix_except_default",
        // detectBrowserLanguage: {
        //   useCookie: true,
        //   alwaysRedirect: true,
        //   fallbackLocale: "en",
        // },
        vueI18nLoader: true,
      },
    ],
  ],
  pinia: {
    autoImports: ["defineStore"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      baseURL: "https://ecommerce.phpv8.aait-d.com/website/",
    },
  },
});
