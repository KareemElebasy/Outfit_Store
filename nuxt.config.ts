// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr:false,
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
  modules: ["nuxt-swiper", "@vee-validate/nuxt", "@pinia/nuxt",         [
    '@nuxtjs/i18n',
    {
        locales: [
            {
                name: 'English',
                code: 'en',
                iso: 'en-US',
                file: 'en.json',
                dir: 'ltr',
            },
            {
                name: 'عربي ',
                code: 'ar',
                iso: 'ar-AR',
                file: 'ar.json',
                dir: 'rtl',
            },
        ],
        lazy: true,
        langDir: 'locales/',
        defaultLocale: 'en',
        // detectBrowserLanguage: {
        //     useCookie: true,
        //     // cookieKey: 'hogag_website_lang',
        //     alwaysRedirect: true,
        //     fallbackLocale: 'en'
        // },
        vueI18nLoader: true,
    }
],],
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
