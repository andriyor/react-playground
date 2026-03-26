import { BrowserRouter, Routes, Route, Link } from "react-router";
import ModalPage from "./ModalPage";

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
import { TableStickyTransformTwoTables } from "./table/TableStickyTransformTwoTables.tsx";
import { TablePositionSticky } from "./table/TablePositionSticky.tsx";
import { TableStickyTransformSameTable } from "./table/TableStickyTransformSameTable.tsx";

const Home = () => {
  return (
    <>
      {routes.map((route) => (
        <div key={route.path}>
          <Link to={route.path}>{route.path}</Link>
        </div>
      ))}
    </>
  );
};

const routes = [
  { path: "/modal", component: <ModalPage /> },
  { path: "/", component: <Home /> },
  {
    path: "/TablePositionSticky",
    component: <TablePositionSticky />,
  },
  {
    path: "/TableStickyTransformTwoTables",
    component: <TableStickyTransformTwoTables />,
  },
  {
    path: "/TableStickyTransformSameTable",
    component: <TableStickyTransformSameTable />,
  },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
