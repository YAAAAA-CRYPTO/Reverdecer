// Botón de "Únete"
document.getElementById('btnUnete').addEventListener('click', function() {
    document.getElementById('mensaje').textContent = "¡Gracias por unirte a la reforestación!";
});

// Slider de "Antes y Después"
const slider = document.getElementById('slider');
const antes = document.querySelector('.antes');

slider.addEventListener('input', function() {
    antes.style.clipPath = `polygon(0 0, ${this.value}% 0, ${this.value}% 100%, 0% 100%)`;
});
