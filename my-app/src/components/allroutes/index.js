import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../../pages/about";
import Login from "../../pages/login";
import Home from "../../pages/home";
import Categories from "../../pages/categories";
import Register from "../../pages/register";
import Products from "../../pages/products/allProduct.js";
import ProductCoffee from "../../pages/products/coffeeProduct.js";
import CoffeeAccesorieProduct from "../../pages/products/CoffeeAccesorieProduct.js";
import VapeProduct from "../../pages/products/vapeProduct.js";
import VapeAccesorieProduct from "../../pages/products/VapeAccesorieProduct.js";

export class AllRoutes extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/products/coffee" element={<ProductCoffee />} />
                    <Route
                        path="/products/coffee/accesorie"
                        element={<CoffeeAccesorieProduct />}
                    />
                    <Route path="/products/vape" element={<VapeProduct />} />
                    <Route
                        path="/products/vape/accesorie"
                        element={<VapeAccesorieProduct />}
                    />
                    <Route path="/products" element={<Products />} /> 
                </Routes>
            </div>
        );
    }
}

export default AllRoutes;
