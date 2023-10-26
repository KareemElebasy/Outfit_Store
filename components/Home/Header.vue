<template>
  <div>
    <nav
      class="container bg-white h-[60px] flex items-center justify-between mx-auto px-[12px]"
    >
      <div>
        <nuxt-link
            :to="switchLocalePath($i18n.locale == 'en' ? 'ar' : 'en')"
            class="text-[#9F8B58]"
          >
            <i class="fas fa-globe"></i>
            {{ $t(`${$i18n.locale}`) }}
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
        <NuxtLink class="px-[.8rem]" :to="localePath('/wishlist')">
          <img src="../../assets/images/liked.png" alt="Liked-product" />
        </NuxtLink>
        <NuxtLink :to="localePath('/cart')">
          <img src="../../assets/images/cart0.png" alt="card " />
        </NuxtLink>
      </div>
    </nav>
    <ProductsCategoryBar />
  </div>
</template>

<script setup>
import { useCartStore } from "~/stores/cart";
import { useUserAuthStore } from "~/stores/userAuth";
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();

const store = useUserAuthStore();
console.log(store.device_Token);
</script>

<style lang="scss" scoped></style>
