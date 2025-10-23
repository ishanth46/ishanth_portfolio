// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Add 'in-view' class to elements when they become visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    // Select all elements with the 'fade-up' or 'fade-in' class
    const animatedElements = document.querySelectorAll('.fade-up, .fade-in');

    animatedElements.forEach(element => {
        observer.observe(element);
    });

});


