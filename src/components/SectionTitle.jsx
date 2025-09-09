import React from "react";

export default function SectionTitle({ title, subtitle }) {
  return (
    <header className="mb-6">
      <h1 className="text-3xl font-bold text-white">{title}</h1>
      {subtitle && <p className="text-neutral-300 mt-1">{subtitle}</p>}
    </header>
  );
}
// src/components/SectionTitle.jsx