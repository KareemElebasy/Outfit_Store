<template>
  <div class="container mx-auto pt-10 pb-5">
    <div class="grid grid-cols-12">
      <div class="crad rounded col-span-12">
        <div class="relative">
          <img
            v-if="banner?.data"
            :src="banner?.data?.image"
            alt="card-image"
            class="object-cover w-full"
          />

          <!-- <div class="absolute top-2 left-2 z-10 w-2/5">
            <h5 class="text-white md:text-[2rem] text-[.9rem]">
              Fall 2022 <br />Collection
            </h5>
            <p class="text-white md:pb-5">The Astest Fashion For Everyone</p>
            <button class="px-3 py-1 rounded text-white bg-primary">
              Shop Now
            </button>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["banner"]);
</script>

<style lang="scss" scoped></style>
