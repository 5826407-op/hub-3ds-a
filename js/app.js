import modulos from "../data/modulos.js";

const listaModulos = document.querySelector("#lista-modulos");
const contadorModulos = document.querySelector("#contador-modulos");

contadorModulos.textContent = `${modulos.length} módulos`;

modulos.forEach((modulo, indice) => {
  const tarjeta = document.createElement("article");
  tarjeta.className = "tarjeta-modulo";

  const numero = document.createElement("span");
  numero.className = "numero-modulo";
  numero.setAttribute("aria-hidden", "true");
  numero.textContent = String(indice + 1).padStart(2, "0");

  const titulo = document.createElement("h3");
  titulo.textContent = modulo.nombre;

  const profesor = document.createElement("p");
  profesor.textContent = modulo.profesor;

  const descripcion = document.createElement("p");
  descripcion.textContent = modulo.descripcion;

  tarjeta.append(numero, titulo, profesor, descripcion);
  listaModulos.append(tarjeta);
});
