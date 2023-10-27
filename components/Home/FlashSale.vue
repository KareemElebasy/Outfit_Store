<template>
  <div class="container mx-auto bg-white mt-[4rem]">
    <h3 class="text-center italic text-[1.3rem] mb-[4rem]">Deals of the Day</h3>
    <div class="flex justify-between p-2">
      <h6 class="text-[2rem] font-[600]">Flash Sale</h6>
      <nuxt-link to="/products/flashsale">View All</nuxt-link>
    </div>

    <div class="grid gap-2 sm:grid-cols-2 md:grid-cols-4 mx-6">
      <div
        v-for="item in flash_sale?.data?.products"
        :key="item.id"
        class="crad p-2 flex flex-col"
      >
        <div
          class="relative rounded-[1rem] overflow-hidden"
          v-if="item.flash_sale_product"
        >
          <img
            :src="item.flash_sale_product?.product_details[0]?.images[0]?.url"
            alt="card-image"
            class="object-cover w-full max-h-[25rem] min-h-[25rem]"
          />
          <div class="absolute rounded top-0 bg-yellow p-3">
            <img src="../../assets/images/thunder-icon.png" alt="icon" />
            <span class="text-[12px]"
              >{{
                Math.trunc(
                  item?.flash_sale_product?.product_details[0]?.have_sale
                    .percentage
                )
              }}%</span
            >
          </div>
        </div>
        <div class="pt-[5px]">
          <NuxtLink :to="`/products/${item.flash_sale_product.id}`"
            ><p class="text-gray text-[1rem] font-[600]">
              {{ item.flash_sale_product.product_details[0].name }}
            </p></NuxtLink
          >

          <div class="mt-1">
            <span class="text-gray text-[14px] font-[600]"
              >{{
                item.flash_sale_product.product_details[0].have_sale
                  .price_after
              }}{{ item.flash_sale_product.product_details[0].currency }}
            </span>
            <span class="text-gray px-2 text-[12px] line-through"
              >{{ item.flash_sale_product.product_details[0].currency }}
              {{ item.flash_sale_product.product_details[0].price }}</span
            >
          </div>
        </div>
        <div class="flex justify-between items-center mt-auto">
          <div
            class="block bg-yellow h-auto font-[600] rounded text-[12px] px-[5px] w-9/12"
          >
            Out of Stock
            {{ item.flash_sale_product.product_details[0].quantity }}
          </div>
          <button
            @click.prevent="
              () => {
                store.addToCart(item.flash_sale_product.product_details[0]).then(() => refreshAll())
              }
            "
          >
            <img src="../../assets/images/cart0.png" alt="cart" />
          </button>
        </div>
      </div>
    </div>
    <div class="grid gap-5 md:grid-cols-2">
      <div class="flash-sale relative p-7">
        <div>
          <img
            class="w-100"
            src="../../assets/images/flash2.png"
            alt="jewellery"
          />
        </div>
        <div class="text-center absolute bottom-20 left-0 right-0 m-[0 auto]">
          <h4 class="font-[700] text-[5rem] text-white italic">Get Jeweled</h4>
          <NuxtLink
            class="font-[500] text-[1rem] uppercase underline text-white"
            to="/"
            >show your jewelry now</NuxtLink
          >
        </div>
      </div>
      <div class="flash-sale relative p-7">
        <div>
          <img
            class="w-100"
            src="../../assets/images/flash3.png"
            alt="jewellery"
          />
        </div>
        <div class="text-center absolute bottom-20 left-0 right-0 m-[0 auto]">
          <h4 class="font-[700] text-[5rem] text-white italic">
            End Of Summer
          </h4>
          <NuxtLink
            class="font-[500] text-[1rem] uppercase underline text-white"
            to="/"
            >show from here</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["flash_sale"]);
import { useCartStore } from "~/stores/cart";
const store = useCartStore();
const refreshing = ref(false);

const refreshAll = async () => {
  refreshing.value = true;
  try {
    await refreshNuxtData();
  } finally {
    refreshing.value = false;
  }
};
</script>

<style lang="scss" scoped></style>
