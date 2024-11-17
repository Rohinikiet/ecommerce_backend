import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    </Router>
);

export default App;
