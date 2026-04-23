import React from "react";
import { motion } from "framer-motion";
import { activeProjects } from "../data/projects";

export default function Projects() {
  const totalProjects = activeProjects.length;
  const avgProgress = Math.round(
    activeProjects.reduce((acc, item) => acc + item.progress, 0) / totalProjects
  );
  const highPriority = activeProjects.filter((item) => item.priority === "Alta").length;

  return (
    <section className="max-w-6xl">
      <h1 className="text-2xl font-bold text-emerald-300 mb-1">Proyectos activos</h1>
      <p className="text-neutral-400 mb-6">
        Vista única de todo lo que estoy construyendo ahora: foco, avance y siguiente hito.
      </p>

      <div className="grid sm:grid-cols-3 gap-3 mb-8">
        <div className="glass rounded-xl p-4">
          <p className="text-neutral-400 text-xs uppercase">En ejecución</p>
          <p className="text-2xl font-bold text-white">{totalProjects}</p>
        </div>
        <div className="glass rounded-xl p-4">
          <p className="text-neutral-400 text-xs uppercase">Avance promedio</p>
          <p className="text-2xl font-bold text-white">{avgProgress}%</p>
        </div>
        <div className="glass rounded-xl p-4">
          <p className="text-neutral-400 text-xs uppercase">Prioridad alta</p>
          <p className="text-2xl font-bold text-white">{highPriority}</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {activeProjects.map((p, i) => (
          <motion.article
            key={p.slug}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="glass rounded-xl p-4 card-hover"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs uppercase text-emerald-400">{p.tag}</span>
              <span className="text-xs px-2 py-0.5 rounded-full border border-emerald-400/30 text-emerald-300 bg-emerald-400/10">
                {p.stage}
              </span>
            </div>
            <h2 className="text-lg font-semibold text-white mt-2">{p.title}</h2>

            <div className="mt-3 space-y-1 text-sm">
              <p className="text-neutral-300">
                <span className="text-emerald-300">Problema:</span> {p.problem}
              </p>
              <p className="text-neutral-300">
                <span className="text-emerald-300">Sistema:</span> {p.system}
              </p>
              <p className="text-neutral-300">
                <span className="text-emerald-300">Impacto:</span> {p.result}
              </p>
            </div>

            <div className="mt-4">
              <div className="flex justify-between text-xs text-neutral-400 mb-1">
                <span>Avance estimado</span>
                <span>{p.progress}%</span>
              </div>
              <div className="w-full bg-neutral-800 rounded-full h-2">
                <div
                  className="bg-emerald-400 h-2 rounded-full"
                  style={{ width: `${p.progress}%` }}
                />
              </div>
            </div>

            <p className="mt-4 text-sm text-neutral-300">
              <span className="text-emerald-300">Siguiente hito:</span> {p.nextMilestone}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.focus.map((item) => (
                <span
                  key={item}
                  className="text-xs px-2 py-1 rounded-full border border-emerald-500/30 text-emerald-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
