<template>
  <div class="container mx-auto">
    <div v-if="searcheditems" class="grid grid-cols-12 gap-2">
      <div v-for="item in searcheditems" :key="item.id" class="md:col-span-4 col-span-6 crad rounded p-2 flex flex-col">
        <div class="relative">
          <img :src="item.product_details[0].images[0].url" alt="card-image"
            class="object-cover rounded-[1rem] w-full min-h-[25rem] max-h-[25rem]" />
          <button class="absolute rounded bottom-1 right-1">
            <img src="../assets/images/heart.png" alt="icon" />
          </button>
        </div>
        <NuxtLink :to="localePath(`/products/${item.id}`)">
          <p class="text-gray font-[600] text-[1rem] pt-2">
            {{ item.product_details[0].name }}
          </p>
        </NuxtLink>
        <div class="pt-[5px] mt-auto">
          <div class="flex justify-between mb-auto">
            <span class="text-gray font-[600] text-[1rem]">Egp {{ item.product_details[0].price }}</span>
            <span class="text-white p-1 rounded bg-gray text-[14px]">Top Rated</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center">
      <div class="inline-flex mt-2 xs:mt-0">
        <!-- Buttons -->
        <button
          class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-primary rounded-l hover:bg-white hover:text-primary">
          <svg class="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M13 5H1m0 0 4 4M1 5l4-4" />
          </svg>
          Prev
        </button>
        <button
          class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-primary border-0 border-l border-gray-700 rounded-r hover:bg-white">
          Next
          <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const searcheditems = ref(null);
const config = useRuntimeConfig();
const { locale } = useI18n();
const localePath = useLocalePath();

const route = useRoute();
await useAsyncData("searchItms", () => {
  $fetch(`${config.public.baseURL}products/search?name=${route.query.name}`, {
    headers: {
      "Accept-Language": locale.value,
      "Content-type": "application/json",
      Authorization: `Bearer ${useCookie("token").value}`,
    },
    params: {
      name: route.query.name,
    },
  }).then((res) => {
    console.log(res);
    console.log(route.query.name);
    console.log("items");
    searcheditems.value = res.data;
    // items.value = res.data;
    // links.value = res.links;
  });
});
</script>

<style lang="scss" scoped></style>
