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
    autoplaySpeed: 800,    // Autoplay speed
    arrows: false ,           // Enable navigation arrows
    // duration:0,
    
    });
    });
    