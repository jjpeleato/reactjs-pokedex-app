import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Pokedex } from "./components";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Pokedex />
  </StrictMode>
);
