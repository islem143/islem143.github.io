<template>

  <main data-aos="zoom-in" class=" relative	 mt-24 background-grid">
    <div class="mx-auto w-full xl:w-8/12 px-8 md:px-16">

      <div class="grid grid-col-1    lg:grid-cols-3 w-full   md:gap-4">
        <div class="text-center lg:col-span-2  w-full ">
          <h1 class="md:text-5xl text-4xl sm:text-4xl font-bold  lg:text-left    ">
            <span class="">I am ISLEM</span>

            <span class="block text-5xl md:text-7xl mt-4 dark:text-green-400">A Software Engineer.</span>
          </h1>
          <div class="lg:w-[75%]">

            <p class="lg:text-left  ma mt-3 text-lg">Specializing in full-stack development, building high-performance and user friendly applications.</p>
          </div>
          <div class="flex lg:flex-row flex-col justify-start gap-3 mt-8">

            <a target="_blank" href="pdf/Djennane_Islem_CV.pdf">
              <UButton class="hover:scale-110 transition-transform rounded-xl " size="xl" label="My CV"
                icon="i-heroicons-identification" />
            </a>
            <NuxtLink :to="{ path: '/', hash: '#projects' }">


              <UButton class="hover:scale-110 transition-transform rounded-xl" size="xl" label="My Projects"
                icon="i-heroicons-code-bracket-square" />
            </NuxtLink>
            <div>
        <div class="flex place-content-center gap-1">
          <a target="_blank" href="https://www.linkedin.com/in/djennane-islem">
            <svg-icon class="icon " name="linkedin" /></a>

          <a target="_blank" href="https://github.com/islem143">
            <svg-icon class="icon " name="github" /></a>
            <a target="_blank" href="https://www.youtube.com/@djennaneislem5792">
              <svg-icon class="icon" name="youtube" /></a>
        </div>
      </div>
          </div>
        </div>
        <div class="mx-auto mt-4 lg:mt-0">

          <img loading="lazy" id="myImage" style="border-radius: 5%;max-width: 300px;" class="border-2 border-green-400  h-64 sm:h-fit       " src="/img/111.webp" />

        </div> 

      </div>




      
    </div>
  </main>
</template>
<script setup>
const f = ref(null);

</script>
<style scoped>
.img {

  max-width: 100%;
}

.icon {
  margin-left: 10px;
  width: 30px;
  transition: width 0.1s;
  color: white;
  height: 40px;
}

.pro {
  animation: bounce 5s infinite;
}
</style>
