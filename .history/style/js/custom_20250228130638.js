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
  start: "top top",
  end: '750px top',
  pin: ".choice-content-container",
  // markers: true,
  scrub: 1,
  anticipatePin: 1
})

gsap.from(".header-content > *", {
  x: -200,
  opacity: 0,
  duration: 0.5,
  stagger: 0.5,
  
});

gsap.from(".chooise-card", {