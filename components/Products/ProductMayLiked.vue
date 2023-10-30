<template>
  <div class="container mx-auto mt-8 p-2">
    <h6 class="font-[600] text-[1.2rem] italic">You May Also Like</h6>
    <div class="grid gap-3 grid-cols-12 mx-6">
      <div
        v-for="item in productMayLiked"
        :key="item.id"
        class="col-span-12 md:col-span-6 lg:col-span-3"
      >
        <div class="relative">
          <img
            :src="item.product_details[0].images[0].url"
            alt="card-image"
            class="object-cover rounded-[1rem] w-full min-h-[25rem] max-h-[25rem]"
          />
          <button
            class="absolute rounded bottom-1 right-1"
            @click.prevent="
              () => {
                store.addToWishlist(item.product_details[0].id);
              }
            "
          >
            <img src="../../assets/images/heart.png" alt="icon" />
          </button>
        </div>
        <NuxtLink :to="localePath(`/products/${item.id}`)">
          <p class="text-gray font-[600] text-[1rem] pt-2">
            {{ item.product_details[0].name }}
          </p>
        </NuxtLink>
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
const props = defineProps(["productMayLiked"]);
import { useCartStore } from "~/stores/cart";
const localePath= useLocalePath()
const { locale } = useI18n();

const store = useCartStore();
const config = useRuntimeConfig();
const { data: items } = await useFetch(
  `${config.public.baseURL}products-you-may-like`,
  {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
      "Accept-language": locale.value,
    },
  }
);
const productMayLiked = ref(items.value.data);
</script>

<style lang="scss" scoped></style>
