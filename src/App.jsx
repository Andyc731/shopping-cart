import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div
        className="h-screen grid"
        style={{ gridTemplateRows: "80px 1fr 280px" }}
      >
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Products products={products} setProducts={setProducts} />}
          />
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
