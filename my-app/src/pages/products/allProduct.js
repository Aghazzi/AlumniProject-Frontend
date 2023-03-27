import { Component } from "react";
import CatHero from "../categories/cathero";
import CoffeProduct from "../products/Coffee-allProduct.js";
import CoffeeAccesorie from "./CoffeeAccesorie-allpro";
import VapeProduct from "./Vapes-allProduct";
import VapeAccesorieProduct from "./VapeAccesorie-allProduct";
import "../categories/categories.css";
import Nav from "../../components/nav";

class Products extends Component {
    render() {
        return (
            <>
                <Nav />
                <CatHero />
                <CoffeProduct />
                <CoffeeAccesorie />
                <VapeProduct />
                <VapeAccesorieProduct />
            </>
        );
    }
}

export default Products;
