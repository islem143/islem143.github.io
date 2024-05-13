<template>
  <UCard class="w-64 h-96 my-2" >
    <template #header>
        
        <h2 class="text-xl mb-1 text-left font-bold text-center text-wrap">{{ title }}</h2>
      
    </template>
    <a target="_blank" :href="link">
    <NuxtImg  width="250" height="250" class="img-main rounded-md" :src="img" alt="certification image" />

    </a>
  </UCard>
  <!-- <div class="my-8">
    <a target="_blank" :href="link">
      <img width="250" height="250" class="img-main" :src="img" alt="certification image" />
    </a>
    <h4 class="text-lg ">{{ title }}</h4>
  </div> -->
</template>

<script setup>
const props = defineProps(["title", "link", "img"]);
</script>

<style scoped>
.img-main {
  width: 250px;
}
</style>
