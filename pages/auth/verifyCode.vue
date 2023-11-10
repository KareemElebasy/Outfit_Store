<template>
  <div class="container mx-auto mt-5 mb-5 min-h-[50vh]">
    <div class="flex items-center justify-center">
      <div class="">
        <h6 class="text-center text-primary pb-2">OutFit</h6>
        <h5 class="text-primary">Confirmation Code</h5>
        <h5 class="text-primary">Please Enter On Verify Button </h5>
        <form @submit.prevent="onSubmit">
          <input class="block bg-gray" type="number" />
          <button class=" bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Verfiy</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});
const config = useRuntimeConfig()
const { locale } = useI18n();
const onSubmit = async () => {
  $fetch(`${config.public.baseURL}verify`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Accept-Language": locale.value,
    },
    body: {
      phone: useCookie('phone').value,
      code: "1111",
      country_id: "2",
    },
  }).then((res) => {
    const data = res?.data
    navigateTo("/login", { replace: true });
  }).catch((err) => {
    console.log(err);
  })
}
</script>

<style lang="scss" scoped></style>
