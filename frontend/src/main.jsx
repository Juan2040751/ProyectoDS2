import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Productos from "./productos";
import Register from "./registro";
import Login from "./login";

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
