import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function PrintButton({ targetRef, label="Descargar CV (PDF)" }) {
  const handlePrint = useReactToPrint({ content: () => targetRef.current });
  return (
    <button onClick={handlePrint}
      className="bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 hover:text-white 
                 hover:bg-emerald-500/20 px-4 py-2 rounded-lg transition">
      {label}
    </button>
  );
}
