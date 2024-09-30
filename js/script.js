const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir-menu");
const cerrar = document.querySelector("#cerrar-menu");

abrir.addEventListener('click', function() {
    nav.classList.add('active');
    abrir.style.display = 'none';
});

cerrar.addEventListener('click', function() {
    nav.classList.remove('active');
    abrir.style.display = 'block';
});