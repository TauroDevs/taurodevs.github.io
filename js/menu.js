(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');
    const navButton = document.querySelector('.nav__items');
    const navButtonAcerca = document.querySelector('.nav__items__acerca')
    const navButtonContacto = document.querySelector('.nav__items__contacto')
    const navButtonPreguntas = document.querySelector('.nav__items__preguntas')

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

    navButton.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

    navButtonAcerca.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

    navButtonContacto.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

    navButtonPreguntas.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

})();