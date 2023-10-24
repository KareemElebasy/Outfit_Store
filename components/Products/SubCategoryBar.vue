<template>
  <div class="container mx-auto">
    <div>
      <button
        v-for="item in subTypeData"
        :key="item.id"
        class="text-[14px] mx-1 my-1 border-2 px-2 py-1 rounded-md bg-white text-gray"
      >
        {{ item.name }}
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["subTypeData"]);
</script>

<style lang="scss" scoped></style>
