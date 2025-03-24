import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Generate from "./pages/Generate";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => (
  <Router>
    <div className="bg-gradient-to-br from-blue-50 to-green-100 min-h-screen flex flex-col font-sans text-gray-800">
      <Navbar />
      <main className="flex-grow px-4 pt-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);



export default App;
