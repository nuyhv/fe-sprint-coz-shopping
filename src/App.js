import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Bookmark from "./pages/Bookmark";
import ProductList from "./pages/ProductList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/product/list" element={<ProductList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
