import React from "react";

export default function ProjectAudiobook() {
  return (
    <section className="max-w-3xl">
      <h1 className="text-2xl font-bold text-emerald-300">Audiolibro — Codex Express™</h1>
      <p className="text-neutral-400 mt-1">Del caos a MVP en 20–30 minutos de audio.</p>

      <div className="glass rounded-xl p-4 mt-6 space-y-2">
        <p><span className="text-emerald-300">Problema:</span> equipos sin método, mucha idea, cero entrega.</p>
        <p><span className="text-emerald-300">Sistema:</span> loop práctico con ejercicios guiados y checklist.</p>
        <p><span className="text-emerald-300">Resultado:</span> reducir “tiempo a primer MVP” a días.</p>
      </div>

      <div className="mt-6 flex gap-3">
        <a href="#" className="px-4 py-2 rounded-lg bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 hover:bg-emerald-500/30 transition">
          Escuchar demo
        </a>
        <a href="#" className="px-4 py-2 rounded-lg border border-emerald-400/50 text-emerald-300 hover:bg-emerald-400/10 transition">
          Dossier (Notion)
        </a>
      </div>
    </section>
  );
}
// src/pages/ProjectAudiobook.jsx