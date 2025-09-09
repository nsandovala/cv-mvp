// src/components/MethodCard.jsx
// Tarjeta simple para un paso del método (título + descripción)

export default function MethodCard({ index, title, description }) {
  return (
    <article className="rounded-xl bg-neutral-900/90 border border-emerald-400/20 p-4 hover:border-emerald-400/40 transition">
      <div className="flex items-start gap-3">
        <span className="text-emerald-300 font-semibold">
          {String(index).padStart(2, "0")}.
        </span>
        <div>
          <h3 className="text-white font-semibold">{title}</h3>
          <p className="text-neutral-300">{description}</p>
        </div>
      </div>
    </article>
  );
}
