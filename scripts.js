// scripts.js

// Ejemplo de abrir detalles del proyecto al hacer clic en la imagen
document.querySelectorAll('.proyecto-img').forEach(img => {
    img.addEventListener('click', function() {
        // Aquí podrías abrir un modal o hacer alguna acción específica
        alert('Detalles del proyecto: ' + this.alt);
    });
});
