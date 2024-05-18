<template>
    <UCard  :ui="{background: 'dark:hover:bg-opacity-80 dark:bg-neutral-900',rounded:'rounded-2xl'}">
    <template #header>
        
        <h2 class="text-xl mb-1 text-left font-bold">{{ title }}</h2>
        <p class="font-light text-left text-slate-300">{{ date }}</p>
    </template>

    <p class="my-2 md:text-lg  text-left ">{{ description }}</p>
    <div  class="flex flex-wrap">
 
        <UBadge v-for="tag in tags" :key="tag" class="m-1">{{ tag }}</UBadge>
    </div>
  
  </UCard>
    <!-- <div class="flex font-light  gap-4 overflow-hidden">
      <div>
        <div class="w-8 dark:bg-green-400 bg-violet-500 h-8 rounded-full"></div>
      </div>
      <div class="text-left">
        <h2 class="text-2xl mb-1 font-bold">{{ title }}</h2>
        <span class="font-light text-slate-300">{{ date }}</span>
        <p class="my-2 md:text-lg  ">{{ description }}</p>
        
      </div>
    </div> -->
  </template>
  
  <script setup>
  const props = defineProps(["id","description", "title", "date","tags"]);
  </script>
  
  <style scoped>
  ul {
    list-style-type: disc;
  }
  </style>
  