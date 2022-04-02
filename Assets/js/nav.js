const navPrimary = document.querySelector(".nav-primary");
const navToggle = document.querySelector(".moblie-nav-toggle");

navToggle.addEventListener('click', () => {
    const visibility = navPrimary.getAttribute('data-visible');
    
    if (visibility === "false") {
        navPrimary.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else if (visibility === "true") {
        navPrimary.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
})
