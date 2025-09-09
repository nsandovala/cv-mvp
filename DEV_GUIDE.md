# DEV_GUIDE — CV-MVP

## Objetivo
Crear un CV online innovador en React + Tailwind, estilo Apple minimalista (negro mate, blanco, verde acento).  
La aplicación debe ser simple, escalable y con código limpio.

## Estándares
- Usar componentes funcionales con hooks (React).
- TailwindCSS para estilos, evitando CSS adicional.
- Mantener componentes pequeños y reutilizables.
- Sidebar negro mate, texto blanco, acento verde.
- Páginas: Profile, Projects, Codex, Radar, Contact.

## Buenas prácticas
- No repetir código, usar props y componentes.
- Código limpio, comentado solo donde agrega valor.
- Estructura clara de carpetas (components/pages).

## Flujo de trabajo
- Cada página debe exportar un componente default.
- Navegación manejada desde `App.jsx`.
- Ajustar responsive con clases de Tailwind (`sm:`, `md:`).

## Filosofía
“Todo patrón es programable”.  
Buscar la causa raíz de los problemas de UX y resolver con diseño simple.
