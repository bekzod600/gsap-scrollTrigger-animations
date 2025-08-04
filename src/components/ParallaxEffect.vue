<template>
  <div class="parallax-wrapper">
    <div class="bg"></div>
    <div class="content">
      <h1>Parallax Effekt</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.to('.bg', {
    y: -800, // fon yuqoriga ko‘tariladi
    scrollTrigger: {
      trigger: '.parallax-wrapper',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  })
})
</script>

<style scoped>
.parallax-wrapper {
  height: 150vh;
  position: relative;
  overflow: hidden;
}
.bg {
  position: absolute;
  width: 100%;
  height: 200%;
  background: url('https://picsum.photos/1920/1080') center/cover no-repeat;
}
.content {
  position: relative;
  text-align: center;
  padding-top: 200px;
  color: white;
  font-size: 3rem;
  font-weight: bold;
}
</style>
