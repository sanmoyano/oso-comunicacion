/*======= NAVBAR =======*/
let primaryNav = document.querySelector('.primary-nav');
let primaryHead = document.querySelector('.primary-header');
let menuToggle = document.querySelector('.menu-toggle');

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


/*======= CARDS SERVICIOS =======*/
class Servicio {
    constructor (nombre, descripcion) {
        this.nombre = nombre
        this.descripcion = descripcion
    }
}

let servicio1 = new Servicio("Asesoria Digital")
let servicio2 = new Servicio("Social Media Management")
let servicio3 = new Servicio("E-mail Marketing")
let servicio4 = new Servicio("publicidad Online")
let servicio5 = new Servicio("SEO")
let servicio6 = new Servicio("Fotografía y video")
let servicio7 = new Servicio("Campañas de comunicación")

let servicios = [servicio1, servicio2, servicio3, servicio4, servicio5, servicio6, servicio7]

let divCardContainer = document.querySelector('#card__container')
let bodyCardModal = document.querySelector('#body__modal')
servicios.forEach((servicios, indice) => {
    divCardContainer.innerHTML += `
    <div class="card__servicios" id="servicios${indice + 1}">
        <div id="card__inner${indice + 1}" class="card__servicios-content">
            <img src="./icons/icono${indice + 1}.svg" alt="asesoría digital">
            <h2>${servicios.nombre}</h2>
        </div>
    </div>
    `
})

servicios.forEach ((servicios, indice) => {
    let openModal = document.querySelector(`#card__inner${indice + 1}`)
    openModal.addEventListener('click', () => {
        bodyCardModal.innerHTML += `
        
        `
    })
})