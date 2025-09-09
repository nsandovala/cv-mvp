// src/components/Sidebar.jsx
function Sidebar({ activePage, setActivePage }) {
  const tabs = ["Profile", "Projects", "Codex", "Radar", "Contact"];

  return (
    <aside className="w-64 bg-neutral-900 text-green-400 flex flex-col p-6">
      <h1 className="text-2xl font-bold mb-10">Nelson Sandoval</h1>
      <nav className="flex flex-col gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActivePage(tab)}
            className={`text-left ${
              activePage === tab ? "font-bold text-white" : "text-green-400"
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
// src/components/Sidebar.jsx