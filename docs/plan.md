# Prompt del proyecto: plano 3D de la vivienda para Home Assistant (título provisional «NeonPlan 3D»)

> Cómo empezar: abre una nueva sesión de Claude Code en esta carpeta y escribe
> «Lee PROMPT.md y empieza con la fase 1.» El nombre es un título provisional y se puede cambiar en cualquier momento.

## 1. Objetivo

Construir una **integración independiente de Home Assistant** (HACS, código abierto, MIT) con la que uno **dibuja su piso o su casa directamente en Home Assistant** y la muestra y controla como una **vista 3D realmente bonita**. Sin herramientas externas (ni Sweet Home 3D ni Blender), sin nube.

La ambición en tres frases:
- Tiene que **verse increíblemente bien**: un **look neón** estilizado y de calidad (oscuro, bordes luminosos, habitaciones que brillan, flujos de energía animados), nada de dibujo de líneas, nada de kitsch.
- Tiene que ser **increíblemente fácil de usar**: girar, hacer zoom, volar a las habitaciones con un toque, cambiar rápido entre habitaciones y plantas, accionar dispositivos directamente, con ratón y con pantalla táctil.
- Tiene que ser **ligero**: fluido en una **Amazon Fire HD 10** (Fully Kiosk / Silk) como tableta de pared, con prácticamente 0 % de carga en reposo.

Idiomas: interfaz en castellano e inglés (castellano primero). Código, identificadores y comentarios en inglés.

## 2. Look: neón (vinculante)

Referencia: la demo de estilo «Stilprobe 3D-Wohnung» (look «Neon», versión 2 con paredes altas, persianas, sensores de ventana y flujo de energía) en https://claude.ai/artifact/X23mncajZKLwMZRoWco2KE, legible con la herramienta Artifact (`action: "read"`). Sus técnicas (abatir las paredes, rigs de ventanas, shader de flujo de energía en un solo draw call, renderizar bajo demanda) están pensadas expresamente para reutilizarse. El usuario eligió el neón, pero lo quiere **dibujado con más finura**, y quiere **flujos de energía** como en una imagen de referencia: líneas luminosas desde la acometida de la casa a través de las paredes hasta los consumidores, vatios junto a los dispositivos, consumo total, producción solar, tarifa actual.

Reglas de diseño:
- Fondo oscuro (valor orientativo `#070b14`), suelos casi negros con una cuadrícula fina, paredes oscuras con **cantos superiores luminosos** (cian `#37e0ff`), muebles oscuros con **bordes luminosos sutiles** (azul `#5b7cff`, baja opacidad).
- **Más fino que la demo:**
  - Muebles con más detalle: cojines, patas, chaflanes, tiradores, cocina con frentes.
  - Bordes más finos y limpios; ventanas con marco y cristal, puertas como hueco con cerco.
  - Ligeras diferencias de luminosidad entre materiales para que haya profundidad.
- **Los estados brillan:** lámpara encendida → resplandor cálido en el suelo (valor orientativo `#ffb547`). La habitación activa, más clara. Personas como marcadores rosas con resplandor (`#ff5fd2`). Temperatura opcional como coloración de la habitación (frío azul, cálido naranja).
- **Flujos de energía** (ver sección 6):
  - Líneas luminosas con **flujo animado**; velocidad y brillo siguen a la potencia.
  - Colores: consumo de la red cian, inyección o solar amarillo, batería verde.
  - Etiquetas de vatios en los dispositivos.
- Rótulos como overlays HTML limpios (tipografía p. ej. «Bricolage Grotesque» para títulos, «Figtree» para la UI), no como texturas de texto.
- Nada de kitsch: nada de degradados por el gusto de ponerlos, nada de emojis en la interfaz final (en la demo eran marcadores de posición), iconos como SVG propios.
- Un modo de día claro es opcional (fase 6). El estándar es neón, también de día.

**Límite honesto:** la imagen de referencia está renderizada de forma fotorrealista. Eso no es posible en tiempo real en una tableta Fire. El objetivo es su **efecto** (maqueta en corte oscura, líneas luminosas, valores en los dispositivos), conseguido con las técnicas ligeras de la sección 5.

## 3. Funcionalidades

