import modulos from "../data/modulos.js";

const listaModulos = document.querySelector("#lista-modulos");
const contadorModulos = document.querySelector("#contador-modulos");
const cajaBusqueda = document.querySelector("#buscar");
const filtroDocente = document.querySelector("#filtroDocente");
const barraProgreso = document.querySelector(".pista i");
const pistaProgreso = document.querySelector(".pista");
const textoProgreso = document.querySelector("#porcentaje-progreso");
const mensajeProgresoCompleto = document.querySelector("#mensaje-progreso-completo");
const estadoProgreso = document.querySelector("#estado-progreso");
const dialogoFicha = document.querySelector("#ficha-modulo");
const nombreFicha = document.querySelector("#ficha-modulo-nombre");
const docenteFicha = document.querySelector("#ficha-modulo-docente");
const contenidoFicha = document.querySelector("#contenido-ficha-modulo");
const botonCerrarFicha = dialogoFicha.querySelector(".boton-cerrar-ficha");
const dialogoQuiz = document.querySelector("#dialogo-quiz");
const tituloQuiz = document.querySelector("#titulo-quiz");
const docenteQuiz = document.querySelector("#docente-quiz");
const progresoQuiz = document.querySelector("#progreso-quiz");
const preguntaQuiz = document.querySelector("#pregunta-quiz");
const retroalimentacionQuiz = document.querySelector("#retroalimentacion-quiz");
const estadoQuiz = document.querySelector("#estado-quiz");
const botonSiguientePregunta = document.querySelector("#siguiente-pregunta");
const botonRepetirQuiz = document.querySelector("#repetir-quiz");
const botonCerrarQuiz = dialogoQuiz.querySelector(".boton-cerrar-quiz");
const claveProgreso = "progreso_repaso";
const claveMejoresPuntajes = "mejores_puntajes";
let ultimoDisparadorFicha = null;
let ultimoDisparadorQuiz = null;
let moduloQuizActual = null;
let preguntasQuizActuales = [];
let indicePreguntaQuiz = 0;
let puntajeQuiz = 0;

function mostrarEstadoProgreso(mensaje) {
  estadoProgreso.textContent = mensaje;
}

function cargarMejoresPuntajes() {
  try {
    const guardado = localStorage.getItem(claveMejoresPuntajes);
    if (guardado === null) {
      return {};
    }

    const puntajesGuardados = JSON.parse(guardado);
    if (
      puntajesGuardados === null ||
      typeof puntajesGuardados !== "object" ||
      Array.isArray(puntajesGuardados)
    ) {
      throw new TypeError("Los mejores puntajes guardados no tienen el formato esperado.");
    }

    const idsValidos = new Set(modulos.map(({ id }) => id));
    return Object.fromEntries(
      Object.entries(puntajesGuardados).filter(
        ([id, puntaje]) =>
          idsValidos.has(id) &&
          Number.isInteger(puntaje?.correctas) &&
          Number.isInteger(puntaje?.total) &&
          puntaje.correctas >= 0 &&
          puntaje.total > 0 &&
          puntaje.correctas <= puntaje.total,
      ),
    );
  } catch (error) {
    estadoQuiz.textContent =
      "No se pudieron recuperar los mejores puntajes guardados; podrás jugar, pero quizá no se conserven.";
    return {};
  }
}

const mejoresPuntajes = cargarMejoresPuntajes();

function cargarProgreso() {
  try {
    const guardado = localStorage.getItem(claveProgreso);
    if (guardado === null) {
      return [];
    }

    const idsGuardados = JSON.parse(guardado);
    if (!Array.isArray(idsGuardados) || idsGuardados.some((id) => typeof id !== "string")) {
      throw new TypeError("El progreso guardado no tiene el formato esperado.");
    }

    const idsValidos = new Set(modulos.map(({ id }) => id));
    return [...new Set(idsGuardados.filter((id) => idsValidos.has(id)))];
  } catch (error) {
    mostrarEstadoProgreso(
      "No se pudo recuperar el progreso guardado. Los cambios estarán disponibles solo durante esta sesión.",
    );
    return [];
  }
}

const modulosRepasados = cargarProgreso();

