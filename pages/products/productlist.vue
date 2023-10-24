<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap">
      <div class="hidden md:block w-1/4">
        <FiltersSection />
      </div>
      <div class="sm:w-3/4 w-full grid md:grid-cols-1 gap-2">
        <div class="pt-5" v-for="card in 6">
          <div class="product-list-card flex gap-2">
            <div>
              <img
                src="../../assets/images/card1.png"
                alt="card-image"
                class="w-full object-fill"
              />
            </div>
            <div>
              <span class="text-gray p-1 rounded bg-grayDark text-[14px]"
                >Top Rated</span
              >
              <h4 class="text-black pt-2 pb-2 text-[.9rem]">
                Single Button Flap Detail Tweed Overcoat
              </h4>
              <p class="text-gray text-[.9rem] pb-2">
                Material : ribbed cotton This asymmetrical cut out top crop top
                can be worn in many different ways Washing Instructions: hand
                wash , wash with similar colors Model Features : Bust : 82 Waist
                : 62 Height : 172
              </p>
              <span class="text-black pb-3 block text-[1rem]">Egp 254</span>
              <button class="px-4 py-2 border-solid border-2 rounded-md">
                See more Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
