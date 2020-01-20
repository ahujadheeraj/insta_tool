import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Thankyou from "./components/Thankyou/Thankyou";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
      <div className="App container-fluid">
          <Home />
        
      </div>
  );
}

export default App;
