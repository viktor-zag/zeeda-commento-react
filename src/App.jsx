// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Product from "./pages/product"; // Adjust the path based on your file structure
// import Home from "./pages/home";
// import "./App.css";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route path="/product/:id" element={<Product />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import Commento from './components/Commento';

const App = () => {
  return (
    <div>
      <h1>My Blog Post</h1>
      <p>Content of the blog post...</p>
      <Commento id="commento" />
    </div>
  );
};

export default App;