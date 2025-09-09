import React from "react";

export default function SkillBadge({ label }) {
  return (
    <span className="text-xs px-3 py-1 rounded-full border border-emerald-400/30 text-emerald-300
                     bg-emerald-500/5 hover:bg-emerald-500/10 transition select-none">
      {label}
    </span>
  );
}
// src/SkillBadge.jsx