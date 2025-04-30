// script.js

// Esperamos a que el contenido cargue
document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('btnUnete');
    const mensaje = document.getElementById('mensaje');

    boton.addEventListener('click', () => {
        mensaje.textContent = "¡Gracias por sumarte! Cada acción cuenta para salvar nuestro planeta. 🌎🌳";
        boton.disabled = true; // desactivar el botón para no spamearlo
        boton.style.backgroundColor = '#388e3c'; // cambiar color como "confirmado"
    });
});
