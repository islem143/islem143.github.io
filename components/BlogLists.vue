<template>
  <div>

    <ContentList v-if="nbrPosts != 0" v-slot="{ list }" path="/posts">
      <UInput v-if="list.length != 0" icon="i-heroicons-magnifying-glass-20-solid" size="sm" color="white"
        :trailing="false" placeholder="Search Posts..." class="w-1/3 mb-4" />

      <div v-if="list.length != 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">


        <UCard v-for="blog in list" :key="blog.slug"
          class="dark:bg-gray-900 drak:border-5 dark:border-gray-950 dark:text-white py-2 my-2  rounded-lg overflow-hidden shadow-lg">
          <NuxtImg @click="navigateTo(blog.slug)" class=" cursor-pointer object-cover"
            :src="`/img/${blog.image}.webp`" :alt="blog.title" />
          <div class="my-2">
            <div class="font-bold text-xl mb-2">{{ blog.title }}</div>
            <p class=" text-base">
              {{ blog.description }} </p>
          </div>
          <div class="my-2">
            <UBadge v-for="tag in blog.tags"
              class="inline-block cursor-pointer bg-gray-200 dark:hover:bg-gray-400 dark:bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
              {{ tag }}</UBadge>

          </div>
          <div class="my-2">
            <NuxtLink :to="`${blog.slug}`">
              <UButton class="btn p-2 rounded-md ">Read More</UButton>
            </NuxtLink>
          </div>
        </UCard>




      </div>

    </ContentList>
    <div v-else>
      <UCard class="mt-8">
        <p class="text-center">No Posts Found.</p>
      </UCard>
    </div>
  </div>
</template>

<script setup>
const { data } = await useAsyncData('home', () => queryContent('/posts').find())
console.log(data.value);

let nbrPosts = ref(0);
nbrPosts = data.value.length;

</script>
