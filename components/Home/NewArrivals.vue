<template>
  <div class="container mx-auto mt-[5rem] mb-[2rem]">
    <div class="flex justify-between p-2">
      <h5 class="text-[2rem] font-[300] italic">New Arrivals Highlights</h5>
      <nuxt-link to="/">View All</nuxt-link>
    </div>
    <div class="grid sm:grid-cols-2 md:grid-cols-4 mx-6">
      <div
        v-for="item in new_arrivals_highlights?.data"
        :key="item.id"
        class="crad p-2 flex flex-col"
      >
        <div class="relative">
          <img
            :src="item.product_details[0].images[0].url"
            alt="card-image"
            class="object-cover rounded-[1rem] w-full min-h-[25rem] max-h-[25rem]"
          />
          <button
            @click.prevent="
              () => {
                store.addToWishlist(item.product_details[0].id);
              }
            "
            class="absolute rounded bottom-1 right-1"
          >
            <img
              v-if="!item.product_details[0].is_fav"
              src="../../assets/images/heart.png"
              alt="icon"
            />
            <img
              v-if="item.product_details[0].is_fav"
              src="../../assets/images/wishlisticon.png"
              alt="icon"
            />
          </button>
        </div>
        <p class="text-gray font-[600] text-[1rem] pt-2">
          {{ item.product_details[0].name }}
        </p>
        <div class="pt-[5px] mt-auto">
          <div class="flex justify-between mb-auto">
            <span class="text-gray font-[600] text-[1rem]"
              >Egp {{ item.product_details[0].price }}</span
            >
            <span class="text-white p-1 rounded bg-gray text-[14px]"
              >Top Rated</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "~/stores/cart";

const props = defineProps(["new_arrivals_highlights"]);

const store = useCartStore();
</script>

<style lang="scss" scoped></style>
