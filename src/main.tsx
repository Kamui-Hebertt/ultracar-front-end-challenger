import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import App from "./App";
import GlobalStyles from "./style/GlobalStyles";
import Provider1 from './context/provider'
import Client from "./pages/Client";
import Collaborators from '../src/pages/Collaborators';
import Product from '../src/pages/Product';
import Login from "./pages/Login";
import UserPage from "./pages/UserPage";


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
          <Route path="/login" element={<Login />} />
          <Route path="login/:id" element={<UserPage />} />
        </Route>
      </Routes>
      </Provider1>
    </BrowserRouter>    
  </React.StrictMode>,
);
