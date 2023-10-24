<template>
  <div class="container mx-auto mt-5 mb-5 min-h-[50vh]">
    <div class="flex items-center justify-center">
      <div class="">
        <h6 class="text-center pb-2">OutFit</h6>
        <h5>Confirmation Code</h5>
        <form @submit.prevent="onVerify">
          <input class="block bg-gray" type="number" />
          <button class="pt-3" type="submit">Verfiy</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});

// Use Pinia Store
import { useUserAuthStore } from "../stores/userAuth";
const store = useUserAuthStore();
const onVerify = async () => {
  await store.verifyCode();
};
console.log(store);
</script>

<style lang="scss" scoped></style>
