// JavaScript personalizado en fany.js
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM cargado.");

  // Agregar un pie de página dinámico
  var footer = document.createElement("footer");
  footer.classList.add("footer");
  footer.innerHTML = "<p>&copy; 2024 Basic Page</p>";
  document.body.appendChild(footer);
});