1. **Dibujar en HA (editor 2D)**
   - Plantas con altura y orden; habitaciones como rectángulo o forma libre, medidas en metros introducibles con exactitud, ajuste a cuadrícula y esquinas, arrastrar esquinas, insertar punto en una arista, deshacer (Ctrl+Z), duplicar, borrar.
   - Cada habitación se vincula con un **área de HA**.
   - **Las paredes se generan automáticamente** a partir de las habitaciones: grosor de pared interior y exterior, las aristas compartidas se fusionan en una sola pared, esquinas bien unidas.
   - **Puertas y ventanas** arrastrándolas sobre una pared (ancho, posición, altura del antepecho en ventanas).
   - **Muebles** de una biblioteca propia: colocar arrastrando, girar, escalar: sofá, sillón, mesa, silla, cama, mesita de noche, armario, estantería, cocina, frigorífico, fogón, fregadero, bañera, ducha, inodoro, lavabo, escritorio, mueble de TV, planta, alfombra.
   - **Colocación de dispositivos:** se proponen las entidades del área vinculada y se reparten automáticamente por la habitación, movibles a mano (lámparas, interruptores, enchufes, sensores, persianas, termostatos, multimedia, cámaras).
   - Opcionalmente una **imagen como plantilla** (foto del plano) con escala y opacidad para calcarla.
   - Manejo con ratón y táctil (zoom con pellizco, desplazar con dos dedos).
2. **Vista 3D (neón)**
   - **Paredes a altura completa con abatimiento automático (por defecto)**:
     - Las paredes llegan hasta el techo (p. ej. 2,5 m). Las paredes que quedan entre la cámara y la habitación (la normal de la pared exterior apunta a la cámara) se recortan automáticamente a la altura de la cadera (aprox. 1,15 m); las de atrás siguen altas.
     - En el modo habitación esto vale también para las paredes interiores de la habitación elegida.
     - Alternativamente un interruptor «Corte» (todas las paredes bajas).
     - Implementación: por pared una parte inferior (siempre visible) y una parte superior (visibilidad según el ángulo de visión, solo se conmuta cuando cambia).
   - **Varias plantas en tres niveles** (así implementado en la demo de estilo):
     1. **Casa**: todas las plantas una encima de otra, por defecto **separadas** (distancia adicional aprox. 2,4 m), conmutable a «apiladas». En cada planta un rótulo «Planta alta · 5 habitaciones · 3 luces encendidas · 2 abiertas · 1 pers.» que se puede tocar. Solo rótulos de planta y de habitación, ningún rótulo de dispositivo (si no, las plantas se tapan).
     2. **Planta**: las plantas superiores suben suavemente y se desvanecen, las inferiores quedan atenuadas (aprox. 20 % de opacidad) como orientación. Los chips de habitación muestran solo las habitaciones de esa planta.
     3. **Habitación**: vuelo de cámara a la habitación de la planta elegida.
     - Un nivel atrás con doble toque, Esc o botón de cerrar (habitación → planta → casa).
     - Escaleras como elemento propio (posición, sentido de subida, número de peldaños) con **hueco en el forjado** de la planta superior y barandilla.
     - Implementación: por planta un grupo cuya altura y opacidad se animan. Los materiales recuerdan su opacidad base. Las pruebas de impacto solo en plantas visibles.
     - Draw calls: en la vista de casa cuentan todas las plantas juntas → hojas de ventana, persianas, resplandores de luz y cristal **agrupados por planta** (la demo con dos plantas está en aprox. 105 draw calls, demasiado; el objetivo sigue siendo menos de 60).
   - Cámara: vista general → planta → habitación con vuelos suaves (aprox. 700 ms), giro con inercia, zoom, desplazamiento, doble toque para volver, chips de habitación para cambiar rápido.
   - Tocar una habitación → vuelo hacia dentro + **panel de la habitación** (a la derecha; en dispositivos estrechos, abajo).
3. **Control** (servicios reales de HA)
   - Luz: encendido/apagado, brillo, color/temperatura de color; el resplandor sigue al brillo y al color.
   - **Persianas visibles en 3D**:
     - Las lamas bajan desde arriba hasta la posición ajustada delante de cada ventana o puerta de terraza, con cajón de persiana.
     - Posición en vivo desde entidades `cover`, control con deslizador y subir/bajar/parar.
     - Las persianas se asignan a ventanas (automáticamente por área, modificable a mano).
   - **Ventanas y puertas con sensores de contacto**:
     - Un `binary_sensor` (device_class window/door/opening) se asigna a una ventana/puerta. Estados: cerrada / abatida / abierta; «abatida» mediante un segundo sensor o un atributo, si existe.
     - En 3D la hoja se abre visiblemente (giro sobre el lado de las bisagras) o se abate (giro sobre el canto inferior); la puerta de terraza gira hacia fuera.
     - Las ventanas abiertas brillan en cálido (p. ej. `#ffb547`), la habitación muestra «2 abiertas», la vista general puede marcar «todas las ventanas abiertas».
   - Calefacción (consigna/real, modo), multimedia (play/pausa, título, volumen), interruptores/enchufes, escenas y scripts del área.
   - Directamente en 3D: tocar una lámpara la conmuta; una pulsación larga abre los detalles.
4. **Presencia**
   - Personas en la habitación a partir de `person`/`device_tracker` y de sensores de habitación (ESPresense, Bermuda: sensor con el nombre de la habitación como estado, asignado a un área por configuración).
