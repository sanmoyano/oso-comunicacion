let primaryNav = document.querySelector ('.primary-nav');
let primaryHead = document.querySelector ('.primary-header');
let menuToggle = document.querySelector ('.menu-toggle');

menuToggle.addEventListener('click', () => {
    let visible = primaryNav.getAttribute('data-visible');

    if (visible === "false") {
        primaryNav.setAttribute('data-visible', true);
        primaryHead.setAttribute('aria-expanded', true);
        menuToggle.setAttribute('aria-expanded', true)

    } else {
        primaryNav.setAttribute('data-visible', false);
        primaryHead.setAttribute('aria-expanded', false);
        menuToggle.setAttribute('aria-expanded', false)
    };
});