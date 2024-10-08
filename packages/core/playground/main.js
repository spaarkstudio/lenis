import { LoremIpsum } from 'lorem-ipsum'
import Lenis from '../src/index.ts'
import './style.css'

document.querySelector('#app').innerHTML = new LoremIpsum().generateParagraphs(
  30
)

const lenis = new Lenis({
  autoResize: false,
  // lerp: 0.9,
  // virtualScroll: (e) => {
  //   // e.deltaY *= 10
  //   return !e.event.shiftKey
  //   // return true
  // },
  // duration: 2,
  // easing: (t) => t,
  // prevent: () => {
  //   return true
  // },
})
// console.log(lenis.dimensions.height)
lenis.on('scroll', (e) => {
  console.log(e.scroll, e.velocity)
  // console.log(e.scroll, e.velocity, e.isScrolling, e.userData)
})
// lenis.on('virtual-scroll', (e) => {
//   // console.log(e)
//   // e.deltaY *= 10
//   // e.cancel = true
// })
window.lenis = lenis

window.addEventListener('resize', () => {
  lenis.resize()

  console.log(lenis.actualScroll, lenis.scroll, window.scrollY)
})

// Proxy test for lenis
const proxyLenis = new Proxy(lenis, {})

const scrollToTop = document.getElementById('scroll-to-top')

scrollToTop.addEventListener('click', () => {
  console.log(proxyLenis.isStopped)
  proxyLenis.scrollTo(0, {
    lerp: 0.1,
  })
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
