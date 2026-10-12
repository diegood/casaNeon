// Time travel: the texts of phases 2 and 3 in Spanish. They live in the lazily loaded bundle (the main
// bundle has no room to spare).

export const TT_ES: Record<string, string> = {
  tt_range_hint: "Periodo: 24 horas o varios días",
  tt_days: "{n} d",
  tt_loading_day: "cargando {day} …",
  tt_recorder_days: "Registro: {n} días",
  tt_memory_full: "Límite de memoria alcanzado",
  tt_now_reached: "Presente alcanzado",
  tt_sheet: "Eventos, resúmenes",
  tt_tab_events: "Eventos",
  tt_tab_away: "Ausencia",
  tt_tab_day: "Día",
  tt_close: "Cerrar",
  tt_f_safety: "Seguridad",
  tt_f_openings: "Puertas y ventanas",
  tt_f_devices: "Aparatos",
  tt_f_energy: "Energía",
  tt_follow: "La cámara sigue los eventos",
  tt_stop: "Parar en eventos importantes",
  tt_no_events: "Sin eventos",
  tt_ev_window: "{name} abierta",
  tt_ev_battery_full: "Batería llena: {name}",
  tt_ev_pv_peak: "Máxima potencia solar del día",
  tt_away_title: "Mientras no estabas",
  tt_away_since: "Desde",
  tt_away_last: "desde el último viaje en el tiempo",
  tt_away_quiet: "tranquilo {from}–{to}",
  tt_away_none: "No pasó nada – todo tranquilo.",
  tt_away_door: "{name}: abierta {n}×",
  tt_away_motion: "Movimiento {name}: {n}×",
  tt_away_light: "{name} encendida durante {d}",
  tt_away_open: "{name} abierta durante {d}",
  tt_day_title: "Resumen del día {day}",
  tt_day_light: "Luz",
  tt_day_window: "Ventana",
  tt_day_heat: "Calefacción",
  tt_day_temp: "Temp.",
  tt_day_pv: "Solar",
  tt_day_import: "Compra de red",
  tt_day_export: "Inyección",
  tt_day_use: "Consumo",
  tt_day_self: "Autosuficiencia",
  tt_day_compare: "Comparar con el día anterior",
  tt_day_before: "Día anterior",
  tt_day_none: "Aún no hay valores para este día.",
  tt_day_partial: "incompleto (desde las {time})",
  tt_yesterday: "Ayer a esta hora",
};

/** The host's translation first; a key it does not know comes from the table above. */
export function withTexts(t: (key: string, vars?: Record<string, string | number>) => string) {
  return (key: string, vars: Record<string, string | number> = {}): string => {
    const s = t(key, vars);
    if (s !== key) return s;
    let out = TT_ES[key] ?? key;
    for (const [k, v] of Object.entries(vars)) out = out.replace(`{${k}}`, String(v));
    return out;
  };
}
