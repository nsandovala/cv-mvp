// Radar creativo — ideas en curso (tu “pipeline” de sistemas)

export default function Radar() {
  const ideas = [
    {
      t: "Lean Startup App",
      tag: "SaaS · Product",
      d: "Pizarra de ideas + procesos + agenda para founders en etapa caos. MVP en Notion/Goodnotes → luego SaaS."
    },
    {
      t: "HEO Sentinel",
      tag: "IA · Salud",
      d: "Asistente de IA emocional con enfoque preventivo y ético. Próximo: pilotos guiados y medición de bienestar."
    },
    {
      t: "The Best Burger — Sistema de Promos VIP",
      tag: "Ventas · Python",
      d: "Automatización de horas muertas y neuroventas 2.0. Próximo: portal simple + packs familiares."
    },
    {
      t: "AMON 360",
      tag: "Ecosistema Social",
      d: "Plataforma modular (salud, finanzas, formalización). En preparación de dossier para incubadoras."
    },
  ];

  return (
    <section className="max-w-4xl">
      <h1 className="text-3xl font-bold text-white mb-2">Radar creativo</h1>
      <p className="text-neutral-300 mb-6">
        Colección de sistemas en evolución. No son ideas sueltas: son MVPs y rutas claras.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {ideas.map((x) => (
          <article
            key={x.t}
            className="rounded-2xl bg-neutral-900/90 border border-emerald-400/20 p-5 hover:border-emerald-400/40 transition"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-semibold">{x.t}</h3>
              <span className="text-xs px-2 py-1 rounded-full border border-emerald-400/40 text-emerald-300">
                {x.tag}
              </span>
            </div>
            <p className="text-neutral-300">{x.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