function toggleRepasado(moduloId) {
  if (!modulos.some((modulo) => modulo.id === moduloId)) {
    console.error(`No existe un módulo con el ID "${moduloId}".`);
    return;
  }

  const indice = modulosRepasados.indexOf(moduloId);
  if (indice === -1) {
    modulosRepasados.push(moduloId);
  } else {
    modulosRepasados.splice(indice, 1);
  }

  actualizarBarraProgreso();

  try {
    localStorage.setItem(claveProgreso, JSON.stringify(modulosRepasados));
    mostrarEstadoProgreso("");
  } catch (error) {
    mostrarEstadoProgreso(
      "No se pudo guardar el progreso. El cambio se conservará solo durante esta sesión.",
    );
  }
}

function actualizarBarraProgreso() {
  const idsValidos = new Set(modulos.map(({ id }) => id));
  const cantidadRepasada = modulosRepasados.filter((id) => idsValidos.has(id)).length;
  const total = modulos.length;
  const porcentaje = total === 0 ? 0 : Math.round((cantidadRepasada / total) * 100);

  barraProgreso.style.width = `${porcentaje}%`;
  pistaProgreso.setAttribute("aria-valuenow", String(porcentaje));
  textoProgreso.textContent = `${porcentaje}% de módulos repasados`;
  mensajeProgresoCompleto.hidden = total === 0 || porcentaje < 100;

  listaModulos.querySelectorAll(".control-repasado input").forEach((checkbox) => {
    checkbox.checked = modulosRepasados.includes(checkbox.dataset.moduloId);
  });
}

const crearGrupo = (titulo, elementos) => {
  if (!elementos.length) {
    return null;
  }

  const grupo = document.createElement("div");
  grupo.className = "grupo-contenido";

  const subtitulo = document.createElement("h6");
  subtitulo.textContent = titulo;

  const lista = document.createElement("ul");
  elementos.forEach((elemento) => {
    const item = document.createElement("li");
    item.textContent = elemento;
    lista.append(item);
  });

  grupo.append(subtitulo, lista);
  return grupo;
};

const crearGrupoEnlaces = (titulo, elementos, textoCampo) => {
  if (!elementos.length) {
    return null;
  }

  const grupo = document.createElement("div");
  grupo.className = "grupo-contenido";

  const subtitulo = document.createElement("h6");
  subtitulo.textContent = titulo;

  const lista = document.createElement("ul");
  elementos.forEach((elemento) => {
    const item = document.createElement("li");
    const enlace = document.createElement("a");
    enlace.href = elemento.enlace ?? elemento.url;
    enlace.target = "_blank";
    enlace.rel = "noopener noreferrer";
    enlace.textContent = elemento[textoCampo];
    item.append(enlace);
    lista.append(item);
  });

  grupo.append(subtitulo, lista);
  return grupo;
};

function abrirFichaModulo(modulo, disparador) {
  nombreFicha.textContent = modulo.nombre;
  docenteFicha.textContent = `Docente: ${modulo.docente}`;
  contenidoFicha.replaceChildren();

  const resumen = document.createElement("p");
  resumen.className = "resumen-ficha";
  resumen.textContent = modulo.resumen;
  contenidoFicha.append(resumen);

  [
    crearGrupo("Aprendizajes clave", modulo.aprendizajes),
    crearGrupo(
      "Instrumentos",
      modulo.instrumentos.map(({ nombre, tipo }) => `${nombre} (${tipo})`),
    ),
    crearGrupo("Programas", modulo.programas),
    crearGrupo("Herramientas", modulo.herramientas),
    crearGrupoEnlaces("Recursos", modulo.recursos, "titulo"),
    crearGrupoEnlaces("Evidencias", modulo.evidencias, "descripcion"),
  ]
    .filter(Boolean)
    .forEach((grupo) => contenidoFicha.append(grupo));

  ultimoDisparadorFicha = disparador;
  dialogoFicha.showModal();
}

botonCerrarFicha.addEventListener("click", () => dialogoFicha.close());
dialogoFicha.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape") {
    evento.preventDefault();
    dialogoFicha.close();
  }
});
dialogoFicha.addEventListener("click", (evento) => {
  if (evento.target === dialogoFicha) {
    dialogoFicha.close();
  }
});
dialogoFicha.addEventListener("close", () => {
  if (ultimoDisparadorFicha?.isConnected) {
    ultimoDisparadorFicha.focus();
  }
});

