import { useState } from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import "./components/styles/grid.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Rooms from "./pages/Rooms.jsx";
function App() {
  return (
    <>
      <Header />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Rooms" element={<Rooms />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
