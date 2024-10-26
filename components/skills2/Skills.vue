<template>
  
  <div class="grid sm:grid-cols-2 gap-4 justify-start">
    <div>   
      <p class="card-textt text-left md:text-center leading-8 md:leading-8 lg:text-left mb-4 sm:mb-0">
        I'm comfortable using different programming languages and technologies
        for different projects and tasks. which include web development, both
        frontend and backend. I also have experience with the Linux environment,
        Docker, and deploying apps on AWS and Digital Ocean.
      </p>
    </div>
    <div class="flex flex-wrap gap-0 justify-center">
      <Skills2Skill
        v-for="skill in skills"
        :key="skill.id"
        :text="skill.text"
      />
    </div>
  </div>
</template>

<script setup>
const skills = [
  { id: 14, text: "Algo & DS" },
  { id: 1, text: "Html" },
  { id: 2, text: "Css" },
  { id: 3, text: "Javascript" },
  { id: 3, text: "Vue.js" },
  { id: 4, text: "Python" },
  { id: 5, text: "Php" },
  { id: 6, text: "Laravel" },
  { id: 7, text: "Docker" },
  { id: 8, text: "Nginx" },
  { id: 9, text: "Sql" },
  { id: 10, text: "Linux" },
  { id: 11, text: "Node.js" },
  { id: 12, text: "Webpack" },
  { id: 13, text: "Aws" },
];
</script>
