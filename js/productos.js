const productos = [
  { nombre: "Rodillera Swift", precio: 20 },
  { nombre: "Aro de Basketball Pequeño", precio: 150 },
  { nombre: "Aro de Basket Profesional", precio: 400 },
  { nombre: "Balón de Basket Wilson", precio: 190 },
  { nombre: "Camiseta Chicago Bulls", precio: 150 },
  { nombre: "Camiseta Lakers", precio: 150 },
  { nombre: "Zapatilla Under Armour Jet 23", precio: 300 }
];

let carrito = [];

function mostrarProductos() {
  const lista = document.getElementById("listaProductos");
  productos.forEach((producto, index) => {
    const item = document.createElement("li");
    item.className = "producto";
    item.innerHTML = `
      <p>${producto.nombre} - S/ ${producto.precio}</p>
      <button onclick="agregarAlCarrito(${index})">Agregar al carrito</button>
    `;
    lista.appendChild(item);
  });
}

function agregarAlCarrito(index) {
  carrito.push(productos[index]);
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById("carrito");
  lista.innerHTML = "";
  let total = 0;

  carrito.forEach((producto) => {
    const item = document.createElement("li");
    item.textContent = `${producto.nombre} - S/ ${producto.precio}`;
    lista.appendChild(item);
    total += producto.precio;
  });

  document.getElementById("total").textContent = total;
}

document.getElementById("finalizarCompra").addEventListener("click", () => {
  const mensaje = document.getElementById("mensajeCompra");

  if (carrito.length === 0) {
    mensaje.textContent = "🛒 Tu carrito está vacío.";
    mensaje.style.color = "red";
  } else {
    mensaje.textContent = "✅ ¡Gracias por tu compra! Te contactaremos a la brevedad.";
    mensaje.style.color = "green";
    carrito = [];
    actualizarCarrito();
  }

  mensaje.style.display = "block";
});

document.addEventListener("DOMContentLoaded", mostrarProductos);
