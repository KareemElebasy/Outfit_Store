<template>
  <div class="hidden md:block">
    <nav class="container bg-white h-[60px] flex items-center justify-between mx-auto px-[12px]">
      <div>
        <nuxt-link :to="switchLocalePath($i18n.locale == 'ar' ? 'en' : 'ar')" class="text-[#9F8B58]">
          <img v-if="$i18n.locale == 'ar'" src="../../assets/images/en.png" class="w-[2rem]" alt="flag-english">
          <img v-if="$i18n.locale == 'en'" src="../../assets/images/ar.png" class="w-[2rem]" alt="flag-arabic">
        </nuxt-link>
      </div>
      <div>
        <NuxtLink :to="localePath('/')">
          <img class="w-full" src="../../assets/images/logo.png" alt="logo" />
        </NuxtLink>
      </div>
      <div class="flex items-center justify-between">
        <NuxtLink :to="localePath('/profile/orders')">
          <img src="../../assets/images/profile.png" alt="profile-image" />
        </NuxtLink>
        <NuxtLink class=" mx-3 relative" :to="localePath('/wishlist')">
          <img src="../../assets/images/liked.png" alt="Liked-product" />
          <span v-if="fav_length > 0"
            class="absolute right-[-.4rem] top-[-.5rem] bg-primary text-white rounded-full px-[.2rem]">{{ fav_length
            }}</span>
        </NuxtLink>
        <NuxtLink :to="localePath('/cart')" class="relative">
          <img src="../../assets/images/cart0.png" alt="card " />
          <span v-if="count_of_cart > 0"
            class="absolute right-[-.4rem] top-[-.5rem] bg-primary text-white rounded-full px-[.2rem]">{{ count_of_cart
            }}</span>
        </NuxtLink>
      </div>
    </nav>
    <ProductsCategoryBar />
  </div>
  <!-- Small Devices -->
  <nav
    class="container relative bg-white h-[60px] flex items-center justify-between mx-auto px-[12px] md:hidden border-b-2 border-primary">
    <div>
      <div>
        <nuxt-link :to="switchLocalePath($i18n.locale == 'ar' ? 'en' : 'ar')" class="text-[#9F8B58]">
          <img v-if="$i18n.locale == 'ar'" src="../../assets/images/en.png" class="w-[2rem]" alt="flag-english">
          <img v-if="$i18n.locale == 'en'" src="../../assets/images/ar.png" class="w-[2rem]" alt="flag-arabic">
        </nuxt-link>
      </div>
    </div>
    <div>
      <NuxtLink :to="localePath('/')">
        <img class="w-full" src="../../assets/images/logo.png" alt="logo" />
      </NuxtLink>
    </div>
    <!-- SideBar -->
    <div>
      <button class="relative group">
        <div
          class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 ">
          <div
            class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden group-focus:translate-x-1.5">
            <div
              class="bg-primary h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg] group-focus:w-2/3 delay-150">
            </div>
            <div class="bg-primary h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10">
            </div>
            <div
              class="bg-primary h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg] group-focus:w-2/3 delay-150">
            </div>
          </div>
        </div>
      </button>
    </div>
    <div class=" hidden absolute bg-primary-light z-40  w-full h-screen top-11">
      <ul class="text-center">
        <li>
          <nuxt-link :to=localePath()>Home</nuxt-link>
        </li>
        <li>
          <nuxt-link :to=localePath()>Home</nuxt-link>
        </li>
        <li>
          <nuxt-link :to=localePath()>Home</nuxt-link>
        </li>
        <li>
          <nuxt-link :to=localePath()>Home</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
  <div class="md:hidden fixed bottom-0 left-0 z-50 w-full bg-white border-t-2 border-primary pt-3 pb-3">
    <div class="flex items-center justify-evenly  max-h-[10rem]">
      <NuxtLink :to="localePath('/')">
        <img src="../../assets/images/download.WEBP" alt="profile-image" />
      </NuxtLink>
      <NuxtLink :to="localePath('/profile/orders')">
        <img src="../../assets/images/profile.png" alt="profile-image" />
      </NuxtLink>
      <NuxtLink class="mx-[.8rem] relative" :to="localePath('/wishlist')">
        <img src="../../assets/images/liked.png" alt="Liked-product" />
        <span v-if="fav_length > 0"
          class="absolute right-[-.4rem] top-[-.5rem] bg-primary text-white rounded-full px-[.2rem]">{{ fav_length
          }}</span>
      </NuxtLink>
      <NuxtLink class="relative" :to="localePath('/cart')">
        <img src="../../assets/images/cart0.png" alt="card " />
        <span v-if="count_of_cart > 0"
          class="absolute right-[-.4rem] top-[-.5rem] bg-primary text-white rounded-full px-[.3rem]">{{ count_of_cart
          }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>

const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();
const config = useRuntimeConfig();

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
    count_of_cart.value = res.count_of_cart;
  });
});
const fav_length = ref(0)
await useAsyncData("wishlist", () => {
  $fetch(`${config.public.baseURL}favourites`, {
    headers: {
      Accept: "application/json",
      "Accept-Language": "en",
      "Content-type": "application/json",
      Authorization: `Bearer${useCookie("token").value}`,
    },
  }).then((res) => (fav_length.value = res.data.length));
});
console.log(fav_length);
</script>

<style lang="scss" scoped></style>
