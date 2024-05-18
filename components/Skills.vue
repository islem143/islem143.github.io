<template>
  <section id="skills" data-aos="fade-left" class="mt-24 flex flex-col p-8 md:p-16 w-full xl:w-8/12 mx-auto text-center">
     <UCard :ui="{background: 'dark:hover:bg-opacity-80 dark:bg-neutral-900',rounded:'rounded-2xl'}" class=""> 
      <h4 class="title my-1 text-3xl md:text-4xl flex justify-left mb-4">
        <UIcon  name="i-heroicons-wrench-screwdriver" class="mr-2" />
        <span>SKILLS </span>
      </h4>
      <Skills2Skills />
     </UCard>
  </section>
</template>
