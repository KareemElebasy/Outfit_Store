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
          <form
            @submit.prevent="onSubmit"
            class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div class="mb-4">
              <input
                class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Email Or Mobile Number "
                v-model="userData.phone"
                autocomplete="username"
              />
            </div>
            <div class="mb-6">
              <input
                class="shadow appearance-none rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                v-model="userData.password"
              />
            </div>
            <NuxtLink
              class="block align-baseline font-bold text-[.7rem] text-blue-500 mb-5"
              :to="localePath('/signup')"
            >
              Forgot Password?
            </NuxtLink>
            <button
              class="w-full bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
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
// import { useForm } from "vee-validate";
// import * as yup from "yup";

// const schema = yup.object({
//   email: yup.string().email().required(),
//   password: yup.string().min(6).max(8).required(),
// });
// const { defineInputBinds, errors, handleSubmit } = useForm({
//   validationSchema: schema,
// });
// const email = defineInputBinds("email");
// const password = defineInputBinds("password");
// const onSubmitVaidation = handleSubmit((values) => {
//   // Submit to API
//   console.log(values);
// });
definePageMeta({
  layout: "custom",
  middleware:'login'
});
const localePath = useLocalePath();

const userData = ref({
  phone: "",
  password: null,
});

// Using Pinia Store
import { useUserAuthStore } from "../stores/userAuth";
const store = useUserAuthStore();
const onSubmit = async () => {
  await store.signIn(userData);
  await navigateTo("/", { replace: true });
};
console.log(store);
</script>

<style lang="scss" scoped></style>
