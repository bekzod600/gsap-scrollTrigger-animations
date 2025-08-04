import { createRouter, createWebHistory } from 'vue-router'

// Komponentlarni import qilish
import ScrollGsap from '@/components/ScrollGsap.vue'
import ScrollGsaptwo from '@/components/ScrollGsaptwo.vue'
import ParallaxEffect from '@/components/ParallaxEffect.vue'
import LandingGsap from '@/components/LandingGsap.vue'
import DModelAnimation from '@/components/3DModelAnimation.vue'

const routes = [
  { path: '/', redirect: '/scroll-gsap' },
  { path: '/scroll-gsap', component: ScrollGsap },
  { path: '/scroll-gsap-two', component: ScrollGsaptwo },
  { path: '/parallax-effect', component: ParallaxEffect },
  { path: '/landing-gsap', component: LandingGsap },
  { path: '/3d-model', component: DModelAnimation },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
