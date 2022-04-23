// Ativando o menu mobile 
const openMenu = document.querySelector(".menu-responsivo");
const openButton = document.querySelector(".button-hanburger-mobile");
const closeMenu = document.querySelector("#close");
const closeMenuBody = document.querySelectorAll("html");

openButton.addEventListener("click", Toogle);

let open = false;

function Toogle(){
    if(open){
        open = false;
        openMenu.classList.remove('active');
    }else {
        open = true;
        openMenu.classList.add('active');
    }
}

const menuLinks = document.querySelectorAll('.menu .menu-links-main a');

// Função para pegar a distância para cada seção 

function getDistanceFromTheTop(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

// Criando a função de scrool 

function nativeScroll(distanceFromTheTop) {
    window.scroll({
        top: distanceFromTheTop,
        behavior: "smooth",
    });
}

// Função para selecionar o link clicado e selecionar a seção referente na página

function scrollToSection(event) {
    event.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(event.target);
    nativeScroll(distanceFromTheTop);
    
    const element = event.target;
    const id = element.getAttribute("href");
    const section = document.querySelector(id);

    console.log(section.offsetTop);
}

menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
});

