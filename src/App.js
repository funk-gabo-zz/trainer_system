import React from "react";
import { Layout } from "./components/Layout";
import { GlobalStyle } from "./GlobalStyles";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";

export const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path="hola" element={<h2>Componente hola</h2>} />
          <Route path="chao" element={<h5>Componente chao</h5>} />
        </Routes>
      </Layout>
    </React.Fragment>
  </BrowserRouter>
);
