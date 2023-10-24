<template>
  <div>
    <h6 class="text-[1.2rem]">Gift & Voucher</h6>
    <div class="grid md:grid-cols-12">
      <div
        v-for="whish in 4"
        class="col-span-6 crad rounded overflow-hidden p-2 relative"
      >
        <img src="../../assets/images/gift1.png" alt="card-image" />
        <div class="pt-2 flex items-center gap-2">
          <img src="../../assets/images/gift-icon.png" alt="image" />
          <p class="text-[.8rem]">Get 30% Off Dress! With Code: Outfit30</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
