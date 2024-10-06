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
            yPercent: 5, // Adjust this value to control the parallax effect
            ease: 'power1.inOut', // Add easing for smoother animation
            scrollTrigger: {
                trigger: selector,
                start: 'top bottom', // When the top of the container hits the bottom of the viewport
                end: 'bottom top', // When the bottom of the container hits the top of the viewport
                scrub: 1, // Smooth scrubbing with a delay of 1 second
                markers: false // Optional: Add markers to visualize the start and end points
            }
        });
    }

    // Apply the parallax effect to each image container
    applyParallaxEffect('.aboutImageContainer');
    applyParallaxEffect('.aboutImageContainerTwo');
    applyParallaxEffect('.servicesTwo-image-container');
    applyParallaxEffect('.servicesOne-image-container'); 
    applyParallaxEffect('.imageSixContainer'); 
    applyParallaxEffect('.imageSevenContainer '); 
});

document.addEventListener('input', function (event) {
    if (event.target.tagName.toLowerCase() === 'textarea') {
        autoGrow(event.target);
    }
});

function autoGrow(element) {
    element.style.height = 'auto';
    element.style.height = (element.scrollHeight) + 'px';
}

// Configuration objects for each section
const aboutConfig = [
    {
        id: "aboutBorder",
        svgPath: 'assets/images/BorderOne.svg'
    },
    // Add more configuration objects for other sections as needed
];
const servicesConfig = [
    {
        id: "servicesBorder",
        svgPath: 'assets/images/BorderTwo.svg'
    },
    // Add more configuration objects for other sections as needed
];
const quoteBorderTopConfig = [
    {
        id: "quoteBorderTop",
        svgPath: 'assets/images/quoteBorderTop.svg'
    },
    // Add more configuration objects for other sections as needed
];
const quoteBorderBottomConfig = [
    {
        id: "quoteBorderBottom",
        svgPath: 'assets/images/quoteBorderBottom.svg'
    },
    // Add more configuration objects for other sections as needed
];

const contactConfig = [
    {
        id: "contactBorder",
        svgPath: 'assets/images/BorderThree.svg'
    },
    // Add more configuration objects for other sections as needed
];
const footerConfig = [
    {
        id: "footerBorder",
        svgPath: 'assets/images/BorderFour.svg'
    },
    // Add more configuration objects for other sections as needed
];
const WhatWedoHeaderConfig = [
    {
        id: "WhatWeDoHeader",
        svgPath: 'assets/images/WhatWeDoHeader.svg'
    },
    // Add more configuration objects for other sections as needed
];
const WhatWedoFooterConfig = [
    {
        id: "footerBorderWhatWeDo",
        svgPath: 'assets/images/WhatWeDoFooter.svg'
    },
    // Add more configuration objects for other sections as needed
];
// Universal function to create SVG background
function createSvgBackground(config) {
    const section = document.getElementById(config.id);
    if (!section) {
        console.error(`Section with id ${config.id} not found`);
        return;
    }

    // Create an SVG element
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", "0 0 1 1");
    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
    svg.setAttribute("xmlns", svgNS);
    svg.style.width = window.innerWidth;

    svg.style.position = "absolute";
    svg.style.top = "0";
    svg.style.left = "0"; // Center the SVG by offsetting it to the left
    svg.style.transform = "translateY(-50%)";
    svg.style.zIndex = "-2";

    // Load the SVG image
    const image = document.createElementNS(svgNS, "image");
    image.setAttributeNS('http://www.w3.org/1999/xlink', 'href', config.svgPath);
    image.setAttribute("width", "100%");
    image.setAttribute("height", "100%");
    image.setAttribute("x", "0");
    image.setAttribute("y", "0");

    // Append the image to the SVG
    svg.appendChild(image);

    // Clear any existing content in the section
    section.innerHTML = '';

    // Append the SVG to the section
    section.style.position = "relative";
    section.appendChild(svg);
}

// Event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    // Apply SVG background to each section
    aboutConfig.forEach(config => {
        createSvgBackground(config);
    });
    servicesConfig.forEach(config => {
        createSvgBackground(config);
    });
    contactConfig.forEach(config => {
        createSvgBackground(config);
    });
    footerConfig.forEach(config => {
        createSvgBackground(config);
    });
    WhatWedoHeaderConfig.forEach(config => {    
        createSvgBackground(config);
    });
    WhatWedoFooterConfig.forEach(config => {    
        createSvgBackground(config);
    });
    quoteBorderBottomConfig.forEach(config => { 
        createSvgBackground(config);
    }); 
    quoteBorderTopConfig.forEach(config => {
        createSvgBackground(config);
    });    

    // Reapply SVG background on window resize for each section
    window.addEventListener('resize', () => {
        aboutConfig.forEach(config => {
            createSvgBackground(config);
        });
        servicesConfig.forEach(config => {
            createSvgBackground(config);
        });
        contactConfig.forEach(config => {
            createSvgBackground(config);
        });
        footerConfig.forEach(config => {
            createSvgBackground(config);
        }); 
        WhatWedoHeaderConfig.forEach(config => {
            createSvgBackground(config);
        });
        WhatWedoFooterConfig.forEach(config => {
            createSvgBackground(config);
        });
        quoteBorderBottomConfig.forEach(config => { 
            createSvgBackground(config);
        }); 
        quoteBorderTopConfig.forEach(config => {
            createSvgBackground(config);
        });   
    });
});
document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.therapy-step').forEach((step, index) => {
        // Animate the .therapy-step container
        gsap.fromTo(step, 
            { opacity: 0, y: 50 }, 
            { 
                opacity: 1, 
                y: 0, 
                scrollTrigger: {
                    trigger: step,
                    start: 'top 90%', // Adjust this value as needed
                    end: 'top 20%',
                    scrub: true,
                    toggleActions: 'play none none reverse',
                    onEnter: () => {
                        // Animate the <p> element inside the .therapy-step container
                        gsap.to(step.querySelector('p'), { opacity: 1, duration: 1 });
                    },
                    onLeaveBack: () => {
                        // Hide the <p> element when scrolling back up
                        gsap.to(step.querySelector('p'), { opacity: 0, duration: 1 });
                    }
                }
            }
        );
    });
});
const labels = document.querySelectorAll('.referral-first-name');
labels.forEach(label => {
    label.innerHTML = label.textContent.replace(/_/g, '<span class="hidden-char">_</span>');
});



document.addEventListener("DOMContentLoaded", function() {
    const quote = document.getElementById("quote");

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkVisibility() {
        if (isInViewport(quote)) {
            quote.classList.add("visible");
        }
    }

    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);

    // Initial check in case the element is already in the viewport
    checkVisibility();
});



