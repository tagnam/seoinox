// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)



gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.create({
  trigger: ".chooise-card-container",
  start: "top",
  end: 'bottom top',
  pin: ".choice-content-container",
  markers: true,
  scrub: 1,
  anticipatePin: 1
})

