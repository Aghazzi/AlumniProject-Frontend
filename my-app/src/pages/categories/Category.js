/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import vaca from "../../images/vapescategory (1).png";
import vaAcCa from "../../images/vapacccat (1).png";
import coacc from "../../images/coffeaccseoriescat (1).png";
import "./categories.css";

export class Category extends Component {
    state = {
        isAdmin: false,
        showEdit: "hide-edit",
        isOpen: false,
    };

    toggleModal = () => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
        }));
    };

    toggleEdit = () => {
        if (this.state.isAdmin) {
            this.setState({
                showEdit: "show-editt",
            });
        } else {
            this.setState({
                showEdit: "hide-edit",
            });
        }
    };
    toggleOff = () => {
        if (this.setState.isAdmin) {
            this.setState({
                showEdit: "show-editt",
            });
        } else {
            this.setState({
                showEdit: "hide-edit",
            });
        }
    };
    render() {
        return (
            <div>
                <section className="categories" id="Categoriess">
                    <h1 className="heading">
                        our <span>categories</span>
                    </h1>
                    <div className="box-container boxes ">
                        <div className="box">
                            <div className="image">
                                <img src={coacc} alt="First Category" />
                            </div>
                            <div className="content">
                                <h3>fresh coffee</h3>
                                <div>
                                    <Link to="/products" className="btn">
                                        View More products
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img
                                    src={coacc}
                                    alt="Coffee Accesorie Category"
                                />
                            </div>
                            <div className="content">
                                <h3>Coffee Accesories</h3>
                                <div>
                                    <Link to="/products" className="btn">
                                        view more products
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={vaca} alt="Vapes Category" />
                            </div>
                            <div className="content">
                                <h3>Vapes</h3>
                                <div>
                                    <Link to="/products" className="btn">
                                        view more products
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={vaAcCa} alt="Vapes Category" />
                            </div>
                            <div className="content">
                                <h3>Vapes</h3>
                                <div>
                                    <Link to="/products" className="btn">
                                        view more products
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-fixer">
                        <Link to="/categories" className=" btn">
                            View More categories
                        </Link>
                    </div>
                </section>
            </div>
        );
    }
}

export default Category;
