document.addEventListener('DOMContentLoaded', function() {
    const titulo = document.getElementById('titulo-animado');
    const texto = titulo.textContent;
    titulo.innerHTML = '';
    
    for (let i = 0; i < texto.length; i++) {
      const letra = document.createElement('span');
      letra.textContent = texto[i];
      letra.style.animationDelay = `${i * 0.1}s`;
      titulo.appendChild(letra);
      
      // Si es un espacio, añadimos un margen
      if (texto[i] === ' ') {
        letra.style.margin = '0 0.2em';
      }
    }
  });