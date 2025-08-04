/* eslint-disable @typescript-eslint/no-explicit-any */
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import * as ScrollTriggerModule from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTriggerModule.default)

export function useGsapAnimation(
  setupFn: (
    gsap: typeof import('gsap'),
    ScrollTrigger: typeof import('gsap/ScrollTrigger'),
  ) => void,
) {
  let triggers: ScrollTrigger[] = []
  let timelines: gsap.core.Timeline[] = []

  onMounted(() => {
    // setupFn ichida yaratilgan animatsiyalarni to‘playmiz
    const originalTo = gsap.to
    const originalTimeline = gsap.timeline

    // gsap.to ni wrapper qilamiz
    ;(gsap.to as any) = function (this: any, ...args: any[]) {
      const tween = Function.prototype.apply.call(originalTo, this, args)
      if ((tween as any).scrollTrigger) {
        triggers.push((tween as any).scrollTrigger)
      }
      return tween
    }

    // timeline yaratilsa ham to‘plab qo‘yamiz
    gsap.timeline = function (this: any, ...args: any[]) {
      const tl = originalTimeline.call(this, args[0])
      timelines.push(tl)
      return tl
    } as any

    // Foydalanuvchi animatsiyalarini chaqiramiz
    setupFn(
      gsap as unknown as typeof import('gsap'),
      ScrollTriggerModule as typeof import('gsap/ScrollTrigger'),
    )

    // O‘zgartirilgan gsap funksiyalarini tiklaymiz
    gsap.to = originalTo
    gsap.timeline = originalTimeline as any
  })

  onUnmounted(() => {
    // Barcha ScrollTriggerlarni o‘chiramiz
    triggers.forEach((t) => t.kill())
    triggers = []

    // Barcha timeline’larni o‘chiramiz
    timelines.forEach((tl) => tl.kill())
    timelines = []

    // Barcha global ScrollTriggerlarni tozalash
    ScrollTriggerModule.default.getAll().forEach((t) => t.kill())
  })
}
