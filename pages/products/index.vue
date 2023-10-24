<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap">
      <div class="hidden md:block w-1/4">
        <!-- Filter Section -->
        <FiltersSection />
      </div>
      <!-- Cards Section -->
      <div class="sm:w-3/4 w-full grid sm:grid-cols-2 md:grid-cols-3 gap-2">
        <div v-for="p in 20" class="crad rounded p-2">
          <div class="relative">
            <img
              src="../../assets/images/card4.png"
              alt="card-image"
              class="object-cover w-full"
            />
            <button class="absolute rounded bottom-1 right-1">
              <img src="../../assets/images/heart.png" alt="icon" />
            </button>
          </div>
          <div class="pt-[5px]">
            <p class="text-gray text-[.9rem]">
              Single Button Flap Detail Tweed Overcoat
            </p>
            <div class="mt-1 flex justify-between">
              <span class="text-gray text-[13px]">Egp 254</span>
              <span class="text-grayDark p-1 rounded bg-gray text-[14px]"
                >Top Rated</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
