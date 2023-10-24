<template>
  <div v-if="reviewItemsLength === 0" class="container mx-auto">
    <h4 class="text-[1.2rem] font-[500]">Reviews</h4>
    <div class="flex justify-center items-center">
      <h6>Your Reviews Will Appear Here</h6>
    </div>
  </div>
  <div v-else>
    <h4>Reviews</h4>
    <div class="container mx-auto">
      {{ items }}
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

const reviewItems = await $fetch(`${config.public.baseURL}reviews`, {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Accept-Language": "en",
    "Content-type": "application/json",
    Authorization: `Bearer ${useCookie("token").value} `,
  },
});
const items = reviewItems.data;
const reviewItemsLength = reviewItems?.data?.length;
</script>

<style lang="scss" scoped></style>
