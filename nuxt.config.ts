// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "~/assets/css/main.css",
    "primevue/resources/themes/lara-light-blue/theme.css",
    "primevue/resources/primevue.min.css",
    "primeicons/primeicons.css",
  ],
  build: {
    transpile: ["primevue", "vee-validate/dist/rules"],
  },
  plugins: [],
  modules: ["nuxt-swiper", "@vee-validate/nuxt", "@pinia/nuxt", "@nuxtjs/i18n"],
  pinia: {
    autoImports: ["defineStore"],
  },

  // i18n Settings Doesn't work

  // i18n: {
  //   lazy: true,
  //   langDir: "locales/",
  //   strategy: "prefix_except_default",
  //   locales: [
  //     {
  //       code: "en-US",
  //       iso: "en-US",
  //       name: "English(US)",
  //       file: "en-US.json",
  //     },
  //     {
  //       code: "ar-EG",
  //       iso: "ar-EG",
  //       name: "Arabic(EG)",
  //       file: "ar.json",
  //     },
  //   ],
  //   defaultLocale: "en-US",
  //   detectBrowserLanguage: false,
  //   vueI18n: {
  //     runtimeOnly: false,
  //     fallbackLocale: "en-US",
  //   },
  // },
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
