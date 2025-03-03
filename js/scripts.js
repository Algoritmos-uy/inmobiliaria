
/*
// Cambio de tema (claro/oscuro)
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDarkTheme = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    updateThemeIcon(isDarkTheme);
    body.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light'); // Actualizar el atributo data-theme
});

// Función para actualizar el ícono del tema
function updateThemeIcon(isDarkTheme) {
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-moon', !isDarkTheme);
    icon.classList.toggle('fa-sun', isDarkTheme);
}

// Cargar el tema guardado al recargar la página
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    body.setAttribute('data-theme', 'dark'); // Aplicar el tema oscuro al cargar
    updateThemeIcon(true);
}
*/
// Modal del Mapa
const mapButton = document.getElementById('map-button');
const mapModal = document.getElementById('map-modal');
const closeModal = document.getElementById('close-modal');

mapButton.addEventListener('click', () => {
    mapModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    mapModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === mapModal) {
        mapModal.style.display = 'none';
    }
});

// Formulario de Contacto
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Aquí puedes agregar lógica para enviar el formulario (por ejemplo, con fetch)

    // Limpiar los campos del formulario
    contactForm.reset();

    // Mostrar un mensaje de éxito (opcional)
    alert('¡Mensaje enviado con éxito!');
});