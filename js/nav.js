let primaryNav = document.querySelector ('.primary-nav');
// console.log(primaryNav);
let menuToggle = document.querySelector ('.menu-toggle');
// console.log(menuToggle)

menuToggle.addEventListener('click', () => {
    let visible = primaryNav.getAttribute('data-visible');

    if (visible === "false") {
        primaryNav.setAttribute('data-visible', true);
        menuToggle.setAttribute('aria-expanded', true)

    } else {
        primaryNav.setAttribute('data-visible', false);
        menuToggle.setAttribute('aria-expanded', false)
    };
});