
import React from 'react';
import { Outlet } from "react-router-dom";
import Header from './components/header/Header';



const App: React.FC = () => {


  return (
      <>
      
      <Outlet />
      </>
  )
}

export default App
