<template>
  <div class="wrapper">
    <section class="panel panel1">1 - Bo‘lim</section>
    <section class="panel panel2">2 - Bo‘lim</section>
    <section class="panel panel3">3 - Bo‘lim</section>
    <section class="panel panel4">4 - Bo‘lim</section>
  </div>
</template>

<script setup lang="ts">
// import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGsapAnimation } from '@/composables/useGsapAnimation'

gsap.registerPlugin(ScrollTrigger)

// onMounted(() => {
useGsapAnimation(() => {
  ScrollTrigger.create({
    trigger: '.panel2',
    pin: true,
    start: 'top top',
    end: '+=500',
  })

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.panel3',
      start: 'top 50%',
      scrub: true,
    },
  })
  tl.to('.panel3', { scale: 1.2, rotation: 15 }).to('.panel3', {
    backgroundColor: '#fff',
    color: '#000',
  })
})
</script>

<style scoped>
.wrapper {
  height: 400vh; /* Scroll bo‘lishi uchun uzun */
}
.panel {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
  color: white;
}
.panel1 {
  background: #1abc9c;
}
.panel2 {
  background: #3498db;
}
.panel3 {
  background: #9b59b6;
}
.panel4 {
  background: #e74c3c;
}
</style>
