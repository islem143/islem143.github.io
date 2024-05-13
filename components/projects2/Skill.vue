<template>
  <UBadge
    class=" text-black p-1 my-1 mx-1 text-xs  w-20 flex flex-col place-items-center place-content-center"
  >
    <!-- <svg-icon class="icon" :name="text" /> -->
    <p>{{ title }}</p>
  </UBadge>
</template>

<script setup>
const props = defineProps(["title"]);
</script>
