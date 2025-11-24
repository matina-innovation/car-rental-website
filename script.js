const burger = document.querySelector('.burger');
const navGroup = document.querySelector('.nav-group');

if (burger && navGroup) {
    burger.addEventListener('click', () => {
        navGroup.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navGroup?.classList.remove('nav-active');
        burger?.classList.remove('toggle');

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

if (window.AOS) {
    AOS.init({
        once: true,
        duration: 900,
        easing: 'ease-out',
        offset: 80
    });
}
