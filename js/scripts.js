
// Cambio de tema (claro/oscuro)
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme === 'dark');
});

// Función para actualizar el ícono del tema
function updateThemeIcon(isDarkTheme) {
    const icon = themeToggle.querySelector('i');
    if (isDarkTheme) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Cargar el tema guardado al recargar la página
const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme === 'dark');

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