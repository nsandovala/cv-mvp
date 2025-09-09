// Contacto — call to action simple y directo

export default function Contact() {
  return (
    <section className="max-w-xl">
      <h1 className="text-3xl font-bold text-white mb-2">Conectemos</h1>
      <p className="text-neutral-300 mb-6">
        Busco espacios donde aportar <span className="text-white font-semibold">sistemas listos para usar</span>.
        Si tu organización tiene un problema complejo, lo simplificamos en un MVP real.
      </p>

      <div className="flex flex-wrap gap-4">
        <a
          href="mailto:nandres.sandova@gmailcom"
          className="bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 hover:text-white 
                     hover:bg-emerald-500/20 px-4 py-2 rounded-lg transition"
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/nelson-sandoval-67377a40/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 hover:text-white 
                     hover:bg-emerald-500/20 px-4 py-2 rounded-lg transition"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/nsandovala"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 hover:text-white 
                     hover:bg-emerald-500/20 px-4 py-2 rounded-lg transition"
        >
          GitHub
        </a>
      </div>

      <div className="mt-8 rounded-xl bg-neutral-900/90 border border-emerald-400/20 p-4">
        <p className="text-neutral-400 text-sm">
          “Todo patrón es programable. La causa primero; el efecto se ordena solo.”
        </p>
      </div>
    </section>
  );
}
