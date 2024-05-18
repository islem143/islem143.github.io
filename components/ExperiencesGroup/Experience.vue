<template>
  <UCard :ui="{background: 'dark:hover:bg-opacity-80 dark:bg-neutral-900',rounded:'rounded-2xl'}" class="my-4">
    <template #header>
        
        <h2 class="text-xl mb-1 text-left font-bold">{{ title }}</h2>
        <p class="font-light text-left text-slate-300">{{ date }}</p>
    </template>

    <!-- <p class="my-2 md:text-lg  text-left ">{{ description }}</p> -->
    <!-- <li v-for="w in work" class="text-left" :key="w">
          {{ w }}
        </li> -->
  
  </UCard>
  <!-- <div class="flex font-light  gap-4 overflow-hidden">
    <div>
      <div class="w-8 dark:bg-green-400 bg-violet-500 h-8 rounded-full"></div>
    </div>
    <div class="text-left">
      <h2 class="text-2xl mb-1 font-bold">{{ title }}</h2>
      <span class="font-light text-slate-300		">{{ date }}</span>
      <p class="my-2 md:text-lg  ">{{ description }}</p>
      <ul class="ml-6 mb-8  md:text-lg">
        <li v-for="w in work" :key="w">
          {{ w }}
        </li>
      </ul>
    </div>
  </div> -->
</template>

<script setup>
const props = defineProps(["description", "title", "work", "date"]);
</script>

<style scoped>
ul {
  list-style-type: disc;
}
</style>
