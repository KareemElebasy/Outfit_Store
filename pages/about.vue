<template>
  <div v-if="!about">
    <Loading />
  </div>
  <div v-else-if="about" class="container mx-auto p-2 pb-5">
    <div class="grid gap-3 md:grid-cols-2 pb-3">
      <div class="my-auto w-5/6">
        <h4 class="italic text-[1.8rem] pb-5 font-[500 ] uppercase">
          Our Story
        </h4>
        <p>
          outfit is the leading online shopping platform, bringing a new culture
          of fashion to Egypt. Launched in 2018, Outfit was founded by Hilda
          Louca with the vision to unite and promote all Egyptian designers, and
          revive the culture of fashion in Egypt. Now home to over 300 Egyptian
          designers and brands, Outfit is the largest hub of its kind to
          designers in Egypt.
        </p>
      </div>
      <div class="relative">
        <img class="w-full" src="~/assets/images/about1.png" alt="image" />
        <img
          class="absolute bottom-0 left-[-7rem]"
          src="about.image"
          alt="about-imge"
        />
        <!-- Missing : To Fix Error Dashboard -->
      </div>
    </div>
    <div class="grid gap-10 md:grid-cols-2 pb-3">
      <div><img src="~/assets/images/about2.png" alt="aboutimage" /></div>
      <div class="my-auto w-5/6">
        <h4 class="italic text-[1.8rem] pb-5 font-[500 ] uppercase">
          Our dream
        </h4>
        <p>{{ about ? about.image : "Loading" }}</p>
        <p>
          Outfit extended mission is to showcase the country's top design
          talents in a well-curated digital platform of international standards.
          All the platform's resources are directed in helping the local
          designers flourish locally and internationally through providing them
          with all the latest digital tools to guarantee ultimate reach, in
          addition to business development support for their business aiming to
          become the number one online destination for Egyptian and Regional
          designers to retail their products worldwide.
        </p>
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
      <div><img src="~/assets/images/about1.png" alt="" srcset="" /></div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

const about = ref(null);
useAsyncData("about", () => {
  $fetch(`${config.public.baseURL}about`).then((res) => {
    about.value = res.data[0];
    console.log(res.data[0].image);
  });
});
console.log(about);
</script>

<style lang="scss" scoped></style>
