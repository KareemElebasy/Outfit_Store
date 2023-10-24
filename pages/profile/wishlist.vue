<template>
  <div v-if="items.length === 0" class="container mx-auto p-2">
    <div class="flex flex-col justify-between items-center pt-5 pb-5">
      <div>
        <img
          class="max-h-[10rem]"
          src="../assets/images/cartempty.png"
          alt="emptycart"
        />
      </div>
      <h5 class="text-[1rem] pb-2">Wishlist is empty!</h5>
      <h6 class="text-[.9rem] pb-2">let's do some shopping</h6>
      <nuxt-link
        class="bg-primary px-[.8rem] py-[.4rem] rounded-md text-white"
        to="/"
        >Back To Home</nuxt-link
      >
    </div>
  </div>
  <div v-else class="container mx-auto">
    <h3 class="text-[1.2rem] italic p-2">Favorites</h3>
    <div class="grid md:grid-cols-2 sm:grid-cols-2">
      <div v-for="item in items" :key="item.id" class="crad p-2 flex flex-col">
        <div
          v-for="item in items"
          :key="item.id"
          class="crad p-2 flex flex-col"
        >
          <div class="relative">
            <img
              :src="item?.images[0]?.url"
              alt="card-image"
              class="object-cover rounded-[1rem] w-full min-h-[25rem] max-h-[25rem]"
            />
            <button
              @click.prevent="
                () => {
                  store.addToWishlist(item.id).then(() => refreshNuxtData());
                }
              "
              class="absolute rounded bottom-1 right-1"
            >
              <img
                v-if="!item.is_fav"
                src="../assets/images/heart.png"
                alt="icon"
              />
              <img
                v-if="item.is_fav"
                src="../assets/images/wishlisticon.png"
                alt="icon"
              />
            </button>
          </div>
          {{ item.is_fav }}
          <nuxt-link :to="`/products/${item.id}`">
            <p class="text-gray font-[700] py-[1rem] text-[1rem]">
              {{ item.name }}
            </p>
          </nuxt-link>
          <div class="mt-auto">
            <div class="flex justify-between">
              <span class="text-gray text-[.9rem] font-[600]"
                >{{ item.currency }} {{ item.price }}</span
              >
              <span class="text-white p-1 rounded bg-gray text-[14px]"
                >Top Rated</span
              >
            </div>
          </div>
        </div>
        {{ item.is_fav }}
        <nuxt-link :to="`/products/${item.id}`">
          <p class="text-gray font-[700] py-[1rem] text-[1rem]">
            {{ item.name }}
          </p>
        </nuxt-link>
        <div class="mt-auto">
          <div class="flex justify-between">
            <span class="text-gray text-[.9rem] font-[600]"
              >{{ item.currency }} {{ item.price }}</span
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
const store = useCartStore();
const items = ref([]);
await useAsyncData("wishlist", () => {
  $fetch(`${config.public.baseURL}favourites`, {
    headers: {
      Accept: "application/json",
      "Accept-Language": "en",
      "Content-type": "application/json",
      Authorization: `Bearer${useCookie("token").value}`,
    },
  }).then((res) => (items.value = res.data));
});
</script>

<style lang="scss" scoped></style>
