<template>
  <div class="container mx-auto mt-10 p-8" v-if="categoryItems">
    <div class="grid grid-cols-1 md:grid-cols-3">
      <div class="hidden md:block md:col-span-1">
        <FiltersSection
          :filtersFeatures="filtersFeatures"
          @filterItems="
            (e) => {
              sort_Option = e.sort_Option;
              color_id = e.color_id;
              size = e.size;
              refresh();
            }
          "
        />
      </div>

      <div class="col-span-1 md:col-span-2">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="item in categoryItems"
            :key="item.id"
            class="crad rounded p-2 flex flex-col"
          >
            <div class="relative">
              <img
                :src="item?.product_details[0]?.images[0]?.url"
                alt="card-image"
                class="object-cover rounded-[1rem] w-full min-h-[25rem] max-h-[25rem]"
              />
              <button
                @click.prevent="
                  () => {
                    store.addToWishlist(item.product_details[0].id);
                  }
                "
                class="absolute rounded bottom-1 right-1"
              >
                <img
                  v-if="!item.product_details[0].is_fav"
                  src="../../assets/images/heart.png"
                  alt="icon"
                />
                <img
                  v-if="item.product_details[0].is_fav"
                  src="../../assets/images/wishlisticon.png"
                  alt="icon"
                />
              </button>
            </div>
            <nuxt-link :to="localePath(`/products/${item.id}`)">
              <p class="text-gray font-[700] py-[1rem] text-[1rem]">
                {{ item.product_details[0].name }}
              </p>
            </nuxt-link>
            <div class="mt-auto">
              <div class="flex justify-between">
                <span class="text-gray text-[.9rem] font-[600]"
                  >{{ item.product_details[0].currency }}
                  {{ item.product_details[0].price }}</span
                >
                <span class="text-white p-1 rounded bg-gray text-[14px]"
                  >Top Rated</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "~/stores/cart";

const config = useRuntimeConfig();
const { locale } = useI18n();
const localePath = useLocalePath();
const store = useCartStore();
const route = useRoute();
const filtersFeatures = ref(null);
const categoryItems = ref(null);
const sort_Option = ref([]);
const color_id = ref([]);
const size = ref([]);

const { data, refresh } = await useAsyncData("categoryItems", () => {
  console.log(color_id.value)
  $fetch(`${config.public.baseURL}products?category_id=${route.params.id}`, {
    headers: {
      Accept: "application/json",
      "Accept-Language": locale.value,
      "Content-type": "application/json",
    },
    params: {
      color_id: color_id.value,
      sorted: sort_Option.value,
      // size_ids: size.value,
    },
  }).then((res) => {
    console.log(res);
    categoryItems.value = res?.data;
  });
});


await useAsyncData("filtersFeatures", () => {
  $fetch(`${config.public.baseURL}category/${route.params.id}/features`, {
    headers: {
      Accept: "application/json",
      "Accept-Language": locale.value,
      "Content-type": "application/json",
    },
  }).then((res) => {
    console.log(res);
    filtersFeatures.value = res?.data;
  });
});
</script>

<style lang="scss" scoped></style>
