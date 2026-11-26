// Texts of the furniture library's marks (locked, live) and of the finish and live-part forms. They live in the
// editor bundle with the library, so the main bundle stays as it is. (Upstream also reads here which Pro add-ons fit
// the home, for its shop; this fork has no shop.)

const TEXTS = {
  lib_locked: "De los packs",
  lib_locked_in: "En el pack «{pack}»",
  lib_locked_free: "Gratis con una cuenta de cliente",
  lib_locked_shop: "Ver en la tienda",
  lib_locked_bundle: "O todo de una vez: {name} por {price}",
  lib_locked_note: "Aquí solo ves la imagen: el mueble llega con el pack y luego se coloca como cualquier otro.",
  lib_locked_close: "Cerrar",
  lib_locked_hint: "🔒 = de un pack que aún no tienes. Tócalo para verlo en grande.",
  finish_title: "Acabado",
  finish_hint: "Colores propios para madera, tela y frentes; se ven en los estilos acogedores.",
  finish_wood: "Madera",
  finish_fabric: "Tela",
  finish_front: "Frentes",
  finish_body: "Cuerpo",
  finish_own: "Estándar",
  finish_all: "Para todos los iguales del plano",
  live_title: "Piezas vivas",
  live_hint: "Estas piezas se mueven con Home Assistant: puertas y tapas se abren, los cajones salen, los niveles suben, las luces de estado se ven en verde, apagadas o en rojo. Elige la entidad adecuada para cada una.",
  live_own: "Sin elegir, usa la entidad del mueble.",
  lib_live: "Vivo",
  lib_live_hint: "✨ = se mueve con Home Assistant: puertas, cajones, niveles, luces de estado, ventiladores",
};

export type HintKey = keyof typeof TEXTS;

export function fitText(_lang: string | undefined, key: HintKey): string {
  return TEXTS[key];
}
