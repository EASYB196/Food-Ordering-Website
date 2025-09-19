import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NavBar from "./Components/NavBar";
import Pizza from "./Pages/PizzaCard";
import Burger from "./Pages/Burger";
import Rice from "./Pages/Rice";
import Chicken from "./Pages/Chicken";
import Dessert from "./Pages/Dessert";
import Footer from "./Pages/Footer";
import PizzaDetails from "./Components/PizzaDetail";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/pizza/:id" element={<PizzaDetails />} />
        <Route path="/burger" element={<Burger />} />
        <Route path="/rice" element={<Rice />} />
        <Route path="/chicken" element={<Chicken />} />
        <Route path="/dessert" element={<Dessert />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
