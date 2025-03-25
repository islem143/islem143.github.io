<template>
  <div class="card flex flex-col">
    <img loading="lazy" width="300" height="300" v-if="img" :src="img" alt="project image" />

    <p v-else class="text-white text-xl">{{ title }}</p>

    <div class="info w-full">
      <h1 v-if="img" class="text-xl font-bold">{{ title }}</h1>
      <UButton class="mr-2" v-if="more" :to="`/project/${id}`">
        <UIcon name="i-heroicons-plus" />

        <span class="ml-2"> More </span>
      </UButton>
      <UButton v-if="github" target="_blank" :to="github">
        <UIcon name="i-heroicons-link" />

        <span class="ml-2"> Github </span>
      </UButton>


      <!-- <div class="flex flex-wrap mt-8">
        
        <Projects2Skill
       
       v-for="skill in skills"
       :title="skill"
       :key="skill"
     ></Projects2Skill>
      </div> -->

    </div>
  </div>

  <!-- <div
    class="bg-slate-200 p-6 shadow-xl rounded-lg mx-2 my-8 justify-between flex flex-col w-full place-items-center"
  >
    <h3 class="text-xl">{{ title }}</h3>
    <div class="w-full mt-2">
      <p class="font-light text-left">{{ description }}</p>
    </div>
    <div class="w-full mt-2">
      <h3 class="text-left">Skills:</h3>
    </div>

    <div
      class="grid xl:grid-cols-5 2xl:grid-cols-6 xxs:grid-cols-3 xs:grid-cols-4 md:grid-cols-7 grid-cols-2 place-items-center gap-2 skills w-full mt-2"
    >
      <Projects2Skill
        v-for="skill in skills"
        :title="skill"
        :key="skill"
      ></Projects2Skill>
    </div>
    <div class="flex justify-center w-full">
      <a
        v-if="github"
        target="_blank"
        :href="github"
        class="btn text-md text-white mt-1 transition ease-in-out duration-100 hover:translate-y-0.5"
        >Github Link</a
      >
      <a v-else target="_blank" class="btn text-md text-white mt-4">Soon ...</a>
    </div>
  </div> -->
</template>

<script setup>

const props = defineProps(["id", 'more', "description", "title", "github", "img", "skills"]);
</script>

<style lang="scss">
$color: rgb(51 65 85);

.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
}

.card {
  background: $color;
  padding: 20px;
  box-shadow: 0px 7px 10px rgba(black, 0.5);
  border-radius: 5px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;

  transition: 0.4s ease-out;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;

    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: rgb(51 65 85);

    z-index: 2;
    transition: 0.3s;
    opacity: 0;
  }

  &:hover {
  
    transform: translateY(20px);

    &:before {

      opacity: 0.9;
      visibility: visible;
    }

    .info {
      opacity: 1;
      visibility: visible;
      transform: translateY(0px);
    }
  }

  .info {
 
    position: relative;
    z-index: 3;

    text-align: center;

    width: 100%;
    opacity: 0;
    visibility: hidden;
    transform: translateY(100px);
    transition: 0.3s;
    margin-bottom: 20px;

    a {
      background: rgb(74 222 128);
      border-radius: 5px;
      padding: 10px;
      margin-top: 10px;

      &:hover {
        background: rgb(96, 235, 147);
      }
    }

    h1 {
    

      margin-bottom: 10px;
    }
  }

  img {
   

    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 5px;
    width: 100%;
    height: 100%;
  }
}
</style>
