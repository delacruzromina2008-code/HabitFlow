/**
 * HabitFlow - Programa de Hábitos Calibrado (21 Días)
 * Especificación de los 3 Calendarios según la Magnitud del Hábito:
 * - Chico: Baja complejidad (Físico / Micro-rutina) -> 2 a 10 min
 * - Mediano: Complejidad moderada (Lectura / Hábitos diarios) -> 5 a 23 min
 * - Grande: Alta demanda cognitiva (Estudio universitario / Proyectos) -> 5 a 30 min
 */

export const HABIT_MAGNITUDES = {
  chico: {
    id: "chico",
    name: "Chico (Baja complejidad / Físico rápido)",
    shortName: "Chico",
    color: "emerald",
    icon: "🧹",
    examples: "Ordenar el cuarto, tender la cama, hidratación, recoger el escritorio, 5 estiramientos.",
    timeRangeLabel: "2 a 10 minutos por día",
    totalPlannedMinutes: 87,
    durations: [2, 3, 3, 3, 3, 4, 2,  5, 3,  5,  5,  5,  8, 3,  5,  4, 3, 10,  5, 3, 3]
  },
  mediano: {
    id: "mediano",
    name: "Mediano (Complejidad moderada / Rutina diaria)",
    shortName: "Mediano",
    color: "indigo",
    icon: "📖",
    examples: "Lectura de libros, repasar apuntes, practicar idioma, diario personal, ejercicio ligero.",
    timeRangeLabel: "5 a 23 minutos por día",
    totalPlannedMinutes: 182,
    durations: [5, 5, 5, 5, 5, 7, 3,  8, 5, 10,  8, 10, 18, 5, 10,  5, 5, 23, 10, 5, 5]
  },
  grande: {
    id: "grande",
    name: "Grande (Alta demanda cognitiva / Estudio profundo)",
    shortName: "Grande",
    color: "purple",
    icon: "🧠",
    examples: "Estudiar materias complejas (cálculo, física, medicina), redactar tesis, programar.",
    timeRangeLabel: "5 a 30 minutos por día",
    totalPlannedMinutes: 257,
    durations: [5, 7, 8, 6, 8, 10, 5, 12, 8, 15, 12, 15, 25, 7, 15, 10, 8, 30, 15, 8, 8]
  }
};

export const STAGES = [
  { id: 1, name: "Etapa 1: Fundamentos y Micro-pasos", range: "Días 1 a 7", color: "indigo" },
  { id: 2, name: "Etapa 2: Consistencia y Ritmo", range: "Días 8 a 14", color: "blue" },
  { id: 3, name: "Etapa 3: Consolidación y Autonomía", range: "Días 15 a 21", color: "emerald" },
];
