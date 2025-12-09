import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App";
import { ListBug } from "./ListBug";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <ListBug />
  </StrictMode>
);
