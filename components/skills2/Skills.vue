<template>

    <!-- <UCard :class="'mt-5 ' +css?css:''  "  :ui="{background: 'dark:hover:bg-opacity-80 dark:bg-neutral-900',rounded:'rounded-2xl'}">
      <div class="flex">
        <UIcon  :name="icon" class="mr-2 text-3xl" />   
       
 

      </div>
     <p class="text-lg md:text-xl lg:text-2xl text-left text-slate-300 mt-3 mb-3 w-full"> {{ text }} </p>

      <div class="flex flex-col space-y-2">
        <div v-for="skill in skills" :key="skill" class="flex items-center">
          <UIcon name="i-heroicons-check-circle " class="text-green-500 mr-2 " />
          <span class= " text-start text-gray-300 text-sm md:text-base">{{ skill }}</span>
        </div>
      </div>
  </UCard> -->
  <CardContainer>
      <CardBody
        class="group/card relative size-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[30rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]"
      >
        <CardItem
          :translate-z="50"
          class="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translate-z="60"
          class="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem
          :translate-z="100"
          class="mt-4 w-full"
        >
          <NuxtImg
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            class="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div class="mt-20 flex items-center justify-between">
          <CardItem
            :translate-z="20"
            as="a"
            href="https://rahulv.dev"
            target="__blank"
            class="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
          >
            Visit →
          </CardItem>
          <CardItem
            :translate-z="20"
            as="button"
            class="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
          >
            Get Started
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
</template>

<script setup>
const props = defineProps(["text","skills","icon","css"]);
//const skills = [
//   { id: 14, text: "Algo & DS" },
//   { id: 1, text: "HTML" },
//   { id: 2, text: "CSS" },
//   { id: 3, text: "JAVASCRIPT" },
//   { id: 3, text: "Vue.js" },
//   { id: 4, text: "PYTHON" },
//   { id: 5, text: "PHP" },
//   { id: 6, text: "LARAVEL" },
//   { id: 7, text: "DOCKER" },
//   { id: 8, text: "NGINX" },
//   { id: 9, text: "SQL" },
//   { id: 10, text: "LINUX" },
//   { id: 11, text: "Node.js" },
//   { id: 12, text: "Webpack" },
//   { id: 13, text: "AWS" },
// ];
</script>
