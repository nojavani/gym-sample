const navbarToggle=document.querySelector('.navbar__toggle');
const navbarMenu=document.querySelector('.navbar__menu');

const toggleMenu=()=>{
    navbarToggle.classList.toggle('is-active');
    navbarMenu.classList.toggle('active');
}

navbarToggle.addEventListener('click', toggleMenu);