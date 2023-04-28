import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Productos from "./productos";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/"
        element={
          <App>
            <h1>Hola</h1>
          </App>
        }/>
      <Route
        path="/productos"
        element={
          <App>
            <Productos />
          </App>
        }
      />
    </Routes>
  </BrowserRouter>
);
