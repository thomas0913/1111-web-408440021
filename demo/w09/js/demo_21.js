const navbar = document.querySelector('#nav');

//add fixed class to navbars
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        navbar.classList.add('navbar-fixed');
    }
    else {
        navbar.classList.remove('navbar-fixed');
    }
});