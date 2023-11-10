<template>
  <div class="container mx-auto mt-5 mb-5">
    <div class="grid gap-2 md:grid-cols-2 w-2/3 mx-auto">
      <div>
        <img src="../assets/images/login.png" alt="login-image" />
      </div>
      <div class="my-auto">
        <h2 class="italic text-[1.3rem] pb-5 text-center">Welcome Back !</h2>
        <!-- Form Login -->
        <div class="w-full max-w-xs">
          <form @submit="onSubmit" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <input
                class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="userphone" type="text" placeholder="Enter Your Mobile Number   " v-bind="phone"
                autocomplete="userphone" />
                
              </div>
              <p class="text-red-700 py-1 text-center font-bold text-[.8rem]">{{ errors.phone }}</p>
            <div class="mb-6">
              <input
                class="shadow appearance-none rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password" type="password" placeholder="Password" v-bind="password" />
            </div>
            <p class="text-red-700 py-1 text-center font-bold text-[.8rem]">{{ errors.password }}</p>

            <p v-if="errMsg" class="text-red-700 py-1 text-center font-bold text-[.8rem]">{{ errMsg }}</p>
            <NuxtLink class="block align-baseline font-bold text-[.7rem] text-blue-500 mb-5" :to="localePath('/signup')">
              Forgot Password?
            </NuxtLink>
            <button
              class="w-full bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              Sign In
            </button>
          </form>
        </div>
        <p class="text-center text-gray-light text-[.8rem]">
          Not A Member ?
          <NuxtLink class="text-primary" :to="localePath('/signup')">Join Now</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useForm } from "vee-validate";
import * as yup from "yup";
definePageMeta({
  layout: "custom",
  middleware: 'login'
});
const localePath = useLocalePath();
const { locale } = useI18n();
const errMsg = ref(null)
const config = useRuntimeConfig()
const schema = yup.object({
  phone: yup.string().min(10).max(10).required(),
  password: yup.string().min(6).max(10).required(),
});
const { defineInputBinds, errors, handleSubmit } = useForm({
  validationSchema: schema,
});
const phone = defineInputBinds("phone");
const password = defineInputBinds("password");
const onSubmit = handleSubmit((values) => {
  console.log(values);
  $fetch(`${config.public.baseURL}login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Accept-Language": locale.value,
    },
    body: {
      country_id: 2,
      phone: values.phone,
      password: values.password,
      type: "ios",
      device_token: `Bearer ${useCookie('guest_token').value}`,
    }
  }).then((res) => {
    if(useCookie('guest_token').value){
    useCookie('guest_token').value =  res.data.token
    }
    useCookie("token").value = res.data.token;
    navigateTo("/", { replace: true });
  }).catch((err) => {
    console.log(err);
    errMsg.value = err?.response?._data?.message
  })
});
</script>

<style lang="scss" scoped></style>
