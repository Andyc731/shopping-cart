import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ProductInfo from "./components/ProductInfo";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="h-screen flex flex-col justify-between">
        <Header cartItems={cartItems} setCartItems={setCartItems}></Header>
        {loading && <h2>Loading...</h2>}
        {!loading && (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={
                <Products products={products} setProducts={setProducts} />
              }
            />
            <Route path="/about" element={<About />}></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
            <Route
              path="/products/:id"
              element={
                <ProductInfo products={products} setCartItems={setCartItems} />
              }
            ></Route>
          </Routes>
        )}
        <Footer loading={loading} products={products}></Footer>
      </div>
    </>
  );
}

export default App;
