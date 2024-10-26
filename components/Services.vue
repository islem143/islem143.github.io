<template>
    <h4 class="text-center text-5xl">Skills</h4>
    <section id="skills" 
        class=" grid grid-cols-3 mt-8 gap-4  p-8 md:p-16 w-full xl:w-8/12 mx-auto text-center">

        <div  data-aos="zoom-in" data-aos-duration="1000" class="cardd col-span-3 md:col-span-2  p-6">
            <h4 class="title my-1 text-3xl md:text-3xl text-left justify-left mb-4">

                <span>Front End development </span>
            </h4>
            <div class="flex flex-wrap gap-0 ">
                <Skills2Skill v-for="skill in frontSkills" :key="skill.id" :text="skill.text"></Skills2Skill>
            </div>

            <!-- <p class="card-textt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta error nesciunt facere
                possimus nostrum,
                ab quisquam eos dignissimos animi iusto qui, dolorum ducimus similique minima pariatur, rem odit
                accusamus officia!</p> -->
        </div>

        <div data-aos="zoom-in" data-aos-duration="1300" class="cardd col-span-3 md:col-span-1 p-6">
            <h4 class="title my-1 text-3xl md:text-3xl text-left flex justify-left mb-4">

                <span>Cloud & Devops</span>
            </h4>
            <div class="flex flex-wrap gap-0 ">
                <Skills2Skill v-for="skill in cloudSkills" :key="skill.id" :text="skill.text" />
            </div>
            <!-- <p class="card-textt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta error nesciunt facere
                possimus nostrum,
                ab quisquam eos dignissimos animi iusto qui, dolorum ducimus similique minima pariatur, rem odit
                accusamus officia!</p> -->

        </div>
        <div data-aos="zoom-in" data-aos-duration="1600" class="cardd col-span-3 md:col-span-2  p-6">
            <h4 class="title my-1 text-3xl md:text-3xl text-left flex justify-left mb-4">

                <span>Back End development </span>
            </h4>
            <div class="flex flex-wrap gap-0 ">
                <Skills2Skill v-for="skill in backSkills" :key="skill.id" :text="skill.text" />
            </div>
            <!-- <p class="card-textt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta error nesciunt facere
                possimus nostrum,
                ab quisquam eos dignissimos animi iusto qui, dolorum ducimus similique minima pariatur, rem odit
                accusamus officia!</p> -->

        </div>
    

      
        <div data-aos="zoom-in" data-aos-duration="1900" class="cardd col-span-3 md:col-span-1  p-6">
            <h4 class="title my-1 text-3xl md:text-2xl text-left flex justify-left mb-4">

                <span>Project Managements</span>
            </h4>
            <div class="flex flex-wrap gap-0 ">
                <Skills2Skill v-for="skill in projectManagementSkills" :key="skill.id" :text="skill.text" />
            </div>
            <!-- <p class="card-textt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta error nesciunt facere
                possimus nostrum,
                ab quisquam eos dignissimos animi iusto qui, dolorum ducimus similique minima pariatur, rem odit
                accusamus officia!</p> -->

        </div>
        <div data-aos="zoom-in" data-aos-duration="2100" class="cardd  col-span-3 md:col-span-2  p-6">
            <h4 class="title my-1 text-3xl md:text-2xl text-left flex justify-left mb-4">

                <span>Machine learning & Ai</span>
            </h4>
            <div class="flex flex-wrap gap-0 ">
                <Skills2Skill v-for="skill in machileLearingSkills" :key="skill.id" :text="skill.text" />
            </div>
            <!-- <p class="card-textt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta error nesciunt facere
                possimus nostrum,
                ab quisquam eos dignissimos animi iusto qui, dolorum ducimus similique minima pariatur, rem odit
                accusamus officia!</p> -->

        </div>
        <div data-aos="zoom-in" data-aos-duration="2400" class="cardd col-span-3 md:col-span-1 p-6">
            <h4 class="title my-1 text-3xl md:text-2xl text-left flex justify-left mb-4">

                <span>Others</span>
            </h4>
            <div class="flex flex-wrap gap-0 ">
                <Skills2Skill v-for="skill in othersSkills" :key="skill.id" :text="skill.text" />
            </div>
            <!-- <p class="card-textt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta error nesciunt facere
                possimus nostrum,
                ab quisquam eos dignissimos animi iusto qui, dolorum ducimus similique minima pariatur, rem odit
                accusamus officia!</p> -->

        </div>
    </section>
</template>

<script setup>
const machileLearingSkills = [

    { id: 1, text: "Sklearn" },
    { id: 2, text: "Tensorflow" },
    { id: 3, text: "Keras" },
    { id: 4, text: "Reinforcement Learning" },
    { id: 5, text: "Machine Learning" },

];
const othersSkills = [

    { id: 1, text: "Math" },
    { id: 2, text: "Algorithms" },
    { id: 3, text: "Networking" },
    { id: 4, text: "Operating Systems" },


];
const frontSkills = [

    { id: 1, text: "Html" },
    { id: 2, text: "Css" },
    { id: 3, text: "Javascript" },
    { id: 4, text: "Vue.js" },
    { id: 5, text: "Ux/Ui" },

];
const projectManagementSkills = [

    { id: 1, text: "Jira" },
    { id: 2, text: "Agile" },


];
const cloudSkills = [

    { id: 13, text: "Aws" },
    { id: 7, text: "Docker" },
    { id: 8, text: "Nginx" },
    { id: 10, text: "Linux" },
    { id: 10, text: "Ci/Cd" },
];
const backSkills = [

    { id: 4, text: "Python" },
    { id: 5, text: "Php" },
    { id: 6, text: "Laravel" },
    { id: 9, text: "Database desgin & optimization" },
    { id: 9, text: "Sql" },
    { id: 11, text: "Node.js" },
    { id: 11, text: "Api Development" },
];
</script>
