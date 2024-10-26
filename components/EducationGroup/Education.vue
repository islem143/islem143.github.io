<template>
  <div class="cardd p-6 ">


    <h2 class="text-xl mb-1 text-left font-bold">{{ title }}</h2>
    <p class="font-light text-left text-slate-300">{{ date }}</p>


    <p class="my-2   text-left card-textt">{{ description }}</p>
    <div class="flex flex-wrap">

      <div v-for="tag in tags" :key="tag" class="m-1 hover:underline py-1 px-3  text-xs bg-white font-light text-black rounded-md  ">{{ tag }}
      </div>
    </div>

  </div>

</template>

<script setup>
const props = defineProps(["id", "description", "title", "date", "tags"]);
</script>

<style scoped>
ul {
  list-style-type: disc;
}
</style>