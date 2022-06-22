import React from "react";
import { Layout } from "./components/Layout";
import { GlobalStyle } from "./GlobalStyles";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { List } from "./pages/List";
import { Mnt } from "./pages/Mnt";

export const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path='/trainer_system/' element={<Dashboard />} />
          <Route path="list" element={<List />} />
          <Route path="mnt" element={<Mnt />} />
        </Routes>
      </Layout>
    </React.Fragment>
  </BrowserRouter>
);
