# react-playground

Isolated reproductions of browser and CSS behaviour — sticky table headers, clipping
ancestors, modal internals. One page per thing, small enough to poke at.

Started from the React + TypeScript + Vite template (`@vitejs/plugin-react`, Babel
Fast Refresh); the original template notes are kept at the bottom.

```sh
pnpm install
pnpm dev        # the index page lists every demo, grouped by folder
pnpm build      # tsc -b && vite build
pnpm lint
```

## Adding a demo

Drop a file in `src/demo/<topic>/<Name>.tsx`. It becomes the route
`/<topic>/<Name>` and shows up on the index page — there is no route list to
update. `App.tsx` globs `src/demo/**/*.tsx` and expects each file to export a
component **named after the file**, or a default export.

Demos are lazy-loaded and own their own imports, including providers and CSS.
Keep global stylesheets and resets inside the demo that needs them, so they can't
restyle the others. Non-`.tsx` files (fixtures, helpers) are ignored by the glob.

Duplication between demos is fine and often right — each one should be readable
and editable on its own without chasing a shared abstraction.

---

## From the Vite template

Two official React plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
