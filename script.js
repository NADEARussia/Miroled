document.addEventListener('DOMContentLoaded', function() {
    const intro = document.querySelector('.intro');
    setTimeout(() => {
        intro.style.opacity = '0';
        setTimeout(() => {
            intro.style.display = 'none';
        }, 1000);
    }, 3000);
});
