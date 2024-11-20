import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import TokenAuth from "./ContextAPI/TokenAuth.jsx";
createRoot(document.getElementById("root")).render(
 
    <TokenAuth>
      <BrowserRouter>
        <App />
      </BrowserRouter> 
    </TokenAuth>
 
);
