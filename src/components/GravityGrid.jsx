import { useEffect, useState } from "react";

export default function GravityGrid() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(prefers-reduced-motion: no-preference)");
    const updateMotion = () => setEnabled(media.matches);
    updateMotion();

    const onMove = (event) => {
      if (!media.matches) return;
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty("--gx", `${x}%`);
      document.documentElement.style.setProperty("--gy", `${y}%`);
    };

    window.addEventListener("pointermove", onMove);
    media.addEventListener("change", updateMotion);

    return () => {
      window.removeEventListener("pointermove", onMove);
      media.removeEventListener("change", updateMotion);
    };
  }, []);

  return (
    <>
      <div className="ui-ambient-glow" aria-hidden="true" />
      {enabled && <div className="ui-gravity-grid" aria-hidden="true" />}
    </>
  );
}
