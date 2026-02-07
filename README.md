# React Libraries for Beginners

Repositorio educativo + playground visual para descubrir y aprender librerías de React.

## Stack

- **React** + **TypeScript**
- **Vite** (build y dev server)
- **React Router**
- **Tailwind CSS**

## Estructura del repo

```
├── src/
│   ├── components/       # Componentes globales (Layout, etc.)
│   ├── pages/            # Páginas (Home, categorías, librería)
│   ├── libraries/       # Librerías como "plugins"
│   │   ├── types.ts      # Tipos (LibraryMeta, ConfigField, etc.)
│   │   ├── index.ts      # Registro de categorías y librerías
│   │   └── {categoria}/  # ej: ui/, forms/, animations/
│   │       └── {lib}/    # ej: example-button/
│   │           ├── Demo.tsx   # Demo visual
│   │           ├── meta.ts    # Metadata y config del playground
│   │           └── index.ts   # Export (Demo + meta)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
└── package.json
```

## Cómo añadir una librería

1. Crear carpeta `src/libraries/{categoria}/{nombre-lib}/`.
2. Añadir `meta.ts` (nombre, descripción, `configSchema` para controles).
3. Añadir `Demo.tsx` (componente que recibe `config` y renderiza el demo).
4. Exportar en `index.ts` y registrar en `src/libraries/index.ts`.

## Comandos

```bash
npm install
npm run dev    # Desarrollo
npm run build  # Producción
npm run preview  # Vista previa del build
```

## Licencia

MIT
