<template>
  <div class="parallax-multi">
    <div class="layer back"></div>
    <div class="layer mid"></div>
    <div class="layer front"></div>
    <h1 class="title">Multi-Layer Parallax</h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const layers = gsap.utils.toArray<HTMLElement>('.layer')

  layers.forEach((layer, i) => {
    gsap.to(layer, {
      y: -(i + 1) * 150,
      scrollTrigger: {
        trigger: '.parallax-multi',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  })
})
</script>

<style scoped>
.parallax-multi {
  height: 150vh;
  position: relative;
  overflow: hidden;
}
.layer {
  position: absolute;
  width: 100%;
  height: 200%;
  background-size: cover;
  background-position: center;
}
.back {
  background-image: url('https://picsum.photos/id/1011/1920/1080');
  z-index: 1;
}
.mid {
  background-image: url('https://picsum.photos/id/1015/1920/1080');
  z-index: 2;
}
.front {
  background-image: url('https://picsum.photos/id/1016/1920/1080');
  z-index: 3;
}
.title {
  position: relative;
  text-align: center;
  padding-top: 200px;
  font-size: 4rem;
  color: white;
}
</style>
