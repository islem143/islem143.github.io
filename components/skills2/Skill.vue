<template>

    <p class="m-1  text-xs rounded-xl py-1 px-3  text-black bg-neutral-100 hover:underline cursor-pointer">
      {{ text }}
    </p>
  
</template>

<script setup>
const props = defineProps(["text"]);
</script>

<style lang="postcss">
.skill {
  @apply w-20 text-black hover:text-green-500 shadow-xl p-2 bg-white rounded-lg flex flex-col transition ease-in-out duration-100 hover:translate-y-1 place-items-center;
}
</style>

.
