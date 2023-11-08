<template>
  <!-- Main Data -->
  <div class="flex justify-between items-center">
    <div class="px-1">
      <img :src="profileUserData.avatar" alt="profile-image" class="w-full" />
    </div>
    <div>
      <h4>{{ profileUserData.fullname }}</h4>
      <h5 class="text-gray">
        +{{ profileUserData.phone_code }}{{ profileUserData.phone }}
      </h5>
    </div>
    <button>
      <img src="../../assets/images/edit-profile.png" alt="profile-edit" />
    </button>
  </div>
  <!-- Lists -->
  <div>
    <NuxtLink
      :to="localePath('/profile/orders')"
      class="flex justify-between items-center text-gray border-gray-light border-b-[1px] pt-4 pb-4"
    >
      <div class="flex items-center gap-2">
        <img src="../../assets/images/cart0.png" alt="orders" />
        <h4>Orders</h4>
      </div>
      <img src="../../assets/images/arrow-right.png" alt="arrow" />
    </NuxtLink>
    <NuxtLink
    :to="localePath('/profile/wishlist')"
      class="flex justify-between items-center text-gray border-gray-light border-b-[1px] pt-4 pb-4"
    >
      <div class="flex items-center gap-2">
        <img src="../../assets/images/cart0.png" alt="orders" />
        <h4>Wishlist</h4>
      </div>
      <img src="../../assets/images/arrow-right.png" alt="arrow" />
    </NuxtLink>
    <NuxtLink
      :to="localePath('/profile/gifts')"
      class="flex justify-between items-center text-gray border-gray-light border-b-[1px] pt-4 pb-4"
    >
      <div class="flex items-center gap-2">
        <img src="../../assets/images/cart0.png" alt="orders" />
        <h4>Gift & Voucher</h4>
      </div>
      <img src="../../assets/images/arrow-right.png" alt="arrow" />
    </NuxtLink>
    <NuxtLink
    :to="localePath('/profile/reviews')"
      class="flex justify-between items-center text-gray border-gray-light border-b-[1px] pt-4 pb-4"
    >
      <div class="flex items-center gap-2">
        <img src="../../assets/images/cart0.png" alt="orders" />
        <h4>My Reviews</h4>
      </div>
      <img src="../../assets/images/arrow-right.png" alt="arrow" />
    </NuxtLink>
    <NuxtLink
    :to="localePath('/profile/wallet')"
      class="flex justify-between items-center text-gray border-gray-light border-b-[1px] pt-4 pb-4"
    >
      <div class="flex items-center gap-2">
        <img src="../../assets/images/cart0.png" alt="orders" />
        <h4>My Wallet</h4>
      </div>
      <img src="../../assets/images/arrow-right.png" alt="arrow" />
    </NuxtLink>

    <NuxtLink
      to="/"
      class="flex justify-between items-center text-red-700 border-gray-light border-b-[1px] pt-4 pb-4"
    >
      <div class="flex items-center gap-2">
        <img src="../../assets/images/cart0.png" alt="orders" />
        <h4>Delete My Account</h4>
      </div>
      <img src="../../assets/images/arrow-right.png" alt="arrow" />
    </NuxtLink>
    <button
    @click.prevent="logOut"
      class="w-full flex justify-between items-center text-red-700 border-gray-light border-b-[1px] pt-4 pb-4"
    >
      <div class="flex items-center gap-2">
        <img src="../../assets/images/cart0.png" alt="orders" />
        <h4>Log Out</h4>
      </div>
      <img src="../../assets/images/arrow-right.png" alt="arrow" />
    </button>
  </div>
</template>

<script setup>
const props = defineProps(["profileUserData"]);
const localePath = useLocalePath()
const logOut = async () => {
    try {
     useCookie('token').value = null
     refreshNuxtData()
      await navigateTo("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
</script>
<style lang="scss" scoped></style>
