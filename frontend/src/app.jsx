import { Toolbar } from "@mui/material";
import React from "react";
import Navbar from "./components/navbar";

export default function App({ children, window }) {
  return (
    <div>
      <Navbar window={window} />
      <Toolbar />
      {children}
    </div>
  );
}
