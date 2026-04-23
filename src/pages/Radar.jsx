import { activeProjects } from "../data/projects";

export default function Radar() {
  const roadmap = [...activeProjects].sort((a, b) => b.progress - a.progress);

  return (
    <section className="max-w-4xl">
      <h1 className="text-3xl font-bold text-white mb-2">Radar creativo</h1>
      <p className="text-neutral-300 mb-6">
        Pipeline vivo de iniciativas: cada proyecto tiene etapa, hito y progreso real.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {roadmap.map((x) => (
          <article
            key={x.slug}
            className="rounded-2xl bg-neutral-900/90 border border-emerald-400/20 p-5 hover:border-emerald-400/40 transition"
          >
            <div className="flex items-center justify-between mb-2 gap-2">
              <h3 className="text-white font-semibold">{x.title}</h3>
              <span className="text-xs px-2 py-1 rounded-full border border-emerald-400/40 text-emerald-300">
                {x.tag}
              </span>
            </div>

            <p className="text-neutral-300 text-sm mb-3">{x.nextMilestone}</p>

            <div className="flex items-center justify-between text-xs text-neutral-400 mb-1">
              <span>{x.stage}</span>
              <span>{x.progress}%</span>
            </div>
            <div className="w-full bg-neutral-800 rounded-full h-2">
              <div className="bg-emerald-400 h-2 rounded-full" style={{ width: `${x.progress}%` }} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
