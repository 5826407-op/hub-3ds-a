const modulos = [
  {
    id: "desarrollo-aplicaciones-software",
    nombre: "Desarrollo de aplicaciones de software para la solución de problemas",
    docente: "Arcides Canales",
    resumen:
      "Práctica de programación orientada a objetos, validación de datos y desarrollo de aplicaciones web y de escritorio.\nIntegra operaciones CRUD, conexión a bases de datos y control de versiones con Git.",
    aprendizajes: [
      "Aplicar clases, herencia y polimorfismo para modelar problemas de software.",
      "Construir aplicaciones CRUD y conectarlas con bases de datos relacionales.",
      "Crear interfaces web adaptables y administrar cambios con Git y GitHub.",
    ],
    instrumentos: [
      { nombre: "Guía práctica de programación y bases de datos", tipo: "Guía" },
      { nombre: "Rúbrica de funcionalidad, documentación y defensa", tipo: "Rúbrica" },
    ],
    programas: ["Visual Studio 2022", "SQL Server Management Studio"],
    herramientas: ["C#", "ASP.NET Core", "Bootstrap", "SQL"],
    recursos: [
      {
        titulo: "Documentación de ASP.NET Core",
        url: "https://learn.microsoft.com/aspnet/core/",
      },
      {
        titulo: "Documentación oficial de Bootstrap",
        url: "https://getbootstrap.com/docs/5.3/getting-started/introduction/",
      },
      {
        titulo: "Documentación de SQL Server",
        url: "https://learn.microsoft.com/sql/sql-server/",
      },
    ],
    evidencias: [
      {
        descripcion: "Ejemplos oficiales de aplicaciones y tecnologías .NET",
        enlace: "https://github.com/dotnet/samples",
      },
    ],
    quiz: [
      {
        pregunta: "¿Qué permite el polimorfismo en programación orientada a objetos?",
        opciones: [
          "Usar una operación común con distintas implementaciones según el objeto.",
          "Guardar todos los datos del programa en un solo archivo.",
          "Convertir automáticamente una aplicación web en una aplicación móvil.",
          "Evitar que una clase tenga métodos.",
        ],
        correcta: 0,
        explicacion:
          "El polimorfismo permite que objetos diferentes respondan de forma distinta a una misma operación.",
      },
      {
        pregunta: "En un CRUD, ¿qué operación corresponde a la letra U?",
        opciones: ["Crear", "Leer", "Actualizar", "Eliminar"],
        correcta: 2,
        explicacion:
          "CRUD significa crear, leer, actualizar y eliminar; la U viene de Update, que significa actualizar.",
      },
      {
        pregunta: "¿Para qué se usa Bootstrap en un proyecto web?",
        opciones: [
          "Para diseñar interfaces web adaptables usando estilos y componentes.",
          "Para administrar las tablas de SQL Server.",
          "Para compilar programas de C# en Android.",
          "Para reemplazar el control de versiones de Git.",
        ],
        correcta: 0,
        explicacion:
          "Bootstrap ofrece estilos y componentes que ayudan a construir interfaces web adaptables.",
      },
    ],
  },
  {
    id: "desarrollo-componentes-moviles",
    nombre: "Desarrollo de componentes para dispositivos móviles",
    docente: "Arcides Canales",
    resumen:
      "Desarrollo de aplicaciones móviles con .NET MAUI, controles de interfaz, navegación y enlace de datos.\nIncluye programación asíncrona y persistencia local de información con SQLite.",
    aprendizajes: [
      "Diseñar interfaces móviles usando controles y layouts de .NET MAUI.",
      "Implementar navegación, enlace de datos y operaciones asíncronas.",
      "Crear aplicaciones CRUD con almacenamiento SQLite local.",
    ],
    instrumentos: [
      { nombre: "Guía de desarrollo móvil con .NET MAUI", tipo: "Guía" },
      { nombre: "Rúbrica de aplicación móvil funcional", tipo: "Rúbrica" },
    ],
    programas: ["Visual Studio 2022", "Android Studio"],
    herramientas: ["C#", ".NET MAUI", "XAML", "SQLite"],
    recursos: [
      {
        titulo: "Documentación de .NET MAUI",
        url: "https://learn.microsoft.com/dotnet/maui/",
      },
      {
        titulo: "Documentación oficial de SQLite",
        url: "https://www.sqlite.org/docs.html",
      },
      {
        titulo: "Introducción a Android Studio",
        url: "https://developer.android.com/studio/intro",
      },
    ],
    evidencias: [
      {
        descripcion: "Repositorio oficial con ejemplos de .NET MAUI",
        enlace: "https://github.com/dotnet/maui-samples",
      },
    ],
    quiz: [
      {
        pregunta: "¿Qué función cumple XAML en una aplicación .NET MAUI?",
        opciones: [
          "Describir la interfaz visual y sus controles.",
          "Guardar los datos de la aplicación en una tabla SQLite.",
          "Administrar los commits del proyecto.",
          "Reemplazar el sistema operativo del dispositivo.",
        ],
        correcta: 0,
        explicacion:
          "XAML permite declarar la estructura visual de pantallas y controles de la aplicación.",
      },
      {
        pregunta: "¿Qué ventaja tiene usar SQLite para una aplicación móvil?",
        opciones: [
          "Permite almacenar datos localmente en el dispositivo.",
          "Obliga a que el dispositivo siempre esté conectado a internet.",
          "Convierte automáticamente C# en XAML.",
          "Sirve únicamente para diseñar botones.",
        ],
        correcta: 0,
        explicacion:
          "SQLite es una base de datos ligera que puede guardar información localmente en el dispositivo.",
      },
      {
        pregunta: "¿Qué significa que una operación use async y await?",
        opciones: [
          "Que puede esperar una tarea sin bloquear innecesariamente la interfaz.",
          "Que se ejecuta dos veces para asegurar el resultado.",
          "Que solo funciona cuando no hay conexión a internet.",
          "Que elimina los datos guardados al cerrar la aplicación.",
        ],
        correcta: 0,
        explicacion:
          "async y await ayudan a realizar operaciones que toman tiempo sin congelar la interfaz mientras se espera.",
      },
    ],
  },
  {
    id: "mantenimiento-sistemas-informaticos",
    nombre: "Mantenimiento y aseguramiento de la operación del sistema informático",
    docente: "Arcides Canales",
    resumen:
      "Módulo enfocado en diagnóstico preventivo y correctivo de equipos y sistemas operativos.\nPractica inspección de componentes, análisis de eventos y comandos para resolver incidentes.",
    aprendizajes: [
      "Identificar componentes de hardware y aplicar procedimientos de mantenimiento preventivo.",
      "Diagnosticar servicios, procesos, almacenamiento y eventos del sistema operativo.",
      "Documentar incidentes y proponer soluciones técnicas verificables.",
    ],
    instrumentos: [
      { nombre: "Guía de inspección y diagnóstico de equipos", tipo: "Guía" },
      { nombre: "Rúbrica de procedimiento y reporte técnico", tipo: "Rúbrica" },
    ],
    programas: ["Windows Terminal", "Visor de eventos de Windows"],
    herramientas: ["PowerShell", "Símbolo del sistema", "Windows Commands"],
    recursos: [
      {
        titulo: "Referencia de comandos de Windows",
        url: "https://learn.microsoft.com/windows-server/administration/windows-commands/windows-commands",
      },
      {
        titulo: "Documentación de PowerShell",
        url: "https://learn.microsoft.com/powershell/",
      },
      {
        titulo: "Documentación de Windows Sysinternals",
        url: "https://learn.microsoft.com/sysinternals/",
      },
    ],
    evidencias: [
      {
        descripcion: "Herramientas oficiales de diagnóstico de Windows Sysinternals",
        enlace: "https://learn.microsoft.com/sysinternals/",
      },
    ],
    quiz: [
      {
        pregunta: "¿Cuál es un ejemplo de mantenimiento preventivo de una computadora?",
        opciones: [
          "Limpiar el equipo y revisar sus componentes antes de que fallen.",
          "Esperar a que deje de funcionar para revisar qué ocurrió.",
          "Eliminar los reportes de errores sin analizarlos.",
          "Cambiar todas las piezas aunque estén funcionando.",
        ],
        correcta: 0,
        explicacion:
          "El mantenimiento preventivo busca reducir fallas mediante limpieza e inspecciones periódicas.",
      },
      {
        pregunta: "¿Para qué puede servir el Visor de eventos de Windows?",
        opciones: [
          "Revisar registros de errores y eventos del sistema.",
          "Diseñar las pantallas de una aplicación móvil.",
          "Crear tablas en una base de datos relacional.",
          "Editar el historial de versiones de Git.",
        ],
        correcta: 0,
        explicacion:
          "El Visor de eventos reúne registros que ayudan a investigar errores y actividad del sistema.",
      },
      {
        pregunta: "¿Qué comando de PowerShell muestra procesos en ejecución?",
        opciones: ["Get-Process", "Get-Table", "Show-Window", "Start-SQL"],
        correcta: 0,
        explicacion:
          "Get-Process lista los procesos que se están ejecutando en Windows.",
      },
    ],
  },
  {
    id: "proyecto-innovador-software",
    nombre: "Módulo 3.8: Proyecto innovador de Desarrollo de Software",
    docente: "Javier Mineros",
    resumen:
      "Planificación y construcción de un producto de software original, desde la propuesta y arquitectura hasta la interfaz.\nIncluye una aplicación móvil Android y documentación técnica organizada en un repositorio Git.",
    aprendizajes: [
      "Definir el problema, alcance, arquitectura y diseño de interfaz de un proyecto.",
      "Desarrollar una aplicación Android con Kotlin y Jetpack Compose.",
      "Documentar avances y mantener un historial de versiones con commits útiles.",
    ],
    instrumentos: [
      { nombre: "Guía de planificación del proyecto innovador", tipo: "Guía" },
      { nombre: "Rúbrica de avances, producto y defensa", tipo: "Rúbrica" },
    ],
    programas: ["Android Studio", "Visual Studio Code"],
    herramientas: ["Kotlin", "Jetpack Compose", "Git"],
    recursos: [
      {
        titulo: "Desarrollo Android con Kotlin",
        url: "https://developer.android.com/kotlin",
      },
      {
        titulo: "Documentación de Jetpack Compose",
        url: "https://developer.android.com/develop/ui/compose",
      },
      {
        titulo: "Documentación de Git",
        url: "https://git-scm.com/doc",
      },
    ],
    evidencias: [
      {
        descripcion: "Aplicación Android de referencia: Now in Android",
        enlace: "https://github.com/android/nowinandroid",
      },
    ],
    quiz: [
      {
        pregunta: "Antes de programar un proyecto innovador, ¿qué conviene definir primero?",
        opciones: [
          "El problema que se quiere resolver y el alcance del proyecto.",
          "El color de todos los botones, sin conocer los requisitos.",
          "La cantidad exacta de líneas de código.",
          "El nombre de cada variable del programa.",
        ],
        correcta: 0,
        explicacion:
          "Definir el problema y el alcance ayuda a decidir qué funciones necesita el producto.",
      },
      {
        pregunta: "¿Qué es Jetpack Compose en el desarrollo Android?",
        opciones: [
          "Una herramienta para construir interfaces de usuario con Kotlin.",
          "Una base de datos para guardar tablas SQL Server.",
          "Un sistema de control de versiones.",
          "Un lenguaje para escribir consultas de Power BI.",
        ],
        correcta: 0,
        explicacion:
          "Jetpack Compose es un conjunto de herramientas de Android para crear interfaces con Kotlin.",
      },
      {
        pregunta: "¿Qué aporta un commit significativo en Git?",
        opciones: [
          "Registra un cambio concreto con un mensaje que lo explica.",
          "Borra automáticamente todas las versiones anteriores.",
          "Publica la aplicación en una tienda móvil.",
          "Reemplaza las pruebas del proyecto.",
        ],
        correcta: 0,
        explicacion:
          "Un commit guarda un conjunto de cambios y su mensaje permite entender qué se modificó.",
      },
    ],
  },
  {
    id: "ingles-mantenimiento-sistemas",
    nombre: "Módulo 3.6: Conversación en inglés sobre mantenimiento de sistemas informáticos",
    docente: "Javier Mineros",
    resumen:
      "Práctica de comunicación técnica en inglés mediante auditorías de hardware, soporte y diagnóstico de sistemas.\nIncluye reportes de incidentes, propuestas de cambios y presentaciones de soluciones de TI.",
    aprendizajes: [
      "Describir en inglés componentes de hardware y procedimientos de mantenimiento.",
      "Diagnosticar problemas básicos de sistema y red con herramientas de línea de comandos.",
      "Redactar reportes, acuerdos de servicio y explicaciones técnicas para usuarios.",
    ],
    instrumentos: [
      { nombre: "Guía de auditoría y vocabulario técnico", tipo: "Guía" },
      { nombre: "Rúbrica de reporte y exposición oral", tipo: "Rúbrica" },
    ],
    programas: ["Windows Terminal", "Microsoft PowerPoint"],
    herramientas: ["PowerShell", "CMD", "GitHub"],
    recursos: [
      {
        titulo: "Referencia de comandos de Windows",
        url: "https://learn.microsoft.com/windows-server/administration/windows-commands/windows-commands",
      },
      {
        titulo: "Documentación de PowerShell",
        url: "https://learn.microsoft.com/powershell/",
      },
      {
        titulo: "Documentación de GitHub",
        url: "https://docs.github.com/",
      },
    ],
    evidencias: [
      {
        descripcion: "Ejemplo de documentación técnica de un proyecto de software",
        enlace: "https://github.com/dotnet/samples",
      },
    ],
    quiz: [
      {
        pregunta: "¿Qué información debe incluir un reporte técnico de un incidente?",
        opciones: [
          "El problema observado, las comprobaciones realizadas y la solución aplicada.",
          "Solo el nombre de quien redactó el reporte.",
          "Una lista de programas que no se usaron.",
          "Únicamente una opinión sin datos del incidente.",
        ],
        correcta: 0,
        explicacion:
          "Un reporte útil describe el incidente, el diagnóstico y las acciones para que otros puedan darle seguimiento.",
      },
      {
        pregunta: "¿Qué comando ayuda a comprobar si otro equipo responde en la red?",
        opciones: ["ping", "mkdir", "SELECT", "git commit"],
        correcta: 0,
        explicacion:
          "ping envía solicitudes de prueba para revisar si un equipo responde a través de la red.",
      },
      {
        pregunta: "¿Qué significa un SLA en un servicio de soporte?",
        opciones: [
          "Un acuerdo que define el nivel de servicio esperado.",
          "Un lenguaje para programar aplicaciones de escritorio.",
          "Una herramienta para limpiar componentes de hardware.",
          "Un tipo de memoria instalada en la computadora.",
        ],
        correcta: 0,
        explicacion:
          "Un SLA establece compromisos del servicio, como tiempos de respuesta y responsabilidades.",
      },
    ],
  },
  {
    id: "documentacion-sistemas-informaticos",
    nombre: "Módulo 3.4: Elaboración de documentación de Sistemas informáticos",
    docente: "Javier Mineros",
    resumen:
      "Elaboración de documentación técnica para interfaces de escritorio, aplicaciones Python y acceso a bases de datos.\nPromueve explicar decisiones de implementación, validaciones y funcionamiento del código.",
    aprendizajes: [
      "Documentar formularios de escritorio desarrollados con WinForms y WPF.",
      "Describir interfaces Python y la instalación de dependencias como CustomTkinter.",
      "Explicar conexiones y operaciones CRUD sobre bases de datos SQL Server.",
    ],
    instrumentos: [
      { nombre: "Guía de documentación de aplicaciones", tipo: "Guía" },
      { nombre: "Rúbrica de claridad, estructura y exactitud técnica", tipo: "Rúbrica" },
    ],
    programas: ["Visual Studio", "Visual Studio Code", "SQL Server Management Studio"],
    herramientas: ["C#", "Windows Forms", "WPF", "Python", "CustomTkinter"],
    recursos: [
      {
        titulo: "Documentación de Windows Forms",
        url: "https://learn.microsoft.com/dotnet/desktop/winforms/",
      },
      {
        titulo: "Documentación de WPF",
        url: "https://learn.microsoft.com/dotnet/desktop/wpf/",
      },
      {
        titulo: "Documentación de CustomTkinter",
        url: "https://customtkinter.tomschimansky.com/documentation/",
      },
    ],
    evidencias: [
      {
        descripcion: "Ejemplos oficiales de aplicaciones de escritorio .NET",
        enlace: "https://github.com/dotnet/samples",
      },
    ],
    quiz: [
      {
        pregunta: "¿Qué se documenta normalmente para un formulario de WinForms o WPF?",
        opciones: [
          "Su propósito, controles principales y cómo funcionan sus eventos.",
          "Solo el color de fondo de la ventana.",
          "La lista de archivos personales del usuario.",
          "Únicamente el nombre del compilador.",
        ],
        correcta: 0,
        explicacion:
          "La documentación debe ayudar a entender el propósito del formulario y el comportamiento de sus controles.",
      },
      {
        pregunta: "¿Para qué se usa CustomTkinter en Python?",
        opciones: [
          "Para crear interfaces gráficas de escritorio.",
          "Para ejecutar consultas de SQL Server.",
          "Para administrar commits en GitHub.",
          "Para programar directamente un microcontrolador Arduino.",
        ],
        correcta: 0,
        explicacion:
          "CustomTkinter es una biblioteca de Python para construir interfaces gráficas de escritorio.",
      },
      {
        pregunta: "¿Qué información debe explicar la documentación de una conexión a base de datos?",
        opciones: [
          "Cómo se establece la conexión y qué operaciones realiza la aplicación.",
          "Solo la marca de la computadora donde se escribió el código.",
          "La contraseña real de la base de datos.",
          "Únicamente el tamaño de la ventana del programa.",
        ],
        correcta: 0,
        explicacion:
          "La documentación debe describir la conexión y las operaciones sin exponer credenciales secretas.",
      },
    ],
  },
  {
    id: "administracion-bases-datos",
    nombre: "Módulo 3.3: Administración de Bases de Datos",
    docente: "Javier Mineros",
    resumen:
      "Diseño y administración de bases de datos relacionales, consultas, procedimientos almacenados y copias de seguridad.\nRelaciona los datos con análisis y visualizaciones en Power BI.",
    aprendizajes: [
      "Diseñar esquemas relacionales normalizados con claves y restricciones.",
      "Escribir consultas, procedimientos almacenados y scripts de respaldo en SQL.",
      "Conectar fuentes de datos y construir métricas y visualizaciones con Power BI.",
    ],
    instrumentos: [
      { nombre: "Guía de diseño y consultas de bases de datos", tipo: "Guía" },
      { nombre: "Examen práctico de SQL y modelado relacional", tipo: "Examen" },
    ],
    programas: ["SQL Server Management Studio", "Power BI Desktop"],
    herramientas: ["SQL", "T-SQL", "DAX"],
    recursos: [
      {
        titulo: "Documentación de SQL Server",
        url: "https://learn.microsoft.com/sql/sql-server/",
      },
      {
        titulo: "Documentación de Power BI",
        url: "https://learn.microsoft.com/power-bi/",
      },
      {
        titulo: "Guía de diseño de bases de datos relacionales",
        url: "https://learn.microsoft.com/office/troubleshoot/access/database-normalization-description",
      },
    ],
    evidencias: [
      {
        descripcion: "Bases de datos y ejemplos oficiales de SQL Server",
        enlace: "https://github.com/microsoft/sql-server-samples",
      },
    ],
    quiz: [
      {
        pregunta: "¿Cuál es el propósito principal de normalizar una base de datos?",
        opciones: [
          "Reducir duplicación y organizar los datos en tablas relacionadas.",
          "Guardar todos los datos repetidos en una sola columna.",
          "Eliminar las claves primarias de las tablas.",
          "Convertir automáticamente tablas en gráficos.",
        ],
        correcta: 0,
        explicacion:
          "La normalización organiza los datos para reducir duplicaciones y evitar inconsistencias.",
      },
      {
        pregunta: "¿Qué identifica una clave primaria?",
        opciones: [
          "De forma única cada registro de una tabla.",
          "El programa usado para abrir la base de datos.",
          "La contraseña de todos los usuarios.",
          "El orden en que se diseñaron las tablas.",
        ],
        correcta: 0,
        explicacion:
          "La clave primaria distingue de manera única cada fila de una tabla.",
      },
      {
        pregunta: "¿Para qué se realiza una copia de seguridad de una base de datos?",
        opciones: [
          "Para poder recuperar los datos si se pierden o dañan.",
          "Para borrar automáticamente los registros antiguos.",
          "Para cambiar el diseño de las tablas.",
          "Para reemplazar las consultas SQL.",
        ],
        correcta: 0,
        explicacion:
          "Un respaldo permite restaurar los datos ante errores, daños o pérdida de información.",
      },
    ],
  },
  {
    id: "proyecto-arduino",
    nombre: "Proyecto Arduino",
    docente: "Javier Mineros",
    resumen:
      "Diseño de un prototipo que combina programación, sensores y componentes electrónicos para resolver un problema concreto.\nEl proyecto contempla pruebas, integración del circuito y documentación de su funcionamiento.",
    aprendizajes: [
      "Implementar programas de microcontrolador para leer entradas y controlar salidas.",
      "Integrar sensores, actuadores y bibliotecas según los requisitos del prototipo.",
      "Probar el circuito de forma segura y documentar resultados y ajustes.",
    ],
    instrumentos: [
      { nombre: "Guía de montaje y programación del prototipo", tipo: "Guía" },
      { nombre: "Rúbrica de funcionamiento, pruebas y documentación", tipo: "Rúbrica" },
    ],
    programas: ["Arduino IDE 2", "Visual Studio Code"],
    herramientas: ["C++", "Arduino", "Arduino libraries"],
    recursos: [
      {
        titulo: "Documentación oficial de Arduino",
        url: "https://docs.arduino.cc/",
      },
      {
        titulo: "Referencia del lenguaje Arduino",
        url: "https://docs.arduino.cc/language-reference/",
      },
      {
        titulo: "Documentación de bibliotecas Arduino",
        url: "https://docs.arduino.cc/libraries/",
      },
    ],
    evidencias: [
      {
        descripcion: "Ejemplos oficiales de Arduino",
        enlace: "https://github.com/arduino/arduino-examples",
      },
    ],
    quiz: [
      {
        pregunta: "¿Qué es una entrada en un proyecto con Arduino?",
        opciones: [
          "Una señal que el programa lee desde un sensor o botón.",
          "Una instrucción para borrar el programa del microcontrolador.",
          "Una salida que siempre enciende un motor.",
          "Un archivo usado para documentar una base de datos.",
        ],
        correcta: 0,
        explicacion:
          "Una entrada entrega información al Arduino, por ejemplo, el estado de un botón o la lectura de un sensor.",
      },
      {
        pregunta: "¿Para qué se usa una biblioteca de Arduino?",
        opciones: [
          "Para reutilizar funciones que facilitan trabajar con componentes o dispositivos.",
          "Para reemplazar todos los cables del circuito.",
          "Para guardar fotografías en la memoria del computador.",
          "Para convertir un circuito en una tabla SQL.",
        ],
        correcta: 0,
        explicacion:
          "Las bibliotecas incluyen código reutilizable para controlar componentes y realizar tareas comunes.",
      },
      {
        pregunta: "¿Qué se debe hacer antes de conectar un componente al prototipo?",
        opciones: [
          "Revisar sus especificaciones y conectar correctamente alimentación y pines.",
          "Conectarlo al azar y probar con el máximo voltaje.",
          "Retirar todos los cables de tierra.",
          "Ignorar el diagrama porque el código lo corrige.",
        ],
        correcta: 0,
        explicacion:
          "Revisar las especificaciones y el cableado ayuda a evitar conexiones incorrectas y daños.",
      },
    ],
  },
  {
    id: "tesis-proyecto-graduacion",
    nombre: "Tesis / Proyecto de Graduación",
    docente: "Julio",
    resumen:
      "Desarrollo documentado de una solución de software para una empresa o necesidad definida como proyecto de graduación.\nAbarca análisis, diseño, implementación de base de datos y validación de la aplicación.",
    aprendizajes: [
      "Traducir requisitos de un problema en una propuesta y arquitectura de software.",
      "Implementar una aplicación conectada a una base de datos relacional.",
      "Preparar documentación, pruebas y una defensa técnica del producto desarrollado.",
    ],
    instrumentos: [
      { nombre: "Guía de estructura del proyecto de graduación", tipo: "Guía" },
      { nombre: "Rúbrica de producto, documentación y defensa", tipo: "Rúbrica" },
    ],
    programas: ["Visual Studio", "SQL Server Management Studio"],
    herramientas: ["C#", "ASP.NET Core", "SQL Server"],
    recursos: [
      {
        titulo: "Documentación de ASP.NET Core",
        url: "https://learn.microsoft.com/aspnet/core/",
      },
      {
        titulo: "Documentación de SQL Server",
        url: "https://learn.microsoft.com/sql/sql-server/",
      },
      {
        titulo: "Documentación de Git",
        url: "https://git-scm.com/doc",
      },
    ],
    evidencias: [
      {
        descripcion: "Ejemplos oficiales de aplicaciones .NET",
        enlace: "https://github.com/dotnet/samples",
      },
    ],
    quiz: [
      {
        pregunta: "¿Qué es un requisito funcional de un proyecto de graduación?",
        opciones: [
          "Una acción o servicio que el sistema debe ofrecer al usuario.",
          "El color favorito de quien programa.",
          "Una lista de piezas físicas que no forman parte del sistema.",
          "El nombre del archivo ejecutable.",
        ],
        correcta: 0,
        explicacion:
          "Un requisito funcional describe una función que el sistema debe realizar, como registrar o consultar datos.",
      },
      {
        pregunta: "¿Para qué se relacionan tablas con claves foráneas?",
        opciones: [
          "Para representar vínculos entre registros de distintas tablas.",
          "Para permitir que una fila cambie de color.",
          "Para reemplazar todas las consultas de la aplicación.",
          "Para guardar contraseñas en el código fuente.",
        ],
        correcta: 0,
        explicacion:
          "Una clave foránea conecta registros relacionados y ayuda a mantener la integridad de los datos.",
      },
      {
        pregunta: "¿Qué demuestra una prueba funcional de una aplicación?",
        opciones: [
          "Que una función responde como se espera ante ciertos datos de entrada.",
          "Que el proyecto tiene muchos archivos.",
          "Que todos los usuarios conocen el código de memoria.",
          "Que no hace falta documentar el sistema.",
        ],
        correcta: 0,
        explicacion:
          "Una prueba funcional verifica el comportamiento observable de una función con entradas definidas.",
      },
    ],
  },
];

export { modulos };
export default modulos;
