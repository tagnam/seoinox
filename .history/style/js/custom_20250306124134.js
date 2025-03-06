// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)


$('.team-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1
  dots: true,
  in
  speed: 300,
});


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

gsap.from(".seo-half-progress", {
  x: 20,
  opacity: 5,
  duration: 3,
  repeat: -1,
  yoyo: true,
   ease: "power1.inOut"
});


gsap.to(".sound-elements", {
  opacity: 5,
  duration: 1.5,
  repeat: -1,
  yoyo: true,
   ease: "power1.inOut"
});


gsap.to(".man-rocket", {
  y: 5,
//   opacity: 5,
  duration: 2,
  repeat: -1,
  yoyo: true,
   ease: "power1.inOut"
});