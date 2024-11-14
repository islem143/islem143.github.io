<script setup lang="ts">
const {id}=useRoute().params
const {data}=await useFetch("/api/project/"+id,{
    method:"get"
});

console.log(data.value);


let project=data.value.project;
//const images=project.img;


const { data:data2 } = await useAsyncData(id, () => queryContent('project').where({id:parseInt(id)}).findOne())


const isOpen = ref(false)
const currentIndex = ref(0)
const openModel=(index:number)=>{
    isOpen.value=true;
    currentIndex.value=index;


}


</script>

<template>
     <section v-if="project" class="mx-auto    w-full xl:w-7/12 p-8 md:p-16"  >
        
   <h1 class="text-3xl mb-5" >{{ project.title }} </h1>
   
   <UCard>
    <div class="flex justify-end">
    <UButton
   class="mt-4"
        v-if="project.github"
        target="_blank"
       
        :to="project.github"
      >
      <UIcon  name="i-heroicons-link"  />

        <span class="ml-2"> Github </span></UButton
      >
    </div>
    <UCarousel  v-slot="{ item,index }" :items="images" :ui="{ item: 'basis-full' }" class="carrou mx-auto my-4  rounded-lg overflow-hidden " indicators arrows >
    <img class="img w-full"   @click="openModel(index)" :src="item"  draggable="false">
  </UCarousel>
<!-- <Carousel>
    <Slide v-for="(img,index) in project.img" :key="img">
  
     <NuxtImg  class="cursor-zoom-in "  :src="img" />
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />

    </template>
  </Carousel> -->
  
<p> Technologies:</p> 
  <UBadge v-for="skill in project.skills" class="m-1 h-8 font-bold hover:underline cursor-pointer">
      {{ skill }}
    </UBadge>
  <p class="mt-4">{{ project.description }}</p>
 
      <ContentRenderer  class="text-wrap" v-if="data2" :value="data2">
 
      <ContentRendererMarkdown class="mt-8 text-wrap" :value="data2" />
    </ContentRenderer>
</UCard>
<UModal :ui="{'width':' scale-100 md:scale-200'}"  v-model="isOpen">
    
    <img    :src="project.img[currentIndex]" />
 
</UModal>
  
<div>
   
 
  </div>

</section>
</template>




<style >
.carousel__item {
  min-height: 300px;
  width: 100%;
 
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next,
.carousel__pagination-button::after {
  color: rgb(76, 255, 76);
  font-size: 5rem;
  
}
.carrou{
  width:600px;
}
.carrou img{
height: 400px;
}
@media only screen and (max-width: 700px) {
  .carrou{
  width:500px;
}
.carrou img{
height: 500px;
}
}
@media only screen and (max-width: 600px) {
  .carrou{
  width:400px;
}
.carrou img{
height: 400px;
}
}
@media only screen and (max-width: 480px) {
  .carrou{
  width:280px;
}
.carrou img{
height: 280px;
}
}
@media only screen and (max-width: 380px) {
  .carrou{
  width:260px;
}
.carrou img{
height: 260px;
}
}
</style>