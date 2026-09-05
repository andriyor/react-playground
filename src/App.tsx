import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router";

// Every demo under src/demo is a route: src/demo/css/CardClip.tsx → /css/CardClip.
// Each file exports a component named after the file, or a default export.
// Lazy, so a demo's own imports (CSS resets, providers) only load on its route.
const modules = import.meta.glob<Record<string, React.ComponentType>>(
  "./demo/**/*.tsx",
);

const demos = Object.entries(modules).map(([file, load]) => {
  const [folder, name] = file
    .replace("./demo/", "")
    .replace(".tsx", "")
    .split("/");
  return {
    folder,
    name,
    Component: lazy(() =>
      load().then((mod) => ({ default: mod[name] ?? mod.default })),
    ),
  };
});

const Home = () => {
  const folders = [...new Set(demos.map((d) => d.folder))];

  return (
    <>
      <a href="https://github.com/andriyor/react-playground">GitHub</a>
      {folders.map((folder) => (
        <div key={folder}>
          <h3>{folder}</h3>
          {demos
            .filter((d) => d.folder === folder)
            .map(({ name }) => (
              <div key={name}>
                <Link to={`/${folder}/${name}`}>{name}</Link>
              </div>
            ))}
        </div>
      ))}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          {demos.map(({ folder, name, Component }) => (
            <Route
              key={`${folder}/${name}`}
              path={`/${folder}/${name}`}
              element={<Component />}
            />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
