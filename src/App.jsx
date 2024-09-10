import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./pages/product"; // Adjust the path based on your file structure
import Home from "./pages/home";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Router>
  );
};

export default App;
