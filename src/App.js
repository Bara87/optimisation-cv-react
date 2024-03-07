import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import LegalPage from "./pages/LegalPage";
import AproposPage from "./pages/AproposPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './index.css';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/apropos" element={<AproposPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/legal" element={<LegalPage />} />
      </Routes>
      
      <Footer />
    </div>  )
};
export default App;

