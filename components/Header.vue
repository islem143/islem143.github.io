<template>
  <header class=" text-slate-700 dark:text-white ">
    <div
      class="w-10/12 xl:w-7/12 mx-auto sm:flex place-items-center justify-between p-1 sm:p-3"
    >
    
      <div class="flex place-items-center justify-between">
        <div id="logo w-full ">

         <NuxtImg  @click="navigateTo('/')" width="120" class="cursor-pointer absolute top-0 left-100" :src="$colorMode.value=='dark' ||$colorMode.value=='system' ?'/img/logo-dark.webp':'/img/logo.webp'" alt=""/>
        </div>
        <div class="sm:hidden">
          <svg-icon
             
            @click="toggleMenu"
            class="burger-button icon cursor-pointer dark:text-white"
            name="burgerMenu"
          />
        </div>
      </div>
      <nav :class="' rounded-md  transition-opacity	  duration-75	 ' + menuClass">
        <ul class="sm:flex-row text-center sm:flex mt-2">
          <li class="my-1">
            <NuxtLink  @click="toggleMenu" class="link" to="/">Home</NuxtLink>
          </li>
          <li class="my-1">
            <NuxtLink  @click="toggleMenu" class="link" :to="{ path: '/', hash: '#about' }"
              >About</NuxtLink
            >
          </li >
          <li class="my-1">
            <NuxtLink  @click="toggleMenu" class="link" :to="{ path: '/', hash: '#skills' }"
              >Skills</NuxtLink
            >
          </li>
          <li class="my-1">
            <NuxtLink  @click="toggleMenu" class="link" :to="{ path: '/', hash: '#services' }"
              >Services</NuxtLink
            >
          </li>
          <li class="my-1">
            <NuxtLink  @click="toggleMenu" class="link" :to="{ path: '/', hash: '#projects' }"
              >Projects</NuxtLink
            >
          </li>
          <li class="my-1">
            <NuxtLink  @click="toggleMenu" class="link" :to="{ path: '/', hash: '#experience' }"
              >Experience</NuxtLink
            >
          </li>
          <li class="my-1">
            <NuxtLink  @click="toggleMenu" class="link" :to="{ path: '/blog' }"
              >Blog</NuxtLink
            >
          </li>
          <li class="" >
            <UButton
            @click="toggleMenu"
              class="link mb-4 ml-1 bg-violet-600 dark:bg-green-400 dark:text-black	 hover:bg-violet-700  text-white  hover:text-white"
              :to="{ path: '/', hash: '#contact' }"
              >Contact Me</UButton
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";
const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const menuClass = computed(() => {
  return isOpen.value > 0
    ? "opacity-100"
    : "sm:opacity-100 opacity-0 sm:block hidden";
});
</script>

<style>

.burger-button::before {
  content: "";
  margin-top: -100px;
}

.burger-button::after {
  content: "";
  margin-top: -100px;
}

</style>
