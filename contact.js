document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita envío por defecto

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !mensaje) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    if (!validarEmail(email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    alert("✅ ¡Mensaje enviado con éxito!");
    form.reset(); // Limpia el formulario
  });
});

function validarEmail(correo) {
  const regex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(correo);
}
