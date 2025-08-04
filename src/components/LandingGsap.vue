<template>
  <div class="landing">
    <!-- Parallax bo‘lim -->
    <section class="hero">
      <div class="bg"></div>
      <h1 class="title">GSAP Landing</h1>
    </section>

    <!-- Pin qilingan bo‘lim -->
    <section class="pin-section">
      <h2>Scroll qiling</h2>
    </section>

    <!-- Timeline bo‘lim -->
    <section class="timeline-section">
      <div class="box red"></div>
      <div class="box green"></div>
      <div class="box blue"></div>
    </section>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGsapAnimation } from '@/composables/useGsap'

gsap.registerPlugin(ScrollTrigger)

useGsapAnimation((gsap, ScrollTrigger) => {
  // 1) Parallax effekt
  gsap.to('.bg', {
    y: -200,
    scrollTrigger: {
      trigger: '.hero',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  })

  // 2) Pin qilingan bo‘lim
  ScrollTrigger.create({
    trigger: '.pin-section',
    start: 'top top',
    end: '+=500',
    pin: true,
    markers: false,
  })

  // 3) Timeline animatsiya
  const tl: gsap.core.Timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.timeline-section',
      start: 'top 20%',
      end: 'bottom bottom',
      scrub: true,
      markers: true,
    },
  })
  tl.to('.red', { x: 200, duration: 1 })
    .to('.green', { y: 200, duration: 1 })
    .to('.blue', { scale: 1.5, duration: 1 })
})
</script>

<style scoped>
.landing {
  font-family: sans-serif;
}
.hero {
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.bg {
  position: absolute;
  width: 100%;
  height: 200%;
  background: url('https://picsum.photos/1920/1080') center/cover no-repeat;
  z-index: -1;
}
.title {
  font-size: 4rem;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.pin-section {
  height: 100vh;
  background: #e74c3c;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
}
.timeline-section {
  height: 200vh;
  background: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
}
.box {
  width: 100px;
  height: 100px;
}
.red {
  background: red;
}
.green {
  background: green;
}
.blue {
  background: blue;
}
</style>
