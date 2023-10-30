<template>
  <div v-if="loading">
    <Loading />
  </div>
  <div v-else>
    <HomeHeroSection :divided_slider="divided_slider" />
    <HomeCategorySection :shop_by_category="shop_by_category" />
    <HomeFlashSale :flash_sale="flash_sale" />
    <HomeTopRated :top_rated="top_rated" />
    <HomeFallCollection :banner="banner" />
    <HomeMostOrdered :most_orders="most_orders" />
    <HomeFallCollection :banner="banner" />
    <HomeNewArrivals :new_arrivals_highlights="new_arrivals_highlights" />
    <HomeInstagramSection />
    <HomeSaleSection />
  </div>
</template>

<script setup>
const { locale } = useI18n();
// Refresh All Data

definePageMeta({
  layout: "default",
});

const config = useRuntimeConfig();
const loading = ref(true);
const most_orders = ref(null);
const shop_by_category = ref(null);
const divided_slider = ref(null);
const flash_sale = ref(null);
const top_rated = ref(null);
const new_arrivals_highlights = ref(null);
const banner = ref(null);
// const i18n = useI18n();

await useAsyncData("homeData", () => {
  $fetch(`${config.public.baseURL}home`, {
    headers: {
      "Accept-language": locale.value,
      // "Accept-language": "en",
      Authorization: `Bearer${ useCookie("token").value }`,
    },
  }).then((res) => {
    const data = res.data;
    console.log(data);
    // slider
    divided_slider.value = data.find((item) => {
      return item.type == "divided_slider";
    });
    // Category
    shop_by_category.value = data.find(
      (item) => item.type === "shop_by_category"
    );
    // Most Orders
    most_orders.value = data.find((item) => {
      return item.type == "most_orders";
    });

    // FlashSale
    flash_sale.value = data.find((item) => {
      return item.type == "flash_sale";
    });

    // Banner
    banner.value = data.find((item) => {
      return item.type == "banner";
    });
    // top_rated
    top_rated.value = data.find((item) => {
      return item.type == "top_rated";
    });
    // new_arrivals_highlights
    new_arrivals_highlights.value = data.find((item) => {
      return item.type == "new_arrivals_highlights";
    });
    loading.value = false;
  });
});
</script>

<style lang="scss" scoped></style>
