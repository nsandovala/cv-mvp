import React from "react";
import SectionTitle from "../components/SectionTitle";

const skills = ["Python", "Flask", "React", "Tailwind", "Vite", "PostgreSQL", "Zapier/Automations", "RAG básico", "Git/GitHub"];
const plus   = ["Neuroventas", "Service Design", "OKRs ligeros", "5 Porqués", "Métricas de negocio", "Integraciones simples"];

export default function Profile() {
  return (
    <section className="max-w-3xl">
      <SectionTitle
        title="Nelson Sandoval"
        subtitle="Analista Programador + Diseñador de sistemas. MVPs que convierten caos en flujo: ventas, uso o tiempo ahorrado."
      />

      {/* Propuesta de valor */}
      <div className="grid sm:grid-cols-2 gap-3 mb-6">
        <div className="glass rounded-xl p-3">
          <div className="text-emerald-300 text-sm font-semibold mb-1">Sistema > Idea</div>
          <p className="text-neutral-300 text-sm">
            Voy a la causa, diseño la decisión y entrego un MVP medible en días. Simple → Escalable.
          </p>
        </div>
        <div className="glass rounded-xl p-3">
          <div className="text-emerald-300 text-sm font-semibold mb-1">Impacto</div>
          <p className="text-neutral-300 text-sm">
            Experiencia en organismos públicos, incubadoras y negocio propio. Métrica antes que ego.
          </p>
        </div>
      </div>

      {/* Métricas rápidas (ajústalas con tus números reales cuando los tengas) */}
      <div className="flex flex-wrap gap-3 mb-8">
        <div className="glass rounded-xl px-3 py-2 text-sm text-neutral-200">MVPs: 4+ dominios</div>
        <div className="glass rounded-xl px-3 py-2 text-sm text-neutral-200">Automations: 10+</div>
        <div className="glass rounded-xl px-3 py-2 text-sm text-neutral-200">Ahorro estimado: 20–40%/equipo</div>
      </div>

      {/* Skills */}
      <h3 className="text-white font-semibold mb-2">Skills clave</h3>
      <div className="flex flex-wrap gap-2 mb-6">
        {skills.map(s => (
          <span key={s} className="text-xs px-2 py-0.5 rounded-full border border-emerald-400/30 text-emerald-300 bg-emerald-400/10">{s}</span>
        ))}
      </div>

      {/* Plus */}
      <h3 className="text-white font-semibold mb-2">Plus que aporto</h3>
      <div className="flex flex-wrap gap-2 mb-8">
        {plus.map(s => (
          <span key={s} className="text-xs px-2 py-0.5 rounded-full border border-emerald-400/30 text-emerald-300 bg-emerald-400/10">{s}</span>
        ))}
      </div>

      {/* CTA */}
      <div className="flex gap-3">
        <a href="/codex" className="px-4 py-2 rounded-lg bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 hover:bg-emerald-500/30 transition">
          Ver Codex Express™
        </a>
        <a href="/contact" className="px-4 py-2 rounded-lg border border-emerald-400/50 text-emerald-300 hover:bg-emerald-400/10 transition">
          Contacto
        </a>
      </div>
    </section>
  );
}
