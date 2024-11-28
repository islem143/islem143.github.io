<template>
   
  
      
      
    <section  data-aos="fade-right" data-aos-duration="4000" id="about"   class="z-100   p-8 md:p-16 w-full xl:w-8/12   mx-auto transition-opacity ease-in duration-1000  ">
      
        <p class="text-4xl mt-4">Services:</p>
     <div class="grid grid-cols-3 gap-4 ">
    <UCard class="mt-5 col-span-2"  :ui="{background: 'dark:hover:bg-opacity-80 dark:bg-neutral-900',rounded:'rounded-2xl'}">
      <div class="flex">
        <UIcon  name="i-heroicons-wrench-screwdriver text-3xl" class="mr-2" />
       
 

      </div>
        
      <p class="text-3xl text-left text-slate-300 mt-3">Design</p>
    <p class="my-2 md:text-md  text-left text-gray-300 font-light  "> I enjoy learning how things
        work internally and spend a good amount of time digging deeper in the
        </p>
    <div  class="flex flex-wrap">
 
        <UBadge v-for="tag in tags" :key="tag" class="m-1">{{ tag }}</UBadge>
    </div>
  
  </UCard>
  <UCard class="mt-5 col-span-1"  :ui="{background: 'dark:hover:bg-opacity-80 dark:bg-neutral-900',rounded:'rounded-2xl'}">
      <div class="flex">
        <UIcon  name="i-heroicons-code-bracket  text-3xl" class="mr-2" />
       
 

      </div>
        
      <p class="text-2xl text-left text-slate-300 mt-3">Back End Development</p>
    <p class="my-2 md:text-md  text-left text-gray-300 font-light  "> I enjoy learning how things
        work internally and spend a good amount of time digging deeper in the
        </p>
    <div  class="flex flex-wrap">
 
        <UBadge v-for="tag in tags" :key="tag" class="m-1">{{ tag }}</UBadge>
    </div>
  
  </UCard>
  <UCard class="mt-5 col-span-3"  :ui="{background: 'dark:hover:bg-opacity-80 dark:bg-neutral-900',rounded:'rounded-2xl'}">
      <div class="flex">
        <UIcon  name="i-heroicons-light-bulb  text-3xl" class="mr-2" />
       
 

      </div>
        
      <p class="text-3xl text-left text-slate-300 mt-3">Ai & Machine Learning</p>
    <p class="my-2 md:text-md  text-left text-gray-300 font-light  "> I enjoy learning how things
        work internally and spend a good amount of time digging deeper in the
        </p>
    <div  class="flex flex-wrap">
 
        <UBadge v-for="tag in tags" :key="tag" class="m-1">{{ tag }}</UBadge>
    </div>
  
  </UCard>
</div>



        </section>
       



</template>
