/* eslint-disable jsx-a11y/anchor-is-valid */
import "./home.css";
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Hero from "./hero.js";
import { Categories } from "./ourCategories";
import { Products } from "./ourProducts";
import Nav from "../../components/nav";

export class Home extends Component {
    render() {
        return (
            <>
                <Nav />
                <Hero />
                <Categories />
                <Products />
            </>
        );
    }
}

export default Home;
