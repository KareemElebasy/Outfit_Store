<template>
  <div class="container mx-auto bg-white pt-[5rem]" v-if="shop_by_category">
    <h3 class="text-center italic text-[1.5rem] pb-[3rem]">Shop by Category</h3>
    <div class="grid gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mx-6">
      <div
        v-for="item in shop_by_category?.data"
        class="flex rounded-[1rem] p-2 gap-3 items-center bg-primary-light"
      >
        <div>
          <img
            :src="item.image"
            :alt="item.name"
            class="object-cover min-h-32 max-h-32 block"
          />
        </div>
        <h5 class="mx-auto text-center font-[600]">{{ item.name }}</h5>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["shop_by_category"]);
</script>

<style lang="scss" scoped></style>
