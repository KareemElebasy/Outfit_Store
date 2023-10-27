

export default defineNuxtPlugin(app => {

    // app.i18n.onLanguageSwitched = () => {
    // // Do something when the language is switched
    // }
    // app.i18n.onLanguageSwitched()
  
  
    // app.i18n.hooks.languageSwitched.register(() => {
    //   // Do something when the language is switched
    // })
    // app.i18n.hooks.languageSwitched.call()
    // // ========== Set Initial Direction Based On Initial Locale ========== //
  
  
    // const i18n = app.$i18n
  
    if (app.$i18n.locale.value == "en") {
      document.body.setAttribute("dir", "ltr");
      document.documentElement.setAttribute('lang', "en")
    } else if (app.$i18n.locale.value == "ar") {
      document.documentElement.setAttribute('lang', "ar")
      document.body.setAttribute("dir", "rtl");
    }
  
    // ========== (onBeforeLanguageSwitch) Called Right Before Setting A New Locale ========== //
    // app.i18n.onBeforeLanguageSwitch = (oldLocale: string, newLocale: string, isInitialSetup: string) => {
    //   console.log('onBeforeLanguageSwitch', oldLocale, newLocale, isInitialSetup, app)
    // }
  
    // ========== (onLanguageSwitched) Called Right After A New Locale Has Been Set ========== //
    app.$i18n.onLanguageSwitched = (oldLocale: string, newLocale: string) => {
  
      if (app.$i18n.locale.value == "en") {
        document.body.setAttribute("dir", "ltr");
        document.documentElement.setAttribute('lang', "en")
      } else if (app.$i18n.locale.value == "ar") {
        document.documentElement.setAttribute('lang', "ar")
        document.body.setAttribute("dir", "rtl");
      }
  
      setTimeout(() => window.location.reload(), 300)
  
    }
  })
  