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
    constructor(nombre, parrafo, parrafoUno, parrafoDos) {
        this.nombre = nombre
        this.parrafo = parrafo
        this.parrafoUno = parrafoUno
        this.parrafoDos = parrafoDos
    }
}

let servicio1 = new Servicio("Asesoría Digital", "¿Tenés un empredimiento y necesitas hacer tus redes?", "Hoy, las redes sociales <strong>definen tu negocio</strong>. Queremos acercar estrategias digitales <strong>confiables y creativas,</strong> sin trucos ni palabras difíciles, para que puedas exprimir todo lo que tenes para ofrecer", "Consiste en un <strong>diagnóstico</strong> de tus redes sociales actuales y <strong>planes de acción específicos y concretos</strong> para que apliques en el corto plazo.")

let servicio2 = new Servicio("Social Media Management", "Tenés que estar en las redes", "Este servicio consiste en la <strong>creación y gestión de las redes sociales de tu negocio.</strong>", "<ul><li>Estrategia digital y calendario de publicación.</li><li>Community management</li><li>Diseño gráfico</li><li>Pauta publicitaria</li><li>Reportes de rendimiento</li></ul>")

let servicio3 = new Servicio("E-mail Marketing", "Realizamos la <strong>gestión integral de campañas de e-mail marketing y newsletters.</strong>", "El servicio consiste en el alta en una plataforma (o actualización de la existente), gestión de campañas, seguimiento y reportes.", "Pack mínimo > 1 envío mensual, 1 reenvío, seguimiento y reporte.")

let servicio4 = new Servicio("Publicidad Online", "Gestión integral de pauta publicitaria en <strong>Facebook Ads y Google Ads.</strong>", "Incluye seguimiento de métricas y reportes.", " ")

let servicio5 = new Servicio("SEO", "Te hacemos visible con un <strong>plan básico de optimización SEO a un sitio web.</strong>", "A través de estrategias y técnicas de posicionamiento SEO, te ayudamos a aumentar las visitas a tu sitio web y a posicionarte en los resultados orgánicos de búsqueda.", "¿Cómo trabajamos? Diagnóstico inicial > Planificación y ejecución de la estrategia SEO > Seguimiento > Reporte.")

let servicio6 = new Servicio("Fotografía y video", "<ul><li>Fotografía de producto, gastronómica y artística</li><li>Books grupales e individuales</li><li> Reels para redes sociales</li><li> Videos institucionales</li><li> Videoclips</li></ul>", "Disponible > consultá para sumar un locutor o locutora con calidad de estudio a tus videos institucionales.", " ")

let servicio7 = new Servicio("Campañas de comunicación", "Planificación y ejecución de una campaña de comunicación integral. Se puede elegir para: lanzamientos, posicionamientos, promociones y/o ventas.", "Contempla la estrategia creativa, el plan de marketing, la creación de material audiovisual, la publicidad y el análisis de rendimiento. Es decir, contempla todo.", "Dejalo en nuestras manos. Armamos un pack a medida acorde a las necesidades que tenga tu negocio.")

let servicios = [servicio1, servicio2, servicio3, servicio4, servicio5, servicio6, servicio7]
let divCardContainer = document.querySelector('#card__container')

servicios.forEach((servicios, indice) => {
    divCardContainer.innerHTML += `
    <div class="card__servicios" id="servicios${indice + 1}" aria-expanded="false">
        <div id="card__inner${indice + 1}" class="card__servicios-content">
            <img src="./icons/icono${indice + 1}.svg" alt="${servicios.nombre}">
            <h2>${servicios.nombre}</h2>
        </div>
    </div>
    `
})


/*======= MODAL SERVICIOS MOBIL =======*/
let containerModal = document.querySelector('.modal__primary--content');
/*======= MODAL SERVICIOS DESKTOP =======*/
let containerModalDesktop = document.querySelector('.modal__desktop')

