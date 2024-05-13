<script setup>
const { data } = await useAsyncData('', () => queryContent().find())
</script>

<template>
  <pre>
    {{ data[1]}}
  </pre>
</template>