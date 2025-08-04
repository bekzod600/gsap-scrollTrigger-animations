import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { onMounted, onBeforeUnmount } from 'vue'

gsap.registerPlugin(ScrollTrigger)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GsapCallback = (gsap: any, ScrollTrigger: any) => void

export function useGsapAnimation(callback: GsapCallback): void {
  onMounted(() => {
    callback(gsap, ScrollTrigger)
  })

  onBeforeUnmount(() => {
    ScrollTrigger.getAll().forEach((st) => st.kill())
  })
}
