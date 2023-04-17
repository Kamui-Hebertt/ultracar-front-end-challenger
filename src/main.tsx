import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import App from "./App";
import GlobalStyles from "./style/GlobalStyles";
import Provider1 from './context/provider'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider1>
      <GlobalStyles />
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
      </Provider1>
    </BrowserRouter>    
  </React.StrictMode>,
);
