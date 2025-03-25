<template>
  <section id="skills" data-aos="fade-left" class=" mt-24  flex-col p-8 md:p-16 w-full xl:w-8/12 mx-auto text-center">
    <h4 class="title my-1 text-3xl md:text-4xl flex justify-center mb-5">
        <UIcon  name="i-heroicons-wrench-screwdriver" class="mr-2" />
        <span>Skills </span>
      </h4>
    <div class="grid md:grid-cols-2  lg:grid-cols-3 gap-4">
      <Skills2Skills v-for="domain in domains" :key="domain.id" :text="domain.text" :skills="domain.skills" :icon="domain.icon" :css="domain.css" />

    </div>
 
     <!-- <UCard :ui="{background: 'dark:hover:bg-opacity-80 dark:bg-neutral-900',rounded:'rounded-2xl'}" class=""> 
      <h4 class="title my-1 text-3xl md:text-4xl flex justify-left mb-4">
        <UIcon  name="i-heroicons-wrench-screwdriver" class="mr-2" />
        <span>SKILLS </span>
      </h4>
    
     </UCard> -->
  </section>
  
</template>


<script setup>
const domains = [
{id:1,text:"Front End Development",icon:"i-heroicons-code-bracket",skills:["HTML,CSS,JavaScript","Vue.js","Responsive Web Design", "UI/UX","Performance Optimization"]},
{id:2,text:"Back End Development",icon:"i-heroicons-server",skills:["Python, PHP, Node.js, Java, Laravel",'Databases Design & Optimization','API Development','Testing','Security & Performance' ]},
{id:3,text:"DevOps & Cloud",icon:"i-heroicons-server-stack",skills:["Docker", "Linux" ,"AWS", "Digital Ocean",'Ci/Cd, Github Actions']},
 {id:5,text:"Ai & ML",icon:"i-heroicons-chart-bar",skills:["Reinforcement Learning","Deep Learning",'NLP',"Computer Vision","TensorFlow",],css:'lg:col-start-2'},
];


</script>