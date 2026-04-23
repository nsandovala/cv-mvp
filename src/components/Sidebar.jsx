function Sidebar({ activePage, setActivePage }) {
  const tabs = ["Profile", "Projects", "Codex", "Radar", "Contact"];

  return (
    <aside className="relative z-10 w-64 bg-neutral-950/90 border-r border-emerald-500/20 text-green-300 flex flex-col p-6">
      <h1 className="text-2xl font-bold mb-1 text-white">Nelson Sandoval</h1>
      <p className="text-xs text-emerald-300/80 mb-8">CV Online · Sistemas + IA aplicada</p>

      <nav className="flex flex-col gap-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActivePage(tab)}
            className={`text-left px-3 py-2 rounded-lg border transition ${
              activePage === tab
                ? "font-semibold text-white border-emerald-400/60 bg-emerald-500/15"
                : "text-green-300 border-transparent hover:border-emerald-500/30 hover:bg-emerald-500/5"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
