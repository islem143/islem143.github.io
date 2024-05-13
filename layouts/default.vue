<template>
  <div class="fixed bg-slate-200 dark:bg-gray-800  top-0 w-full z-40  flex items-center gap-x-6 overflow-hidden   py-2.5 px-3.5 before:flex-1">
 
  <div class="">
    <p class="text-sm leading-6 ">
      <strong class="font-semibold">🇵🇸 #FreePalestine</strong>
    </p>
  </div>
  <div class="flex flex-1 justify-end">
   
  </div>
</div>

  <Header class=" p-0 md:p-2 mt-10 relative "></Header>
  <UButton
    v-if="scroll > 50"
    style="z-index: 1000;"
    icon="i-heroicons-arrow-long-up"
    variant="solid"
    size="xl"
    :to="{ path: '/' }"
    class="text-black       bg-slate-500  cursor-pointer p-2 rounded-full fixed bottom-2 right-5"
    @click="top"
  />
    
  
  <!-- <button @click="toogle">theme</button> -->
 
 
  <div class="">
    <slot></slot>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";




let scroll = ref(0);
const top = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
onMounted(() => {
  window.addEventListener("scroll", () => {
    scroll.value =
      document.documentElement.scrollTop || document.body.scrollTop;
  });
});


useColorMode().preference="dark";

const toogle=()=>{
  useColorMode().preference=useColorMode().preference=="dark"?'light':'dark'
}

</script>
<style >

.icon {
  height: 100px;
  width: 30px;
}


</style>
