<template>
  <NuxtLayout name="404">
    <div class="container mx-auto">
      <div class="flex flex-col justify-center items-center">
        <img
          src="./assets/images/404.png"
          class="max-h-[10rem]"
          alt="error-image"
        />
        <div class="text-4xl pt-3 pb-3">
          we can't find the page you're lookin' for.
        </div>
        <button
          class="font-bold border-black border-2 px-4 py-2 rounded-md"
          @click="goBack"
        >
          Go To Home
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const router = useRouter();
const goBack = () => {
  router.push("/");
};
</script>

<style lang="sass" scoped></style>
