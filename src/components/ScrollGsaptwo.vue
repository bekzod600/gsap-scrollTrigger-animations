<template>
  <div class="wrapper">
    <section class="box">Box</section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // ScrollTrigger.create({
  //   trigger: '.wrapper',
  //   pin: true,
  //   start: 'top top',
  //   end: '+=1600',
  // })
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.wrapper',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      pin: true,
      markers: true,
    },
  })
  // tl.to('.box', { x: 100 }).to('.box', { y: 100 }).to('.box', { x: 0 }).to('.box', { y: 0 })
  tl.to('.box', { left: '100%', duration: 6, transform: 'translateX(-100%)' })
    .to('.box', { top: '100%', left: '100%', duration: 2, transform: 'translate(-100%, -100%)' })
    .to('.box', { top: '100%', left: '0', duration: 1, transform: 'translateY(-100%)' })
    .to('.box', { top: '0', left: '0', duration: 1, transform: 'translateY(0)' })
})
</script>

<style>
body {
  height: 400vh;
}
.wrapper {
  height: 100vh; /* Scroll bo‘lishi uchun uzun */
  background-color: blueviolet;
  padding: 1rem;

  position: relative;
}
.box {
  position: absolute;
  top: 0;
  left: 0;

  width: 100px;
  height: 100px;
  background-color: aqua;
  padding: 1rem;
}
</style>
