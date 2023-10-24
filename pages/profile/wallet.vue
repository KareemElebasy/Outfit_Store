<template>
  <div v-if="!items" class="container mx-auto">
    <h4 class="text-[1.2rem] font-[500]">Reviews</h4>
    <div class="flex justify-center items-center">
      <img src="../../assets/images/wallet.png" />
    </div>
  </div>
  <div v-else>
    <h4>Wallet</h4>
    <div class="container mx-auto">
      <div
        class="flex flex-col gap-3 pt-2 pb-2 m-1 mx-auto w-[12rem] border-primary rounded-[10px] items-center justify-center bg-primary-light"
      >
        <h6>Your Balance</h6>
        <h5>{{ items.balance }} EGP</h5>
        <button class="bg-primary px-[.8rem] py-[.4rem] rounded-md text-white">
          Transfer my balane
        </button>
      </div>
      <div>
        <h6>Your History Transaction</h6>
        <div class="grid grid-cols-12">
          <div
            class="col-span-6"
            v-for="item in all_Transations"
            :key="item.id"
          >
            <div
              class="flex flex-col gap-3 pt-2 pb-2 m-1 mx-auto w-[12rem] border-primary rounded-[10px] items-center justify-center bg-primary-light"
            >
              <h5>{{ item.type }}</h5>
              <h6>Amount</h6>
              <h5>{{ item.amount }} EGP</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

const wallet_transations = await $fetch(
  `${config.public.baseURL}wallet_transations`,
  {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Accept-Language": "en",
      "Content-type": "application/json",
      Authorization: `Bearer ${useCookie("token").value} `,
    },
  }
);
const items = wallet_transations.data;
const all_Transations = items.transactions;
console.log(items);
</script>

<style lang="scss" scoped></style>
