<template>

  <main data-aos="zoom-in" class=" relative	 mt-20 background-grid">
    <div class="mx-auto flex flex-col items-center w-full xl:w-8/12 px-8 md:px-16">

      <div class="flex w-full  alig md:gap-4">
        <div class="text-center  w-full sm:w-1/2 mx-auto md:w-2/3">
          <h1 class="md:text-7xl text-5xl sm:text-4xl font-bold     ">
            <span class="dark:text-green-400">Hi, I'M ISLEM</span>

            <span class="block text-4xl md:text-5xl mt-2">A Software Engineer.</span>
          </h1>

          <div class="flex md:flex-row flex-col justify-center gap-3 mt-8">

            <a target="_blank" href="pdf/Djennane_Islem_CV.pdf">
              <UButton class="hover:scale-110 transition-transform rounded-xl " size="xl" label="My CV"
                icon="i-heroicons-identification" />
            </a>
            <NuxtLink :to="{ path: '/', hash: '#projects' }">


              <UButton class="hover:scale-110 transition-transform rounded-xl" size="xl" label="My Projects"
                icon="i-heroicons-code-bracket-square" />
            </NuxtLink>
          </div>
        </div>


      </div>




      <!-- <div>
        <img class="img-main" src="/img/dev.png" />
      </div> -->

      <div>
        <div class="flex place-content-center gap-6">
          <a target="_blank" href="https://www.linkedin.com/in/djennane-islem">
            <svg-icon class="icon " name="linkedin" /></a>

          <a target="_blank" href="https://github.com/islem143">
            <svg-icon class="icon " name="github" /></a>
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
  margin-top: 60px;
  width: 40px;
  transition: width 0.1s;
  color: white;
  height: 40px;
}

.pro {
  animation: bounce 5s infinite;
}
</style>
