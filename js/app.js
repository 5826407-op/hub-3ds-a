import modulos from "../data/modulos.js";

const listaModulos = document.querySelector("#lista-modulos");
const contadorModulos = document.querySelector("#contador-modulos");

contadorModulos.textContent = `${modulos.length} módulos`;

const modulosPorProfesor = new Map();
modulos.forEach((modulo) => {
  const modulosDelProfesor = modulosPorProfesor.get(modulo.profesor) ?? [];
  modulosDelProfesor.push(modulo);
  modulosPorProfesor.set(modulo.profesor, modulosDelProfesor);
});

modulosPorProfesor.forEach((modulosDelProfesor, profesor) => {
  const seccion = document.createElement("section");
  seccion.className = "seccion-profesor";
  seccion.setAttribute("aria-label", profesor);

  const tituloSeccion = document.createElement("h3");
  tituloSeccion.className = "profesor-titulo";
  tituloSeccion.textContent = profesor;

  const tarjetas = document.createElement("div");
  tarjetas.className = "lista-modulos";

  modulosDelProfesor.forEach((modulo) => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta-modulo";

    const titulo = document.createElement("h4");
    titulo.textContent = modulo.nombre;
    tarjeta.append(titulo);

    if (modulo.descripcion) {
      const descripcion = document.createElement("p");
      descripcion.textContent = modulo.descripcion;
      tarjeta.append(descripcion);
    }

    tarjetas.append(tarjeta);
  });

  seccion.append(tituloSeccion, tarjetas);
  listaModulos.append(seccion);
});
