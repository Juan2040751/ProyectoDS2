import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./app";
import ListaProductos from "./components/list_products";
import Facturacion from "./facturacion";
import Login from "./login";
import Productos from "./productos";
import Register from "./registro";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <App>
            <div>
              <div>
                <Login />
              </div>
              <div>
                <Register />
              </div>
            </div>
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
      <Route
        path="/lista-productos"
        element={
          <App>
            <ListaProductos />
          </App>
        }
      />
      <Route
        path="/productos/:id"
        element={
          <App>
            <Productos />
          </App>
        }
      />
    </Routes>
  </BrowserRouter>
);