function mezclarPreguntas(preguntas) {
  const preguntasMezcladas = [...preguntas];
  for (let indice = preguntasMezcladas.length - 1; indice > 0; indice -= 1) {
    const indiceAleatorio = Math.floor(Math.random() * (indice + 1));
    [preguntasMezcladas[indice], preguntasMezcladas[indiceAleatorio]] = [
      preguntasMezcladas[indiceAleatorio],
      preguntasMezcladas[indice],
    ];
  }
  return preguntasMezcladas;
}

function mostrarPreguntaQuiz() {
  const preguntaActual = preguntasQuizActuales[indicePreguntaQuiz];
  progresoQuiz.textContent = `Pregunta ${indicePreguntaQuiz + 1} de ${preguntasQuizActuales.length}`;
  retroalimentacionQuiz.replaceChildren();
  botonSiguientePregunta.hidden = true;
  botonRepetirQuiz.hidden = true;
  preguntaQuiz.replaceChildren();

  const grupoOpciones = document.createElement("fieldset");
  grupoOpciones.className = "opciones-quiz";
  const enunciado = document.createElement("legend");
  enunciado.textContent = preguntaActual.pregunta;
  grupoOpciones.append(enunciado);

  preguntaActual.opciones.forEach((opcion, indiceOpcion) => {
    const etiqueta = document.createElement("label");
    etiqueta.className = "opcion-quiz";
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "opcion-quiz";
    radio.value = String(indiceOpcion);
    etiqueta.append(radio, document.createTextNode(opcion));
    grupoOpciones.append(etiqueta);
  });

  preguntaQuiz.append(grupoOpciones);
}

function actualizarMejorPuntaje(moduloId, puntaje) {
  const mejorAnterior = mejoresPuntajes[moduloId];
  const esMejorPuntaje =
    !mejorAnterior ||
    puntaje.correctas * mejorAnterior.total > mejorAnterior.correctas * puntaje.total;

  if (!esMejorPuntaje) {
    return;
  }

  mejoresPuntajes[moduloId] = puntaje;
  try {
    localStorage.setItem(claveMejoresPuntajes, JSON.stringify(mejoresPuntajes));
    estadoQuiz.textContent = "";
  } catch (error) {
    estadoQuiz.textContent =
      "No se pudo guardar el mejor puntaje. Se conservará solo durante esta sesión.";
  }
}

function mostrarResultadoQuiz() {
  const puntaje = {
    correctas: puntajeQuiz,
    total: preguntasQuizActuales.length,
  };
  actualizarMejorPuntaje(moduloQuizActual.id, puntaje);

  progresoQuiz.textContent = "Quiz completado";
  preguntaQuiz.replaceChildren();
  const resultado = document.createElement("p");
  resultado.className = "resultado-quiz";
  resultado.setAttribute("role", "status");
  resultado.textContent = `Obtuviste ${puntaje.correctas}/${puntaje.total} respuestas correctas.`;
  preguntaQuiz.append(resultado);

  const mejorPuntaje = mejoresPuntajes[moduloQuizActual.id];
  const resumenMejorPuntaje = document.createElement("p");
  resumenMejorPuntaje.className = "mejor-puntaje-quiz";
  resumenMejorPuntaje.textContent =
    `Mejor puntaje: ${mejorPuntaje.correctas}/${mejorPuntaje.total} respuestas correctas.`;
  preguntaQuiz.append(resumenMejorPuntaje);

  retroalimentacionQuiz.replaceChildren();
  botonSiguientePregunta.hidden = true;
  botonRepetirQuiz.hidden = false;
  actualizarEtiquetaMejorPuntaje(moduloQuizActual.id);
  botonRepetirQuiz.focus();
}

