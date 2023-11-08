<template>
  <div class="container mx-auto mt-5 mb-5">
    <div class="grid gap-2 md:grid-cols-2 w-2/3 mx-auto">
      <div>
        <img src="../assets/images/singup.png" alt="login-image" />
      </div>
      <div class="my-auto">
        <h2 class="italic text-[1.3rem] pb-5 text-center">
          Create New Account
        </h2>
        <!-- Form Login -->
        <div class="w-full max-w-xs">
          <form @submit="onSubmit" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <!-- Name -->
            <div class="mb-4">
              <input
                class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username" type="text" placeholder="Full Name " v-bind="userName" autocomplete="username" />
            </div>
            <p class="text-red-700 py-1 text-center font-bold text-[.8rem]">{{ errors.userName }}</p>
            <!-- Email -->
            <div class="mb-4">
              <input
                class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="useremail" type="email" placeholder="Email" v-bind="userEmail" />
            </div>
            <p class="text-red-700 py-1 text-center font-bold text-[.8rem]">{{ errors.userEmail }}</p>
            <!-- Phone -->
            <div class="mb-4">
              <input
                class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="userphone" type="text" placeholder="Phone Number" autocomplete="userphone"
                v-bind="userPhone" />
            </div>
            <p class="text-red-700 py-1 text-center font-bold text-[.8rem]">{{ errors.userPhone }}</p>

            <!-- Password -->
            <div class="mb-6">
              <input
                class="shadow appearance-none rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password" type="password" placeholder="Password" autocomplete="current-password"
               v-bind="userPass" />
            </div>
            <p class="text-red-700 py-1 text-center font-bold text-[.8rem]">{{ errors.userPass }}</p>
            <p v-if="errMsg" class="text-red-700 py-1 text-center font-bold text-[.8rem]">{{ errMsg }}</p>
            <button
              class="w-full bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              Register Now
            </button>
          </form>
        </div>
        <p class="text-center text-black text-[.8rem]">
          already have an account?
          <NuxtLink class="text-primary" :to="localePath('/login')">Sign In</NuxtLink>
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
  middleware: ['login']
});

const schema = yup.object({
  userName: yup.string().required(),
  userEmail: yup.string().required().email(),
  userPass: yup.string().required().min(6).max(10),
  userPhone: yup.string().required().min(10).max(10),
});
const { defineInputBinds,values, errors, handleSubmit } = useForm({
  validationSchema: schema,
});
const userName = defineInputBinds("userName");
const userEmail = defineInputBinds("userEmail");
const userPass = defineInputBinds("userPass");
const userPhone = defineInputBinds("userPhone");

const config = useRuntimeConfig()
const { locale } = useI18n();
const localePath = useLocalePath()
const errMsg = ref(null)
const onSubmit = handleSubmit(values => {
      $fetch(`${config.public.baseURL}register`, {
        method: "post",
        headers: {
          "Content-type": "application/json",
          "Accept-Language": locale.value,
        },
        body: {
          fullname: values.userName,
          password: values.userPass,
          email: values.userEmail,
          phone: values.userPhone,
          country_id: 2,
        },
      }).then((res)=>{
        useCookie("phone").value = values.userPhone;
        navigateTo("/auth/verifyCode", { replace: true });
      }).catch((err)=>{
        errMsg.value = err?.response?._data?.message
        console.log(err?.response?._data?.message);
      })
});
</script>

<style lang="scss" scoped></style>
