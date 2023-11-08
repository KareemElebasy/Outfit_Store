<template>
  <div v-if="!about">
    <Loading />
  </div>
  <div v-else class="container mx-auto p-2 pb-5">
    <div class="grid gap-3 md:grid-cols-2 pb-3">
      <div class="my-auto w-5/6">
        <div v-html="about.desc">
        </div>
      </div>
      <div>
        <img class="w-full" src="~/assets/images/about1.png" alt="image" />
      </div>
    </div>
    <div class="grid gap-10 md:grid-cols-2 pb-3">
      <div><img class="w-full" src="~/assets/images/about2.png" alt="aboutimage" /></div>

      <div class="my-auto w-5/6">
        <h4 class="italic text-[1.8rem] pb-5 font-[500 ] uppercase">
          Our dream
        </h4>
        <div v-html="about.desc">
        </div>
      </div>
    </div>
    <div class="grid gap3 md:grid-cols-2">
      <div class="my-auto w-5/6">
        <h4 class="italic text-[1.8rem] pb-5 font-[500 ] uppercase">
          OUR APPROACH
        </h4>
        <p>
          Outfit promises personal service through dedicated customer care,
          hassle- free shipping in exclusive signature packaging, free returns,
          and a fully- secured online platform. pieces are carefully curated an
          go through extensive quality and authenticity checks to be featured on
          the platform. in addition, all products are styled and offered with
          its extended family by our certified and professional stylist.
        </p>
      </div>
      <div><img src="~/assets/images/about1.png" alt="out-fit" /></div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const { locale } = useI18n();

const about = ref(null);
useAsyncData("about", () => {
  $fetch(`${config.public.baseURL}about`, {
    headers: {
      "Accept-language": locale.value,
    },
  }).then((res) => {
    about.value = res.data[0];
  });
});
</script>

<style lang="scss" scoped></style>