function responderPreguntaQuiz(indiceSeleccionado) {
  const preguntaActual = preguntasQuizActuales[indicePreguntaQuiz];
  const respuestas = preguntaQuiz.querySelectorAll('input[name="opcion-quiz"]');
  if (respuestas[0]?.disabled) {
    return;
  }

  const esCorrecta = indiceSeleccionado === preguntaActual.correcta;
  if (esCorrecta) {
    puntajeQuiz += 1;
  }

  respuestas.forEach((respuesta, indiceOpcion) => {
    respuesta.disabled = true;
    const opcion = respuesta.closest(".opcion-quiz");
    opcion.classList.add("opcion-respondida");
    if (indiceOpcion === preguntaActual.correcta) {
      opcion.classList.add("opcion-correcta");
    } else if (indiceOpcion === indiceSeleccionado) {
      opcion.classList.add("opcion-incorrecta");
    }
  });

  const mensaje = document.createElement("p");
  mensaje.className = esCorrecta ? "respuesta-correcta" : "respuesta-incorrecta";
  mensaje.textContent = esCorrecta ? "¡Correcto!" : "Respuesta incorrecta.";
  retroalimentacionQuiz.append(mensaje);

  if (!esCorrecta) {
    const respuestaCorrecta = document.createElement("p");
    respuestaCorrecta.textContent = `La respuesta correcta es: ${preguntaActual.opciones[preguntaActual.correcta]}`;
    retroalimentacionQuiz.append(respuestaCorrecta);
  }

  const explicacion = document.createElement("p");
  explicacion.textContent = preguntaActual.explicacion;
  retroalimentacionQuiz.append(explicacion);

  const ultimaPregunta = indicePreguntaQuiz === preguntasQuizActuales.length - 1;
  botonSiguientePregunta.textContent = ultimaPregunta ? "Ver resultado" : "Siguiente pregunta";
  botonSiguientePregunta.hidden = false;
  botonSiguientePregunta.focus();
}

function actualizarEtiquetaMejorPuntaje(moduloId) {
  const etiqueta = listaModulos.querySelector(
    `[data-mejor-puntaje="${moduloId}"]`,
  );
  const puntaje = mejoresPuntajes[moduloId];
  if (etiqueta && puntaje) {
    etiqueta.textContent = `Mejor: ${puntaje.correctas}/${puntaje.total}`;
  }
}

function abrirQuiz(moduloId, disparador = null) {
  const modulo = modulos.find((item) => item.id === moduloId);
  if (!modulo || !Array.isArray(modulo.quiz) || modulo.quiz.length === 0) {
    estadoQuiz.textContent = "Este módulo todavía no tiene preguntas disponibles.";
    return;
  }

  estadoQuiz.textContent = "";
  moduloQuizActual = modulo;
  preguntasQuizActuales = mezclarPreguntas(modulo.quiz);
  indicePreguntaQuiz = 0;
  puntajeQuiz = 0;
  tituloQuiz.textContent = `Quiz: ${modulo.nombre}`;
  docenteQuiz.textContent = `Docente: ${modulo.docente}`;
  estadoQuiz.textContent = "";
  ultimoDisparadorQuiz = disparador;
  mostrarPreguntaQuiz();
  if (!dialogoQuiz.open) {
    dialogoQuiz.showModal();
  }
  preguntaQuiz.querySelector("input")?.focus();
}

preguntaQuiz.addEventListener("change", (evento) => {
  if (evento.target.matches('input[name="opcion-quiz"]')) {
    responderPreguntaQuiz(Number(evento.target.value));
  }
});

botonSiguientePregunta.addEventListener("click", () => {
  if (indicePreguntaQuiz === preguntasQuizActuales.length - 1) {
    mostrarResultadoQuiz();
    return;
  }
  indicePreguntaQuiz += 1;
  mostrarPreguntaQuiz();
});

botonRepetirQuiz.addEventListener("click", () => {
  abrirQuiz(moduloQuizActual.id, ultimoDisparadorQuiz);
});

botonCerrarQuiz.addEventListener("click", () => dialogoQuiz.close());
dialogoQuiz.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape") {
    evento.preventDefault();
    dialogoQuiz.close();
  }
});
dialogoQuiz.addEventListener("click", (evento) => {
  if (evento.target === dialogoQuiz) {
    dialogoQuiz.close();
  }
});
dialogoQuiz.addEventListener("close", () => {
  if (ultimoDisparadorQuiz?.isConnected) {
    ultimoDisparadorQuiz.focus();
  }
});

function filtrarModulos(textoBusqueda, docenteSeleccionado) {
  const normalizar = (texto) =>
    texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const busqueda = normalizar(textoBusqueda.trim());

  return modulos.filter((modulo) => {
    const coincideDocente =
      docenteSeleccionado === "todos" || modulo.docente === docenteSeleccionado;
    const textoModulo = [
      modulo.nombre,
      modulo.resumen,
      ...modulo.programas,
      ...modulo.herramientas,
    ]
      .join(" ")
      .toLowerCase();

    return coincideDocente && normalizar(textoModulo).includes(busqueda);
  });
}