5. **Energía** (ver sección 6).
6. **Tarjeta de dashboard y barra lateral**
   - Página propia en la barra lateral (`panel_custom`) más tarjeta de Lovelace (cargada automáticamente, sin necesidad de recurso).
   - Modo quiosco para tabletas de pared: pantalla completa, solo 3D, zona táctil grande, atenuación nocturna.

## 4. Arquitectura (probada en el proyecto «Zigbee Health»)

- **Backend (Python)**
  - `custom_components/<domain>/`, config flow sin YAML.
  - Almacenamiento con `homeassistant.helpers.storage.Store`, **separado por tamaño**: el edificio (habitaciones, paredes, muebles, colocaciones) en un store pequeño, las imágenes de fondo en un store propio. Guardar a menudo en el editor nunca debe reescribir imágenes.
  - Comandos websocket (`websocket_api`): `building/get`, `building/save`, `building/image`, … con esquema voluptuous. Los comandos que modifican, con `@require_admin`.
  - Al eliminar la integración (`async_remove_entry`) borrar **todos** los stores.
- **Frontend**: Lit 3 + TypeScript, empaquetado con esbuild.
  - Bundle principal: tarjeta, panel, editor.
  - **three.js como bundle propio**, cargado solo al abrir la vista 3D (`import(new URL("./…-3d.js", import.meta.url))`, versión pasada con `?v=`).
  - Registrar ambos archivos como rutas estáticas (`async_register_static_paths`), cargar la tarjeta con `add_extra_js_url`.
- **Servicios y estados**: la tarjeta recibe `hass` del frontend, lee estados de `hass.states` y llama a servicios con `hass.callService`. Solo los cambios en entidades visibles provocan un redibujado.
- **Modelo de datos** (metros, x hacia la derecha, z hacia abajo):
  - `floors[]`: id, name, elevation, height, cut_height, rooms[], openings[], furniture[], placements[], background?
  - `room`: id, name, area_id, points[[x,z]…], floor_material
  - `opening`: id, wall_ref (arista de habitación o ID de pared), offset, width, type (door/window), sill, height
  - `furniture`: id, type, x, z, rotation, w, d, h, variant
  - `placement`: entity_id, x, z, y?, floor
  - `energy`: posición del contador, trazado de las líneas (automático o manual), asignación de sensores (ver sección 6)

## 5. Rendimiento (reglas estrictas)

- **Renderizar solo bajo demanda**: sin bucle continuo. Solo se dibuja al girar/hacer zoom, durante los vuelos de cámara, durante animaciones de flujo visibles y con cambios de estado. La animación del flujo de energía va a una tasa reducida (p. ej. 20–30 fotogramas/s) y se detiene cuando no fluye nada o la página no es visible (`visibilitychange`).
- **Agrupar geometría**: por planta pocos meshes (paredes, muebles, bordes, líneas) con colores de vértice; bordes como `LineSegments`.
- **Sin sombras en tiempo real ni post-procesado caro** en dispositivos débiles. Resplandor mediante sprites/planos aditivos con textura radial. Bloom real solo en el nivel de calidad «Alta».
- **Precalcular sombras y oclusión ambiental**: hornear una vez los bordes de pared y las sombras de los muebles en la textura del suelo (canvas) o en los colores de vértice.
- **Niveles de calidad** automáticos (deviceMemory, hardwareConcurrency, user agent de Fire/Silk) y manuales: pixel ratio, antialiasing, bloom.
- **Presupuestos**: menos de 60 000 triángulos por planta, menos de 60 draw calls, bundle 3D por debajo de 650 KB, bundle principal por debajo de 250 KB. Objetivo: 30+ fotogramas/s al girar en una Fire HD 10, 0 fotogramas/s en reposo.
- Un indicador de rendimiento integrado (fotogramas/s, draw calls, triángulos) para desarrolladores, desactivable.

## 6. Flujo de energía (el punto fuerte del neón)

- **Configuración por dispositivo**: el sensor de potencia (W) se propone automáticamente cuando una entidad del área tiene `device_class: power` o pertenece al mismo dispositivo. A esto se suman consumo de red/inyección, producción solar, batería de la casa (potencia, nivel de carga) y un sensor de tarifa opcional (p. ej. precio actual €/kWh, próximo cambio de tarifa). Los sensores pueden tomarse del panel de energía de HA, donde exista.
- **Trazado automático de las líneas**: desde el cuadro del contador (colocado en el editor) a lo largo del pie de las paredes por la ruta más corta (grafo de los ejes de las paredes) hasta cada consumidor. Corrección manual posible en el editor.
- **Representación**: línea luminosa con patrón de franjas animado (shader o desplazamiento de textura). Velocidad ∝ potencia, a 0 W quieta y atenuada. Colores: consumo de red cian, inyección/solar amarillo, batería verde.
- **Rótulos**: vatios en el dispositivo; en el modo vista general una **barra de energía** compacta con consumo total, consumo de red/inyección, solar, batería y tarifa actual.
- Los valores se actualizan en vivo; suavizado contra el parpadeo.

