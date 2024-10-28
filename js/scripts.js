// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    // Select elements for albums and sections that need slide-in animations
    const albums = document.querySelectorAll('.vinyl-cover');
    const slideElements = document.querySelectorAll('.slide-in-left');

    // Function to handle the hover pause effect for album covers
    albums.forEach(album => {
        album.addEventListener('mouseenter', () => {
            const vinylBackground = album.querySelector('.vinyl-background');
            if (vinylBackground) {
                vinylBackground.style.animationPlayState = 'paused'; // Pause spinning vinyl
            }
        });

        album.addEventListener('mouseleave', () => {
            const vinylBackground = album.querySelector('.vinyl-background');
            if (vinylBackground) {
                vinylBackground.style.animationPlayState = 'running'; // Resume spinning vinyl
            }
        });
    });

    // Function to handle slide-in animations when scrolling
    const handleScroll = () => {
        slideElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // If the element is within view, apply the slide-in effect
            if (elementTop < windowHeight - 100) {
                element.classList.add('show');
            }
        });
    };

    // Listen for scroll events to trigger animations
    window.addEventListener('scroll', handleScroll);

    // Trigger the scroll check on page load to reveal elements already in view
    handleScroll();
});