servicios.forEach((servicios, indice) => {
    let cardServicios = document.querySelector(`#card__inner${indice + 1}`)
    cardServicios.addEventListener('click', () => {
        let visible = containerModal.getAttribute('data-visible')
        let visibleDesktop = containerModalDesktop.getAttribute('data-visible')
        if (visible === "false") {
            containerModal.setAttribute('data-visible', true)
        } else {
            containerModal.setAttribute('data-visible', false)
        }
        if (visibleDesktop === "false") {
            containerModalDesktop.setAttribute('data-visible', true)
        } else {
            containerModalDesktop.setAttribute('data-visible', false)
        }

        containerModal.innerHTML = " "
        containerModal.innerHTML += `
            <div class="button-close">
                <h3>${servicios.nombre}</h3>
                <button id="modal__btn--close${indice + 1}" class="btn__close"></button>
            </div>
            <div class="content">
                <div class="text__content">
                    <div class="text__content--div">${servicios.parrafo}</div>
                    <div class="text__content--div">${servicios.parrafoUno}</div>
                    <div class="text__content--div">${servicios.parrafoDos}</div>
                </div>
            </div>
            `

        containerModalDesktop.innerHTML = " "
        containerModalDesktop.innerHTML += ` 
            <div class="modal__desktop--content">
                <div class="close__desk">
                    <h3>${servicios.nombre}</h3>
                    <button id="desktop__btn--close${indice + 1}" class="close__btn"></button>
                </div>
                <div class="content__desk">
                    <p>${servicios.parrafo}</p>
                    <p>${servicios.parrafoUno}</p>
                    <p>${servicios.parrafoDos}</p>
                </div>
            </div>
            `
        let closeBtn = document.querySelector(`#modal__btn--close${indice + 1}`)
        closeBtn.addEventListener('click', () => {
            containerModal.setAttribute('data-visible', false)
        })
        let closeBtnDesktop = document.querySelector(`#desktop__btn--close${indice + 1}`)
        closeBtnDesktop.addEventListener('click', () => {
            containerModalDesktop.setAttribute('data-visible', false)
        })
    })

})

/*<======= CARDS CONSULTAS =======>*/
class Consulta {
    constructor(taller, descrip, descripUno, descripDos, descripTres) {
        this.taller = taller
        this.descrip = descrip
        this.descripUno = descripUno
        this.descripDos = descripDos
        this.descripTres = descripTres
    }
}

let consultaUno = new Consulta("Consultoria en comunicación con perspectiva de género", "¿En que consiste?", " ", "Toma postura", "> Auditoría inicial para evaluar la comunicación actual de tu negocio y un plan para <strong>comenzar a comunicar de forma responsable, igualitaria e inclusiva.</strong>")
let consultaDos = new Consulta("Triple impacto en mi negocio", "En Oso tenemos la convicción de que <strong>cualquier negocio, marca o emprendimiento puede ser pensado desde la sustentabilidad y el compromiso social y ambiental.</strong>", "¿En qué consiste?", ">  Auditoría inicial para conocer el negocio y un plan de acción real y concreto para sumar acciones de responsabilidad social.", ">  Campaña de comunicación para difundir las acciones.")

let consultas = [consultaUno, consultaDos]
let consultasCardContainer = document.querySelector('#consult__cards--container')

consultas.forEach((consultas, indice) => {
    consultasCardContainer.innerHTML += `
        <div id = "consultas-modal${indice + 1}" class="consult__cards" >
            <div id="card__inner--consult${indice + 1}" class="consult__cards--content">
                <h3>${consultas.taller}</h3>
                <span>>></span>
            </div>
        <div/>
    `
})

/*<======= MODAL CONSULTAS =======>*/
consultas.forEach((consultas, indice) => {
    let btnModalConsultas = document.querySelector(`#card__inner--consult${indice + 1} `)
    btnModalConsultas.addEventListener('click', () => {
        let visible = containerModal.getAttribute('data-visible')
        if (visible === "false") {
            containerModal.setAttribute('data-visible', true)
        } else {
            containerModal.setAttribute('data-visible', false)
        }

        containerModal.innerHTML = " "
        containerModal.innerHTML += `
            <div class="button-close" >
                <h3>${consultas.taller}</h3>
                <button id="modal__btn--close${indice + 1}" class="btn__close"></button>
            </div>
            <div class="content">
                <div class="text__content">
                    <div class="text__content--div">${consultas.descrip}</div>
                    <div class="text__content--div">${consultas.descripUno}</div>
                    <div class="text__content--div">${consultas.descripDos}</div>
                    <div class="text__content--div">${consultas.descripTres}</div>
                </div>
            </div>
        `
        let closeBtn = document.querySelector(`#modal__btn--close${indice + 1} `)
        closeBtn.addEventListener('click', () => {
            containerModal.setAttribute('data-visible', false)
        })
    })
})

/*<======= MENSAJE WHATSAPP =======>*/
const mensaje = () => {
    window.open("https://wa.me/5491127996539?text=Hola!");
}