## 7. Fases (funcional tras cada fase, el usuario prueba en su HA)

1. **Base**:
   - Integración (config flow, stores, websocket, panel, tarjeta), modelo de datos, editor 2D para plantas y habitaciones, vinculación de áreas
   - **Generación de paredes a partir de habitaciones** (primero, con tests unitarios)
   - vista 3D sencilla
2. **Look neón y cámara**: maqueta en corte, materiales, bordes, sombras horneadas, vuelos de cámara, chips de habitación, plantas, niveles de calidad, renderizado bajo demanda.
3. **Control**: colocación de dispositivos, panel de habitación, luz con resplandor, persianas, calefacción, multimedia, escenas, accionar directamente en 3D.
4. **Equipamiento**: puertas/ventanas en las paredes, biblioteca de muebles (modelos low-poly generados proceduralmente, finos y coherentes con el look neón), materiales de suelo.
5. **Energía y presencia**: flujo de energía (sección 6), marcadores de personas.
6. **Pulido y release**: modo quiosco, modo claro opcional, accesibilidad (teclado, movimiento reducido), documentación con capturas, CI, release en HACS.

## 8. Calidad y forma de trabajo

- **Tests**
  - Módulos puros de geometría/lógica sin imports de HA con pytest o tests de TypeScript: generación de paredes, rutas de las líneas, ajuste, colocación.
  - Tests de integración con `pytest-homeassistant-custom-component`: websocket, comprobación de admin, stores, eliminar lo borra todo.
- **CI (GitHub Actions)**: tests, ruff, mypy, `tsc --noEmit`, hassfest, validación de HACS.
- **Página de vista previa**: un archivo HTML independiente con **datos de demo inventados** y un `hass` simulado (estados, `callService`, `callWS`), para poder revisar la interfaz y el look sin HA. Capturas con Chrome headless (puppeteer-core) como autocontrol.
- **Ningún dato personal** en el repositorio: ni nombres reales de dispositivos, ni IPs, ni credenciales, ni planos del usuario. Si el usuario aporta datos propios para probar, usarlos solo en local y excluidos con `.gitignore`.
- Tras cada fase: subir la versión, hacer commit, push, comprobar la CI, actualizar la vista previa y mostrar brevemente al usuario en castellano qué hay de nuevo y cómo probarlo.
- Desarrollo en Windows: los tests de integración de HA solo funcionan de forma fiable en la CI de Linux; en local ejecutar los tests sin HA.

## 9. Escollos que aparecieron en el proyecto anterior (evitarlos)

- Los componentes Lit comparten estilos: **los nombres de clase pueden chocar con estilos comunes** (p. ej. `.bar`, `.room`) → usar nombres de clase propios y únicos.
- No llamar a las propiedades `focus`, `blur`, `hidden`, etc.: chocan con `HTMLElement`.
- `THREE.Color(...).multiplyScalar(k).getHex()` **desborda** con valores por encima de 1 (el blanco se vuelve negro) → limitar los canales a 1 antes de `getHex()`.
- Selectores como `[data-look]` también aciertan en `<body data-look>` → limitar los selectores a botones.
- Shaders propios: `active` (y otras palabras) están reservadas en GLSL ES 3.0 → nombrar las variables sin ambigüedad; comprobar con `abs()` las velocidades negativas (flujo hacia atrás).
- Agrupar siempre las piezas pequeñas (marcos de ventana, partes de muebles) en pocos meshes; si no, los draw calls superan rápido el presupuesto.
- Las variables CSS como `--title: var(--text)` se resuelven en el elemento que las define → fijarlas explícitamente por look.
- SVG en unidades de metro: los trazos y textos necesitan `vector-effect: non-scaling-stroke` o tamaños mínimos en píxeles; si no, las líneas se vuelven enormes o los textos diminutos.
- Los datos grandes (imágenes) nunca se guardan junto con los datos que se guardan a menudo ni en el historial de deshacer.
- Al eliminar la integración, borrar todos los stores, no solo uno.
- HACS necesita un repositorio público con release; `hacs.json`, `manifest.json` (versión, documentación, issue tracker, codeowner) y un README con imágenes.

## 10. Lo primero

1. Confirmar brevemente que has entendido el prompt y plantear las preguntas abiertas (p. ej. nombre de dominio de la integración, repo de GitHub, versión mínima de HA).
2. Leer la demo de estilo (enlace en la sección 2) y tomar de ella los colores neón y el control de la cámara.
3. Planificar e implementar la fase 1, empezando por el modelo de datos y la generación de paredes con tests.
