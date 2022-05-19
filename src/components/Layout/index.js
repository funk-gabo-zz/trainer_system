import React from "react";
import { NavBar } from "../NavBar";

export function Layout({ children }) {
  return (
    <React.Fragment>
      <NavBar />    
      {children}
    </React.Fragment>
  );
}
