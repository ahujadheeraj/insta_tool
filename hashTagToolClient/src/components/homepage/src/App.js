import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Index from "./pages/Index/Index";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;
