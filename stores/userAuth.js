export const useUserAuthStore = defineStore("userAuth", () => {
  const config = useRuntimeConfig();
  
  // SignUp Constants
  const deviceToken = useCookie("token", {
    maxAge: 60 * 60,
  });
  const devicePhone = useCookie("phone", {
    maxAge: 60 * 60,
  });

  // SignIn Constants

  const userInformation = reactive({});
  const isLogged = ref(false);
  // console.log(userInformation);
  // signUp
  const signUp = async (data) => {
    const { locale } = useI18n();
    try {
      const res = await $fetch(`${config.public.baseURL}register`, {
        method: "post",
        headers: {
          "Content-type": "application/json",
          "Accept-Language": locale.value,
        },
        body: {
          fullname: data.value.userName,
          password: data.value.userPass,
          email: data.value.userEmail,
          phone: data.value.userPhone,
          country_id: data.value.country_id,
        },
      });

      useCookie("phone").value = data.value.userPhone;
      navigateTo("/auth/verifyCode", { replace: true });
      console.log(devicePhone.value);
    } catch (error) {
      console.log(error);
      if (error) {
      }
    }
  };

  // verify User Code
  const verifyCode = async () => {

    try {
      const res = await useFetch(`${config.public.baseURL}verify`, {
        method: "post",
        headers: {
          "Accept-Language": locale.value,
        },
        body: {
          phone: devicePhone.value,
          code: "1111",
          country_id: "2",
        },
      });
      await navigateTo("/login", { replace: true });
    } catch (error) {
      console.log(error);
      if (error) {
      }
    }
  };
  // SingIn Action
  const signIn = async (data) => {
    console.log(data);
    try {
      const res = await $fetch(`${config.public.baseURL}login`, {
        method: "post",
        headers: {
          "Accept-language": "en",
        },
        body: {
          country_id: 2,
          phone: data.value.phone,
          password: data.value.password,
          type: "ios",
          device_token: "desktop",
          // device_token: localStorage.getItem("token"),
        },
      });
      console.log(res);
      useCookie("token").value = res.data.token;
      userInformation.value = res.data;
      isLogged.value = true;
      console.log("+++");
      console.log(userInformation.value);
      console.log("+++");
      console.log(isLogged.value);
    } catch (error) {
      console.log(error);
    }
  };
  //   Get Profile Data
  const fetchUserData = async () => {
    try {
      const res = await $fetch(`${config.public.baseURL}profile`, {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "Accept-language": "ar",
          Authorization: `Bearer ${deviceToken.value}`,
          // Authorization: `Bearer ${deviceToken}}`,
        },
      });
      userInformation.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };
  //   LogOut
  const logOut = async () => {
    try {
      deviceToken.value = null;
      userInformation.value = null;
      isLogged.value = false;
      await navigateTo("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    signUp,
    signIn,
    userInformation,
    verifyCode,
    fetchUserData,
    logOut,
    isLogged,
  };
});
