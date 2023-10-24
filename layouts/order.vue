<template>
  <div>
    <div>
      <NuxtLink
        :to="`profile/order/${item.value}`"
        v-for="item in orderItems"
        :key="item.key"
        class="uppercase text-white bg-primary m-[.2rem] px-[.5rem] py-[.2rem] rounded-md"
      >
        {{ item.value }}
      </NuxtLink>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { useUserAuthStore } from "~/stores/userAuth";
const store = useUserAuthStore();
const config = useRuntimeConfig();

const ordersRes = await $fetch(`${config.public.baseURL}order`, {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Accept-Language": "en",
    "Content-type": "application/json",
    Authorization: `Bearer ${useCookie("token").value} `,
  },
});
const orderItems = ref(ordersRes.available_status);
console.log(store.userInformation.value.id);
// POST DATA ORDERS
// const res = await $fetch(`${config.public.baseURL}order`, {
//   method: "POST",
//   headers: {
//     Accept: "application/json",
//     "Accept-Language": "en",
//     "Content-type": "application/json",
//     Authorization: `Bearer ${useCookie("token").value} `,
//   },
//   body: {
//     address_id: "113",
//     pay_type: "cash",
//   },
// });
</script>

<style lang="scss" scoped></style>
