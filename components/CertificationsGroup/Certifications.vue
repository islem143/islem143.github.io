<template>
  <div class=" grid grid-cols-1 md:grid-cols-2  md:gap-10  place-items-center">
    <CertificationsGroupCertification
      v-for="cert in certifications"
      :key="cert.id"
      :title="cert.title"
      :img="cert.img"
      :link="cert.link"
    />
  </div>
</template>

<script setup>
const certifications = [
  {
    id: 1,
    title: "AWS Cloud Foundations",
    link: "https://www.credly.com/badges/3026739e-568b-46a8-9954-cebaa84da2b6/public_url",
    img: "/img/image.webp",
  },
  {
    id: 1,
    title: "Docker & Kubernetes: The Practical Guide [Udemy] ",
    link: "https://www.udemy.com/certificate/UC-5949ed2f-de59-4f18-858b-d337937e2de9/",
    img: "/img/docker.webp",
  },
];
</script>
