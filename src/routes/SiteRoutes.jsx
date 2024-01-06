import React from "react";
import "./route.css";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import PagesNotDefault from "../pages/PagesNotDefault/PagesNotDefault";
import ProductWithCategory from "../pages/ProductWithCategory/ProductWithCategory";
import ProductDetail from "../pages/Product/ProductDetail";

function SiteRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product" element={<ProductWithCategory />}>
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Route>
      <Route path="*" element={<PagesNotDefault />} />
    </Routes>
  );
}

export default SiteRoutes;
