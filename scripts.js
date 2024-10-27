document.addEventListener('DOMContentLoaded', function () {
    const albums = document.querySelectorAll('.vinyl-cover');
    const slideElements = document.querySelectorAll('.slide-in-left');
 
    // Pause animation on hover
    albums.forEach(album => {
        album.addEventListener('mouseenter', () => {
            album.style.animationPlayState = 'paused';
        });
        album.addEventListener('mouseleave', () => {
            album.style.animationPlayState = 'running';
        });
    });
 
    // Handle scroll animation for slide-in elements
    const handleScroll = () => {
        slideElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
 
            if (elementTop < windowHeight - 100) {
                element.classList.add('show');
            }
        });
    };
 
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger the scroll check on page load
});