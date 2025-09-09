import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ title, description, imageUrl, link, tags = [] }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.25 }}
      className="glass rounded-2xl p-4 card-hover"
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-40 object-cover rounded-xl mb-3 opacity-90"
        />
      )}

      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map(t => (
          <span key={t} className="text-[11px] px-2 py-[2px] rounded-full border border-emerald-400/30 text-emerald-300 bg-emerald-500/5">
            {t}
          </span>
        ))}
      </div>

      <h3 className="text-white font-semibold">{title}</h3>
      <p className="text-neutral-300 text-sm mt-1">{description}</p>

      {link && (
        <a
          href={link} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-emerald-300 border border-emerald-400/30 rounded-lg px-3 py-1.5 hover:bg-emerald-500/10"
        >
          Ver proyecto <span>↗</span>
        </a>
      )}
    </motion.article>
  );
}

