<template>
  <div class="grid sm:grid-cols-2 gap-4 justify-start">
    <div>   
      <p class="md:text-md text-gray-300 font-light text-left md:text-center leading-8 md:leading-8 lg:text-left mb-4 sm:mb-0">
        I'm comfortable using different programming languages and technologies
        for different projects and tasks. which include web development, both
        frontend and backend. I also have experience with the Linux environment,
        Docker, and deploying apps on AWS and Digital Ocean.
      </p>
    </div>
    <div class="flex flex-wrap place-content-start justify-start">
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
  { id: 1, text: "HTML" },
  { id: 2, text: "CSS" },
  { id: 3, text: "JAVASCRIPT" },
  { id: 3, text: "Vue.js" },
  { id: 4, text: "PYTHON" },
  { id: 5, text: "PHP" },
  { id: 6, text: "LARAVEL" },
  { id: 7, text: "DOCKER" },
  { id: 8, text: "NGINX" },
  { id: 9, text: "SQL" },
  { id: 10, text: "LINUX" },
  { id: 11, text: "Node.js" },
  { id: 12, text: "Webpack" },
  { id: 13, text: "AWS" },
];
</script>
