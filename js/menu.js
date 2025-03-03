// Menú Lateral (Aside)
const menuToggle = document.getElementById('menu-toggle');
const aside = document.querySelector('aside');

menuToggle.addEventListener('click', () => {
    aside.classList.toggle('active');
});

// Cerrar el menú al hacer clic fuera de él
document.addEventListener('click', (event) => {
    const isClickInsideAside = aside.contains(event.target);
    const isClickOnMenuToggle = menuToggle.contains(event.target);

    if (!isClickInsideAside && !isClickOnMenuToggle) {
        aside.classList.remove('active');
    }
});