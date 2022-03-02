/*======= NAVBAR =======*/
let primaryHead = document.querySelector('.primary-header');
let primaryNav = document.querySelector('.primary-nav');
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
    constructor(nombre, descripcion) {
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
    <div class="card__servicios" id="servicios${indice + 1}" aria-expanded="false">
        <div id="card__inner${indice + 1}" class="card__servicios-content">
            <img src="./icons/icono${indice + 1}.svg" alt="asesoría digital">
            <h2>${servicios.nombre}</h2>
        </div>
    </div>
    `
})


/*======= MODAL SERVICIOS =======*/

let modalPrimary = document.querySelector('.modal__primary');
let containerModal = document.querySelector('.modal__primary--content');
let closeBtn = document.querySelector('.modal__button--close')


servicios.forEach((servicios, indice) => {
    let cardServicios = document.querySelector(`#card__inner${indice + 1}`)
    cardServicios.addEventListener('click', () => {
        let visible = containerModal.getAttribute('data-visible')
        if (visible === "false") {
            containerModal.setAttribute('data-visible', true)
        } else {
            closeBtn.addEventListener('click', () => {
                containerModal.setAttribute('data-visible', false)
            })
        }
    })
})

