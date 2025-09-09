import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "The Best Burger — Promos VIP",
    tag: "Ventas · Python",
    problem: "Horas muertas y baja rotación en local.",
    system: "2x1 VIP + packs familiares + copys de neuroventa + portal simple.",
    result: "Objetivo: +20–35% ventas en horas valle (4–6 semanas).",
    href: "#",
  },
  {
    title: "HEO Sentinel",
    tag: "IA · Salud",
    problem: "Orientación emocional y preventiva desordenada.",
    system: "Asistente ético con Codex Express™ + medición de señales de uso.",
    result: "Métrica clave: sesiones útiles/día y retención 4-semanas.",
    href: "#",
  },
  {
    title: "Lean Startup App",
    tag: "SaaS · Producto",
    problem: "Founders en etapa caos: ideas dispersas sin ejecución.",
    system: "Pizarra + agenda + timeline + 5 Porqués + radar creativo.",
    result: "Tiempo a MVP: días, no meses. Adopción por equipo (OKR ligero).",
    href: "#",
  },
];

export default function Projects() {
  return (
    <section className="max-w-5xl">
      <h1 className="text-2xl font-bold text-emerald-300 mb-1">Proyectos</h1>
      <p className="text-neutral-400 mb-8">De idea a impacto, con métricas y foco.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="glass rounded-xl p-4 card-hover"
          >
            <span className="text-xs uppercase text-emerald-400">{p.tag}</span>
            <h2 className="text-lg font-semibold text-white mt-1">{p.title}</h2>

            <div className="mt-3 space-y-1 text-sm">
              <p className="text-neutral-300">
                <span className="text-emerald-300">Problema:</span> {p.problem}
              </p>
              <p className="text-neutral-300">
                <span className="text-emerald-300">Sistema:</span> {p.system}
              </p>
              <p className="text-neutral-300">
                <span className="text-emerald-300">Resultado:</span> {p.result}
              </p>
            </div>

            <a
              href={p.href}
              className="inline-block mt-4 px-3 py-2 text-sm bg-emerald-500/10 border border-emerald-500/30 rounded-md hover:bg-emerald-500/20 text-emerald-200 transition"
            >
              Ver proyecto →
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
