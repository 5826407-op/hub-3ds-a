# Portal de Repaso 3.° DS «A» - Mi HUB 3DS·A

Portal web para consultar los módulos de Desarrollo de Software, repasar sus contenidos y practicar con quizzes interactivos.

## Enlace público de GitHub Pages

https://5826407-op.github.io/hub-3ds-a/

> El enlace estará disponible públicamente cuando GitHub Pages esté habilitado para la rama `main` del repositorio.

## Integrantes y Roles

Completa los nombres del equipo antes de entregar el proyecto:

- **[Nombre del integrante]** — Líder Git: organiza el repositorio, las ramas y las integraciones.
- **[Nombre del integrante]** — Curador/a de contenido: revisa la información, los recursos y las preguntas de los módulos.
- **[Nombre del integrante]** — QA: prueba filtros, progreso, quizzes y presentación responsive.
- **[Nombre del integrante]** — Documentación y diseño: mantiene el README y apoya la interfaz visual.

Si el equipo tiene menos integrantes, se pueden combinar roles.

## Funcionalidades

### Nivel Base — completado

- Catálogo de módulos organizado por docente.
- Fichas con resumen, aprendizajes, instrumentos, programas, herramientas, recursos y evidencias.
- Recursos y evidencias con enlaces externos.

### Nivel Pro

- **Buscador:** filtra por nombre, resumen, programas y herramientas; ignora mayúsculas y acentos.
- **Progreso local:** permite marcar módulos repasados, guarda los cambios en `localStorage` y muestra el porcentaje completado.
- **Quiz interactivo:** mezcla las preguntas, ofrece retroalimentación inmediata, calcula el puntaje y conserva el mejor resultado por módulo.
- **Modo claro/oscuro:** pendiente de implementación. Actualmente el portal presenta una interfaz clara.
- Interfaz responsive para celulares y diálogos accesibles mediante teclado.

## Registro de Prompts de IA

| Prompts utilizados | Herramienta (Copilot) | Propósito/Resultado |
|---|---|---|
| «Actualiza la estructura de datos de módulos JavaScript con información de desarrollo de software, recursos y evidencias.» | Copilot | Completar el esquema de datos de los módulos. |
| «Crea `filtrarModulos(textoBusqueda, docenteSeleccionado)` con búsqueda insensible a mayúsculas y acentos.» | Copilot | Añadir búsqueda, filtro por docente, contador y estado sin resultados. |
| «Gestiona el progreso del repaso con `localStorage`, barra porcentual y checkboxes.» | Copilot | Guardar y recuperar el progreso de los módulos. |
| «Muestra la ficha de un módulo en un `<dialog>` accesible y permite cerrarla con X, Escape o clic exterior.» | Copilot | Crear una ficha modal accesible con los datos completos. |
| «Añade tres preguntas de opción múltiple a cada módulo, con respuesta correcta y explicación.» | Copilot | Incorporar quizzes al conjunto de datos. |
| «Crea un quiz interactivo con Fisher-Yates, retroalimentación, puntaje y mejor resultado en `localStorage`.» | Copilot | Implementar el quiz interactivo y accesible por teclado. |
| «Ajusta el CSS para celulares, con columnas adaptables y controles táctiles de al menos 44 px.» | Copilot | Mejorar el diseño responsive para pantallas pequeñas. |

## Instrucciones de ejecución local

1. Clona el repositorio:

   ```bash
   git clone https://github.com/5826407-op/hub-3ds-a.git
   ```

2. Entra en la carpeta:

   ```bash
   cd hub-3ds-a
   ```

3. Abre `index.html` en un navegador. También puedes abrir la carpeta en Visual Studio Code y usar una extensión de servidor local, como Live Server.

El proyecto utiliza JavaScript nativo y módulos ES; no requiere un paso de compilación.
