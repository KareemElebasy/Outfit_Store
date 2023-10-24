<template>
  <div class="container mx-auto p-2">
    <div class="bg-primary-light flex justify-between items-center">
      <div>
        <button
          v-for="item in category_Types"
          :key="item.id"
          :id="item.name"
          @click.prevent="handleSubBar"
          class="text-[14px] mx-1 px-2 py-1 rounded-md bg-white text-black"
        >
          {{ item.name }}
        </button>
        <nuxt-link
          class="text-[14px] mx-1 px-2 py-2 rounded-md bg-white text-black"
          to="/"
          >HOME</nuxt-link
        >
      </div>
      <div class="flex">
        <input
          type="text"
          placeholder="Search"
          v-model="searchedValue"
          class="p-[5px] rounded-[5px] border-[2px] border-primary text-[12px]"
        />
        <button
          @click.prevent="handleSearch"
          class="mx-1 bg-primary p-[5px] rounded-[5px]"
        >
          <img src="../../assets/images/Iconsearch.png" alt="searchicon" />
        </button>
      </div>
    </div>
    <products-sub-category-bar :subTypeData="subTypeData" />
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const subType = ref("MAN");
const currentCategory = ref(null);
const subTypeData = ref(null);
// Get Category Bar
const res = await $fetch(`${config.public.baseURL}category_layers`, {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
    "Accept-language": "en",
  },
});
const category_Types = ref(res.data);
console.log(category_Types.value);
// Handle SubBar Responses
const handleSubBar = (event) => {
  console.log(event.target.id);
  subType.value = event.target.id;
  currentCategory.value = category_Types.value.find((item) => {
    return item.name == subType.value;
  });
  subTypeData.value = currentCategory.value.sub_categories;
  console.log(currentCategory.value.sub_categories);
};

// Search Handling
const router = useRouter();
const searchedValue = ref();
const handleSearch = () => {
  if (searchedValue.value) {
    router.push({ path: "/search", query: { name: searchedValue.value } });
    searchedValue.value = "";
  }
  refreshNuxtData();
};
</script>

<style lang="scss" scoped></style>
