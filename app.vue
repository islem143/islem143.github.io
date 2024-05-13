<template>
 <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>



<script  setup lang="ts">
import "assets/css/dracula.css";


useSeoMeta({
  title: 'islem djennane software engineer',
  ogTitle: 'islem djennane software engineer',
  description:"I'm islem djennane, a software engineer focus on fullstack web development",
  ogDescription: "I'm islem djennane, a software engineer focus on fullstack web development",
  //ogImage: 'https://example.com/image.png',
 // twitterCard: 'summary_large_image',
})

</script>


<style>

body .dark  {
  background-color: #091a28;
  color: #00ffaa;
}

 body .light {
  background-color: #f1e7d0;
  color: #ffffff;
}
</style>