function renderizarModulos(modulosFiltrados) {
  listaModulos.replaceChildren();
  contadorModulos.textContent = `Mostrando ${modulosFiltrados.length} de ${modulos.length} módulos`;

  if (modulosFiltrados.length === 0) {
    const mensaje = document.createElement("p");
    mensaje.className = "mensaje-sin-resultados";
    mensaje.setAttribute("role", "status");
    mensaje.textContent = "No se encontraron módulos. Prueba con otra búsqueda o docente.";
    listaModulos.append(mensaje);
    return;
  }

  const modulosPorDocente = new Map();
  modulosFiltrados.forEach((modulo) => {
    const modulosDelDocente = modulosPorDocente.get(modulo.docente) ?? [];
    modulosDelDocente.push(modulo);
    modulosPorDocente.set(modulo.docente, modulosDelDocente);
  });

  modulosPorDocente.forEach((modulosDelDocente, docente) => {
    const seccion = document.createElement("section");
    seccion.className = "seccion-profesor";
    seccion.setAttribute("aria-label", docente);

    const tituloSeccion = document.createElement("h3");
    tituloSeccion.className = "profesor-titulo";
    tituloSeccion.textContent = docente;

    const tarjetas = document.createElement("div");
    tarjetas.className = "lista-modulos";

    modulosDelDocente.forEach((modulo) => {
      const tarjeta = document.createElement("article");
      tarjeta.className = "tarjeta-modulo";

      const botonFicha = document.createElement("button");
      botonFicha.className = "boton-ficha";
      botonFicha.type = "button";
      botonFicha.setAttribute("aria-haspopup", "dialog");
      botonFicha.setAttribute("aria-label", `Ver ficha completa: ${modulo.nombre}`);

      const titulo = document.createElement("span");
      titulo.className = "titulo-modulo";
      titulo.textContent = modulo.nombre;
      botonFicha.append(titulo);

      if (modulo.resumen) {
        const resumen = document.createElement("span");
        resumen.className = "descripcion-modulo";
        resumen.textContent = modulo.resumen;
        botonFicha.append(resumen);
      }

      botonFicha.addEventListener("click", () => abrirFichaModulo(modulo, botonFicha));
      tarjeta.append(botonFicha);

      if (Array.isArray(modulo.quiz) && modulo.quiz.length > 0) {
        const accionesQuiz = document.createElement("div");
        accionesQuiz.className = "acciones-tarjeta-quiz";

        const botonQuiz = document.createElement("button");
        botonQuiz.className = "boton-quiz";
        botonQuiz.type = "button";
        botonQuiz.textContent = "Iniciar quiz";
        botonQuiz.setAttribute("aria-haspopup", "dialog");
        botonQuiz.addEventListener("click", () => abrirQuiz(modulo.id, botonQuiz));
        accionesQuiz.append(botonQuiz);

        const mejorPuntaje = document.createElement("span");
        mejorPuntaje.className = "etiqueta-mejor-puntaje";
        mejorPuntaje.dataset.mejorPuntaje = modulo.id;
        const puntajeGuardado = mejoresPuntajes[modulo.id];
        mejorPuntaje.textContent = puntajeGuardado
          ? `Mejor: ${puntajeGuardado.correctas}/${puntajeGuardado.total}`
          : "Sin intentos";
        accionesQuiz.append(mejorPuntaje);
        tarjeta.append(accionesQuiz);
      }

      const controlRepasado = document.createElement("label");
      controlRepasado.className = "control-repasado";
      const checkboxRepasado = document.createElement("input");
      checkboxRepasado.type = "checkbox";
      checkboxRepasado.dataset.moduloId = modulo.id;
      checkboxRepasado.checked = modulosRepasados.includes(modulo.id);
      checkboxRepasado.addEventListener("change", () => toggleRepasado(modulo.id));
      controlRepasado.append(checkboxRepasado, document.createTextNode("Módulo repasado"));
      tarjeta.append(controlRepasado);

      tarjetas.append(tarjeta);
    });

    seccion.append(tituloSeccion, tarjetas);
    listaModulos.append(seccion);
  });
}

function actualizarModulos() {
  const modulosFiltrados = filtrarModulos(cajaBusqueda.value, filtroDocente.value);
  renderizarModulos(modulosFiltrados);
}

cajaBusqueda.addEventListener("input", actualizarModulos);
filtroDocente.addEventListener("change", actualizarModulos);
actualizarModulos();
actualizarBarraProgreso();
