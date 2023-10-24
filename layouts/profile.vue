<template>
  <div class="container mx-auto">
    <div class="grid md:grid-cols-12 gap-5">
      <div class="col-span-4 p-2">
        <!-- Main Data Component in Profile      -->
        <ProfileMainData :profileUserData="profileUserData" />
      </div>
      <div class="col-span-12 md:col-span-8 p-2">
        <slot />
      </div>
    </div>
    <div><ProductsProductMayLiked /></div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

// const { data: items } = await useFetch(`${config.public.baseURL}profile`, {
//   method: "get",
//   headers: {
//     Accept: "application/json",
//     "Content-type": "application/json",
//     "Accept-language": "ar",
//     Authorization: useCookie("token").value,
//   },
// });
// const profileUserData = reactive(items.value.data);
// console.log(profileUserData);

import { useUserAuthStore } from "../stores/userAuth";

const store = useUserAuthStore();
await store.fetchUserData();
const profileUserData = store.userInformation.value;
console.log(store.userInformation);
</script>

<style lang="scss" scoped></style>
