import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Codex from "./pages/Codex";
import Radar from "./pages/Radar";
import Contact from "./pages/Contact";

function App() {
  const [activePage, setActivePage] = useState("Profile");

  const renderPage = () => {
    switch (activePage) {
      case "Projects": return <Projects />;
      case "Codex":    return <Codex />;
      case "Radar":    return <Radar />;
      case "Contact":  return <Contact />;
      default:         return <Profile />;
    }
  };

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-1 p-8 overflow-y-auto">
     
        {renderPage()}
      </main>
    </div>
  );
}
export default App;
