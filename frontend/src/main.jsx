import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import App from "./app";
import Productos from "./productos";
import Facturacion from "./facturacion";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <App>
            <Navigate replace to="/facturacion" />
          </App>
        }
      />
      <Route
        path="/productos"
        element={
          <App>
            <Productos />
          </App>
        }
      />
      <Route
        path="/facturacion"
        element={
          <App>
            <Facturacion />
          </App>
        }
      />
    </Routes>
  </BrowserRouter>
);
