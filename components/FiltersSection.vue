<template>
  <div
    class="border-2 bg-primary-light p-2 rounded-lg border-primary"
    v-if="filtersFeatures"
  >
    <div class="my-6">
      <h6 class="font-bold pb-2 text-primary">Sorted By</h6>
      <div v-for="item in filtersFeatures?.sort" :key="item.key">
        <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
          <input
            type="radio"
            :value="item.key" 
            :id="item.key"
            v-model="selectedCat.sort_Option"
          />

          <label
            class="inline-block pl-[0.15rem] hover:cursor-pointer text-gray"
            :for="item.key"
          >
            {{ item.value }}
          </label>
        </div>
      </div>

      <div>
        <h6 class="font-bold pb-2 text-primary">Sizes</h6>
        <div v-for="item in filtersFeatures?.sizes" :key="item.id">
          <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
            <input
              class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
              type="checkbox"
              :value="item.id"
              :id="item.id"
              v-model="selectedCat.size"
            />

            <label
              class="inline-block pl-[0.15rem] hover:cursor-pointer text-gray"
              :for="item.id"
            >
              {{ item.name }}
            </label>
          </div>
        </div>
      </div>

      <div class="mt-2">
        <h6 class="font-bold pb-2 text-primary">Colors</h6>

        <div v-for="item in filtersFeatures?.colors" :key="item.id">
          <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
            <input
              class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
              type="checkbox"
              :value="item.id"
              :id="item.id"
              v-model="selectedCat.color_id"
            />

            <label
              class="inline-block pl-[0.15rem] hover:cursor-pointer text-gray"
              :for="item.id"
            >
              {{ item.name }}
            </label>
          </div>
        </div>
      </div>
      <button
        class="bg-primary text-white p-[5px] rounded-[5px] mt-6"
        type="button"
        @click="handleFilter"
      >
        Filter
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["filtersFeatures"]);
const selectedCat = ref({
  sort_Option: [],
  color_id: [],
  size: [],
});
const router = useRouter();

const emits = defineEmits(["filterItems"]);

function handleFilter() {
  emits("filterItems", { ...selectedCat.value });
  console.log(selectedCat);
}
</script>

<style lang="scss" scoped></style>
