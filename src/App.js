import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Bookmark from "./pages/Bookmark";
import ProductList from "./pages/ProductList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const URL = "http://cozshopping.codestates-seb.link/api/v1/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((res) =>
        setProducts(res.data.map((data) => ({ ...data, bookmarked: false })))
      )
      .catch((err) => alert(err));
  }, []);
  console.log(products);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main products={products} />} />
        <Route path="/bookmark" element={<Bookmark products={products} />} />
        <Route
          path="/product/list"
          element={<ProductList products={products} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
