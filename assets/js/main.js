const hamMenu = document.querySelector(".ham-menu");
    const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});


document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);1

    function applyParallaxEffect(selector) {
        gsap.to(selector + ' .parallax', {
            yPercent: 2, // Adjust this value to control the parallax effect
            ease: 'power1.inOut', // Add easing for smoother animation
            scrollTrigger: {
                trigger: selector,
                start: 'top bottom', // When the top of the container hits the bottom of the viewport
                end: 'bottom top', // When the bottom of the container hits the top of the viewport
                scrub: 1, // Smooth scrubbing with a delay of 1 second
                markers: true // Optional: Add markers to visualize the start and end points
            }
        });
    }

    // Apply the parallax effect to each image container
    applyParallaxEffect('.about-image-container');
    applyParallaxEffect('.servicesTwo-image-container');
    applyParallaxEffect('.servicesOne-image-container');
});