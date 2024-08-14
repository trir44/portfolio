// Fade in the container
anime({
    targets: '.container',
    opacity: [0, 1],
    translateY: [-50, 0],
    duration: 1500,
    easing: 'easeOutExpo'
});

// Slide in the header
anime({
    targets: '#name',
    translateX: [-100, 0],
    duration: 2000,
    easing: 'easeOutElastic(1, .6)',
    delay: 500
});

anime({
    targets: '#title',
    translateX: [100, 0],
    duration: 2000,
    easing: 'easeOutElastic(1, .6)',
    delay: 700
});

// Bounce in the About Me section
anime({
    targets: '#about-title',
    scale: [0, 1],
    duration: 2000,
    easing: 'easeOutBounce',
    delay: 1000
});

anime({
    targets: '#about-description',
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 1500,
    easing: 'easeOutExpo',
    delay: 1200
});
