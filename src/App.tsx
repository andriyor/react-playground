import { BrowserRouter, Routes, Route, Link } from "react-router";

import "@mantine/core/styles/baseline.css";
import "@mantine/core/styles/default-css-variables.css";
import "@mantine/core/styles/global.css";

import "@mantine/core/styles/ScrollArea.css";
import "@mantine/core/styles/UnstyledButton.css";
import "@mantine/core/styles/VisuallyHidden.css";
import "@mantine/core/styles/Paper.css";
import "@mantine/core/styles/Popover.css";
import "@mantine/core/styles/CloseButton.css";
import "@mantine/core/styles/Group.css";
import "@mantine/core/styles/Loader.css";
import "@mantine/core/styles/Overlay.css";
import "@mantine/core/styles/ModalBase.css";
import "@mantine/core/styles/Input.css";
import "@mantine/core/styles/InlineInput.css";
import "@mantine/core/styles/Flex.css";
import "@mantine/core/styles/FloatingIndicator.css";
import "@mantine/core/styles/ActionIcon.css";

import "@mantine/core/styles/CloseButton.css";
import "@mantine/core/styles/Modal.css";
import "@mantine/core/styles/Button.css";

import "@mantine/core/styles.css";
// Every demo under src/demo is a route: src/demo/css/CardClip.tsx → /css/CardClip.
// Each file exports a component named after the file, or a default export.
const modules = import.meta.glob<Record<string, React.ComponentType>>(
  "./demo/**/*.tsx",
  { eager: true },
);

const demos = Object.entries(modules).map(([file, mod]) => {
  const [folder, name] = file.replace("./demo/", "").replace(".tsx", "").split("/");
  return { folder, name, Component: mod[name] ?? mod.default };
});

const Home = () => {
  const folders = [...new Set(demos.map((d) => d.folder))];

  return (
    <>
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
    </BrowserRouter>
  );
}

export default App;
