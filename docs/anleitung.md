# NeonPlan 3D – Manual

🇪🇸 Español · [🇬🇧 English](manual.md)

NeonPlan 3D dibuja tu casa directamente en Home Assistant y la muestra como un modelo 3D con look neón. Las luces brillan en su color, las persianas suben y bajan, las ventanas se abaten, las puertas se abren, las cámaras miran a la habitación y la tele muestra lo que se está viendo. Todo funciona en local en Home Assistant, sin nube ni programas externos, y está pensado para tabletas de pared.

Este manual describe todas las funciones de la versión actual. Qué cambió en cada versión está en el [changelog](../CHANGELOG.md) y en la [página de releases](https://github.com/Mastershort/neonplan3d/releases). Las imágenes proceden de la demo con datos inventados.

![La casa en la vista 3D](images/view-house.jpg)

---

## Contenido

1. [Instalación](#1-instalación)
2. [Tu primer plano 3D en diez minutos](#2-tu-primer-plano-3d-en-diez-minutos)
3. [La interfaz de un vistazo](#3-la-interfaz-de-un-vistazo)
4. [El editor](#4-el-editor)
5. [La vista 3D](#5-la-vista-3d)
6. [Extensiones Pro](#6-extensiones-pro)
7. [Extensiones, tienda y packs de muebles](#7-extensiones-tienda-y-packs-de-muebles)
8. [La tarjeta del dashboard](#8-la-tarjeta-del-dashboard)
9. [NeonPlan 3D en la tableta de pared](#9-neonplan-3d-en-la-tableta-de-pared)
10. [Copia de seguridad y mudanza](#10-copia-de-seguridad-y-mudanza)
11. [Datos y privacidad](#11-datos-y-privacidad)
12. [Preguntas frecuentes y solución de problemas](#12-preguntas-frecuentes-y-solución-de-problemas)

---

## 1. Instalación

### Requisitos

- Home Assistant 2025.1 o posterior.
- Un navegador con WebGL. Lo son todos los navegadores actuales, la app de Home Assistant y también las tabletas Amazon Fire.
- Para editar, un usuario con permisos de administrador. El resto de usuarios ven y manejan el plano, pero no lo cambian.

### Con HACS

[![Abrir NeonPlan 3D en HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Mastershort&repository=neonplan3d&category=integration)

El botón abre NeonPlan 3D directamente en el HACS de tu instalación. A mano se hace así:

1. Abre **HACS** en Home Assistant.
2. Arriba a la derecha elige **⋮ → Repositorios personalizados**.
3. Introduce `https://github.com/Mastershort/neonplan3d`, tipo **Integración**, y añádelo.
4. Busca **NeonPlan 3D**, instálalo y reinicia Home Assistant.
5. **Ajustes → Dispositivos y servicios → Añadir integración → NeonPlan 3D**, o directamente con este botón:

   [![Configurar NeonPlan 3D](https://my.home-assistant.io/badges/config_flow_start.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=neonplan3d)

Después aparece **NeonPlan 3D** en la barra lateral. La tarjeta del dashboard también está disponible al momento; no hace falta registrar ningún recurso.

### A mano

Copia la carpeta `custom_components/neonplan3d` del repositorio en `config/custom_components/`, reinicia Home Assistant y añade la integración como arriba.

### Actualizaciones

HACS avisa solo de las versiones nuevas. Tras cada actualización, reinicia Home Assistant. Hasta entonces NeonPlan 3D muestra arriba un aviso de que falta un reinicio. Tu plano se conserva siempre en las actualizaciones, incluso si eliminas la integración y la vuelves a añadir.

---

## 2. Tu primer plano 3D en diez minutos

1. Abre **NeonPlan 3D** en la barra lateral y cambia arriba a **Editor**.
2. A la derecha elige **Añadir planta**. Si tienes plantas creadas en Home Assistant, NeonPlan 3D te las ofrece directamente.
3. Si la planta tiene áreas, **«… Crear habitaciones a partir de las áreas de HA»** crea una habitación por cada área. Luego arrastra las habitaciones a su sitio y ajusta las esquinas. Si no, dibuja con **Rectángulo** o **Forma libre**.
4. Con **Puertas y ventanas**, toca una pared para colocar puertas y ventanas.
5. Toca una habitación y, a la derecha en **Dispositivos**, pulsa **Colocar** en los dispositivos que quieras, por ejemplo luces, persianas, termostatos, reproductores multimedia y sensores del área. Bajo la lista, **Colocar todos …** coloca de una vez, tras una confirmación, todos los dispositivos principales.
6. Amuebla la habitación con **Muebles** y **Amueblar …**.
7. Cambia arriba a **3D**. Listo: toca una lámpara y se enciende.

El plano se guarda solo mientras editas.

---

## 3. La interfaz de un vistazo

Arriba hay tres pestañas:

| Pestaña | Para qué | Quién la ve |
|---|---|---|
| **3D** | Ver y manejar la casa | todos |
| **Editor** | Dibujar el plano, colocar muebles y dispositivos | administradores |
| **✦ Extensiones** | Conexión con la tienda, extensiones Pro, packs de muebles | administradores |

Además está la tarjeta del dashboard, que lleva la misma vista 3D a cualquier dashboard. Más en el [capítulo 8](#8-la-tarjeta-del-dashboard).

**Idioma:** NeonPlan sigue el idioma de tu usuario de Home Assistant (perfil → idioma). El alemán y el inglés vienen integrados; francés, español, neerlandés, italiano, húngaro, danés, sueco, noruego (bokmål y nynorsk), finés, checo, polaco, rumano y esloveno se cargan cuando hacen falta, así los bundles siguen siendo pequeños para las tabletas de pared. Si falta un texto en un idioma, aparece en inglés.

---

## 4. El editor

![El editor con la vista 3D al lado](images/editor-split-3d.jpg)

El editor consta del plano en el centro, la barra de herramientas arriba y la barra lateral a la derecha. La barra lateral muestra siempre lo que está seleccionado: la planta, una habitación, un mueble, una puerta o un dispositivo.

Dibujar es más cómodo en el PC o en una tableta. En el móvil puedes ver y manejar tu casa; el editor te lo dice allí una vez (✕ oculta el aviso).

### 4.1 Herramientas

| Herramienta | Qué hace |
|---|---|
| **Seleccionar** | Tocar, mover habitaciones, muebles, puertas, ventanas y dispositivos, arrastrar esquinas |
| **Rectángulo** | Trazar una habitación rectangular |
| **Forma libre** | Dibujar una habitación punto a punto |
| **Pared** | Trazar una pared suelta, por ejemplo un separador de ambientes |
| **Puertas y ventanas** | Tocar una pared para colocar un hueco |
| **Muebles** | Abrir la biblioteca de muebles |
| **Exterior** | Trazar superficies exteriores como césped, terraza o piscina |
| **Hueco de forjado** | Abrir un agujero en el suelo de la planta, por ejemplo sobre la escalera |
| **Tejado** | Trazar, mover y ajustar secciones de tejado, ver [4.19](#419-tejado) |
| **Energía** | Campos solares en el tejado y en el jardín, cadenas, ver [4.20](#420-energía-campos-solares) |

Al lado están **Deshacer**, **Rehacer**, **Mostrar todo** y **3D al lado**. Abajo en el plano hay siempre una breve indicación sobre la herramienta activa.

**Ratón y táctil:** con dos dedos desplazas la vista y con dos dedos haces zoom. Con el ratón, la rueda hace zoom y la vista se arrastra desde un punto vacío. **Ctrl+Z** deshace, **Ctrl+Y** o **Ctrl+Mayús+Z** rehace, **Supr** borra lo seleccionado, **Esc** cancela. Las **flechas** mueven lo seleccionado (habitación, esquina, mueble, dispositivo, pared, superficie exterior) un paso de cuadrícula, con **Mayús** 10 cm, con **Alt** 1 cm; las puertas y ventanas se desplazan a lo largo de su pared.

**Bloquear el plano y fijar:** **🔒 Plano** en la barra de herramientas bloquea todas las habitaciones, paredes, puertas, ventanas y superficies exteriores, también las que dibujes después; una habitación seleccionada muestra entonces «🔒 Plano bloqueado», y un clic sobre ello lo desbloquea. Los muebles y dispositivos los fijas uno a uno cuando ya estén en su sitio: con el candado **🔓 Fijar** arriba en el formulario, con la tecla **L** o con **clic derecho** (en la tableta, pulsación larga). El menú del clic derecho ofrece además **Duplicar**, **Girar 90°** y **Eliminar**. Lo bloqueado se puede seleccionar y editar en el formulario, pero ya no arrastrar ni mover con las flechas, y solo se borra tras confirmar; arrastrar mueve entonces la vista. Los muebles y dispositivos fijados también se quedan quietos en la mitad 3D.

### 4.2 Plantas

![Ajustes de planta](images/editor-ha-floors.jpg)

Sin nada seleccionado, la barra lateral muestra las plantas:

- **Añadir planta** crea una planta nueva. Si en Home Assistant hay plantas que aún faltan, aparecen para elegirlas.
- **Nombre**, **Altura sobre el suelo** y **Altura de la habitación** determinan dónde queda la planta en la casa 3D y qué altura tienen sus paredes. **Girar 90°** gira todo lo de la planta alrededor del centro de las habitaciones, por si una planta se dibujó girada. **Mover planta** desplaza todo lo de la planta (habitaciones, muebles, dispositivos, superficies exteriores, paredes sueltas, imagen de fondo) en X y Z, por si una planta está desplazada respecto a las demás; las secciones de tejado y las líneas se quedan. Con la casilla **Mover todas las plantas**, mover y girar afectan a toda la casa: todas las plantas con sus secciones de tejado, superficies exteriores, líneas, contador y holograma. **Vista como inicio de la planta** memoriza cómo está ahora la vista 3D de al lado: esta planta se abrirá desde ese lado, con ese zoom y ese encuadre, por ejemplo la planta baja de frente y la planta alta desde atrás; ↺ lo deshace.
- **Imagen de fondo:** en la sección **Fondo** cargas una foto o un escaneo de tu plano como plantilla bajo el dibujo (opacidad ajustable). Con **Mover, escalar y girar** la imagen recibe tiradores en el plano como un mueble: arrastrar la mueve, la esquina inferior derecha la agranda o la reduce, el tirador redondo de arriba la gira (con Mayús en pasos de 15°). **Listo** la vuelve a fijar, y así dibujas encima sin molestias. **Rotación (°)** la gira con precisión de décimas de grado. La escala se ajusta más fácilmente con **📏 Escala con regla**: toca el principio y el final de un tramo de la imagen cuya longitud conozcas (una pared acotada), introduce la longitud real y la imagen se escala en consecuencia; el primer punto se queda fijo. Un escaneo torcido se endereza con **📐 Enderezar**: toca dos puntos de una pared de la imagen que deba quedar horizontal o vertical, y la imagen gira lo necesario. Orden: primero enderezar, luego la escala, luego dibujar las habitaciones encima.
- **Planta en Home Assistant** vincula la planta con una planta de HA. Entonces **«… Crear habitaciones a partir de las áreas de HA»** ofrece las áreas de esa planta como habitaciones.
- **Subir** y **Bajar** cambian el orden, **Eliminar planta** la borra junto con sus habitaciones.
- **Cerrar huecos** une habitaciones separadas hasta 60 cm. Es práctico si mediste las medidas interiores. La separación pasa a ser el grosor de la pared interior.
- **Enderezar bordes inclinados** busca bordes de habitación que solo están torcidos unos centímetros (una esquina desviada 1 cm da paredes torcidas en 3D) y los endereza en todas las habitaciones que comparten esa esquina. Las paredes inclinadas a propósito se quedan.

![Habitaciones a partir de áreas](images/editor-area-rooms.jpg)

### 4.3 Dibujar habitaciones

- **Rectángulo:** toca el plano y arrastra.
- **Forma libre:** coloca punto a punto. Tocar el primer punto o **Intro** cierra la habitación, **Esc** cancela. Mientras dibujas, cada borde muestra su longitud, también el que estás trazando.
- **Mover esquinas:** con **Seleccionar** toca una habitación y arrastra las esquinas. El **+** de un borde inserta un punto nuevo.
- **Ajuste:** las esquinas se ajustan a la cuadrícula, a las esquinas y bordes de otras habitaciones y a las líneas de alineación. Manteniendo pulsada la tecla **Alt** mueves libremente.

![Una habitación seleccionada](images/editor-room.jpg)

Una habitación seleccionada muestra a la derecha:

- **Nombre** y **Área**: la vinculación con un área de Home Assistant es lo más importante. Con ella NeonPlan 3D encuentra las luces, persianas, sensores y escenas de la habitación.
- **Suelo**: madera, roble, baldosa, moqueta, piedra u hormigón aparecen en 3D como un dibujo discreto.
- **Vista de inicio de la habitación**: activa **3D al lado**, gira y acerca la habitación como quieras que se muestre y pulsa el botón. Cuando luego toques la habitación en 3D, la cámara volará exactamente allí: ángulo, zoom y encuadre. ↺ lo deshace y la habitación vuelve a mostrarse desde arriba.
- El **ID** de la habitación para la opción de tarjeta `room:` (al tocarlo se copia).
- **Altura del techo**: vacío = altura de la planta. Con una altura propia, las paredes de la habitación terminan ahí (salvo que una habitación vecina sea más alta) y las lámparas de techo cuelgan de ese techo; por ejemplo 2,5 m en el salón junto a un garaje de 5 m de alto en la misma planta.
- **Superficie y superficie útil**: la superficie cuenta las esquinas dibujadas. La útil resta lo que ocupan las paredes en la habitación: las paredes interiores compartidas quedan a medias en la habitación, las exteriores crecen hacia fuera; las paredes sueltas dentro de la habitación y el hueco detrás de un trasdosado (cámara de instalaciones delante de la pared exterior) no cuentan.
- **Puertas y ventanas** de la habitación en una lista: un toque selecciona el hueco, práctico cuando una puerta es difícil de acertar en el plano.
- La lista de **Dispositivos** del área, ver [4.10](#410-dispositivos).
- **Amueblar …** para conjuntos de muebles ya hechos, ver [4.9](#49-amueblar-habitaciones).
- **Duplicar** y **Eliminar**.

### 4.4 Paredes

Las paredes se generan solas: cada borde compartido entre dos habitaciones es una pared interior y cada borde exterior, una pared exterior. Las esquinas y los encuentros en T se recortan limpiamente. Los grosores se ajustan en **Ajustes**.

**Paredes sueltas:** con la herramienta **Pared** trazas una pared independiente, por ejemplo un separador que solo cruza media habitación. **Mayús** la mantiene recta, **Alt** dibuja sin ajuste. Si toca una pared de habitación, la esquina se recorta. Seleccionada, arrastras los extremos por sus tiradores o la pared entera por la línea. A la derecha ajustas **X** e **Y** (el centro de la pared, como en los muebles; así la colocas al centímetro, sin cuadrícula), **Longitud**, **Grosor de pared** y **Altura**. En 3D se comporta como cualquier pared interior. También en las paredes sueltas colocas puertas y ventanas con **Puertas y ventanas** (ver 4.7). Si borras la pared, sus puertas y ventanas desaparecen con ella.

**Altura de pared:** cada pared puede ser más baja que la habitación, por ejemplo como antepecho o barra. En una pared suelta ajustas la **Altura** en el formulario. En las habitaciones (rectángulo y forma libre) seleccionas la habitación; en el formulario está el cuadro **Alturas de las paredes** con cada pared de la habitación, nombrada por sus vértices (p. ej. «Pared 2–3»; los números aparecen en el plano junto a las esquinas) y con su longitud. Si pasas por encima de una fila o tocas su campo, la pared se ilumina en el plano. ↥ la devuelve a la altura completa de la habitación. Si dos habitaciones comparten la pared, vale el ajuste más bajo. Las ventanas y puertas de una pared baja terminan a la altura de la pared. Las paredes bajas aparecen más claras en el plano. Si una pared alineada debe tener dos alturas (2,5 m junto a 1,7 m), la divides con **✂**: el tramo recibe su propia fila y altura, el punto de división se puede mover en el campo **Punto de división desde la esquina** (marcado con un trazo en el plano), y **⨉** vuelve a unir los tramos.

**Grosor por pared:** en el mismo cuadro cada pared tiene un campo **Grosor (m)**. Por defecto es el grosor de la casa (pared exterior o interior, capítulo 4.4); un valor propio permite, por ejemplo, la pared exterior de 36,5 cm junto a una de 24 o el tabique de 11,5 cm. Si dos habitaciones comparten la pared, vale el valor más grueso, y la pared se queda centrada sobre el límite entre habitaciones. ↺ vuelve al grosor de la casa. Las ventanas y puertas se adaptan al grosor.

**Sin pared:** en las plantas abiertas, el pasillo, la cocina y el salón forman un solo espacio, pero en Home Assistant son áreas distintas. Para eso cada fila del cuadro **Alturas de las paredes** tiene el botón **Sin pared**: la pared desaparece por completo del plano y del 3D, aunque la habitación vecina la comparta. ↥ la recupera. La luz lo sigue: una lámpara alumbra a través de la pared quitada hacia la habitación vecina, como si fueran una sola.

**Paredes divididas:** si una habitación vecina divide una pared en varios tramos (por ejemplo dos habitaciones pequeñas junto a una pared larga), cada tramo recibe su propia fila «Pared 2–3 · tramo 1», «… tramo 2» con su longitud, y cada tramo puede tener su propia altura o desaparecer.

### 4.5 Ajustes

Abajo en la barra lateral se despliega **Ajustes**:

| Ajuste | Significado |
|---|---|
| **Pared exterior (m)**, **Pared interior (m)** | Grosores de pared |
| **Cuadrícula (m)** | Paso al dibujar |
| **Longitudes** | **Automático** sigue el sistema de unidades de Home Assistant; si no, **Metros** o **Pies y pulgadas**. Con pies y pulgadas el editor muestra así todas las longitudes, cotas y superficies (ft²) y entiende entradas como `8' 2"`, `98in`, `8.2ft` o también `2.5m`. Siempre se guarda en metros, así que puedes cambiar cuando quieras |
| **Norte** | Grados en sentido horario desde arriba. Se usa para la luz del sol |
| **Tejado** | Sin tejado, tejado plano o a dos aguas, con pendiente y vuelo. En el tejado a dos aguas, **Cumbrera** fija si la cumbrera va a lo largo del lado largo o del corto (p. ej. casa adosada). **Secciones de tejado (a medida)** construye el tejado con varias piezas, ver [4.19](#419-tejado) |
| **Entidad meteorológica** | Qué entidad meteorológica da el tiempo exterior, ver [6.2](#62-tiempo-exterior) |
| **Efectos meteorológicos en 3D** | Qué efectos se muestran |
| **Vista inicial** | Gira, acerca y desplaza la casa en la vista 3D de la derecha como quieras que se abra (por ejemplo desde el lado del jardín) y pulsa **Memorizar la vista 3D actual como inicio**. La vista 3D, la tarjeta y el quiosco abren entonces la casa así, con ángulo, zoom y encuadre, y una planta abierta también se muestra desde ese mismo lado; **Estándar** lo restablece |
| **Favoritos** | Escenas, scripts, automatizaciones, botones e interruptores para el menú central (estrella) de la vista 3D: fiesta, simulación de presencia, sombreado, riego. Se eligen con la búsqueda, el orden con ↑ ↓, ✕ quita. Debajo, **Botones propios** con texto, icono y acción: **Abrir ruta** (una ruta como `/lovelace/persianas`), **Detalles de entidad**, **Llamar servicio** (`domain.service` con datos en JSON) o **fire-dom-event**: así un botón abre un popup de browser_mod con tu propia tarjeta, p. ej. `{"browser_mod": {"service": "browser_mod.popup", "data": {"title": "Persianas", "content": {"type": "custom:mi-tarjeta-persianas"}}}}` |

### 4.6 Imagen del plano como plantilla

En **Plantilla (imagen del plano)** cargas una foto o un escaneo de tu plano debajo del dibujo. **Ancho en el plano (m)** pone la imagen a la escala correcta, **Opacidad** la hace más discreta. Así calcas las habitaciones sin más.

### 4.7 Puertas, ventanas y puertas de garaje

![Puerta seleccionada](images/editor-opening.jpg)

Con **Puertas y ventanas** tocas una pared, una pared de habitación o una pared suelta. Después eliges a la derecha el **Tipo**: puerta, ventana o puerta de garaje. Una ventana con antepecho 0 es una puerta de terraza. La plantilla **Pared de vidrio** coloca un acristalamiento fijo de suelo a techo con montantes finos y sin hojas, para una pared interior o mampara de cristal; ancho y alto se ajustan libremente, y como tipo también está disponible en cualquier ventana bajo **Estilo**.

![Tipos de huecos](images/editor-opening-kinds.jpg)

Cada hueco tiene:

- **Ancho**, **Antepecho** y **Altura**, además del lado de apertura. Con **Seleccionar** lo deslizas a lo largo de la pared.
- **Estilo:** puerta interior, puerta de entrada, puerta de entrada con vidrio, con uno o dos fijos laterales, puerta de cristal, puerta corredera o **Hueco (sin puerta)**. Con fijos laterales ajustas debajo su **Ancho** (vacío = automático), con dos, el izquierdo y el derecho por separado; un solo fijo lateral va en el lado opuesto a las bisagras, con **Fijo lateral en el lado de las bisagras** junto a ellas. Un hueco es solo una abertura en la pared, sin cerco ni hoja; la luz siempre pasa. Las ventanas pueden ser estándar o con travesaños. «Automático» elige una puerta de entrada para las puertas exteriores.
- **Hojas:** una o dos hojas, con contacto propio para la segunda.
- **Marcar en 3D:** *Si está abierta* (por defecto) hace que las ventanas y puertas abiertas brillen en cálido. *Si está cerrada* lo invierte, por ejemplo para la puerta del baño o del cuarto de los niños: brilla mientras está cerrada. Necesita un contacto; sin sensor no se marca nada.
- **Mostrar cerrada sin sensor:** una puerta sin contacto aparece entreabierta en 3D para que se reconozca como puerta. La casilla la dibuja cerrada, por ejemplo para una puerta de entrada o un carport sin sensor.
- **Invertir contacto:** para sensores que informan abierto y cerrado al revés. NeonPlan muestra entonces abierta cuando el sensor dice cerrada, y viceversa (por defecto: desactivado).

Las puertas y ventanas también se pueden tocar en el plano en una franja ancha alrededor del hueco; una habitación seleccionada lista sus puertas y ventanas en el formulario.

![Puerta de entrada](images/editor-front-door.jpg)

**Sensores:**

| Campo | Efecto en 3D |
|---|---|
| **Persiana** | La persiana baja delante de la ventana, o delante de una puerta (de entrada, de terraza, corredera), con la posición de la entidad cover |
| **Sensor de posición** | Para persianas cuya posición llega por un sensor propio, por ejemplo con Homematic. Se puede invertir si hace falta |
| **Preguntar antes de accionar** | Subir, bajar y las posiciones piden confirmación en el menú rápido y en la ventana de la habitación, y deslizar sobre el icono ya no mueve la persiana (gira la vista). Parar nunca pregunta. Útil en tabletas donde las persianas o la puerta del garaje se mueven sin querer |
| **Contacto** | La puerta se abre, la ventana se abre |
| **Contacto de abatimiento** | Un segundo sensor que informa «abatida» |
| **Sensor de ángulo de abatimiento** | Opcional: un sensor que da el ángulo de abatimiento en grados (p. ej. «Rotation» de un Shelly BLU Door/Window). La hoja se abate en 3D exactamente eso; **Ángulo de «totalmente abatida»** (por defecto 15°), un **offset** para el valor con la ventana cerrada y **contar al revés** lo adaptan al montaje. A partir de un ángulo pequeño la ventana cuenta como abatida, también para el aviso de lluvia |
| **Contacto segunda hoja** | Para ventanas y puertas de dos hojas |
| **Puerta de garaje** | Una puerta de garaje sigue a una entidad cover o a un contacto (encendido = abierta; también sensores que informan «open»/«closed»). La parte abierta queda entonces bajo el techo |

NeonPlan 3D asigna las persianas y los contactos automáticamente por área. Puedes cambiarlos a mano cuando quieras.

### 4.8 Muebles

![La biblioteca de muebles](images/editor-library.jpg)

La herramienta **Muebles** abre a la derecha la biblioteca con más de 50 modelos integrados en las secciones Iluminación, Salón, Comedor, Cocina, Dormitorio, Baño y lavadero, y Trabajo y otros. Debajo siguen tus packs de muebles instalados. La **Encimera** (Cocina y Trabajo y otros) es un tablero suelto sin mueble bajo, para huecos en la cocina o un escritorio hecho a mano; su **altura** es el canto superior, 91 cm por defecto. En Salón, junto al sofá, hay un **Sofá rinconera (en L)** y un **Sofá en U**; con **Reflejar** el brazo del sofá rinconera pasa al otro lado. El campo de búsqueda de arriba filtra todas las secciones y se queda fijo al desplazarte; encuentra nombres en alemán y en inglés y el nombre del pack, varias palabras en cualquier orden («sofa ecke»), y Escape lo vacía. Las secciones se despliegan y se pliegan. Si pasas el ratón por una entrada, una pequeña vista previa 3D muestra el mueble.

**Iconos en las entradas:**

- 💡 Una **Lámpara**: se puede vincular a una luz y encender en 3D.
- ⚡ Un **mueble eléctrico**: admite una entidad y un sensor de potencia, por ejemplo una tele, una lavadora o un termostato.

**Colocar y editar:**

- Toca una habitación y elige una entrada. El mueble aparece en la habitación.
- **Arrastrar** lo mueve. Cerca de una pared se gira de espaldas a ella y se ajusta a ras. **Alt** lo mueve libremente.
- El **tirador delante del mueble** lo gira en pasos de 15°, las **esquinas** cambian el tamaño.
- A la derecha ajustas ancho, fondo, alto, rotación y **Altura sobre el suelo**. **Reflejar** intercambia izquierda y derecha: el sofá en L al revés, el armario con la puerta al otro lado; la opción también está en el menú del clic derecho y en la barra de muebles de la vista 3D. Con la altura sobre el suelo cuelgas un armario de red o una estantería en la pared, o pones una secadora sobre la lavadora. Siempre cuenta desde el suelo: un armario alto de cocina se coloca de por sí a 1,45 m, una tele de pared centrada a 1,3 m; puedes subir o bajar ambos. **Altura automática** la restablece.
- **Estado de:** cada mueble puede mostrar una entidad que informe encendido, ocupado o en casa; entonces su parte superior brilla: la cama con alfombrilla de presencia, el sillón, la sauna. Una segunda entidad ilumina la otra mitad (izquierda/derecha, en la cama alta abajo/arriba). Las lámparas, los aparatos de energía y las pantallas tienen sus propios campos para ello.
- **Vista de pared:** **▦ Vista de pared** arriba en la barra de herramientas y luego clic en una habitación (cerca de una pared se abre justo esa pared), o **▦ Ver las paredes de esta habitación de frente** en el formulario de la habitación, **▦ Vista de pared** en el formulario del mueble y en el menú del clic derecho, **▦** en cada pared de *Alturas de las paredes*: muestra la pared de frente, con puertas y ventanas y todo lo que está apoyado o colgado en ella, como vista frontal real de los muebles: armarios, estanterías, armarios altos, teles, apliques. Allí arrastras un mueble a lo largo de la pared y, si está colgado, en altura; mientras, unas cotas muestran la distancia a los extremos de la pared y al suelo, y los cantos se ajustan a los extremos de la pared, a puertas, ventanas y otros muebles (**Alt** arrastra libremente). Las flechas mueven 1 cm, con **Mayús** 10 cm; abajo están **Distancia desde la izquierda** y **Altura sobre el suelo** para escribirlas. Las flechas **‹** y **›** a izquierda y derecha (sin mueble seleccionado también **←** y **→**) te giran hacia la pared contigua por la izquierda o por la derecha: así das la vuelta entera a la habitación. Un doble clic abre el mueble en el plano. Arriba a la derecha cambias entre **3D en la habitación** y **Pared de frente**: en 3D estás en el centro de la habitación a la altura de los ojos y miras a la pared, con todo lo que hay en la habitación, también la mesa delante del banco rinconero. Tocar un mueble lo selecciona, arrastrar lo mueve por el suelo, el tirador redondo **↕** sobre el mueble elegido lo sube o lo baja (con indicador de altura), la rueda del ratón o dos dedos te acercan o alejan, el botón central o derecho del ratón (en la tableta, dos dedos) mira alrededor, así el botón izquierdo queda reservado para los muebles; abajo están **Distancia desde la izquierda**, **Distancia a la pared** y **Altura sobre el suelo** para escribirlas, además de **↺ 45°** / **↻ 45°** y la **Rotación** en grados; al girarlo junto a la pared, el mueble se separa solo hacia la habitación. Un mueble fijado muestra abajo **🔒 Soltar**: primero suéltalo y luego se puede arrastrar. **Pared de frente** es la vista plana para alinear al centímetro contra la pared. Con **Energía Pro**, una barra a la izquierda coloca contador, inversor, batería y cargador directamente en la pared mostrada.

![Vista de pared: 3D en la habitación y pared de frente](images/wall-view.jpg)

- **Duplicar** y **Eliminar** también están ahí.

![Un mueble seleccionado](images/editor-furniture.jpg)

### 4.9 Amueblar habitaciones

![Una habitación con conjunto](images/editor-package.jpg)

**Amueblar …** en una habitación coloca un conjunto entero de muebles contra las paredes: cocina en línea, cocina en L, baño, dormitorio, salón, comedor, despacho, cuarto infantil o pasillo. Las lámparas se vinculan de paso con las luces del área. Después ajustas los muebles uno a uno. **Ctrl+Z** deshace el conjunto entero.

### 4.10 Dispositivos

![Dispositivos de una habitación](images/editor-devices.jpg)

Una habitación con área lista a la derecha todos los dispositivos de esa área, agrupados por dispositivo. La entidad principal va delante; otras, como indicadores LED o efectos, están tras **«+n más»**. Un campo de búsqueda ayuda en las áreas grandes.

Los sensores aparecen cuando miden algo de la habitación: temperatura, humedad, CO₂ y calidad del aire, potencia y energía, contadores de gas y agua, iluminancia y presión atmosférica. Los contadores sin clase de dispositivo cuentan si su unidad encaja (m³, l, kWh, lx). Los sensores de batería y de señal se quedan fuera. El valor aparece con los decimales configurados en Home Assistant. Si falta un dispositivo, comprueba en Home Assistant que esté asignado al área de la habitación.

Encima de la lista eliges el origen: **Esta área** (por defecto), **Otras áreas** (los dispositivos de las demás áreas, agrupados por área; si un dispositivo ya está en otra habitación se indica, y **Colocar** lo trae aquí) o **Sin área** (por ejemplo luces de plantilla, grupos y ayudantes; aquí cuenta cualquier sensor con valor numérico y unidad). El área en Home Assistant no cambia por ello.

**Clima de la habitación:** en el formulario de la habitación fijas en **Clima de la habitación** qué sensores dan la temperatura, la humedad y el CO₂ de la habitación (mapa de calor y ventana de la habitación). *Automático* toma los sensores del área y los colocados en la habitación, pero descarta las temperaturas de aparatos, por ejemplo de una impresora 3D o la impulsión de una bomba de calor. Si la habitación no tiene sensor propio, cuenta la temperatura real (y la humedad) de su **termostato** (entidad climate); un termostato también se puede elegir a mano. *Ninguno* oculta el valor.

- **Colocar** pone un dispositivo en la habitación. **Colocar todos …** bajo la lista coloca, tras una confirmación, todos los dispositivos principales de una vez; **Deshacer** (Ctrl+Z) los quita en un solo paso.
- Las luces se colocan como lámparas de la biblioteca para que brillen en 3D.
- **☆** añade un dispositivo a la ventana de la habitación de la vista 3D sin ponerlo en el plano. **👁** oculta un dispositivo del área en la ventana de la habitación (tachado en la lista, 🙈 lo recupera), para entidades que ahí solo estorban. **Aa** oculta solo el estado de un dispositivo en la ventana de la habitación (∅ lo vuelve a mostrar), por ejemplo en una persiana sin retorno de estado; un simple «desconocido» la ventana de la habitación ya lo omite en interruptores, persianas y lámparas.
- Un dispositivo colocado lo arrastras en el plano a su sitio.

![Un dispositivo seleccionado](images/editor-device.jpg)

Un dispositivo seleccionado tiene:

- **Altura del icono**, **Rotación** y, en las luces, el **Montaje**: techo, suelo, mesa o pared.
- **Preguntar antes de accionar:** al tocarlo en 3D, en el menú rápido y en la ventana de la habitación aparece primero una confirmación. Protege, por ejemplo, el interruptor del servidor de un toque accidental. Un doble toque en la habitación omite este dispositivo.
- **Marcador en 3D:** *Automático* sigue el selector Ninguno / Importantes / Todos de la vista 3D. *Mostrar siempre* muestra el icono también con «Importantes», por ejemplo para un sensor de temperatura. *Sin vatios* omite la potencia, por ejemplo en un enchufe. *Ocultar* no muestra nunca icono. Con «Ninguno» todos los iconos quedan ocultos.
- **Icono propio:** el nombre de un icono de Material Design como en Home Assistant, por ejemplo `mdi:thermometer` o `mdi:water-alert`, sustituye en el pin al icono según el tipo de dispositivo. Vacío = por defecto. Vale igual para los muebles eléctricos.
- **Mostrar como mueble:** sustituye el pin por un mueble adecuado en el mismo sitio, ya vinculado al dispositivo: un altavoz o una pantalla inteligente para un reproductor multimedia, una lámpara para una luz, un radiador para un termostato, el robot para un aspirador. La lista solo muestra muebles que encajan con el tipo de dispositivo. En el formulario del mueble, **Volver a pin** recupera el pin simple; Ctrl+Z deshace ambas cosas.
- **Nombre propio** y **Mostrar el nombre bajo el icono en 3D:** con la casilla marcada, el nombre propio aparece pequeño bajo el pin; así tres termómetros en el jardín («Agua piscina», «Aire piscina», «Invernadero») se distinguen. La casilla aparece en cuanto se introduce un nombre propio; los muebles con nombre propio la tienen igual. La opción de tarjeta `marker_names: true` muestra los nombres de todos los dispositivos con nombre propio.
- **Al centro de la habitación** y **Quitar**.

### 4.11 Lámparas

Las lámparas son muebles con una luz vinculada. Hay plafón, foco empotrado, foco de superficie, panel LED, lámpara colgante, lámpara de pie, lámpara de pie de luz indirecta, lámpara de mesa, aplique, tira LED, baliza de camino y foco de jardín.

- El modelo 3D brilla con el color y el brillo de la luz. El suelo y las paredes de la habitación se iluminan con ella, y dos lámparas de techo de colores se mezclan entre sí. A la habitación vecina la luz solo pasa por las puertas.
- Los efectos de color, como un cambio de color, se animan en 3D.
- Las lámparas de mesa se apoyan en el mueble de debajo, los apliques y las tiras LED se ajustan a la pared, y en las colgantes la altura es lo que cuelgan bajo el techo.
- **Altura sobre el suelo:** los apliques se colocan de por sí a 1,75 m y las tiras LED justo bajo el techo. En el formulario ajustas para ambos una **Altura sobre el suelo** propia, por ejemplo para una tira bajo los armarios altos o detrás del mueble de la tele. **Altura automática** la restablece. Los focos empotrados y de superficie también tienen el campo: de por sí van bajo el techo, y con una altura propia, por ejemplo bajo los armarios altos, el modelo y el cono de luz alumbran desde ahí hacia abajo sobre la encimera. Bajo un techo inclinado, las lámparas de techo, los focos y las colgantes cuelgan de la cara inferior del tejado en vez de flotar en el aire. Una tira por debajo de 1 m (rodapié, detrás del armario) alumbra hacia arriba la pared; las montadas más altas alumbran hacia abajo. Una tira por debajo de la altura de corte sigue visible aunque las paredes estén cortadas. **Inclinación a lo largo** apoya la tira en un techo inclinado o la gira de lado (90° = la cara luminosa mira de lado); **Vertical** la pone de canto: entonces sube desde la altura sobre el suelo, en el marco de una puerta o como columna de luz, y alumbra en todas direcciones.
- **Color y brillo de:** si un relé (Shelly, actuador) enciende la lámpara mientras la propia lámpara conoce el color y el brillo, el encendido/apagado viene del interruptor y el color de esta segunda entidad.
- **Intensidad en 3D (%):** con qué fuerza brilla la lámpara en 3D. Por debajo del 100 % atenúa las tiras LED intensas para que la habitación no se sature; por encima del 100 % hace brillar más una lámpara débil. Vale también para luces colocadas como dispositivo; en Home Assistant no acciona nada.
- En lugar de una luz también vale un interruptor, por ejemplo un relé para la luz del techo.
- Varias lámparas pueden seguir a la misma luz.

![Colocar focos](images/editor-spots.jpg)

**Colocar focos** en una habitación crea una cuadrícula de lámparas que siguen todas a una misma luz, por ejemplo seis focos empotrados en un regulador. Las columnas y filas las eliges antes.

### 4.12 Muebles eléctricos

La tele, el mueble multimedia, el mueble de salón con TV (el mueble de salón sin TV es una lámpara: las vitrinas y las tiras LED brillan con la lámpara vinculada), el escritorio con monitor, la lavadora, la secadora, el lavavajillas, el radiador, el robot aspirador y muchos muebles de packs se pueden vincular con entidades:

- **Dispositivo** o **TV (reproductor multimedia o enchufe inteligente)**: como dispositivo también sirve un **sensor de estado**, por ejemplo el estado de impresión de una impresora 3D (Bambu Lab, entre otras). El mueble cuenta entonces como activo mientras el estado informe «running», «printing», «prepare» o similar. Una tele brilla mientras está encendida. Una tele antigua en un enchufe inteligente usa simplemente su interruptor; la pantalla brilla mientras el enchufe está encendido, y un toque lo acciona. La lavadora, la secadora y el lavavajillas brillan mientras trabajan. Un radiador con termostato se pone incandescente al calentar.
- **Sensor de potencia (W)**: el mueble muestra sus vatios.
- **Preguntar antes de accionar** y **Marcador en 3D**, como en los dispositivos.
- **Imágenes según el estado** en las pantallas: una extensión Pro, ver [6.3](#63-pantallas-en-directo).

Si pone «automático», NeonPlan 3D busca por sí mismo la entidad adecuada en el área.

### 4.13 Cámaras

![Cámara en el plano con cono de visión](images/editor-camera-wedge.jpg)

Las cámaras se colocan como cualquier dispositivo. Después:

- **Montaje:** pared, con dirección de visión, o techo, como domo que mira en todas direcciones.
- En el plano, un **cono** muestra hacia dónde mira la cámara. El **tirador de la punta** gira la cámara y a la vez fija el alcance.
- **Campo de visión (°)**, **Alcance (m)** e **Inclinación hacia abajo (°)** también se ajustan con números.
- **Mostrar el campo de visión en 3D** se puede desactivar por cámara. En 3D, el cono termina en la primera pared: una cámara interior no ve a través de la pared hacia la habitación vecina.

En 3D la cámara cuelga como un pequeño modelo en la pared o el techo, y su campo de visión queda como un cono sobre el suelo. Si un sensor de movimiento o de presencia de la cámara detecta movimiento, el cono se vuelve rojo.

### 4.14 Plazas de aparcamiento y vehículos

![Plaza de aparcamiento](images/editor-parking.jpg)

El mueble **Plaza de aparcamiento** del grupo Aparcamiento marca dónde está un coche: en el garaje, en la entrada o en cualquier parte de la parcela. Una plaza nueva apunta con la flecha desde la puerta de garaje de la habitación hacia dentro del garaje; sin puerta, a lo largo del lado más largo de la habitación.

- **Sensor «coche presente»:** un `binary_sensor`, `device_tracker` o similar. Mientras indique un coche, el vehículo está ahí.
- **Vehículo:** el modelo del pack «Vehículos».
- **Sensor de tipo de vehículo** (opcional): si un sensor indica qué coche hay, por ejemplo a partir de un análisis de cámara con IA, asignas un modelo a cada estado.
- **Tamaño (%)** adapta el modelo a la plaza. Si el vehículo es más alto que la habitación, el editor avisa.

![Vehículo en el garaje](images/view-garage.jpg)

### 4.15 Robot aspirador

El mueble robot aspirador se vincula con la entidad `vacuum`. Cuando el robot aspira, en 3D recorre en franjas la habitación de su base y luego vuelve. El recorrido es simulado, porque Home Assistant casi nunca conoce la posición real.

Pero muchos robots informan de la habitación que están aspirando, por ejemplo Roborock y Dreame con un sensor «Habitación actual». NeonPlan 3D encuentra solo ese sensor en el dispositivo del robot; en el campo **Habitación actual (sensor)** también puedes elegir otro. El nombre informado se compara con el nombre de la habitación y con el área de Home Assistant; mayúsculas y minúsculas y la forma de escribir las diéresis no importan («Kueche» coincide con «Küche»). Si el robot cambia de habitación, en 3D aparece allí y recorre sus franjas. Si no coincide ninguna habitación, se queda en la habitación de su base.

Sus recorridos rodean los muebles que están en el suelo: armarios, sofás, camas, cocinas y aparatos. Pasa por debajo de mesas, escritorios, sillas, taburetes y bancos, así como por encima de alfombras y bajo muebles colgados como los armarios altos.

### 4.16 Escaleras y huecos de forjado

- La **Escalera** de la biblioteca sube desde el canto delantero marcado hacia atrás. Si llega hasta la planta superior, recorta allí el hueco de la escalera en el techo.
- La **Escalera en U con descansillo** (Trabajo y otros) tiene dos tramos uno junto a otro: sube por la izquierda desde el canto delantero marcado hacia atrás, gira en el descansillo y vuelve a subir hacia delante por la derecha. **Reflejar** invierte el sentido. Como la escalera recta, al insertarla recibe la altura hasta la planta superior y recorta allí el hueco en el techo. Por defecto mide 2,10 × 2,70 m.
- Con la herramienta **Hueco de forjado** abres un agujero directamente en el suelo de una planta, por ejemplo sobre la escalera o para una galería. Desde arriba se ve a través. Si abarca varias habitaciones, se recorta en cada una. Varios huecos pueden solaparse; así sale, por ejemplo, una forma en L.
- El pack **Escaleras y barandillas** trae más escaleras y barandillas.

![Herramienta hueco de forjado](images/editor-hole-tool.jpg)

### 4.17 Superficies exteriores y luces de exterior

Con **Exterior** trazas césped, terraza, camino, entrada, piscina, parterre, seto o valla. Arriba, en **Dibujar**, eliges antes lo que vas a trazar: así una piscina es piscina desde el principio; el tipo se puede cambiar después en el formulario. Al lado eliges **▭ Rectángulo** (trazar) o **✎ Forma libre**: entonces colocas las esquinas una a una como en una habitación libre, para parterres curvos, lindes oblicuas o un camino en L; tocar el primer punto o **Intro** cierra la superficie. Una superficie exterior seleccionada se cambia por sus esquinas; un rectángulo sigue siendo un rectángulo. El seto y la valla reciben en el formulario una **Altura** (seto de tuya de 2,5 m, borde de parterre de 0,5 m); **Mostrar el contorno** desmarcado omite la línea luminosa del borde, por ejemplo en una parcela hecha de varias zonas de césped. **Desnivel** hunde una superficie bajo el suelo o la eleva: la rampa de bajada a un garaje más hondo, la terraza elevada; las lámparas que haya encima la siguen. **Pendiente** inclina una superficie: diferencia de altura en metros y dirección hacia la que cae (el borde alto queda en el desnivel); una entrada que baja hacia la calle, una ladera en el jardín; los postes de la valla y las lámparas se apoyan en la superficie inclinada. **Zona silvestre** es un tipo para rincones sin segar. **Balcón** es para plantas superiores: una losa fina a la altura de la planta con una barandilla de barrotes transparente (altura en el formulario); en los bordes que tocan una pared de la casa no se crea barandilla, así las puertas de balcón quedan libres. **Recortar de las zonas de abajo** convierte una superficie en un agujero de cualquier superficie dibujada antes que la contenga por completo: un estanque o una zona silvestre en medio de un único césped grande. **Pérgola / armazón** dibuja postes de esquina, vigas y cabios a la altura ajustada, con **Arriostramiento en X** en los lados: para pérgolas, estructuras de carport o la base de un toldo. La valla y la pérgola pueden quedar **abiertas**: falta entonces el lado del último al primer punto y la valla se apoya en la casa. Los árboles, arbustos y matorrales vienen como muebles del pack **Jardín y terraza** (desde la release 3: roble, tilo, abedul, arce, frutal, abeto, pino, tuya, arbusto, arbusto con flor, matorral, grupo de árboles); el ancho y el alto en el formulario del mueble determinan copa y porte. Las balizas de camino, los focos de jardín y los apliques de exterior iluminan las superficies exteriores y la fachada. **Piscina:** las piscinas se dibujan con su propia herramienta **Piscina**; arriba eliges la forma (**Rectangular**, **Redonda**, **Ovalada** o **Libre**) y luego la trazas (redonda: tan ancha como el lado corto del marco). Una piscina redonda u ovalada se agranda por las cuatro esquinas de su marco (el círculo sigue redondo) o en el formulario por el diámetro, o por el ancho y el largo; la forma en sí se mantiene. Una piscina se recorta sola del césped de debajo. **Piscina elevada** la pone como vaso sobre el suelo, con **Altura del vaso**; si no, está enterrada y el agua queda bajo el borde.

![Jardín de noche](images/view-garden.jpg)

### 4.18 3D al lado

**3D al lado** muestra la vista 3D a la derecha del plano. Cada cambio aparece allí al momento.

- La **barra entre el plano y el 3D** se arrastra para cambiar la proporción. El navegador recuerda el ajuste.
- Arriba en la mitad 3D cambias entre **Paredes altas** y **Corte**.
- Un mueble o dispositivo también se puede tocar y arrastrar en la mitad 3D. Abajo aparece entonces una barra con ancho, fondo, alto, altura sobre el suelo, rotación y eliminar.
- La barra lateral se pliega junto a la vista 3D. En el borde derecho, unos botoncitos la vuelven a abrir, y el icono de chincheta la mantiene abierta.

### 4.19 Tejado

![Una granja con vivienda, granero y anexo, cada uno con su propio tejado](images/view-roof-sections.jpg)

Una casa sencilla recibe en **Ajustes → Tejado** un tejado plano o a dos aguas sobre toda la planta superior. Para todo lo demás (una casa en L o en T, una vivienda con granero, un anexo con tejado a un agua, un tejado que baja mucho por un lado) construyes el tejado con **Secciones de tejado**.

- En **Tejado** elige la opción **Secciones de tejado (a medida)** o la herramienta **Tejado**. La primera vez, NeonPlan 3D propone las secciones de tejado a partir de tus habitaciones: por planta, las partes sobre las que no hay ninguna planta más alta, cada una con tejado a dos aguas. Después las ajustas.
- Con la herramienta **Tejado** trazas una sección nueva en el plano. Tocar selecciona una, arrastrar la mueve, las esquinas cambian el tamaño. Arriba eliges la planta cuyas habitaciones aparecen en el plano. Al lado se abre la vista 3D con la casa entera, así ves cada cambio al instante.
- Con el candado **🔓 Fijar** (o la tecla **L**) una sección terminada queda fija y ya no se mueve al tocarla; **🔒 Plano** bloquea también todas las secciones de tejado.
- Cada sección tiene una **Forma** (dos aguas, cuatro aguas, faldón (hastial con remate a cuatro aguas arriba), pabellón (cuatro faldones hasta un vértice), mansarda (empinada abajo, plana arriba), un agua, plano y con peto (tejado plano con antepecho)) y una **dirección de cumbrera** (↔ o ↕).
- El **alero** y la **pendiente** se ajustan por separado para cada lado. Todas las alturas cuentan desde el suelo. Un lado con alero más bajo baja más; así se obtiene, por ejemplo, un faldón prolongado sobre un anexo bajo. Un tejado a un agua sube desde el primer lado; **Intercambiar lados** lo invierte.
- **Coronación de muros** es la altura a la que terminan las paredes bajo el tejado. Una sección nueva la toma de las habitaciones de debajo, sea cual sea la planta que muestre el plano. Desde ahí se levantan los hastiales y los muretes hasta el tejado, así también queda cerrada la habitación bajo un tejado a un agua.
- **Sobre la planta** muestra a qué planta pertenece la sección en la vista 3D y la coloca sobre la coronación de muros de otra planta; la coronación y los aleros se desplazan con ella. Ayuda cuando una sección nueva ha caído en la planta equivocada, por ejemplo sobre una planta alta con el hueco de la escalera en el centro.
- **Tejado plano de forma libre:** en un tejado plano está el botón **Tomar el contorno de la planta**: la sección recibe el contorno de las habitaciones de la planta mostrada (también en L o en Z), una superficie sin juntas en lugar de varios rectángulos. Las esquinas se pueden arrastrar después en el plano; **Volver al rectángulo** borra la forma.
- **Buhardillas:** en el formulario de una sección, **+ Buhardilla** añade una buhardilla en el lado elegido: 2 m de ancho, frente en la pared del alero, alero 1,4 m por encima del alero del tejado, a dos aguas, con la profundidad justa para que su cumbrera encuentre el faldón. Una buhardilla es una pequeña sección de tejado: moverla, el ancho, las alturas y la forma (dos aguas, un agua) se cambian como en cualquier otra. La sección principal se abre debajo, los laterales la cierran de lado, y la pared del bajo cubierta sube bajo la buhardilla hasta su alero; ahí pones la ventana de la buhardilla con **Puertas y ventanas**.
- **Hastial transversal (casa de tres hastiales):** un hastial que sobresale del lado del alero es una buhardilla ancha cuyo alero queda sobre la coronación de muros: **+ Buhardilla**, luego arrastrar el ancho (p. ej. 3,4 m) y poner el **alero** en la coronación de muros. La profundidad se ajusta sola: la buhardilla llega justo hasta que su cumbrera encuentra el faldón, y el tejado principal solo se abre donde está encima el tejado de la buhardilla (limahoyas). La pared del bajo cubierta bajo el hastial transversal sube hasta el hastial, y la ventana la pones con **Puertas y ventanas**.
- **Techos inclinados (murete):** si la coronación de muros queda por debajo de la altura del techo de la planta de debajo (también cuando el faldón ya empieza en la planta de debajo: entonces sus paredes del lado del alero terminan también en el faldón), por ejemplo 0,9 m sobre el suelo del bajo cubierta, sus paredes terminan en la cara inferior del tejado: murete en el alero, hastial hasta la cumbrera, paredes interiores en el faldón. Las ventanas solo caben entonces donde la pared es lo bastante alta (en el hastial); en el lado del alero se usan ventanas de tejado. En el plano, unas líneas discontinuas muestran dónde quedan aún 1,5 m y 2 m de altura libre bajo el faldón.
- Donde una sección de tejado choca con una parte más alta de la casa, por ejemplo un tejado a un agua contra la fachada, allí desaparece el vuelo; el tejado termina en la pared.
- Abajo en el formulario está la **Altura de cumbrera**. Las secciones de tejado pueden solaparse: el tejado más bajo pasa por debajo del más alto, como en un anexo real.
- **Volver a crear a partir de las habitaciones** sustituye todas las secciones por una propuesta nueva, **Volver a un solo tejado** vuelve al tejado sencillo.
- **Marquesina:** para un tejado de terraza o un carport trazas una sección de tejado sobre una zona sin habitación. Se convierte automáticamente en marquesina: un tejado plano a un agua a 2,4 m, sostenido por postes y vigas en lugar de paredes, con superficie transparente. Contra la pared de la casa se apoya en ella. El interruptor **Marquesina** también está en el formulario de cada sección de tejado.

![Una cubierta de terraza delante de la casa](images/view-canopy.jpg)

![La herramienta Tejado con una sección seleccionada](images/editor-roof.jpg)

#### Ventanas de tejado

Debajo de las secciones de tejado, **+ Ventana de tejado** pone una ventana en una sección (por defecto 78 × 118 cm). Se puede mover en el plano, también a otra sección, y como una ventana normal tiene **Persiana**, **Contacto** y **Contacto de abatimiento**: abierta, la hoja se abre hacia fuera con la bisagra arriba; abatida, solo un poco; y la persiana baja desde arriba sobre el cristal.

Cada ventana de tejado tiene un **Nombre** (opcional), **Persiana**, **Contacto** y **Contacto de abatimiento**, y un **motor de ventana**: Velux, Roto o Fakro informan de la posición de la ventana como cover, y la hoja se abre en 3D tanto como esté el motor. Abierta o abatida, el marco brilla en cálido como una ventana de pared. Si la ventana está en una sección de tejado, recorta un agujero en el faldón, así se ve el exterior desde el bajo cubierta.

### 4.20 Energía: campos solares

En la herramienta **Energía** solo se pueden mover los campos solares y los aparatos de energía, tanto en el plano como en 3D; las habitaciones y los muebles están bloqueados, y un aviso arriba en el plano lo indica. La herramienta reúne todo lo relacionado con la energía de la casa, primero los **Campos solares** (contador, calefacción y bomba de calor vendrán después). **+ Campo solar** pone un campo en la sección de tejado libre más soleada, tan grande como quepa. **+ Sobre el suelo** coloca un campo sobre estructuras junto a la casa, por ejemplo en el jardín o en el tejado plano del garaje. **+ En una pared** cuelga una fila de módulos en la pared exterior más soleada de la planta mostrada (fachada, balcón).

Los campos se mueven con el ratón en el plano y en la **vista 3D al lado**, también a otra sección de tejado o a otra pared. Las ventanas de tejado igual, en la herramienta **Tejado**. Los módulos siguen la pendiente de la sección; en un tejado plano van sobre estructuras. Funciona en el tejado sencillo a dos aguas y plano y en todas las secciones de tejado (dos aguas, cuatro aguas, un agua, plano). En los tejados a cuatro aguas y de pabellón también se pueden elegir los dos **faldones triangulares**, por ejemplo el lado sur de un tejado a cuatro aguas con cumbrera este-oeste; los campos se estrechan hacia la punta.

| Campo | Efecto |
|---|---|
| **Sección de tejado** | La vertiente con orientación y pendiente, por ejemplo «Tejado principal · Sur · 35°» |
| **Nombre** | Por ejemplo «Cadena 1 Sur»; varios campos para varias cadenas o vertientes |
| **Filas** y **Módulos por fila** | Tamaño del campo. Una lista como **«4, 4, 3»** da a cada fila su propia longitud (desde el alero); las filas más cortas van a la izquierda, al centro o a la derecha. Los módulos que sobresaldrían de la vertiente se descartan |
| **Módulos uno a uno** | Quitar o volver a añadir módulos sueltos tocándolos en el plano, por ejemplo alrededor de una chimenea o una ventana de tejado |
| **Full black** / **Azul** | Aspecto de los módulos: todo negro (por defecto) o el azul clásico |
| **Ancho del módulo** / **Alto del módulo** | Tamaño de un módulo en vertical, por defecto 1,13 × 1,72 m |
| **Potencia del módulo (Wp)** | Potencia pico de un módulo, por defecto 400; determina los kWp del campo y de la cadena y cuánto brillan los módulos en vivo (Energía Pro) |
| **Cadena** | Campos conectados juntos, también en tejados distintos: por ejemplo 5 módulos en la casa y 5 en el garaje en «Cadena 1». La cadena tiene un nombre, un sensor FV y un inversor (creado en **Dispositivos**) |
| **Potencia FV de este campo** | El sensor de potencia de su cadena, para la próxima extensión Pro |
| **Vertical** / **Horizontal** | Orientación de los módulos (1,13 × 1,72 m) |
| **Distancia al borde** / **al alero** | Posición del campo. En el plano se puede mover con el ratón, también a otra vertiente; no se sale del borde de la vertiente |
| **Inclinación de la estructura** | Tejado plano y jardín: ángulo de las estructuras, además de la orientación |
| **Sobre el suelo** | El campo va sobre estructuras y se mueve libremente. **Altura de la base** lo eleva, p. ej. 2,8 m sobre el tejado de un garaje (0 = suelo). **Rotación** orienta las filas, igual que los botones ↺/↻ 15° y el tirador de giro en el plano; el campo gira alrededor de su centro |
| **Pared** | Los módulos cuelgan de una pared exterior; en la lista, cada pared se nombra por planta, habitación y los números de vértice del plano («Pared Planta baja · Pasillo 4–5 · Este · 1,2 m»), y las paredes sueltas se llaman «suelta». En una pared el campo conserva tantos módulos como quepan en la fila; si es demasiado corta para un módulo tumbado, lo pone de canto, y una pared más estrecha que un módulo (por ejemplo un muro de jardín de 0,9 m) lleva uno centrado que sobresale por ambos extremos. En lugar de «Distancia al alero» está la **Altura sobre el suelo**. **Inclinación desde la pared** los pone inclinados: separados arriba o separados abajo, hasta 90° como tejadillo. Los botones de planta de arriba eligen en qué planta trabajas |
| **Llenar la vertiente** | Pone en la vertiente tantos módulos como quepan |

Debajo del campo aparece la potencia, calculada con 400 W por módulo. El bloqueo del plano no fija los campos solares, pero con **🔓 Fijar** en el formulario se puede fijar un campo (y lo mismo una ventana de tejado) por separado. **Dispositivos:** el inversor, la batería y el cargador los creas también en la herramienta **Energía**, en **Dispositivos**, en la planta elegida arriba. El cargador va solo al garaje; el inversor y la batería, a un cuarto técnico (lavadero, sótano …), cada uno en una pared sin puerta ni portón, y el plano salta hasta allí. Un toque en un aparato de la lista lo muestra en el plano. Ahí, en la herramienta Energía, cada aparato lleva una marca redonda con icono (⚡ inversor, 🔋 batería, 🔌 cargador) por la que se agarra y se mueve, aunque encima haya un campo solar en el tejado. Con un sensor de potencia muestran sus vatios. La **Batería doméstica** muestra además, con el campo **Nivel de carga**, su nivel de carga, por ejemplo «64 % · ▲ 1,5 kW» (▲ carga, ▼ descarga), y el **Cargador**, con un sensor de **Estado**, «cargando · 11 kW» o «enchufado».

**Contador eléctrico y conexión a la red:** el **Contador eléctrico** es el cuarto aparato de energía; recibe el sensor de red (W, + = consumo) y muestra «Consumo de red 420 W» o «Inyección 900 W». La **Conexión a la red** marca dónde sale de la parcela la línea hacia la compañía eléctrica, por ejemplo al final de la entrada; se crea donde la línea terminaría por sí sola y se puede mover en el plano. Cada aparato tiene en el formulario un campo **Nombre** («Inversor norte») que aparece en la lista, en el formulario y en los pines en 3D, y el inversor y la batería tienen un **Modelo**: aparato de pared, estrecho y alto o híbrido; torre, batería de pared o batería compacta de balcón. Se admiten varios inversores y baterías, por ejemplo una instalación grande y un kit solar de balcón: cada uno recibe su propio sensor.

**Balance energético:** NeonPlan toma la red, la solar y la batería de los aparatos del plano (contador, inversor, batería; si hay varios se suman, y los niveles de carga se promedian). En la sección **Balance energético** eliges otros sensores, inviertes signos e indicas el consumo de la casa. **Tomar del panel de Energía** trae los sensores que configuraste en el panel de Energía de Home Assistant: para cada estadística de energía, el sensor de potencia del mismo dispositivo, además de los contadores de gas y agua. Revisa los signos después. El **Contador de gas** y el **Contador de agua** son contadores (lectura, por ejemplo en m³); con Energía Pro la tarjeta de la casa muestra cuánto se ha consumido hoy.

Al final, una tarjeta anuncia la próxima extensión Pro **Energía Pro**. Todo lo que configures aquí sigue siendo gratis y ella lo usará directamente.

---

## 5. La vista 3D

![Una planta](images/view-floor-eg.jpg)

### 5.1 Casa, planta, habitación

La vista 3D tiene tres niveles:

1. **La casa entera**, con un rótulo por planta: habitaciones, luces encendidas, ventanas abiertas.
2. **Una planta:** las plantas de encima salen volando y las de debajo quedan, según el ajuste, atenuadas, apiladas u ocultas.
3. **Una habitación:** la cámara vuela dentro y se abre la ventana de la habitación.

**Navegar:**

- Tocar el rótulo de una planta o una habitación baja un nivel.
- **Doble toque** en un punto libre, **Esc** o **Atrás** sube un nivel.
- Arrastrar gira la vista; dos dedos o la rueda del ratón hacen zoom.
- A la izquierda, las **miniaturas de planta** cambian directamente a una planta. La pequeña flecha de encima las pliega en simples botones de planta (el dispositivo lo recuerda); en la tarjeta, `floor_thumbs: false` las desactiva.
- Arriba hay botones para todas las plantas y para las habitaciones de la planta abierta.

### 5.2 Los selectores de abajo

| Selector | Efecto |
|---|---|
| **Paredes altas** / **Corte** | Paredes a altura completa, las delanteras como cristal tintado, o todas las paredes cortadas a la altura de la cadera; los muebles altos (armario, escalera, columna) también se cortan para no tapar lo que hay detrás. Cada dispositivo recuerda la elección |
| **Separadas** / **Apiladas** | En la vista de casa: plantas separadas o unas sobre otras |
| **Tejado fijo** | En la vista de casa: el tejado se queda en su sitio al acercarse, en vez de levantarse y desvanecerse (en el editor, en las herramientas Tejado y Energía, siempre es así) |
| **Atenuadas** / **Apiladas** / **Sola** | Con una planta abierta: qué pasa con las plantas de debajo |
| **Normal** / **Temp.** / **Humedad** / **CO₂** / **Valores** | Mapa de calor: suelos en el color del valor de la habitación; **Valores** no colorea nada, sino que escribe temperatura, humedad y CO₂ como números bajo los nombres de las habitaciones |
| **Nombres** | Mostrar u ocultar los nombres de las habitaciones |
| **Rastro** | Rastro de movimiento, Pro, ver [6.1](#61-cabina-de-cámara) |
| **Tiempo** | El tiempo fuera, Pro, ver [6.2](#62-tiempo-exterior) |
| **⏪ Viaje en el tiempo** | Reproducir las últimas 24 horas de la casa, solo para ver, Pro, ver [6.7](#67-viaje-en-el-tiempo) |
| **≡ / ↔** (a la derecha en la barra de plantas y habitaciones) | Repartir la barra de arriba en varias líneas cuando muchas habitaciones no caben en una, o volver a una línea; en una línea se desplaza de lado, en el PC también con la rueda del ratón. En la vista de casa, delante de las habitaciones de cada planta aparece su nombre |
| **⚙** (solo en el móvil, arriba junto a la versión) | Despliega y pliega las opciones de vista calidad, look, iconos y FPS; así la cabecera ocupa solo dos líneas en el móvil |
| **Ojo** (abajo a la izquierda, junto a la lupa) | Oculta todo lo que no es la vista 3D: cabecera, barra de plantas y habitaciones, valores de energía, miniaturas de planta, selectores. Queda el escenario: en el móvil, media pantalla más de altura. Un toque en el ojo lo recupera todo; las habitaciones se siguen pudiendo tocar. El dispositivo recuerda la elección |

![Vista en corte](images/view-cut.jpg)

Arriba a la derecha están:

| Selector | Efecto |
|---|---|
| **Auto** / **Tableta** / **Alta** | Nivel de calidad. Tableta omite dibujos, sombras y halos y se elige automáticamente en las tabletas Fire. Alta muestra además conos de luz bajo los focos |
| **Neón** / **Plano técnico** / **Día** | El look. El campo de color de al lado pone un **color de acento propio**: en el look neón lo toman las líneas y los bordes luminosos, y los botones y pines en cualquier look; ↺ devuelve el cian |
| **Ninguno** / **Importantes** / **Todos** | Qué iconos de dispositivo aparecen. Importantes muestra solo los dispositivos sin modelo 3D propio y valores como vatios o la app en marcha |
| **◧ / ◨** | Miniaturas de planta, estrella, búsqueda y ojo a la izquierda o a la derecha; práctico si la vista está en el borde izquierdo del dashboard |
| **⌖ Mantener vista** | Al cambiar de una planta a otra, la cámara se queda donde está; solo cambia la altura |
| **FPS** | Fotogramas por segundo, fotograma más lento y motivo de cada fotograma dibujado. En reposo pone 0 f/s |

A la derecha del todo en la cabecera aparece la versión instalada (p. ej. v1.11.0); con el puntero encima se ve qué versión informa la integración en Home Assistant.

Cada dispositivo recuerda todos los selectores.

![Plano técnico](images/view-blueprint.jpg)

![Día](images/view-day.jpg)

### 5.3 Manejo

![Tocar una lámpara](images/view-tap-lamp.jpg)

- **Tocar** acciona lámparas e interruptores. La lámpara parpadea un momento para confirmar.
- **Deslizar en vertical** sobre una lámpara regula su brillo; sobre una persiana o una ventana, mueve la persiana. El valor aparece junto al dedo. Los dispositivos y ventanas con «Preguntar antes de accionar» no reaccionan al deslizar.
- **Pulsación larga** abre el menú rápido: en las luces, brillo, temperatura de color y colores; en las persianas, subir, parar, bajar y posiciones fijas. Las persianas venecianas y de lamas reciben ahí y en la ventana de la habitación un regulador de **Lamas** (o lamas abiertas/cerradas) en cuanto la entidad lo admite.
- Tocar una **Ventana**, sea el marco, el cristal o la persiana, abre el menú de la persiana o muestra el contacto.
- **Doble toque en una habitación** enciende o apaga todas las luces de la habitación. Los dispositivos con «Preguntar antes de accionar» quedan fuera.
- Las teles, las puertas y las puertas de garaje también se pueden tocar directamente.

![Menú rápido de luz](images/view-quickmenu.jpg)

![Menú rápido de persiana](images/view-quickmenu-cover.jpg)

![Deslizar para regular](images/view-swipe.jpg)

### 5.4 La ventana de la habitación

![Ventana de la habitación](images/view-room-panel.jpg)

En una habitación se abre a la derecha la ventana de la habitación; en los móviles y en vertical, abajo. Muestra los dispositivos de la habitación por tipo: luces con brillo, temperatura de color y colores, **Todas encendidas** y **Apagar todo**, persianas con **Todas arriba** y **Todas abajo**, calefacción, multimedia, interruptores, cámaras con imagen fija, sensores y escenas y scripts.

Muestra los dispositivos que están en la habitación en el plano y todo lo que añadiste en el editor con ☆. **Más dispositivos del área** muestra el resto.

Con una habitación seleccionada sin la ventana de la habitación abierta, abajo aparecen como botones las **escenas y scripts** del área.

### 5.5 Buscar

![Búsqueda](images/view-find.jpg)

La **estrella** sobre la lupa abre el **menú central**: encender o apagar las luces y subir o bajar las persianas de la planta mostrada; en la vista de casa, de toda la casa, y entonces con una confirmación («¿Seguro?», un segundo toque lo ejecuta). Las puertas de garaje y los portones no cuentan como persianas. Debajo están los **Favoritos** del editor; un toque inicia una escena o un script, pulsa un botón o conmuta un interruptor. En la tarjeta, `central: false` oculta la estrella.

La lupa de abajo a la izquierda abre **«¿Dónde está …?»**. Escribe el nombre de un dispositivo o de una habitación. Al acertar, la cámara vuela hasta allí y el dispositivo parpadea.

**Recorrido:** el botón **🚶 Recorrido** de arriba a la derecha inicia un **Recorrido por la casa**: estás a la altura de los ojos en la habitación elegida (si no, en la más grande de la planta mostrada) y la recorres. **Arrastrar** mira alrededor, un **toque en el suelo** camina hasta allí (también a través de puertas a otras habitaciones), **W A S D** o las **flechas** caminan, y en la tableta el **joystick** de abajo a la derecha. Las paredes te detienen, las puertas te dejan pasar. Mientras, la casa sigue viva: luces, teles, manchas de sol, tarjetas de cristal. Arriba aparece la habitación en la que estás; **✕ Terminar** o **Esc** te devuelve. En la tarjeta, `walk: false` oculta el botón. Durante el recorrido solo se muestran las tarjetas de cristal de la habitación en la que estás.

![Recorrido: salón y cocina a la altura de los ojos](images/walk.jpg)


### 5.6 Mapa de calor

![Mapa de calor de temperatura](images/view-heat.jpg)

**Temp.**, **Humedad** y **CO₂** colorean los suelos según los sensores del área, con una escala de color en el borde. Las temperaturas aparecen en la unidad configurada en Home Assistant (°C o °F); los sensores en °F se convierten correctamente.

### 5.7 Sol y luz del día

![Luz del sol](images/view-sun.jpg)

Si el norte está configurado, la luz del sol de `sun.sun` entra por las ventanas orientadas al sol y cae como manchas suaves en el suelo. Las persianas bajadas reducen las manchas. A quien no le gusten, las desactiva en **Ajustes** con **Luz del sol por las ventanas**. De día, el cielo detrás de la casa se aclara.

### 5.8 Avisos

![Aviso](images/view-alert-banner.jpg)

NeonPlan 3D avisa gratis y sin configuración:

| Aviso | Causa |
|---|---|
| Humo, gas, monóxido de carbono, agua | Un `binary_sensor` de esa clase de dispositivo en el área informa «encendido» |
| Alarma | Un `alarm_control_panel` está disparado o a punto de dispararse |
| Ventana abierta con lluvia | Una ventana está abierta o abatida y la entidad meteorológica informa lluvia, chubascos tormentosos, granizo o aguanieve |
| Corte de luz | La entidad de los ajustes del plano (**Avisar de un corte de luz con**) informa un corte: un sensor de red de la clase power está en «apagado», un SAI funciona con batería, la tensión de red está por debajo de 100 V o un ayudante propio está «encendido». La conexión a la red en 3D aparece tachada |

La habitación afectada late en rojo y arriba aparece un banner. Un toque en el aviso salta a la habitación. El aviso de lluvia usa la entidad meteorológica de los ajustes del plano y se puede desactivar allí por separado en **Aviso: ventana abierta mientras llueve**. Una ventana concreta que puede quedarse abierta con lluvia (por ejemplo bajo el tejadillo) recibe en su formulario la casilla **Sin aviso de lluvia**. Si tienes una estación meteorológica propia, en **Lluvia de tu propia estación meteorológica** eliges su sensor de lluvia (encendido = lluvia) o su intensidad de lluvia (mm/h): entonces cuenta si de verdad llueve en la casa, para el aviso y, con «Tiempo exterior», también para la lluvia en 3D.

En una tableta de pared el banner puede hacerse largo: «Aseo de invitados · Ventana abierta con lluvia: ventana del baño de invitados». Si en los ajustes del plano desactivas **Nombre del dispositivo en los avisos**, solo pone «Aseo de invitados · Ventana abierta con lluvia». Un aviso sin habitación conserva el nombre del dispositivo.

### 5.9 Cámaras en 3D

![Cámara en 3D](images/view-camera-model.jpg)

Un toque en la cámara o en su cono de visión abre la imagen fija, que se renueva cada pocos segundos. Un toque en la imagen abre la imagen en directo de Home Assistant. El cono es una zona táctil mucho mayor que la pequeña cámara.

![Imagen fija de la cámara](images/view-camera.jpg)

---

## 6. Extensiones Pro

Las extensiones Pro son funciones adicionales de pago, que se compran por separado en la tienda. Sin la extensión, los selectores muestran un 🔒 y un aviso lleva a la tienda. Cómo instalarlas se explica en el [capítulo 7](#7-extensiones-tienda-y-packs-de-muebles).

![Función Pro bloqueada](images/view-pro-locked.jpg)

### 6.1 Cabina de cámara

**Mirar a través de la cámara:** en el menú de la imagen fija de una cámara y en la ventana de la habitación aparece «Mirar a través de la cámara». La vista 3D vuela al sitio de la cámara y mira en su dirección, y la imagen en directo se superpone semitransparente sobre la escena. Con el deslizador de abajo ajustas la transparencia, y «Volver a la vista» vuela de vuelta. Si la imagen no encaja del todo, corriges el giro y la inclinación de la cámara en el editor.

![Mirar a través de la cámara](images/view-camera-through.jpg)

**Rastro de movimiento:** el selector **Rastro** muestra dónde se detectó movimiento en los últimos 30 minutos: puntos luminosos con la hora, unidos en orden cronológico; los más antiguos se desvanecen. Las fuentes son sensores de movimiento, de presencia y de ocupación. Los sensores colocados en el plano aparecen en su sitio, los de las cámaras en la cámara y los demás en el centro de la habitación. Los datos vienen del historial de Home Assistant y se recargan cada minuto.

![Rastro de movimiento](images/view-trail.jpg)

**Pines de detección:** si un sensor de la cámara informa en ese momento de una detección (Frigate, UniFi Protect, Reolink y similares dan un sensor por objeto: persona, vehículo, animal, movimiento), delante de la cámara aparece un pin con icono, tipo y hora: «Persona · 18:42». Tocarlo abre el sensor. Varios objetos a la vez dan varios pines uno sobre otro. Si te resulta demasiado agitado, desactiva **Mostrar símbolos de detección** en el formulario de la cámara: entonces, al detectar algo, solo se pone rojo el cono de visión.

**Muro de cámaras:** el selector **Cámaras** de abajo (en la tarjeta, la opción `camera_wall: true`) pone todas las imágenes en directo de tus cámaras colocadas como un muro sobre la escena, refrescadas cada pocos segundos. Una cámara que está viendo movimiento recibe un marco rojo; una que está grabando, un punto rojo. Los mosaicos se reparten el muro: la cuadrícula elige tantas columnas que todas las cámaras quepan lo más grandes posible y sin solaparse (una cámara lo llena, dos van una junto a otra, 22 más o menos en 6 × 4); con muchísimas cámaras, el muro se puede desplazar. Los mosaicos son imágenes fijas, renovadas cada 5 segundos (en el nivel Tableta cada 10, y un pequeño aviso en la cabecera lo indica): diez streams en directo saturarían una tableta antigua. También al mirar a través en 3D la imagen es fija; la barra de abajo lo dice. Tocar muestra la imagen en grande, y además como **stream en directo** con el reproductor de Home Assistant en cuanto la cámara puede emitir (si no, se queda la imagen fija); desde ahí, **Mirar a través de la cámara** lleva a la vista 3D, y **Volver a la vista** te devuelve al muro. **‹ Todas las cámaras** vuelve a la cuadrícula, ✕ cierra el muro.

### 6.2 Tiempo exterior

![Lluvia](images/view-weather-rain.jpg)

El tiempo alrededor de la casa sigue a tu entidad meteorológica:

| Estado | En 3D |
|---|---|
| rainy, pouring, hail | Lluvia, además de nubes |
| snowy, snowy-rainy | Nieve; con aguanieve, ambas |
| lightning, lightning-rainy | Rayos; con chubasco tormentoso, también lluvia |
| fog | Niebla, solo si está activada |
| cloudy, partlycloudy | Las nubes oscurecen el cielo y la luz del sol |
| windy | El viento inclina la lluvia y la nieve |
| sunny, clear-night | Sol de día, luna de noche |

Si la entidad da `cloud_coverage` y `wind_speed`, NeonPlan 3D usa esos valores.

![Nieve](images/view-weather-snow.jpg)

**Ajustes** en el editor: en **Entidad meteorológica** eliges la entidad, y en **Efectos meteorológicos en 3D** desactivas efectos sueltos. La niebla empieza desactivada porque vuelve gris toda la escena. En el nivel de calidad Tableta solo queda el oscurecimiento por nubes.

### 6.3 Pantallas en directo

Sin esta extensión, una tele solo brilla mientras está encendida. Con ella:

- Las teles y los monitores muestran el **color de la app en marcha** y la **carátula** del reproductor multimedia.
- **Imágenes según el estado:** en el mueble de la pantalla creas reglas. Si una entidad está en un estado determinado o un atributo tiene un valor, la pantalla muestra una imagen. Ejemplo: el atributo `app_name` de la tele contiene «netflix», y aparece el logo de Netflix. El valor coincide si es igual o aparece en el texto; `*` coincide siempre. Gana la primera regla que coincida.
- Como imagen vale una subida, que se reduce a 512 píxeles, una URL de imagen o una **cámara**. La imagen de una cámara se renueva cada 5 segundos mientras se ve.
- **Pantalla detrás de la imagen:** oscura o blanca, según si el logo es claro u oscuro.
- «✓ coincide ahora» en una regla muestra qué imagen se ve en este momento. Las imágenes subidas se pueden reutilizar en otras pantallas.

![Reglas de imagen](images/editor-picture-rules.jpg)

![Mueble multimedia con logo](images/view-media-wall.jpg)

![Imagen de cámara en el monitor](images/view-camera-screen.jpg)

---

### 6.4 Energía Pro

Energía Pro convierte la herramienta Energía en una imagen viva de tu instalación: la electricidad fluye visiblemente por la casa, los módulos solares viven con el sol y un holograma de cristal muestra el balance. Todo lo que configuras para ello es gratis y está en [4.20](#420-energía-campos-solares); Pro desbloquea la representación. El gas y el agua aparecen desde la 1.14.0 con el consumo de hoy en la tarjeta de la casa (gas en m³, agua en litros); el calor llegará como actualización del mismo pack.

**Listo en cinco minutos**

Arriba en la herramienta **Energía** está la **Configuración**: una lista que marca lo que ya está hecho y, al tocar, salta al sitio correcto.

1. **Campo solar:** + Campo solar pone módulos en la vertiente más soleada (4.20).
2. **Dispositivos:** crea el contador eléctrico, el inversor, la batería, el cargador y la conexión a la red. Van solos al garaje o al cuarto técnico y se pueden mover en el plano.
3. **Sensores:** lo más fácil es **Tomar del panel de Energía** (sección Balance energético): NeonPlan toma las estadísticas de tu panel de Energía, busca para cada una el sensor de potencia del mismo dispositivo y lo pone en el contador (red), el inversor (FV) y la batería (potencia, nivel de carga). Los aparatos que falten se crean de paso. Si no, eliges los sensores a mano en el formulario de cada aparato: contador = potencia de red en vatios (+ = consumo), inversor = potencia FV, batería = potencia (+ = descarga) y nivel de carga en porcentaje, cargador = potencia y estado.
4. **Revisar los signos:** si el contador marca «inyección» de noche o la batería carga sin sol, un sensor cuenta al revés. El balance energético lo indica y ofrece **Invertir el signo**.
5. **Conexión a la red** (opcional): hasta ahí va la línea de red, por ejemplo al final de la entrada. Sin ella, termina en el borde de tus superficies exteriores.

Se admiten varias instalaciones (tejado y kit solar de balcón): segundo inversor, segunda batería, cada uno con su propio sensor; el campo del balcón como campo solar en la pared o sobre el suelo y asignado a una cadena con ese inversor. Cada instalación recibe entonces su propia tarjeta de instalación sobre su campo (potencia, curva del día, batería), también aquella en cuyo campo cuelga el holograma principal; este se aparta entonces un poco del campo mientras no lo hayas movido tú. En el formulario del inversor desactivas la tarjeta de una instalación o la desplazas sobre su campo con **Desplazamiento lateral** y **Desplazamiento hacia arriba**, como el holograma principal; ahí también se indica qué cadenas cuelgan de ese inversor. En el campo solar los inversores aparecen con su propio nombre (o el de su entidad). Las baterías que informan la carga y la descarga en dos sensores (por ejemplo Anker Solix) reciben el sensor de descarga como **Potencia** y el de carga como **Potencia de carga**. Lo mismo el contador: si informa consumo e inyección por separado (Growatt, Tibber Pulse, muchas plantillas de Shelly), el sensor de consumo va en **Potencia** y el de inyección en **Potencia exportada**; un sensor con signo no lo necesita. Los campos de potencia ofrecen todos los sensores en W o kW, también sin clase de dispositivo. En el balance energético pon un sensor solar solo si da toda la producción; si no, tapa la suma de los inversores.

**Cables**

En la vista 3D, el botón ⚡ de la barra de energía activa los cables. Unos cables finos con puntos de luz que avanzan muestran hacia dónde fluye la electricidad en ese momento; los puntos son cometas, y la dirección se entiende incluso parada. Amarillo la solar (desde el campo a través del tejado, por dentro de la pared hasta el inversor), verde la batería (la dirección cambia al cargar y descargar), azul el cargador, azul claro los consumidores de la casa, cian la inyección y rojo violáceo el consumo de red, desde el contador hasta la conexión a la red con un pin que muestra el valor. Cuanta más potencia, más rápidos y densos los puntos.

Cada cable encuentra su camino solo (discontinuo en el plano); el último tramo hasta el aparato va en ángulo recto, no en diagonal por la esquina. Si quieres llevarlo por otro sitio, por ejemplo por fuera en la fachada o bajo el techo: selecciónalo en la sección **Cables** y pulsa **Tender a mano**, o simplemente agarra el cable discontinuo en el plano. Entonces arrastras puntos, un clic en el cable añade un punto, un doble clic lo quita, y **Altura sobre el suelo** fija por dónde pasa. Así se pueden llevar varios cables uno junto a otro hasta el contador. **Fijar** protege un cable terminado, **Automático de nuevo** borra tu trazado.

**Módulos vivos**

Los módulos reciben una estructura de células luminosa sobre la que avanza una banda de luz hacia el alero; cuanta más potencia, más clara y rápida. De noche reposan. La potencia de cada campo viene del sensor del campo; si no, de la cadena (repartida por número de módulos); si no, proporcionalmente de la potencia total.

**Holograma**

En la vista de casa, un holograma de cristal cuelga del campo solar más grande (sin campo, junto a la casa), unido por un trazo luminoso. Muestra la FV actual, la producción de hoy y el pico, la curva del día desde medianoche (de las estadísticas de tu sensor FV), con varias instalaciones una línea por inversor, la batería con flecha, la red, la casa, el cargador y la barra de autosuficiencia. Conserva su tamaño en el mundo, así que al alejarte se hace más pequeño; desde atrás lo ves reflejado como un cristal (se desactiva con **Reflejado desde atrás (como cristal)**, y entonces se lee desde cualquier sitio). Tocarlo lo pliega en la cifra grande. En la sección **Holograma** eliges campo, tamaño y desplazamiento (la sección está también sin campo solar: reflejo, tamaño, tarjetas de aparatos; solo los ajustes del campo esperan a que haya uno) o **Libre en el plano**: entonces en el plano aparece un asa ◈ que arrastras adonde quieras que flote la tarjeta, por ejemplo sobre la terraza; más la altura sobre el suelo. La tarjeta mira hacia fuera de la casa.

**Hologramas de aparatos**

También sin instalación solar: cada aparato con sensor de potencia (tele, lavadora, frigorífico, bomba de calor, PC, cargador) puede llevar encima una pequeña tarjeta de cristal: potencia actual, consumo de hoy y la curva del día de las estadísticas de su sensor. En el formulario del mueble marca la casilla **Holograma sobre el aparato**; igual en el formulario de un dispositivo colocado con sensor de potencia, por ejemplo un enchufe inteligente. Si hay aparatos muy juntos (lavadora y secadora), sus tarjetas se apartan unas de otras hacia arriba. Las tarjetas se muestran en la vista de casa y en la planta del aparato; tocarlas las pliega. Diez tarjetas cuestan menos que un cable, también en la tableta de pared.

**Balance de la casa y tarjetas de instalaciones también en las vistas de planta** (desactivado por defecto) mantiene visibles la tarjeta grande y las de las instalaciones cuando hay una planta abierta, en la planta de su campo solar, por ejemplo una instalación en el jardín en la planta exterior. En los ajustes del holograma, **Tarjetas de dispositivos también en la vista de casa** las oculta en la vista de casa (entonces solo en su planta), **Tarjetas de dispositivos en la habitación abierta** muestra, al abrir una habitación, las tarjetas de sus aparatos, y **Ocultar tarjetas de dispositivos por debajo de (W)** hace desaparecer las tarjetas mientras su aparato consuma menos; por ejemplo 1 W para «apagado».

El botón **Hologramas** de la barra de energía (junto a ⚡) oculta y vuelve a mostrar todas las tarjetas; práctico cuando muchos aparatos llevan una. En la tarjeta del dashboard el botón también existe, o lo fijas con `holograms`.

**Tableta de pared:** en el nivel Tableta los hologramas van sin efecto de cristal y los cables a media tasa de fotogramas.

**Si falta algo:** la configuración de arriba en la herramienta muestra lo que aún no encaja. Sin holograma suele significar: no hay sensor en el inversor o no es la vista de casa (las vistas de planta y de habitación no lo tienen). Sin cable hacia un aparato: el aparato no tiene sensor de potencia.

### 6.5 Sonido y Cine

Sonido y Cine trae la música a la casa 3D. Hace falta un altavoz en el plano: un reproductor multimedia colocado como dispositivo (capítulo 4.11) o un mueble del pack de cine en casa (altavoz de pie, barra de sonido, altavoz de techo …) con el reproductor multimedia como **Dispositivo** en el formulario del mueble.

**Tarjeta de lo que suena:** en cuanto un altavoz reproduce (o está en pausa), sobre él flota una tarjeta de cristal con carátula, título, artista y volumen. En ella: anterior, reproducir/pausa, siguiente y un regulador de volumen, sin abrir la habitación. Tocar la cabecera pliega la tarjeta. Las tarjetas obedecen al selector **Hologramas** (junto a ⚡ en la barra de energía; sin Energía Pro el selector no está, y entonces siempre están activas).

**Anillos de sonido:** alrededor de cada altavoz que suena avanzan anillos luminosos por el suelo hacia fuera; cuanto más alto, más lejos y más intensos. Así ves desde la vista de casa dónde suena música.

**Grupos multiroom:** si los altavoces suenan como grupo (Sonos, grupos de HA, todo lo que tenga `group_members`), una línea luminosa une a los miembros de la misma planta.

**Menú rápido:** una pulsación larga en un reproductor multimedia abre ahora la carátula con reproducir/pausa en el centro, anterior y siguiente a los lados y el volumen debajo, en lugar de solo encendido/apagado. Debajo está **Reproducir**: tus emisoras y listas (creadas en el editor en **Favoritos → Emisoras y listas**) y las fuentes del reproductor, por ejemplo los favoritos de Sonos o las entradas de un receptor. Una emisora es un `media_player.play_media` con tipo y contenido: para un Echo, el tipo `SPOTIFY`, `AMAZON_MUSIC` o `TUNEIN` y como contenido lo que dirías («Rock Antenne»); para Sonos, Music Assistant y otros, `music` o `url` con una dirección de stream o una URI.

**Altavoces y pantallas inteligentes:** desde la release 2, el pack **Cine en casa y Hi-Fi** tiene altavoces inteligentes en forma de esfera, cilindro, disco, pod, alto y ovalado, un altavoz multiroom compacto y otro portátil, una barra de sonido premium y pantallas inteligentes de 5″, 7″, 8″ y 15″ (de pared), adecuados para Echo, Nest, HomePod, Sonos y compañía. Con Sonido y Cine su anillo de luz brilla en el color de la app mientras suenan, y las pantallas muestran la carátula. Mientras la tarjeta flota sobre un altavoz, su pin se aparta y vuelve cuando termina la música. Las teles y las pantallas siguen recibiendo sus colores e imágenes con **Pantallas en directo** (6.3).

**Tableta de pared:** en el nivel Tableta los anillos van a media tasa de fotogramas y las tarjetas sin efecto de cristal.

**¿Qué altavoces sirven?** NeonPlan usa la interfaz estándar de los reproductores multimedia de Home Assistant: lo que funciona en la ventana del reproductor de Home Assistant funciona también aquí. Es una estimación según la documentación y la experiencia, no una garantía para cada modelo:

| Integración | Carátula y título | Volumen | Líneas multiroom |
|---|---|---|---|
| Sonos | sí | sí, local | sí |
| Music Assistant (todos los reproductores, también Echos) | sí | sí | sí |
| Denon/Marantz HEOS, Yamaha MusicCast, Bluesound, Squeezebox/Lyrion | sí | sí | sí |
| Google Cast (Nest Audio, Nest Hub, Chromecast) | sí | sí | casi nunca |
| Apple TV / HomePod | sí | según el modelo | no |
| Teles y receptores AV | según la app | sí | no |
| Amazon Echo con Alexa Media Player | sí | **a menudo no, o con retraso** | no |

Lo que debería traer un reproductor: el estado `playing`/`paused`, `media_title` y `media_artist` (si no, la tarjeta muestra la app o la fuente), `entity_picture` para la carátula, `volume_level` para el regulador y los anillos, `group_members` para las líneas.

**Un aparato, un reproductor:** cada reproductor multimedia tiene exactamente una tarjeta. Un mueble al que asignaste tú mismo el reproductor tiene prioridad sobre un reproductor colocado como dispositivo. Si tienes el mismo altavoz dos veces en Home Assistant (por ejemplo un Echo con Alexa Media Player **y** con Music Assistant, reconocible por el «_2» final), elige aquel con el que de verdad reproduces: el otro nunca informa «reproduciendo».

**Dispositivos Echo (Alexa Media Player):** reproducir, pausa y cambio de pista funcionan. El **volumen**, según el dispositivo y la versión de Alexa Media Player, no se puede fijar o solo con retraso, y el valor nuevo a menudo vuelve minutos después. Se debe a la interfaz no oficial de Amazon, no a NeonPlan; la ventana del reproductor de Home Assistant tiene el mismo límite. Los Echos que controlas con Music Assistant suelen seguir el volumen de forma más fiable.

### 6.6 Auto Pro

Auto Pro trae el coche al plano tal como lo informa su integración (Tesla, VW We Connect, BMW, Hyundai/Kia, Renault, Smart, Polestar, Audi, Skoda, Cupra, Ford …). Hace falta una **Plaza de aparcamiento** con vehículo (4.10) y la integración del coche en Home Assistant.

Auto Pro va ligado a la **plaza de aparcamiento**, no al mueble del vehículo. Si tu coche está en el plano como un simple mueble, **Convertir en plaza de aparcamiento** en su formulario lo convierte en una plaza con ese vehículo.

**Configurar:** en el formulario de la plaza de aparcamiento, abajo, está la sección **Auto Pro**. En **Vehículo** elige cualquier entidad del coche: NeonPlan encuentra las demás en el mismo dispositivo: nivel de carga, autonomía, potencia o estado de carga, cable, cierre, climatización o precalentamiento, ubicación. Cada papel lo puedes fijar a mano o desactivar con «Ninguno». El cierre también puede ser un sensor de texto que informe `locked`/`secured` o `unlocked` (como en BMW). Si la plaza tiene un sensor «coche presente», también sirve como punto de partida de la búsqueda.

**En la casa:** el vehículo lleva una **banda luminosa** del color del nivel de carga (verde por encima del 50 %, amarillo hasta el 20 %, rojo por debajo), más intensa mientras carga. Si la climatización o el precalentamiento están en marcha, el coche brilla en cálido. El **pin de la plaza** muestra «78 % · 312 km · ⚡ 7,4 kW · 🔒». Si el coche no está, la plaza queda vacía y el pin dice **fuera**, con la zona del tracker si la hay («fuera · Trabajo»).

**Tarjeta de cristal:** sobre el coche flota una tarjeta con el look de Energía Pro y Sonido y Cine: el nivel de carga en grande en su color con barra, la autonomía, la potencia de carga mientras carga, y botones para el cierre (abrir pide confirmación), la climatización y, si hay un interruptor de carga, la carga. Si el coche está abierto, los faros y los pilotos brillan en naranja como intermitentes; cerrado, quedan apagados. Si la climatización está en marcha, las ventanillas del coche brillan desde dentro: cálidas al calentar, azul frío si una entidad climate informa «enfriar». Un toque en la cabecera pliega la tarjeta. Mientras la tarjeta está, el pin se aparta; si el coche no está, el pin muestra «fuera».

**Menú rápido:** pulsación larga en el pin: **Cerrar / Abrir** (abrir pide confirmación), **Climatización encendida / apagada**, **Iniciar / detener la carga** (con un interruptor de carga), además del nivel de carga y la autonomía.

**Tableta de pared:** no necesita animación; Auto Pro funciona igual en cualquier nivel.

### 6.7 Viaje en el tiempo

![Viaje en el tiempo: la planta a las 07:42 con la línea de tiempo](images/view-timetravel.jpg)

> **🧪 Beta para supporters:** el viaje en el tiempo es la primera extensión que llega primero como beta solo con el [pase de supporter](https://mastershort.de/neonplan3d/unterstuetzer/). Los supporters la prueban antes y dan su opinión en el canal de Discord **#beta-feedback** (botón **Opinión en Discord** en *Extensiones*, o **🧪 BETA** arriba en la línea de tiempo). En cuanto esté terminada, estará para todos por separado en la tienda. Hasta entonces, en *Extensiones* aparece marcada con «Beta · primero para supporters».

El viaje en el tiempo reproduce las últimas 24 horas (si quieres, los últimos 7 días) de la casa a partir del historial que Home Assistant graba de todos modos (recorder): luces con brillo y color, puertas y ventanas, persianas, movimiento, calefacción, teles y altavoces, temperaturas, potencia, tiempo y posición del sol. Todo se queda en Home Assistant y **no se acciona nada**: el viaje en el tiempo solo muestra.

**Iniciar:** toca **⏪ Viaje en el tiempo** abajo en la barra de selectores; en la tarjeta del dashboard el botón aparece con `time_travel: true` (capítulo 8). La vista recibe un marco ámbar y arriba en el centro aparece en grande el momento mostrado («jue 07:42 · hace 6 h 14 min»). Empieza en pausa, una hora antes de ahora. **● En directo** o **Esc** vuelve al presente; en la tarjeta, también la vuelta a la vista inicial (`idle_return`).

**La línea de tiempo de abajo:**

| Elemento | Efecto |
|---|---|
| **⏮** / **⏭** | Saltar al evento anterior o siguiente; la reproducción se detiene ahí |
| **▶** / **⏸** | Reproducir y pausar. Al llegar al final, ▶ vuelve a empezar desde el principio |
| **Barra** | Tocar o arrastrar salta a ese momento. Las zonas oscuras son la noche (según la posición del sol en la ubicación de Home Assistant), gris es el tiempo del que el recorder aún no tiene nada, y rayado un hueco: Home Assistant estaba apagado o reiniciándose |
| **Puntos** | Eventos. Un toque salta ahí y pausa, una pulsación larga muestra qué pasó. Si hay varios muy juntos, se convierten en un punto con número del color del más importante |
| **24 h** / **7 d** | El periodo: el último día o la última semana (ver «Varios días») |
| **☰** | La barra lateral con **Eventos**, **Mientras no estabas** y **Día** |
| **360×** | La velocidad: 60× (una hora en un minuto), 360× (en 10 segundos, por defecto), 900× (en 4 segundos), 3600× (en un segundo), y en la semana también 14400× (un día en 6 segundos) |
| **● En directo** | Volver al presente. Si la reproducción llega hasta ahora, pone «Presente alcanzado · En directo» |

En el PC: la **barra espaciadora** reproduce o pausa, las **flechas** saltan 5 minutos (con Mayús, una hora).

**Eventos:** la puerta de entrada (una puerta con contacto en una pared exterior o con el look de puerta de entrada), la puerta de garaje y el portón, se abre una cerradura, salta la alarma, humo, gas, monóxido de carbono, agua, un corte de luz (la entidad de **Avisar de un corte de luz con**), una ventana está abierta mientras llueve, movimiento por la noche (de 23 a 5 h, solo detectores de movimiento; de día la barra no muestra el movimiento como punto para que no se llene, aunque al arrastrar se ve igualmente), el robot aspirador empieza y termina, la lavadora, la secadora y el lavavajillas terminan (la potencia cae tras un ciclo; el sensor de potencia está en el mueble o colocado como dispositivo justo al lado). Lo mismo repetido en poco tiempo cuenta una vez. **Las personas nunca son un evento**, y el viaje en el tiempo no muestra dónde estuvo nadie.

**Solo ver:** un toque en un dispositivo muestra su estado de entonces («Encendida · 35 % · desde 19:29»). La ventana de la habitación muestra los valores del momento, pero no acepta entradas. El menú de la estrella, los botones de escena, deslizar, el doble toque, el menú rápido, el muro de cámaras y los botones de las tarjetas de cristal quedan en pausa hasta que vuelvas al directo.

**Qué muestra el viaje en el tiempo:**

- Luces con brillo, color y temperatura de color, persianas con su posición (moviéndose entre medias), ventanas abiertas o abatidas, puertas, puertas de garaje
- Temperatura, humedad, CO₂ y potencia de las estadísticas de cinco minutos, interpoladas entre medias; también como **mapa de calor** y **valores**
- Avisos tal como eran entonces (humo, agua, ventana abierta con lluvia)
- El tiempo exterior (con la extensión Pro «Tiempo exterior») del historial de la entidad meteorológica, sol y luz del sol según la posición del sol de entonces
- Energía (con Energía Pro): los valores de arriba, las tarjetas de cristal y los cables con las potencias de entonces; las curvas del día de las tarjetas de cristal muestran el día del momento mostrado hasta ese momento
- Coche (con Auto Pro): si el coche estaba en su plaza y su nivel de carga, a partir de las entidades del propio coche (el tracker del coche solo como «en casa» o «fuera», nunca el lugar). Los trackers de personas quedan fuera, aunque una plaza use uno
- Música y teles: si sonaba o no, el título y los anillos de volumen de entonces (sin la carátula: solo existe en directo)
- Robot aspirador: su estado y, mientras aspira, un rastro verde por las habitaciones que ya ha limpiado en esa pasada (de su sensor de habitación o del atributo `current_room`)
- Conmutaciones breves a velocidad alta: una luz que se encendió y apagó entre dos fotogramas destella un momento en vez de perderse

No se incluyen las imágenes de las cámaras (el recorder no las guarda) ni las personas y sus trackers. Lo que el recorder no graba aparece como «desconocido».

**Varios días:** **24 h** cambia a **7 d**. El último día está disponible al momento; los días anteriores el viaje en el tiempo los carga en segundo plano, el más reciente primero y siempre de uno en uno; en la barra pone entonces «cargando lun …». A medianoche aparece en la barra el día de la semana con la fecha. Lo que el recorder ya no tiene (`purge_keep_days`) queda en gris con «Recorder: 5 días». Una casa muy activa mantiene la semana por debajo de 10 MB: para ello, si hace falta, se descartan avisos de movimiento muy cortos (de menos de un minuto). En el nivel **Tableta** la semana llega dos días atrás, salvo que la tarjeta ponga `time_travel_range: 7d`.

**Hasta el presente:** si el viaje en el tiempo reproduce hasta poco antes de ahora, se añaden los cambios desde que empezó el viaje en el tiempo y la reproducción sigue hasta el presente. Ahí se detiene y ofrece **En directo**.

![Viaje en el tiempo: la barra lateral con los eventos](images/view-timetravel-events.jpg)

**Eventos (☰):** todos los eventos por horas, los más recientes arriba, también los que no reciben punto en la barra (se abre una ventana, con Energía Pro «batería llena» y la potencia FV máxima del día). Los filtros **Seguridad**, **Puertas y ventanas**, **Aparatos** y **Energía** ocultan grupos. Un toque salta al momento y vuela a la habitación. **La cámara sigue los eventos** vuela junto con la reproducción; **Pausar en eventos importantes** (alarma, humo, gas, monóxido de carbono, agua) se detiene ahí a partir de 900× en vez de pasar de largo.

![Viaje en el tiempo: mientras no estabas](images/view-timetravel-away.jpg)

**Mientras no estabas:** lo que pasó entre dos momentos, sin personas. El viaje en el tiempo propone él mismo un periodo tranquilo (al menos dos horas sin movimiento en la casa, sobre todo de día), y al lado «último viaje en el tiempo» o una hora propia («desde las 08:00»). La lista nombra alarmas, cuántas veces se abrieron puertas y ventanas, movimiento, luces que se quedaron encendidas (con duración), ventanas que estuvieron abiertas y aparatos que funcionaron. Un toque salta allí.

![Viaje en el tiempo: resumen del día con el día anterior](images/view-timetravel-day.jpg)

**Día:** el resumen del día en el cabezal de reproducción: por habitación, cuánto tiempo estuvo encendida la luz, abierta una ventana y encendida la calefacción, además de la temperatura mínima y máxima; con Energía Pro, FV, consumo, consumo de red, inyección (kWh) y autosuficiencia. **Comparar con el día anterior** pone debajo las cifras del día anterior, **⟲ Ayer a esta hora** salta 24 horas atrás (si hace falta, se carga la semana para ello).

**Tableta de pared:** al reproducir, la vista calcula en el nivel **Tableta** dos veces por segundo (Auto cuatro, Alta seis; un cambio de nivel se aplica al momento), y en pausa no funciona nada (0 f/s). El historial de un día se carga una vez y ocupa solo unos cientos de kilobytes; solo se cambia lo que de verdad cambia. En el nivel Tableta el viaje en el tiempo empieza con 24 horas y guarda dos días como mucho.

**Requisitos:** el recorder de Home Assistant (funciona por defecto) y Home Assistant reiniciado una vez tras la actualización. Hasta dónde llega el historial lo determina `purge_keep_days` del recorder (por defecto 10 días); el viaje en el tiempo necesita 24 horas, y para la semana entera al menos 7 días. Quien quiera usar la semana deja, por tanto, `purge_keep_days` en 7 o más.

---

## 7. Extensiones, tienda y packs de muebles

![Extensiones](images/extensions.jpg)

La pestaña **✦ Extensiones** reúne todo lo que puedes añadir a NeonPlan 3D.

### 7.1 Conexión con la tienda

Con la primera compra en mastershort.de recibes una **clave de licencia** del tipo `NP-XXXX-XXXX-XXXX-XXXX`. Está en el correo del pedido y en tu cuenta de cliente.

1. Abre **Extensiones**.
2. En **Conexión con la tienda**, introduce la clave y pulsa **Activar**.
3. Tus compras aparecen con **Instalar**. Un toque trae el pack de la tienda, firmado para esta instalación concreta.

Después:

- **Las actualizaciones llegan solas.** Una vez al día NeonPlan 3D pregunta si hay compras nuevas o versiones más recientes, y las instala. **Comprobar ahora** pregunta al momento.
- **Sin internet todo sigue funcionando.** Los packs instalados se comprueban en local; para eso nunca hace falta la tienda.
- **Desconectar** quita la clave. Los packs instalados se quedan.
- **Actualizaciones de packs:** si se amplía un pack comprado, la página muestra una vez lo que se ha añadido.
- **Novedades en la tienda:** con la conexión con la tienda, la página muestra arriba los packs y extensiones Pro que aún no tienes, con **NUEVO** para lo más reciente. Si hay algo nuevo, en la pestaña **✦ Extensiones** brilla un puntito. Sin clave, NeonPlan 3D nunca consulta la tienda.
- **Descuento de fidelidad:** con la primera compra recibes un código de descuento personal para cada pack y cada extensión Pro adicional (no para bundles). Está en el correo del pedido, en tu cuenta de cliente y arriba en **Novedades en la tienda**; un toque en una oferta lo pone directamente en el carrito.

**Varias instalaciones:** una clave se conecta como máximo con tres instalaciones a la vez. Si te mudas a hardware nuevo, simplemente conectas la nueva instalación y la más antigua sale. Se permiten hasta cinco conexiones nuevas al año. El **Id de instalación** de arriba es una huella anónima de tu instalación.

### 7.2 Extensiones Pro

La fila central de mosaicos muestra las extensiones Pro. Las activas llevan un ✓, las bloqueadas un 🔒 y el enlace «Ver en la tienda».

### 7.3 Packs de muebles

| Pack | Contenido |
|---|---|
| Salón | Sofás, muebles de salón, chimeneas, muebles multimedia y más |
| Cocina | Muebles bajos, columnas, islas, electrodomésticos |
| Dormitorio | Camas, armarios, cómodas, mesitas de noche |
| Baño | Lavabos, duchas, bañeras, inodoros |
| Cuarto infantil, Oficina y gaming, Jardín y terraza, Garaje y taller, Fitness, Smart home y tecnología | Muebles y aparatos para cada ámbito |
| Vehículos | Coches, furgonetas, motos y más para plazas de aparcamiento |
| Escaleras y barandillas | Escaleras rectas, en L y en U, de caracol, de pates alternos, exteriores, descansillo, barandillas de metal, cristal y madera |
| Cine en casa y Hi-Fi | Pantalla, proyector, altavoces, subwoofer, receptor AV, tocadiscos, butacas de cine, altavoces inteligentes y pantallas inteligentes; los aparatos brillan al reproducir |
| Lavadero e instalaciones | Caldera, bomba de calor, depósito de inercia, ventilación, cuadro del contador, descalcificador, arcón congelador, centro de planchado |
| Mascotas | Rascador, cama para perro, comedero automático, fuente, arenero, jaulas, acuario y terrario con luz |
| Arquitectura y acabados | Columnas, vigas, chimenea, hogar, mampara de cristal, tabique corredizo, foseado de luz, hornacina LED, tarima |

Los aparatos de los packs tienen una pequeña superficie luminosa (pantalla, LED de estado): vinculada a un reproductor multimedia, un interruptor o una luz, brilla mientras el aparato está en marcha; un acuario brilla en el color de su luz.

Abajo en la página están tus packs instalados con **Quitar**. Debajo está **Importar packs de muebles …** para archivos de pack: packs de prueba de la newsletter, descargas de la web o instalaciones sin internet. Se pueden elegir varios archivos a la vez.

**Conviene saber:**

- Los packs están firmados digitalmente. Solo se pueden importar packs del editor; los archivos modificados se rechazan.
- Si quitas un pack, sus muebles se quedan en el plano como cajas simples. Si lo vuelves a importar, vuelven con todas sus vinculaciones.
- Una versión más reciente de un pack sustituye a la antigua sin que se pierda nada en el plano.

---

## 8. La tarjeta del dashboard

![Tarjeta en el dashboard](images/card-og-dim.jpg)

La tarjeta `custom:neonplan3d-card` lleva la vista 3D a cualquier dashboard. Se carga automáticamente.

**Crearla:** edita el dashboard, **Añadir tarjeta**, busca «NeonPlan». Todas las opciones se ajustan en el editor visual de la tarjeta:

| Sección | Opciones |
|---|---|
| **Vista** | Planta o casa entera, tamaño fijo o a pantalla completa, altura, look, paredes, calidad, plantas de debajo |
| **Mostrar** | Iconos, mapa de calor, selectores en la tarjeta, miniaturas de planta, nombres de habitación, ventana de la habitación, botón de pantalla completa, plantas separadas, indicador de rendimiento |
| **Funciones** | Avisos, salto al aviso, botones de escena, rastro de movimiento, muro de cámaras, viaje en el tiempo, tiempo con entidad meteorológica |
| **Tableta de pared (quiosco)** | Vuelta a la vista inicial, atenuación nocturna, recorrido de cámara como salvapantallas |

![Tarjeta con escenas](images/card-scenes.jpg)

En YAML una tarjeta se ve así. Todas las líneas salvo la primera son opcionales:

```yaml
type: custom:neonplan3d-card
floor: floor_ab12cd34   # mostrar una planta (ID del editor)
room: room_ab12cd34     # empezar en esta habitación (el ID está en el formulario de la habitación del editor), p. ej. una pantalla para el cuarto de los niños
height: 420             # altura en píxeles
fill: false             # llenar la pantalla bajo la cabecera
walls: auto             # auto | cut
controls_side: left     # left | right: miniaturas de planta, estrella, búsqueda y ojo a la derecha
keep_view: false        # true: cambio de planta sin nuevo vuelo de cámara
explode: true           # separar las plantas en la vista de casa
floor_stack: dim        # plantas de debajo: dim | stacked | single
quality: auto           # auto | low | high
theme: neon             # neon | blueprint | day
accent: "#ff8a00"       # color de acento propio (líneas en el look neón, botones, pines); omitirlo = cian
markers: important      # none | important | all
marker_names: false     # true: los dispositivos con nombre propio lo muestran bajo el icono
central: true           # la estrella con el menú central (todas las luces, persianas, favoritos)
buttons:                # botones propios solo para esta tarjeta (sustituyen a los del editor)
  - label: Persianas
    icon: window-shutter
    action: fire_dom_event   # navigate | more_info | service | fire_dom_event
    data: { browser_mod: { service: browser_mod.popup, data: { title: Persianas, content: { type: "custom:mi-tarjeta-persianas" } } } }
heatmap: none           # none | temperature | humidity | co2
room_panel: true        # tocar una habitación abre la ventana de la habitación
room_names: true
controls: true          # selectores en la tarjeta, o una lista: walls, floors, temperature, humidity, co2
controls_hidden: false  # true: empezar con los controles ocultos (solo la vista 3D); un ojo abajo a la izquierda los recupera
controls_hide_after: 0  # segundos sin tocar tras los que desaparecen los controles (0 = nunca); un toque los vuelve a mostrar
floor_thumbs: true
fullscreen_button: false
dashboard: /lovelace/home   # botón arriba a la derecha que abre este dashboard (omitirlo = sin botón)
dashboard_label: Inicio     # texto del botón; sin texto muestra ⌂
stats: false
alerts: true
alert_jump: false       # saltar a la habitación con un aviso nuevo
scenes: true
motion_trail: false     # Pro: Cabina de cámara
weather: true           # Pro: Tiempo exterior
weather_entity: weather.home
holograms: true         # Pro: hologramas siempre encendidos/apagados; omitirlo = selector en la tarjeta
camera_wall: false      # Pro: el botón «Cámaras» abajo en la tarjeta abre el muro de cámaras
time_travel: false      # Pro: el botón «Viaje en el tiempo» abajo en la tarjeta reproduce las últimas 24 horas (solo ver)
time_travel_speed: 360  # velocidad del viaje en el tiempo: 60 | 360 | 900 | 3600 | 14400 (una hora en 1 min, 10 s, 4 s, 1 s; un día en 6 s, solo en la semana)
time_travel_range: 24h  # inicio del viaje en el tiempo: 24h o 7d (la semana; también en el nivel Tableta, que si no guarda dos días)
roof_fade: true         # false: el tejado se queda sobre la casa al acercarse
start_view: { theta: 0.8, phi: 1.0, radius: 20 }   # vista inicial propia de esta tarjeta; la línea está en el editor en Vista inicial (omitirla = la del plano)
idle_return: 0          # segundos sin tocar hasta volver a la vista inicial
night: "off"            # off | sun | "22:00-06:00"
idle_orbit: false
```

---

## 9. NeonPlan 3D en la tableta de pared

![Tableta](images/tablet.jpg)

NeonPlan 3D está hecho para tabletas de pared como la Amazon Fire:

- **Nada de cálculo en reposo.** Si no cambia nada, la vista no dibuja ni un solo fotograma. El indicador de FPS muestra entonces «Reposo (0 f/s)».
- **Nivel de calidad Tableta:** en las tabletas Fire, «Auto» lo elige solo. Se omiten dibujos, sombras, halos y partículas, y las animaciones van a media tasa.
- **Opciones de quiosco de la tarjeta:** tras unos minutos sin tocar, la tarjeta vuelve a la vista inicial. De noche se atenúa según la posición del sol o la hora. Como salvapantallas, la casa gira despacio.
- **Los avisos** saltan solos, si quieres, a la habitación afectada.
- En vertical, la ventana de la habitación aparece abajo.

![Tableta en vertical](images/tablet-portrait-room.jpg)

![Móvil](images/phone-floor.jpg)

**Consejos para tabletas Fire:** usa Fully Kiosk Browser con aceleración por hardware, muestra la tarjeta a pantalla completa con `fill: true` y deja `quality: auto`.

---

## 10. Copia de seguridad y mudanza

![Copia de seguridad](images/editor-backup.jpg)

En **Copia de seguridad** en el editor:

- Los **Puntos de restauración** se crean al editar como mucho cada 10 minutos, y se guardan los últimos 20. **Restaurar** recupera un estado; el actual se conserva a su vez como punto.
- **Exportar** guarda el plano como archivo, **Importar …** carga un archivo así.
- **Compartir como plantilla** exporta sin áreas, dispositivos, sensores ni imágenes. Va bien para pasar un plano a otra persona.
- **Copia completa:** **Guardar todo (plano, imágenes, packs)** guarda un archivo con el plano, todas las imágenes de fondo y de pantallas y los packs instalados. **Restaurar una copia completa …** lo restaura en la misma instalación o en otra. Cada pack se vuelve a comprobar. Los packs firmados para otra instalación los vuelves a traer allí con la conexión con la tienda. La clave de licencia no va en el archivo.

La copia de seguridad normal de Home Assistant también incluye NeonPlan 3D por completo.

---

## 11. Datos y privacidad

- El plano, las imágenes y los packs están en Home Assistant, en `.storage`. Nada de ello sale de tu instalación.
- NeonPlan 3D solo se conecta a internet si introduces una clave de licencia. Entonces pregunta una vez al día a mastershort.de por actualizaciones y envía la clave y el id anónimo de la instalación.
- Las imágenes de las cámaras, los datos del historial y los estados se quedan en Home Assistant y solo se muestran en el navegador.
- El viaje en el tiempo lee el historial del recorder de Home Assistant, solo para los dispositivos del plano. Nunca lee las personas ni sus trackers.

---

## 12. Preguntas frecuentes y solución de problemas

**Ayuda y opiniones:** un error se comunica mejor como [issue en GitHub](https://github.com/Mastershort/neonplan3d/issues/new/choose), y una idea como [discusión](https://github.com/Mastershort/neonplan3d/discussions/categories/ideas). Así no se pierde nada, todos ven en qué punto está, y se te menciona en las notas de la release cuando se implemente. Los dos botones para ello también están en el editor, abajo en la barra lateral, y en la página Extensiones.

**¿Cómo consigo la última actualización?**
Ajustes → Sistema → Actualizaciones. HACS solo busca versiones nuevas cada pocas horas, por eso a veces una actualización reciente aún no aparece. Entonces: HACS → NeonPlan 3D → ⋮ → **Actualizar información** → **Descargar**. Después reinicia Home Assistant y recarga la página (Ctrl+F5; en la app Companion: Ajustes → App Companion → Restablecer la caché del frontend).

**¿Puedo usar ayudantes en lugar de sensores reales?**
Sí. Allí donde NeonPlan espera un valor numérico (potencia, nivel de carga, autonomía, posición …) también se pueden elegir ayudantes `input_number` y `number`, y donde espera un encendido/apagado (contacto, presencia …), también `input_boolean`. Para la potencia, el ayudante necesita la unidad W o kW.

**El volumen de un Echo no cambia.**
Alexa Media Player no fija el volumen en algunos Echos, o lo hace con retraso, y devuelve el valor nuevo tarde. Compruébalo en Herramientas para desarrolladores → Acciones con `media_player.volume_set`: si ahí no pasa nada, es cosa de la integración (ver capítulo 6.5).

**Arriba pone «Reinicio necesario».**
Tras una actualización sigue funcionando en segundo plano la versión antigua. Reinicia Home Assistant.

**Falta un dispositivo en la lista de dispositivos de una habitación.**
La habitación necesita un área, y el dispositivo debe estar asignado a ese área, ya sea el dispositivo o la propia entidad. Si la entidad pertenece a un dispositivo con varias entidades, está tras «+n más». El campo de búsqueda la encuentra directamente.

**Una cámara es difícil de acertar.**
Toca su cono de visión en el suelo: cuenta como la cámara.

**Los muebles aparecen como cajas grises.**
El pack del que proceden no está instalado. Vuelve a importarlo o instálalo con la conexión con la tienda.

**Al mover en 3D, un mueble no atraviesa la pared.**
Es a propósito: en la vista 3D, los muebles y dispositivos se quedan en su habitación al arrastrarlos y se deslizan a lo largo de la pared. A otra habitación los llevas en el plano, donde se mueven libremente.

**Un toque acierta el dispositivo de la habitación vecina.**
Las paredes interceptan los toques. En la vista de habitación solo cuenta lo que está en la habitación. Si aun así acierta lo que no es, ayuda el selector **Corte**.

**La vista va a tirones en la tableta.**
Pon la calidad en **Tableta** y comprueba con **FPS** qué se está dibujando. En reposo debería poner 0 f/s. Si algo funciona sin parar, el motivo aparece al lado, por ejemplo un efecto de color de una lámpara.

**El viaje en el tiempo no muestra nada, muestra «desconocido» o tiene huecos.**
El viaje en el tiempo toma el historial del recorder de Home Assistant. Si pone «Sin el recorder … no hay historial», el recorder está desactivado (`recorder:` en `configuration.yaml`). Si un dispositivo aparece como «desconocido», está excluido del recorder (`exclude:` bajo `recorder:`) o existe desde hace poco. Zonas grises al principio de la barra: el recorder aún no ha reunido 24 horas (recién configurado, o `purge_keep_days` es menor que 1). Zonas rayadas: Home Assistant estaba apagado o reiniciándose en ese tiempo. Las temperaturas y potencias vienen de las estadísticas de cinco minutos; un sensor sin clase de estado (`state_class: measurement`) se muestra en su lugar a partir de sus estados. Si la barra indica «Reinicia Home Assistant», sigue funcionando en segundo plano una versión anterior.

**La luz del sol entra por las ventanas equivocadas.**
Revisa el **Norte** en Ajustes: grados en sentido horario desde «arriba» en el plano.

**La conexión con la tienda indica «Límite alcanzado».**
La clave se conectó en los últimos doce meses con más de cinco instalaciones nuevas. Escríbenos y te ayudamos.

**La activación indica «La tienda está saturada en este momento» o «HTTP 429».**
El hosting de la tienda frena demasiadas peticiones desde una misma dirección. Desde la 1.9.1 NeonPlan lo reintenta solo dos veces con pausa; si después sigue fallando, espera un minuto y vuelve a pulsar **Activar**. Las versiones anteriores a la 1.9.1 las rechazaba el hosting por su identificador de navegador; ahí solo sirve actualizar.

**El mensaje «Esta página aún muestra NeonPlan 3D x.y, Home Assistant ya tiene …» no desaparece.**
El navegador o la app Companion aún guardan un bundle antiguo de NeonPlan. Pulsa **Recargar**; en la app Companion, en Ajustes → App Companion → **Restablecer la caché del frontend**, y luego cierra la app del todo y vuelve a abrirla. Reiniciar Home Assistant no ayuda aquí. Lo mismo vale si una extensión Pro comprada indica en los packs «necesita una versión más reciente de NeonPlan».

**En el tejado cuelgan dos hologramas (Energía Pro).**
Es intencionado: el grande es el **balance de la casa** (solar y energía), y el más pequeño la **tarjeta de la instalación** del inversor al que pertenece ese campo; con varias instalaciones, cada una tiene la suya. ¿Demasiado? En la sección **Holograma**, pon el balance de la casa **Libre en el plano** (asa ◈), o en el formulario del inversor desmarca **Mostrar tarjeta de la instalación**. Una tarjeta pequeña que parece pegada al tejado suele ser el holograma de un aparato de la habitación de debajo: gira un poco la cámara.

**La tienda no está accesible.**
Los packs y las extensiones Pro instalados siguen funcionando. Las actualizaciones llegarán en cuanto la tienda vuelva a responder.

**¿Dónde comunico errores?**
En el issue tracker de GitHub: https://github.com/Mastershort/neonplan3d/issues
