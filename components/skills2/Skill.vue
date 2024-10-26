<template>

    <UBadge class="m-1 h-8  hover:underline cursor-pointer">
      {{ text }}
    </UBadge>
  
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
