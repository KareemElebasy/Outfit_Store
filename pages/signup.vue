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
          <form
            @submit.prevent="onSubmit"
            class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <!-- Name -->
            <div class="mb-4">
              <input
                class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Full Name "
                v-model="formData.userName"
                autocomplete="username"
              />
            </div>
            <!-- Email -->
            <div class="mb-4">
              <input
                class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="useremail"
                type="email"
                placeholder="Email"
                v-model="formData.userEmail"
              />
            </div>
            <!-- Phone -->
            <div class="mb-4">
              <input
                class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="userphone"
                type="text"
                placeholder="Phone Number"
                autocomplete="userphone"
                v-model="formData.userPhone"
              />
            </div>
            <!-- Password -->
            <div class="mb-6">
              <input
                class="shadow appearance-none rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                autocomplete="current-password"
                v-model="formData.userPass"
              />
            </div>
            <button
              class="w-full bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register Now
            </button>
          </form>
        </div>
        <p class="text-center text-black text-[.8rem]">
          already have an account?
          <NuxtLink class="text-primary" to="/login">Sign In</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});
// import { useForm } from "vee-validate";
// import * as yup from "yup";

// const schema = yup.object({
//   email: yup.string().email().required(),
//   password: yup.string().min(6).max(8).required(),
//   phone: yup.string().min(10).max(10).required(),
// });
// const { defineInputBinds, errors, handleSubmit } = useForm({
//   validationSchema: schema,
// });
// const userName = defineInputBinds("userName");
// const email = defineInputBinds("userEmail");
// const password = defineInputBinds("userPass");
// const phone = defineInputBinds("userPhone");
// const onSubmitVaidation = handleSubmit((values) => {
//   const { data: res } = useFetch(`${config.public.baseURL}register`, {
//     method: "post",
//     headers: {
//       "Content-type": "application/json",
//       "Accept-language": "ar",
//     },
//     body: {
//       fullname: userName.value,
//       password: password.value,
//       email: email.value,
//       phone: phone.value,
//       country_id: formData.value.country_id,
//     },
//   });
//   if (res) {
//     localStorage.setItem("phone", formData.value.userPhone);
//     router.push("/auth/verifyCode");
//   }
//   console.log(values);
// });

const formData = ref({
  userName: "",
  userEmail: "",
  userPhone: null,
  userPass: null,
  country_id: 2,
});

// Pinia Store

import { useUserAuthStore } from "../stores/userAuth";
const store = useUserAuthStore();
const onSubmit = async () => {
  await store.signUp(formData);

  await navigateTo("/auth/verifyCode", { replace: true });
};
</script>

<style lang="scss" scoped></style>
