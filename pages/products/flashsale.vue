<template>
  <div v-if="!items">
    <Loading />
  </div>
  <div v-else-if="items" class="flashsale container mx-auto p-2">
    <div class="grid gap-3 md:grid-cols-2 p-2">
      <div class="bg-yellow rounded-lg text-center p-5">
        <span class="px-2">5:00</span>
        <span class="px-2">9:00</span>
        <h6>On Sale Now</h6>
      </div>
      <div class="bg-yellow rounded-lg text-center p-5">
        <span class="px-2">5:00</span>
        <span class="px-2">9:00</span>
        <h6>On Sale Now</h6>
      </div>
    </div>
    <div class="grid gap-2 md:grid-cols-4 sm:grid-cols-2 pb-5 pt-3">
      <div
        v-for="item in items"
        :key="item.id"
        class="crad rounded overflow-hidden p-2 relative flex flex-col"
      >
        <div>
          <img
            :src="item.images[0].url"
            alt="card-image "
            class="object-cover w-full max-h-48 min-h-48"
          />
        </div>
        <div class="pt-[5px]">
          <p class="text-gray text-[.9rem]">
            {{ item.name }}
          </p>
          <div class="mt-1">
            <span
              class="text-gray text-[14px]"
              v-if="item.have_sale.price_after"
            >
              {{ item.currency }}
              {{ item.have_sale.price_after }}
            </span>
            <span class="text-gray px-2 text-[12px] line-through">
              {{ item.currency }} {{ item.price }}
            </span>
          </div>
        </div>
        <div class="flex justify-between items-center mt-auto">
          <div class="bg-yellow h-auto rounded text-[12px] px-[5px] w-10/12">
            Quantity : {{ item.quantity }}
          </div>
          <button
            @click.prevent="
              () => {
                store.updateCount(item.id);
              }
            "
          >
            +
          </button>
          <button
            @click.prevent="
              () => {
                store.addToCart(item);
                console.log(item);
              }
            "
          >
            <img src="../../assets/images/cart0.png" alt="cart" />
          </button>
        </div>
        <div class="absolute rounded top-2 bg-yellow p-3">
          <img src="../../assets/images/thunder-icon.png" alt="icon" />
          <span v-if="item.have_sale.percentage" class="text-[12px] font-[500]"
            >{{ Math.trunc(item.have_sale.percentage) }}%</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const items = ref(null);
const { locale } = useI18n();

await useAsyncData("FlashSaleItems", () => {
  $fetch(`${config.public.baseURL}flash_sale?type=now`, {
    headers: {
      "Accept-language": locale.value,
    },
  })
    .then((res) => (items.value = res.data))
    .catch((err) => console.log(err));
});

import { useCartStore } from "~/stores/cart";
const store = useCartStore();

</script>

<style lang="scss" scoped></style>
