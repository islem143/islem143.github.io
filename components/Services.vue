<template>




  <section data-aos="fade-right" data-aos-duration="4000" id="about"
    class="z-100    mt-96 p-8 md:p-16 w-full xl:w-8/12   mx-auto transition-opacity ease-in duration-1000  ">

    <h4 class="title my-1 text-3xl md:text-4xl flex justify-center mb-5">
      <UIcon name="i-heroicons-wrench-screwdriver" class="mr-2" />
      <span>Services </span>
    </h4>
    <div class="grid md:grid-cols-2  lg:grid-cols-3 gap-4 ">
      <UCard v-for="service in services" :key="service.id" class="mt-5 " :ui="{ background: 'dark:hover:bg-opacity-80 dark:bg-neutral-900', rounded: 'rounded-2xl' }">
        <div class="flex">



        </div>

        <p class="text-2xl text-left text-slate-300 mt-3 mb-2">{{service.title}}</p>
       
        <div v-for="skill in service.skills" :key="skill" class="flex items-center">
          <UIcon name="i-heroicons-check-circle" class="text-green-500 mr-2 " />
          <span class= " text-start text-gray-300 text-sm md:text-base">{{ skill }}</span>
        </div>

      </UCard>
  
      
    </div>



  </section>

</template>


<script setup>
const services = [
  { id: 1,title:'Full Stack Development', text: "Frontend Development,Backend Development,API Integrations,Database Design & Optimization", icon: "i-heroicons-code-bracket", skills: ["Web Application Development ", "API Integrations", "Database Design & Optimization","Security & Performance"] },
  { id: 3, title: "Cloud & Devops", icon: "i-heroicons-server-stack", skills: ["Cloud Infrastructure Setup", "CI/CD Pipeline Implementation"] },
  { id: 5, title: "Others", icon: "i-heroicons-chart-bar", skills: ["Custom Automation Scripts", "Chrome Extension Development","AI Image Processing && OCR"], css: 'lg:col-start-2' },

];




</script>