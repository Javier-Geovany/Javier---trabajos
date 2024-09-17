document.addEventListener('DOMContentLoaded', () => {
    const enviarBtn = document.getElementById('enviarBtn');
    const form = document.getElementById('contactForm');

    enviarBtn.addEventListener('click', () => {
        // Aquí puedes agregar código para manejar el envío del formulario
        alert('Formulario enviado');
        form.reset(); // Opcional, si quieres resetear el formulario después de enviar
    });
});
