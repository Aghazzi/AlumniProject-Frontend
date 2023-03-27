import React, { Component } from "react";
import CatHero from "./cathero";
import Disc from "./discount";
import Category from "./Category";
import "./categories.css";
import Nav from "../../components/nav";

export class CategoriesPage extends Component {
    render() {
        return (
            <>
                <Nav />
                <CatHero />
                <Disc />
                <Category />
            </>
        );
    }
}

export default CategoriesPage;
