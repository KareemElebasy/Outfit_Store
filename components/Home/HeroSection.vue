<template>
  <div class="container mx-auto bg-white " v-if="divided_slider">
    <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :slides-per-view="1"
      :effect="'creative'"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: true,
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['100%', 0, 0],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <SwiperSlide v-for="(slide, index) in divided_slider.data" :key="index">
        <div class="grid gap-2 md:grid-cols-2 mx-6 pt-2">
          <div>
            <img :src="slide?.image" :alt="slide?.desc" />
          </div>
          <div class="my-auto">
            <h2 class="md:text-[2rem] italic pb-[5px] pt-[5px] text-[1rem]">
              {{ slide?.name }}
            </h2>
            <p
              class="md:text-[2.5rem] text-[2rem] uppercase font-[600] pb-[10px]"
            >
              {{ slide?.desc }}
            </p>
            <NuxtLink
              class="block w-fit ms-auto italic text-[1.2rem] text-primary"
              to="/products"
              >Shop Now</NuxtLink
            >
          </div>

        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
const props = defineProps(["divided_slider"]);
</script>

<style lang="scss" scoped></style>
