<template>
  <div v-if="profileUserData" class="container mx-auto">
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
const locale = useI18n()
const profileUserData = ref(null)

await useAsyncData('userData',()=>{
  $fetch(`${config.public.baseURL}profile`, {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "Accept-language": locale.value,
          Authorization: `Bearer ${useCookie('token').value}`,
        },
      }).then((res)=>{
        profileUserData.value = res.data;
      }).catch((err)=>{
        console.log(err);
      });
      
    }
)

// import { useUserAuthStore } from "../stores/userAuth";
// const store = useUserAuthStore();
// await store.fetchUserData();
// const profileUserData = store.userInformation.value;
// console.log(store.userInformation);
</script>

<style lang="scss" scoped></style>
