import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Productos from "./productos";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
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
