<template>
  <section id="contact" data-aos="zoom-in" class="flex flex-col p-8 w-full">
    <div class="mx-auto text-center">
      <h4 class="text-3xl md:text-4xl title my-4 flex justify-center ">
        <UIcon  name="i-heroicons-envelope" class="mr-2" />
        <span>CONTACT ME</span>
      </h4>

      
     



      <!-- <p class="has-tooltip">
        Hover me <span class="tooltip text-red-500 -mt-8">Look at this!</span>
      </p> -->
      <div class="flex flex-col md:flex-row">
        <UCard>
          <h5 class="flex justify-center  text-lg place-items-center ">
            
            <UIcon  name="i-heroicons-inbox" class="mr-2 text-green-500 " />
            <span class="hover:underline"> admin@islem-djennane.pro</span>
          </h5>
        
            <div class="flex justify-center mt-4">
              <a target="_blank" href="https://www.linkedin.com/in/djennane-islem">
          <svg-icon class="icon" name="linkedin"
        /></a>

        <a target="_blank" href="https://github.com/islem143">
          <svg-icon class="icon " name="github"
        /></a>
            </div>
          </UCard>
      </div>
      
    </div>
  </section>
</template>

<script setup></script>
<style scoped>
.icon {
  width: 30px;
  height: 30px;
  margin-right:5px ;
}

</style>
