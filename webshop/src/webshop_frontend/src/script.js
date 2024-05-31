function toggleMenu() {
    var nav = document.querySelector('header nav');
    nav.classList.toggle('active');
}

document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);