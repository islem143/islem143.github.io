<template>
  <div data-aos="zoom-in" class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <EducationGroupEducation :id="ex.id" v-for="ex in exps" :key="ex.id" :title="ex.title" :date="ex.date"
      :location="ex.location" :description="ex.description" :tags="ex.tags" />
  </div>
</template>

<script setup>
const exps = [
  {
    id: "1",
    title: "Master's degree in artificial intelligence",
    date: "2021-2023",
    location: 'Oran-Algeria',
    description:
      "I have obtained a master's degree in artificial intelligence from the university of Oran, Algeria.",
    tags: ["AI", "ML", "DL", "Image Processing", "Probs & Stats", "Databases"],
  },
  {
    id: "2",
    title: "Bachelor's degree in Computer Science",
    date: "2018-2021",
    location: 'Oran-Algeria',
    description:
      "I have obtained a bachelor's degree in informations and systems from the university of Oran, Algeria.",
    tags: ["Software Engineering", "Algo & DS", "Graph Theory", "Networking", "Theory of computation", "Databases"],
  },
];
</script>