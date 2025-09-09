import React from "react";
import { motion } from "framer-motion";
import MethodCard from "../components/MethodCard";
import SectionTitle from "../components/SectionTitle";

const steps = [
  { title: "Detectar patrón", description: "Observar el síntoma y mapear contexto (personas, fricciones, datos)." },
  { title: "Identificar la causa", description: "No tapar efectos: ir a la raíz. Sin causa, no hay sistema." },
  { title: "5 Porqués", description: "Profundizar hasta encontrar el bloqueo real (humano, proceso, técnico)." },
  { title: "MVP", description: "Versión mínima que demuestra valor en días, no meses." },
  { title: "Feedback", description: "Medir señales que importan (uso, ventas, tiempo ahorrado)." },
  { title: "Iteración", description: "Mejorar lo que funciona. Simple > Complejo." },
  { title: "Resultado óptimo", description: "El sistema trabaja por nosotros, no al revés." },
];

const library = [
  { book: "Codex Learning Loop™", idea: "Causa primero → diseñar la decisión → MVP rápido → métricas accionables." },
  { book: "El Código del Dinero", idea: "No vender tiempo: crear activos y marca con valor percibido." },
  { book: "Hábitos Atómicos", idea: "Micro-mejoras diarias y entornos con fricción mínima para la acción." },
  { book: "Véndele a la mente, no a la gente", idea: "Psicología visual, claridad de oferta y disparadores correctos." },
];

const transversal = [
  { area: "Criminalística & Medicina Legal", idea: "Seguir evidencia y patrones sin sesgo. Método científico aplicado." },
  { area: "Física / Astrofísica", idea: "Pensar en sistemas, escalas y primeras-principios antes de ejecutar." },
  { area: "Fotografía", idea: "Atención al detalle y composición: lo esencial arriba, ruido fuera." },
];

const xp = [
  {
    org: "DIRECTEMAR (Tecmar)",
    value: "Sistema de cabotaje: gestión de datos/rutas y normativa marítima.",
    tags: ["PHP+MySQL", "Modelado datos", "Intranet"]
  },
  {
    org: "SERNAPESCA",
    value: "Detección de anomalías: códigos de buques y patrones de pesca fuera de zona.",
    tags: ["Python", "Análisis de patrones", "Reglas & alertas"]
  },
  {
    org: "Incubadora Sta. María",
    value: "Arañas en Python y APIs (Brandmetriq/Mphits) para extracción y logística de datos.",
    tags: ["Python", "APIs", "Automations"]
  },
  {
    org: "The Best Burger",
    value: "Sistema de neuroventas 2.0: promos VIP, horas muertas → flujo real.",
    tags: ["Producto", "Métricas", "UX+Copys"]
  },
];

const fade = {
  hidden: { opacity: 0, y: 10 },
  show:   { opacity: 1, y: 0, transition: { duration: .25 } }
};

export default function Codex() {
  return (
    <section className="max-w-3xl">
      <SectionTitle
        title="Codex Express™"
        subtitle="Mi marco para convertir problemas reales en soluciones simples y escalables. Todo patrón es programable; la clave está en la causa."
      />

      {/* Método */}
      <motion.div
        initial="hidden" animate="show"
        variants={{ hidden:{}, show:{ transition:{ staggerChildren:.05 } } }}
        className="space-y-3 mb-10"
      >
        {steps.map((s, i) => (
          <motion.div key={s.title} variants={fade}>
            <MethodCard index={i+1} title={s.title} description={s.description} />
          </motion.div>
        ))}
      </motion.div>

      {/* Experiencias aplicadas */}
      <h3 className="text-white font-semibold mb-3">Experiencias aplicadas</h3>
      <div className="grid sm:grid-cols-2 gap-3 mb-8">
        {xp.map(card => (
          <motion.div key={card.org} variants={fade} initial="hidden" whileInView="show" viewport={{ once:true }} className="glass rounded-xl p-3 card-hover">
            <div className="text-emerald-300 text-sm font-semibold mb-1">{card.org}</div>
            <p className="text-neutral-300 text-sm mb-2">{card.value}</p>
            <div className="flex flex-wrap gap-2">
              {card.tags.map(t => (
                <span key={t} className="text-xs px-2 py-0.5 rounded-full border border-emerald-400/30 text-emerald-300 bg-emerald-400/10">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Biblioteca aplicada */}
      <h3 className="text-white font-semibold mb-3">Biblioteca aplicada</h3>
      <div className="grid sm:grid-cols-2 gap-3 mb-8">
        {library.map(item => (
          <motion.div key={item.book} variants={fade} initial="hidden" whileInView="show" viewport={{ once:true }} className="glass rounded-xl p-3 card-hover">
            <div className="text-emerald-300 text-sm font-semibold mb-1">{item.book}</div>
            <p className="text-neutral-300 text-sm">{item.idea}</p>
          </motion.div>
        ))}
      </div>

      {/* Formación */}
      <h3 className="text-white font-semibold mb-3">Formación</h3>
      <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once:true }} className="glass rounded-xl p-4 mb-8 card-hover">
        <p className="text-neutral-200">
          <span className="text-white font-semibold">Analista Programador — Duoc UC.</span> Formación continua autodidacta en IA aplicada, producto y diseño de sistemas.
        </p>
      </motion.div>

      {/* Formación transversal */}
      <h3 className="text-white font-semibold mb-3">Formación transversal</h3>
      <div className="grid sm:grid-cols-2 gap-3">
        {transversal.map(x => (
          <motion.div key={x.area} variants={fade} initial="hidden" whileInView="show" viewport={{ once:true }} className="glass rounded-xl p-3 card-hover">
            <div className="text-emerald-300 text-sm font-semibold mb-1">{x.area}</div>
            <p className="text-neutral-300 text-sm">{x.idea}</p>
          </motion.div>
        ))}
      </div>

      <blockquote className="border-l-4 border-emerald-400 pl-4 italic text-neutral-400 mt-6">
        “Diseñar sistemas es liberar tiempo: si depende de mí, es autoempleo; si funciona solo, es un activo.”
      </blockquote>

      {/* CTA */}
      <div className="mt-6 flex gap-3">
        <a href="/contact" className="px-4 py-2 rounded-lg border border-emerald-400/50 text-emerald-300 hover:bg-emerald-400/10 transition">
          Conectemos
        </a>
        <a href="/projects" className="px-4 py-2 rounded-lg bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 hover:bg-emerald-500/30 transition">
          Ver proyectos
        </a>
      </div>
    </section>
  );
}
