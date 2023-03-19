import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Product from "./components/Product";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Register from "./components/Register";
import Login from "./components/Login";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:userId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
