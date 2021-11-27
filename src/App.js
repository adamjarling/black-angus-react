import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import NavContainer from "./containers/NavContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <NavContainer />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
