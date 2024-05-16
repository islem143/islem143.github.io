<template>
  <div data-aos="zoom-in" class="grid grid-cols-1">
    <ExperiencesGroupExperience
      v-for="ex in exps"
      :key="ex.id"
      :title="ex.title"
      :date="ex.date"
      :work="ex.work"
      :description="ex.description"
    />
  </div>
</template>

<script setup>
const exps = [
  {
    id: "1",
    title: "Full Stack Developer @Pentabin",
    date: "June 2022-Now",
    description:
      "I'm currently working as a fullstack developer @Pentabin in Oran, Algeria. Some of my work :",
    work: [
      "Implementing new features.",
      "Deploying apps on AWS",
      "App performance analysis",
      "Designing new user interfaces.",
      "Improving front-end performance and speed.",
      "Optimizing sql queries and api calls.",
      "Unit and feature testing.",
      "Ci/Cd using github actions."
    ],
  },
  {
    id: "2",
    title: "Freelancing",
    date: "2021-Now",
    description:
      "I have worked on a web app of a calibration and measuring and control company. Below is some of my work :",
    work: [
      "Building a new custom file manager.",
      "Implementing new features.",
      "Fixing bugs.",
      "Redesigning the ui.",
    ],
  },
];
</script>
