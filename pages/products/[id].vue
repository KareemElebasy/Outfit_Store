<template>
  <div class="container mx-auto p-2" v-if="itemDetailActive">
    <div class="grid gap-2 grid-cols-12">
      <div class="col-span-12 md:col-span-7">
        <div class="grid gap-1 grid-cols-12">
          <div class="col-span-4">
            <div class="max-h-[10rem]">
              <img :src="itemDetailActive.images[1].url" />
            </div>
            <div class="max-h-[10rem]">
              <img :src="itemDetailActive.images[0].url" />
            </div>
            <div class="max-h-[10rem]">
              <img :src="itemDetailActive.images[0].url" />
            </div>
          </div>
          <div class="col-span-8">
            <img :src="itemDetailActive.images[2].url" />
          </div>
        </div>
      </div>
      <div class="bg-primary-light col-span-12 md:col-span-5">
        <p class="text-gray font-[600] text-[1.2rem] pb-3">
          {{ itemDetailActive.name }}
        </p>
        <span class="flex gap-1 pb-2">
          <img
            v-for="star in 5"
            src="../../assets/images/star.png"
            alt="star-img"
          />
        </span>
        <div>
          <span class="uppercase text-[1.1rem] font-[700]">{{
            itemDetailActive.price
          }}</span>
        </div>
        <p class="uppercase text-sale pt-2 pb-2">save 100 egp</p>
        <div class="flex items-center gap-20">
          <div>
            <p class="text-[.9rem]">Select Color</p>
            <div class="flex gap-2 pb-2 pt-3">
              <img src="../../assets/images/imgcolor.png" alt="img-color" />
              <img src="../../assets/images/imgcolor.png" alt="img-color" />
              <img src="../../assets/images/imgcolor.png" alt="img-color" />
            </div>
          </div>
          <div>
            <p class="text-[.9rem]">Select Size</p>
            <div class="flex gap-3 pb-2 pt-3">
              <button
                @click.prevent="itemDetailActive = itemSmall"
                class="border-2 p-1 rounded-md text-gray"
              >
                SM
              </button>
              <button
                @click.prevent="itemDetailActive = itemMediam"
                class="border-2 p-1 rounded-md text-gray"
              >
                Md
              </button>
              <button
                @click.prevent="itemDetailActive = itemLarge"
                class="border-2 p-1 rounded-md text-gray"
              >
                Xl
              </button>
              <button
                @click.prevent="itemDetailActive = itemXlarge"
                class="border-2 p-1 rounded-md text-gray"
              >
                XXl
              </button>
            </div>
          </div>
        </div>
        <!-- flash sale button -->
        <button
          class="bg-yellow px-4 py-2 flex items-center justify-between w-full rounded-md"
        >
          <div class="flex items-center">
            <img src="../../assets/images/thunder-icon.png" alt="icon" />
            <p class="px-2">Flash Sale</p>
          </div>
          <p>Ends in 24 : 50 : 40</p>
        </button>
        <!-- add to Card btn -->
        <button
          class="bg-primary rounded-md px-4 py-2 flex items-center justify-center mt-3 text-white w-3/5 ms-auto"
        >
          <img
            class="bg-white rounded-lg"
            src="../../assets/images/cart0.png"
            alt="card-icon"
          />
          <p class="px-2">Add to cart</p>
        </button>
        <div>
          <h6>Shipping to Egypt</h6>
          <div class="flex gap-5">
            <img src="../../assets/images/shipping.png" alt="shipping" />
            <p>Free Express Shipping on orders over 2500 Egp</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Section Rating -->
    <!-- <div class="grid gap-2 md:grid-cols-2">
      <div>
        <h4 class="text-[1.2rem] font-[700]">Customer Reviews ( 17 )</h4>
        <div class="flex items-center gap-2 pt-2 px-2">
          <img
            v-for="star in 5"
            src="../../assets/images/star.png"
            alt="star"
          />
          <p>4 Out Of 5</p>
        </div>
      </div>
      <div>
        <h4>23 Ratings</h4>
        <div class="progress-bars w-3/5">
          <div class="progresswprapper">
            <div class="flex justify-between mb-1">
              <span class="text-gray">5 Stars</span>
              <span class="text-sm font-medium text-blue-700 dark:text-white"
                >55%</span
              >
            </div>
            <div class="w-full bg-gray rounded-full h-2.5">
              <div
                class="bg-primary h-2.5 rounded-full"
                style="width: 55%"
              ></div>
            </div>
          </div>
          <div class="progresswprapper">
            <div class="flex justify-between mb-1">
              <span class="text-gray">4 Stars</span>
              <span class="text-sm font-medium text-blue-700 dark:text-white"
                >45%</span
              >
            </div>
            <div class="w-full bg-gray rounded-full h-2.5">
              <div
                class="bg-primary h-2.5 rounded-full"
                style="width: 45%"
              ></div>
            </div>
          </div>
          <div class="progresswprapper">
            <div class="flex justify-between mb-1">
              <span class="text-gray">3 Stars</span>
              <span class="text-sm font-medium text-blue-700 dark:text-white"
                >40%</span
              >
            </div>
            <div class="w-full bg-gray rounded-full h-2.5">
              <div
                class="bg-primary h-2.5 rounded-full"
                style="width: 40%"
              ></div>
            </div>
          </div>
          <div class="progresswprapper">
            <div class="flex justify-between mb-1">
              <span class="text-gray">2 Stars</span>
              <span class="text-sm font-medium text-blue-700 dark:text-white"
                >35%</span
              >
            </div>
            <div class="w-full bg-gray rounded-full h-2.5">
              <div
                class="bg-primary h-2.5 rounded-full"
                style="width: 35%"
              ></div>
            </div>
          </div>
          <div class="progresswprapper">
            <div class="flex justify-between mb-1">
              <span class="text-gray">1 Stars</span>
              <span class="text-sm font-medium text-blue-700">30%</span>
            </div>
            <div class="w-full bg-gray rounded-full h-2.5">
              <div
                class="bg-primary h-2.5 rounded-full"
                style="width: 30%"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-3/4 mt-5 mb-5">
        <h4 class="text-[1rem] font-[400]">T***K</h4>
        <div class="flex items-center gap-2 pt-2 px-2">
          <img
            v-for="star in 5"
            src="../../assets/images/star.png"
            alt="star"
          />
          <p>4 Out Of 5</p>
        </div>
        <p class="text-[.9rem] mt-3">
          The pattern very sexy but fabric not good. It's fix for me, the color
          is not bright as the picture.
        </p>
        <div class="flex gap-5 mt-3 text-gray text-[.9rem]">
          <p>Overall Fit: True to Size</p>
          <p>Color: Red</p>
          <p>Size: S</p>
        </div>
        <div class="flex gap-2 mt-5 mb-5">
          <img
            src="../../assets/images/singleproduct1.png"
            alt="single-image-product"
          />
          <img
            src="../../assets/images/singleproduct2.png"
            alt="single-image-product"
          />
          <img
            src="../../assets/images/singleproduct3.png"
            alt="single-image-product"
          />
        </div>
        <div class="text-gray text-[1rem] flex justify-between items-center">
          <div class="flex gap-2 justify-between items-center">
            <button>
              <img src="../../assets/images/like.png" alt="liked-image" />
            </button>
            <p>Helpful (3)</p>
          </div>
          <p>5 Sep,2022</p>
        </div>
      </div>
      <div class="w-3/4 mt-5 mb-5">
        <h4 class="text-[1rem] font-[400]">T***K</h4>
        <div class="flex items-center gap-2 pt-2 px-2">
          <img
            v-for="star in 5"
            src="../../assets/images/star.png"
            alt="star"
          />
          <p>4 Out Of 5</p>
        </div>
        <p class="text-[.9rem] mt-3">
          The pattern very sexy but fabric not good. It's fix for me, the color
          is not bright as the picture.
        </p>
        <div class="flex gap-5 mt-3 text-gray text-[.9rem]">
          <p>Overall Fit: True to Size</p>
          <p>Color: Red</p>
          <p>Size: S</p>
        </div>
        <div class="flex gap-2 mt-5 mb-5">
          <img
            src="../../assets/images/singleproduct1.png"
            alt="single-image-product"
          />
          <img
            src="../../assets/images/singleproduct2.png"
            alt="single-image-product"
          />
          <img
            src="../../assets/images/singleproduct3.png"
            alt="single-image-product"
          />
        </div>
        <div class="text-gray text-[1rem] flex justify-between items-center">
          <div class="flex gap-2 justify-between items-center">
            <button>
              <img src="../../assets/images/like.png" alt="liked-image" />
            </button>
            <p>Helpful (3)</p>
          </div>
          <p>5 Sep,2022</p>
        </div>
      </div>
      <div class="w-3/4 mt-5 mb-5">
        <h4 class="text-[1rem] font-[400]">T***K</h4>
        <div class="flex items-center gap-2 pt-2 px-2">
          <img
            v-for="star in 5"
            src="../../assets/images/star.png"
            alt="star"
          />
          <p>4 Out Of 5</p>
        </div>
        <p class="text-[.9rem] mt-3">
          The pattern very sexy but fabric not good. It's fix for me, the color
          is not bright as the picture.
        </p>
        <div class="flex gap-5 mt-3 text-gray text-[.9rem]">
          <p>Overall Fit: True to Size</p>
          <p>Color: Red</p>
          <p>Size: S</p>
        </div>
        <div class="flex gap-2 mt-5 mb-5">
          <img
            src="../../assets/images/singleproduct1.png"
            alt="single-image-product"
          />
          <img
            src="../../assets/images/singleproduct2.png"
            alt="single-image-product"
          />
          <img
            src="../../assets/images/singleproduct3.png"
            alt="single-image-product"
          />
        </div>
        <div class="text-gray text-[1rem] flex justify-between items-center">
          <div class="flex gap-2 justify-between items-center">
            <button>
              <img src="../../assets/images/like.png" alt="liked-image" />
            </button>
            <p>Helpful (3)</p>
          </div>
          <p>5 Sep,2022</p>
        </div>
      </div>
      <div class="w-3/4 mt-5 mb-5">
        <h4 class="text-[1rem] font-[400]">T***K</h4>
        <div class="flex items-center gap-2 pt-2 px-2">
          <img
            v-for="star in 5"
            src="../../assets/images/star.png"
            alt="star"
          />
          <p>4 Out Of 5</p>
        </div>
        <p class="text-[.9rem] mt-3">
          The pattern very sexy but fabric not good. It's fix for me, the color
          is not bright as the picture.
        </p>
        <div class="flex gap-5 mt-3 text-gray text-[.9rem]">
          <p>Overall Fit: True to Size</p>
          <p>Color: Red</p>
          <p>Size: S</p>
        </div>
        <div class="flex gap-2 mt-5 mb-5">
          <img
            src="../../assets/images/singleproduct1.png"
            alt="single-image-product"
          />
          <img
            src="../../assets/images/singleproduct2.png"
            alt="single-image-product"
          />
          <img
            src="../../assets/images/singleproduct3.png"
            alt="single-image-product"
          />
        </div>
        <div class="text-gray text-[1rem] flex justify-between items-center">
          <div class="flex gap-2 justify-between items-center">
            <button>
              <img src="../../assets/images/like.png" alt="liked-image" />
            </button>
            <p>Helpful (3)</p>
          </div>
          <p>5 Sep,2022</p>
        </div>
      </div>
    </div> -->

    <!-- Customer Also Viewed -->
    <div class="pt-5">
      <products-product-may-liked />
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const { id } = useRoute().params;
const itemSmall = ref(null);
const itemMediam = ref(null);
const itemLarge = ref(null);
const itemXlarge = ref(null);
const itemDetailActive = ref(itemSmall);
const res = await $fetch(`${config.public.baseURL}products/${id}`, {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
    "Accept-language": "en",
  },
});

const item = res.product;
const itemDetails = res.product.product_details;
console.log(itemDetails);
itemSmall.value = itemDetails[0];
itemMediam.value = itemDetails[1];
itemLarge.value = itemDetails[2];
itemXlarge.value = itemDetails[3];
</script>

<style lang="scss" scoped></style>
