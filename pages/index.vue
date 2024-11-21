<template>
  <Head lang="en">
    <Title>djennane-islem</Title>
 
    <!-- <Link rel="preconnect" href="https://fonts.googleapis.com"/>
<Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<Link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/> -->
<Link rel="preconnect" href="https://fonts.googleapis.com" />
<Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<Link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
   
  </Head>

 
    <Main />
 <!--    <About />
    <Skills />
    <!-- <Services /> -->
    <Projects />
    <Education/>
    <Certifications />
    <Experience />
    <Contact  /> 
     --> 

</template>

<script setup>
import Services from '~/components/Services.vue';



const defaultValue = 'item-1'

const accordionItems = [
  { value: 'item-1', title: 'Is it accessible?', content: 'Yes. It adheres to the WAI-ARIA design pattern.' },
  { value: 'item-2', title: 'Is it unstyled?', content: 'Yes. It\'s unstyled by default, giving you freedom over the look and feel.' },
  { value: 'item-3', title: 'Can it be animated?', content: 'Yes! You can use the transition prop to configure the animation.' },
]

</script>

