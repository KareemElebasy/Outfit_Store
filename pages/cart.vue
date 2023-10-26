<template>
  <div v-if="count_of_cart === 0" class="container mx-auto p-2">
    <div class="flex flex-col justify-between items-center pt-5 pb-5">
      <div>
        <img class="max-h-[10rem]" src="../assets/images/cartempty.png" alt="emptycart" />
      </div>
      <h5 class="text-[1rem] pb-2">your shopping cart is empty!</h5>
      <h6 class="text-[.9rem] pb-2">let's do some shopping</h6>
      <nuxt-link class="bg-primary px-[.8rem] py-[.4rem] rounded-md text-white" to="/">Back To Home</nuxt-link>
    </div>
  </div>
  <div v-else class="container mx-auto p-2">
    <div class="grid-cols-12">
      <div class="sm:col-span-12 md:col-span-8">
        <div class="flex justify-between items-center pt-5 pb-5">
          <h5 class="italic text-[1.1rem] font-[400]">Shopping Cart</h5>
          <nuxt-link to="/products" class="text-[.8rem] text-gray">Continue Shopping</nuxt-link>
        </div>
        <h6>Item Summary({{ count_of_cart }})</h6>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  <span class="sr-only">Image</span>
                </th>
                <th scope="col" class="px-6 py-3">Product</th>
                <th scope="col" class="px-6 py-3">Qty</th>
                <th scope="col" class="px-6 py-3">Price</th>
                <th scope="col" class="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item?.product_details?.id"
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-32 p-4">
                  <img :src="item?.product_details?.image" :alt="item.name" />
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {{ item?.name }}
                </td>
                <td class="px-6 py-4">
                  <h6 class="text-center">{{ item?.quantity
                  }}</h6>
                  <div class="flex items-center space-x-3">
                    <button
                      class="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      type="button">
                      <span class="sr-only">Quantity button</span>
                      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 18 2">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M1 1h16" />
                      </svg>
                    </button>
                    <div>
                      <input type="number" id="first_product"
                        class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="1" required />
                    </div>
                    <button
                      class="inline-flex items-center justify-center h-6 w-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      type="button" @click.prevent="() => {
                          store.updateCount(item.product_details.id);
                        }
                        ">
                      <span class="sr-only">Quantity button</span>
                      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M9 1v16M1 9h16" />
                      </svg>
                    </button>
                  </div>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {{ item?.product_details?.price
                  }}{{ item?.product_details?.currency }}
                </td>
                <td class="px-6 py-4">
                  <button @click.prevent="() => {
                    store.deleteCartItem(item.id).then(() => refreshAll());
                  }
                    " class="font-medium text-red-600 dark:text-red-500 hover:underline">
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <button @click.prevent="() => {
      store.deleteAllCartItems().then(() => refreshAll());
    }
      " class="bg-primary px-[.8rem] py-[.4rem] rounded-md text-white mt-2 mx-auto">
      Delete All Items
    </button>
  </div>
</template>

<script setup>
import { useCartStore } from "../stores/cart";
const store = useCartStore();
const config = useRuntimeConfig();
const items = ref(null);
const count_of_cart = ref(0);
await useAsyncData("cart", () => {
  $fetch(`${config.public.baseURL}cart`, {
    headers: {
      Accept: "application/json",
      "Accept-Language": "en",
      "Content-type": "application/json",
      Authorization: `Bearer ${useCookie("token").value}`,
    },
  }).then((res) => {
    items.value = res?.data?.items;
    count_of_cart.value = res.count_of_cart;
    console.log(items);
    console.log(count_of_cart);
  });
});
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
