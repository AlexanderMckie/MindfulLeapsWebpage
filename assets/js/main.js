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
    applyParallaxEffect('.about-image-container');
    applyParallaxEffect('.servicesTwo-image-container');
    applyParallaxEffect('.servicesOne-image-container');    
});

// grows the textarea as the user types 
document.addEventListener('input', function (event) {
    if (event.target.tagName.toLowerCase() === 'textarea') {
        autoGrow(event.target);
    }
});

function autoGrow(element) {
    element.style.height = 'auto';
    element.style.height = (element.scrollHeight) + 'px';
}

// back gorung generator


function createSvgBackground(color1, color2, color3, width, height, points) {
    // Create an SVG element
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    svg.setAttribute("xmlns", svgNS);

    // Create the first rectangle
    const rect1 = document.createElementNS(svgNS, "rect");
    rect1.setAttribute("id", "rect1");
    rect1.setAttribute("width", points.rect1.width);
    rect1.setAttribute("height", points.rect1.height);
    rect1.setAttribute("x", points.rect1.x);
    rect1.setAttribute("y", points.rect1.y);
    rect1.setAttribute("fill", color1);

    // Create the second rectangle
    const rect2 = document.createElementNS(svgNS, "rect");
    rect2.setAttribute("id", "rect2");
    rect2.setAttribute("width", points.rect2.width);
    rect2.setAttribute("height", points.rect2.height);
    rect2.setAttribute("x", points.rect2.x);
    rect2.setAttribute("y", points.rect2.y);
    rect2.setAttribute("fill", color2);

    // Create the third rectangle
    const rect3 = document.createElementNS(svgNS, "rect");
    rect3.setAttribute("id", "rect3");
    rect3.setAttribute("width", points.rect3.width);
    rect3.setAttribute("height", points.rect3.height);
    rect3.setAttribute("x", points.rect3.x);
    rect3.setAttribute("y", points.rect3.y);
    rect3.setAttribute("fill", color3);

    // Append rectangles to the SVG
    svg.appendChild(rect1);
    svg.appendChild(rect2);
    svg.appendChild(rect3);

    // Convert SVG to data URL
    const svgData = new XMLSerializer().serializeToString(svg);
    const svgDataUrl = `data:image/svg+xml;base64,${btoa(svgData)}`;

    return svgDataUrl;
}

function applySvgBackground(elementId, color1, color2, color3, points) {
    const element = document.getElementById(elementId);
    if (element) {
        const svgBackground = createSvgBackground(color1, color2, color3, "100%", "100%", points);
        element.style.backgroundImage = `url(${svgBackground})`;
        element.style.backgroundSize = "cover";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Define color variables
    const blue = 'rgb(174, 213, 226)';
    const orange = 'rgb(246, 191, 133)';
    const pink = 'rgb(250, 190, 190)';

    // Define the sectionOne variable
    const sectionOne = document.getElementById("sectionOne");

    // Define points for rectangles
    const points = {
        rect1: { width: "100%", height: "300%", x: "0%", y: "0%" },
        rect2: { width: "100%", height: "10%", x: "45%", y: "0%" },
        rect3: { width: "100%", height: "20%", x: "90%", y: "0%" }
    };

    // Apply SVG background
    applySvgBackground("sectionOne", blue, orange, pink, points); // Apply to the 'sectionOne' section

    // GSAP animations
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#rect1", {
        scrollTrigger: {
            trigger: sectionOne,
            start: "top center",
            end: "bottom center",
            scrub: true
        },
        y: -50 // Adjust this value as needed
    });

    gsap.to("#rect2", {
        scrollTrigger: {
            trigger: sectionOne,
            start: "top center",
            end: "bottom center",
            scrub: true
        },
        y: 50 // Adjust this value as needed
    });

    gsap.to("#rect3", {
        scrollTrigger: {
            trigger: sectionOne,
            start: "top center",
            end: "bottom center",
            scrub: true
        },
        y: -50 // Adjust this value as needed
    });
});