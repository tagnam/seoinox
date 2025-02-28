// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)



$(document).ready(function() {
    $('.team-slider').slick({
    dots: true,             // Enable navigation dots
    infinite: true,         // Infinite loop
    speed: 800,             // Transition speed
    slidesToShow: 3,        // Number of slides to show
    slidesToScroll: 1,      // Number of slides to scroll
    autoplay: true,         // Enable autoplay
    autoplaySpeed: 1500,    // Autoplay speed
    arrows: false ,           // Enable navigation arrows
    // duration:0,
    
    });
    });
    

//    Start  Gsap animations  


gsap.registerPlugin(ScrollTrigger);

gsap.from('.hero-content', {
    duration: 2,
    y: '-100%',
    opacity: 0,
    ease: 'bounce',
    delay: 0.5
    sc
});