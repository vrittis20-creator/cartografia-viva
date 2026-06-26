/* =====================================================================
   CARTOGRAFÍA VIVA · CONTENIDO
   =====================================================================
   ESTE es el único archivo que editás para sumar o cambiar lugares.
   No hace falta tocar index.html nunca más.

   CÓMO SUMAR UN LUGAR:
   1) Copiá un bloque entero { ... } de los de abajo (desde la llave que
      abre hasta la que cierra, con la coma final).
   2) Pegalo dentro de la lista, antes del corchete ] del final.
   3) Cambiale los textos. Listo: aparece en el mapa solo.

   REGLAS DE ORO:
   - Respetá las comillas " " y las comas. Si borrás una, se rompe.
   - Los nombres de archivos van sin tildes ni espacios (galpon.glb, no galpón.glb).
   - Las rutas son carpeta/archivo: "modelos/galpon.glb", "imagenes/foto1.jpg".

   POSICIÓN EN EL MAPA (x, y):
   - Son números de 0 a 1. x=horizontal (0 izquierda, 1 derecha),
     y=vertical (0 arriba, 1 abajo). Probás y ajustás mirando el mapa.

   CATEGORÍAS disponibles (definen el color del pin):
     "museo"  "festival"  "monumento"  "mural"
   ===================================================================== */

window.SITIOS = [

  /* ---------- EJEMPLO COMPLETO Y REAL: EL GALPÓN ----------
     Este bloque tiene TODO lo que un sitio puede llevar, con comentarios.
     Usalo de referencia. Lo que no uses, podés borrarlo o dejarlo vacío. */
  {
    id: "galpon",                         // identificador único, sin espacios
    nombre: "Galpón ferroviario",         // lo que se lee en el pin
    cat: "museo",                         // categoría (color del pin)
    x: 0.40, y: 0.63,                     // posición en el mapa (0 a 1)

    // --- MODELO 3D (la fotogrametría) ---
    modelo: "modelos/galpon.glb",         // ruta a tu .glb. Si no tenés, poné: modelo:""

    // --- LA VOZ DEL LUGAR (la IA) ---
    // La IA responde SOLO con lo que pongas acá. Si no está acá, dice
    // honestamente que no lo tiene documentado (no inventa).
    voz: {
      nombre: "Voz del galpón",           // cómo se presenta el chat
      // Frase de bienvenida del chat:
      intro: "Soy el galpón del ferrocarril. Acá se guardó y reparó buena parte de la historia del pueblo. Preguntame.",
      // Botones de preguntas sugeridas (los que el visitante toca para arrancar):
      sugerencias: ["¿Qué guardabas?", "¿De cuándo sos?", "¿Qué pasa hoy acá?"],
      // FUENTES: el conocimiento del lugar. Cada línea es un dato CIERTO.
      // Escribí tantas como quieras. Mezclá: historia, contexto, anécdotas,
      // y los mitos SIEMPRE marcados como tales ("se dice que...", "el relato popular...").
      fuentes: [
        "El galpón ferroviario formaba parte del complejo del ferrocarril de Saladillo, usado para resguardo y mantenimiento.",
        "El ferrocarril fue durante décadas el principal motor de trabajo de la zona; sus galpones son testigos de esa época.",
        "Tras el repliegue del servicio, el predio y sus galpones quedaron como espacio patrimonial.",
        "El galpón fue registrado en fotogrametría como parte del archivo digital de Cartografía Viva."
      ]
    },

    // --- LOS TRES PUNTOS INTERACTIVOS ---
    // Cada punto puede ser de tipo "audio", "galeria" o "mito".
    puntos: [
      {
        tag: "El trabajo", titulo: "Lo que pasaba adentro", meta: "Testimonio",
        tipo: "audio",
        audio: "audios/galpon.mp3",       // ruta a tu audio. Si no tenés: audio:""
        cuerpo: ["La voz de quienes trabajaron en el ferrocarril reconstruye la vida dentro del galpón."]
      },
      {
        tag: "La estructura", titulo: "Cómo está hecho", meta: "Registro 3D",
        tipo: "galeria",
        // Hasta 3 fotos. Rutas a la carpeta imagenes. Si no tenés, dejá [] vacío.
        fotos: ["imagenes/galpon-1.jpg", "imagenes/galpon-2.jpg", "imagenes/galpon-3.jpg"],
        cuerpo: ["El modelo 3D permite recorrer el galpón y observar su estructura de cerca."]
      },
      {
        tag: "Hoy", titulo: "De depósito a patrimonio", meta: "Cartografía de mitos",
        tipo: "mito",
        mito: {
          historica: "El galpón se preserva como parte del patrimonio ferroviario del predio.",
          popular: "Para el barrio sigue siendo, antes que patrimonio, 'el galpón' de toda la vida."
        },
        cuerpo: ["Lo que para una placa es patrimonio, para el vecino es memoria cotidiana."]
      }
    ],

    // --- LINKS (varios tipos por sitio) ---
    // Aparecen como botones en la hoja del lugar. Poné los que tengas.
    // tipo puede ser: "video", "nota", "documento", "web" (solo cambia el iconito/etiqueta).
    links: [
      { tipo: "video", titulo: "Video del galpón", url: "https://www.youtube.com/..." },
      { tipo: "nota", titulo: "Nota sobre el ferrocarril", url: "https://..." },
      { tipo: "documento", titulo: "Archivo histórico (PDF)", url: "https://..." }
    ]
  },


  /* ---------- PLANTILLA EN BLANCO: COPIÁ ESTO PARA UN LUGAR NUEVO ----------
     Borrá lo que no uses. Lo mínimo para que funcione: id, nombre, cat, x, y.
     Todo lo demás es opcional. */
  {
    id: "nuevo-lugar",
    nombre: "Nombre del lugar",
    cat: "mural",
    x: 0.50, y: 0.50,

    modelo: "",                           // "modelos/tuarchivo.glb" cuando lo tengas

    voz: {
      nombre: "Voz del lugar",
      intro: "Soy este lugar. Preguntame lo que quieras.",
      sugerencias: ["¿Qué sos?", "¿Quién te hizo?", "¿Qué historia tenés?"],
      fuentes: [
        "Escribí acá un dato cierto sobre el lugar.",
        "Otro dato. Sumá los que quieras.",
        "Si hay un mito, marcalo: 'Se dice en el barrio que...'."
      ]
    },

    puntos: [
      {
        tag: "Punto 1", titulo: "Título del punto", meta: "Etiqueta",
        tipo: "audio", audio: "",
        cuerpo: ["Texto que acompaña este punto."]
      },
      {
        tag: "Punto 2", titulo: "Las imágenes", meta: "Archivo",
        tipo: "galeria", fotos: [],
        cuerpo: ["Texto que acompaña las fotos."]
      },
      {
        tag: "Punto 3", titulo: "Historia y mito", meta: "Cartografía de mitos",
        tipo: "mito",
        mito: { historica: "La versión documentada.", popular: "La versión popular." },
        cuerpo: ["Lo que querés contar acá."]
      }
    ],

    links: []
  }

]; // <-- NO borres este corchete ni el punto y coma. Cierran la lista.
