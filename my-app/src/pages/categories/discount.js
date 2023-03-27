/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import pr1 from "../../images/product-1.png";
import coac from "../../images/CoffeAccesorie.png";
import vapr from "../../images/vape-product1-removebg-preview.png";
import vaac from "../../images/VapeAccesorie1.png";
import "./categories.css";
import { FaShoppingCart, FaEye, FaHeart } from "react-icons/fa";

class Disc extends Component {
    render() {
        return (
            <div>
                <section className="categories discount" id="categories">
                    <h1 className="heading">
                        Discount <span>Availble</span>
                    </h1>
                    <div className="box-container">
                        <div className="box">
                            <div className="icons btn-move">
                                {/* <Link
                                    to="/categories"
                                    className="fas fa-shopping-cart btn"
                                >
                                    <FaShoppingCart />
                                </Link>
                                <Link
                                    to="/categories"
                                    className="fas fa-heart btn"
                                >
                                    <FaHeart />
                                </Link> */}
                                {/* <Link
                                    to="/categories"
                                    className="fas fa-eye btn"
                                >
                                    <FaEye />
                                </Link> */}
                            </div>
                            <div className="image">
                                <img src={pr1} alt="products" />
                            </div>
                            <div className="price">20% OFF YOUR PURCHASE</div>
                            <h3>Product Name</h3>
                            <div className="price">
                                $15.99 <span>$20.99</span>
                            </div>
                            <div>
                                <Link to="/categories" className="btn">
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icons btn-move">
                                {/* <Link
                                    to="/categories"
                                    className="fas fa-shopping-cart btn"
                                >
                                    <FaShoppingCart />
                                </Link>
                                <Link
                                    to="/categories"
                                    className="fas fa-heart btn"
                                >
                                    <FaHeart />
                                </Link> */}
                                {/* <Link
                                    to="/categories"
                                    className="fas fa-eye btn"
                                >
                                    <FaEye />
                                </Link> */}
                            </div>
                            <div className="image">
                                <img src={coac} alt="product" />
                            </div>
                            <div className="price">20% OFF YOUR PURCHASE</div>
                            <h3>Product Name</h3>
                            <div className="price">
                                $15.99 <span>$20.99</span>
                            </div>
                            <div>
                                <Link to="/categories" className="btn">
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icons btn-move">
                                {/* <Link
                                    to="/categories"
                                    className="fas fa-shopping-cart btn"
                                >
                                    <FaShoppingCart />
                                </Link>
                                <Link
                                    to="/categories"
                                    className="fas fa-heart btn"
                                >
                                    <FaHeart />
                                </Link> */}
                                {/* <Link
                                    to="/categories"
                                    className="fas fa-eye btn"
                                >
                                    <FaEye />
                                </Link> */}
                            </div>
                            <div className="image">
                                <img src={vapr} alt="product" />
                            </div>
                            <div className="price">20% OFF YOUR PURCHASE</div>
                            <h3>Product Name</h3>
                            <div className="price">
                                $15.99 <span>$20.99</span>
                            </div>
                            <div>
                                <Link to="/categories" className="btn">
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icons btn-move">
                                {/* <Link
                                    to="/categories"
                                    className="fas fa-shopping-cart btn"
                                >
                                    <FaShoppingCart />
                                </Link>
                                <Link
                                    to="/categories"
                                    className="fas fa-heart btn"
                                >
                                    <FaHeart />
                                </Link> */}
                                {/* <Link
                                    to="/categories"
                                    className="fas fa-eye btn"
                                >
                                    <FaEye />
                                </Link> */}
                            </div>
                            <div className="image">
                                <img src={vaac} alt="product" />
                            </div>
                            <div className="price">20% OFF YOUR PURCHASE</div>
                            <h3>Product Name</h3>
                            <div className="price">
                                $15.99 <span>$20.99</span>
                            </div>
                            <div>
                                <Link to="/categories" className="btn">
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="btn-fixer">
                        <Link to="/categories" className=" btn">
                            View More discounts
                        </Link>
                    </div>
                </section>
            </div>
        );
    }
}

export default Disc;
