<template>
  <div>
    <!-- Top Nav -->
    <div class="bg-primary py-2 flex items-center justify-center gap-5">
      <p class="text-white text-[.8rem]">
        Buy 2 Get 1 Of Them <span class="text-[#FE6C4C]">50% Off</span>
      </p>
      <p class="text-white text-[.9rem]">
        <span class="text-[#FE6C4C]">23</span> h :
        <span class="text-[#FE6C4C]">25</span> m :
        <span class="text-[#FE6C4C]">45</span> s
      </p>
    </div>
    <div class="flex justify-center items-center mt-10 mb-10">
      <img src="../assets/images/logo.png" alt="logo" />
    </div>
    <slot />

    <HomeFooter />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
