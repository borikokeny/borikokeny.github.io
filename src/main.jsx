import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./styles/variables.css";
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/components.css";
import "./styles/physical-products.css";
import "./styles/fun-fashion-factory.css";
import "./styles/projects.css";
import "./styles/media.css";
import "./styles/international-sourcing.css";


import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
