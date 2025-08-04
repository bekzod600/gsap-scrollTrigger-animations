<template>
  <div class="container" style="height: 100vh">
    <model-viewer
      id="myModel"
      src="/bike.glb"
      camera-controls
      style="width: 500px; height: 500px"
      camera-orbit="0deg 75deg 3m"
      disable-zoom
      interaction-prompt="none"
    ></model-viewer>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import '@google/model-viewer'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // const model = document.querySelector('#myModel') as HTMLElement
  gsap.to('#myModel', {
    attr: { 'camera-orbit': '360deg 75deg 3m' }, // 0° → 360°
    scrollTrigger: {
      trigger: '.container',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      pin: true,
      markers: true,
    },
  })
})
</script>
