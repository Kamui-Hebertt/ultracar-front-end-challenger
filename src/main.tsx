import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import App from "./App";
import GlobalStyles from "./style/GlobalStyles";
import Provider1 from './context/provider'
import Client from "./pages/Client";
import Collaborators from '../src/pages/collaborators';
import Product from '../src/pages/Product';


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider1>
      <GlobalStyles />
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/client" element={<Client />} />
          <Route path="/product" element={<Product />} />
          <Route path="/collaborator" element={<Collaborators />} />
        </Route>
      </Routes>
      </Provider1>
    </BrowserRouter>    
  </React.StrictMode>,
);
