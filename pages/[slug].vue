<script setup lang="ts">
const {slug}=useRoute().params
console.log(slug);

import Prism from "prismjs";

onMounted(() => {
  console.log("yes");
  
  Prism.highlightAll();
});

</script>



<template>
 
  <div class="w-1/2 mx-auto p-8">
 <ContentDoc :path="`/posts/${slug}`"  v-slot="{doc}">
    <ContentRenderer :value="doc"></ContentRenderer>
     </ContentDoc>
    </div>
</template>