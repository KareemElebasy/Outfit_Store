<template>
  <!-- <div class="flex flex-col items-center">
    <div class="pb-[1.2rem]">
      <img src="../../assets/images/orders.png" alt="orders" />
    </div>
    <h4 class="pb-[.4rem] font-[400] text-[1rem]">
      you don't have any orders now!
    </h4>
    <h5 class="font-[400] pb-[.4rem] text-[.8rem]">
      your orders will show here
    </h5>
    <button class="bg-primary text-white border-2 px-4 py-2 rounded-md">
      Go To Home
    </button>
  </div> -->
  <div class="p-2" v-if="orderItems">
    <div>
      <button
        v-for="item in orderItems"
        :key="item.key"
        class="uppercase text-white bg-primary m-[.2rem] px-[.5rem] py-[.2rem] rounded-md"
      >
        {{ item.value }}
      </button>
    </div>
    <div>
      <div v-for="order in 3" :key="order.id" class="p-2">
        <div>
          <div class="flex items-center justify-between">
            <p class="text-[1rem] text-black font-[600]">Order</p>
            <h4 class="text-[1rem] text-primary font-[600]">Price</h4>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <p class="text-[.8rem] text-grayDark font-[600]">Data</p>
          <h4 class="text-[.8rem] text-grayDark font-[600]">Shipping</h4>
        </div>
        <div class="flex items-center justify-between">
          <p>image</p>
          <div class="flex items-center justify-between">
            <button
              class="text-black bg-white border-[1px] m-[.2rem] px-[.5rem] py-[.2rem] rounded-md"
            >
              Details
            </button>
            <button
              class="text-white bg-primary m-[.2rem] px-[.5rem] py-[.2rem] rounded-md"
            >
              Repeat Order
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useUserAuthStore } from "~/stores/userAuth";
const store = useUserAuthStore();
const config = useRuntimeConfig();

const ordersRes = await $fetch(`${config.public.baseURL}order`, {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Accept-Language": "en",
    "Content-type": "application/json",
    Authorization: `Bearer ${useCookie("token").value} `,
  },
});
const orderItems = ref(ordersRes.available_status);
console.log("Orders");
console.log(orderItems);
// POST DATA ORDERS
// const res = await $fetch(`${config.public.baseURL}order`, {
//   method: "POST",
//   headers: {
//     Accept: "application/json",
//     "Accept-Language": "en",
//     "Content-type": "application/json",
//     Authorization: `Bearer ${useCookie("token").value} `,
//   },
//   body: {
//     address_id: "113",
//     pay_type: "cash",
//   },
// });
</script>

<style lang="scss" scoped></style>
