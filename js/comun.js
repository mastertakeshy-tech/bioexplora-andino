// Funciones compartidas: progreso y utilidades
const CLAVE_PROGRESO = "bioexplora_progreso";

function obtenerProgreso() {
  try {
    return JSON.parse(localStorage.getItem(CLAVE_PROGRESO)) || { vistas: [], puntos: 0 };
  } catch (e) {
    return { vistas: [], puntos: 0 };
  }
}

function guardarProgreso(p) {
  localStorage.setItem(CLAVE_PROGRESO, JSON.stringify(p));
}

function marcarEspecieVista(id) {
  const p = obtenerProgreso();
  if (!p.vistas.includes(id)) {
    p.vistas.push(id);
    guardarProgreso(p);
  }
}

function porcentajeProgreso() {
  const p = obtenerProgreso();
  return Math.round((p.vistas.length / ESPECIES.length) * 100);
}
