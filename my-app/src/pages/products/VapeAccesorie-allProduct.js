import React, { Component } from "react";
import { Link } from "react-router-dom";
import pr1 from "../../images/product-1.png";
import vac1 from "../../images/VapeAccesorie1.png";
import vac2 from "../../images/VapeAccesorie2.png";
import "../categories/categories.css";
import Cookies from "universal-cookie";
import { AiFillCloseCircle } from "react-icons/ai";

const cookies = new Cookies();

export class VapeAccesorieProduct extends Component {
    state = {
        isAdmin: false,
        showEdit: "hide-edit",
        isOpen: false,
    };

    componentDidMount() {
        if (cookies.get("role") === "admin") {
            this.setState({ isAdmin: true });
        } else {
            this.setState({ isAdmin: false });
        }
    }

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
        this.setState({
            showEdit: "hide-edit",
        });
    };
    render() {
        const Vapes = [
            {
                name: "Product Name",
                image: pr1,
                price: "$25.00",
                dis: "$30.00",
            },
            {
                name: "Product Name",
                image: vac1,
                price: "$25.00",
                dis: "$30.00",
            },
            {
                name: "Product Name",
                image: vac2,
                price: "$25.00",
                dis: "$30.00",
            },
        ];
        return (
            <div>
                <section className="categories vapes">
                    <h1 className="heading">
                        our <span>Vapes</span>
                    </h1>
                    <div className="box-container">
                        {Vapes.map((vape, index) => (
                            <div className="box">
                                <div className="image">
                                    <img src={vape.image} alt="" />
                                </div>
                                <div className="content">
                                    <h3>{vape.name}</h3>
                                </div>
                                <div className="price">{vape.price}</div>
                                <div
                                    onMouseOver={this.toggleEdit}
                                    onMouseLeave={this.toggleOff}
                                    className="btn-fixer"
                                >
                                    <div>
                                        <Link to="/products" className="btn">
                                            Add To Cart
                                        </Link>
                                    </div>
                                    <div className="btn-modal">
                                        <button
                                            className={`btn ${this.state.showEdit}`}
                                            onClick={this.toggleModal}
                                        >
                                            delete
                                        </button>
                                        <button
                                            className={`btn ${this.state.showEdit}`}
                                            onClick={this.toggleModal}
                                        >
                                            edit
                                        </button>
                                        <button
                                            className={`btn ${this.state.showEdit}`}
                                            onClick={this.toggleModal}
                                        >
                                            add
                                        </button>
                                    </div>
                                    {this.state.isOpen && (
                                        <div className="modal-overlay">
                                            <div className="modal-content">
                                                <button
                                                    className="close-model"
                                                    onClick={this.toggleModal}
                                                >
                                                    <AiFillCloseCircle />
                                                </button>
                                                <h1>Break Lounge</h1>
                                                <div className="form-model">
                                                    <div className="model-img">
                                                        <img
                                                            src={vape.image}
                                                            alt="img"
                                                        />
                                                        <button className="btn">
                                                            upload
                                                        </button>
                                                    </div>
                                                    <form className="form-controls">
                                                        <input
                                                            type="text"
                                                            placeholder="name"
                                                        />
                                                        <input
                                                            type="text"
                                                            placeholder="description"
                                                        />
                                                        <input
                                                            type="text"
                                                            placeholder="price"
                                                        />
                                                        <button className="btn">
                                                            submit
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <br />

                    <div className="box-container">
                        {Vapes.map((vape, index) => (
                            <div className="box">
                                <div className="image">
                                    <img src={vape.image} alt="" />
                                </div>
                                <div className="content">
                                    <h3>{vape.name}</h3>
                                </div>
                                <div className="price">{vape.price}</div>
                                <div
                                    onMouseOver={this.toggleEdit}
                                    onMouseLeave={this.toggleOff}
                                    className="btn-fixer"
                                >
                                    <div>
                                        <Link to="/products" className="btn">
                                            Add To Cart
                                        </Link>
                                    </div>
                                    <div className="btn-modal">
                                        <button
                                            className={`btn ${this.state.showEdit}`}
                                            onClick={this.toggleModal}
                                        >
                                            delete
                                        </button>
                                        <button
                                            className={`btn ${this.state.showEdit}`}
                                            onClick={this.toggleModal}
                                        >
                                            edit
                                        </button>
                                        <button
                                            className={`btn ${this.state.showEdit}`}
                                            onClick={this.toggleModal}
                                        >
                                            add
                                        </button>
                                    </div>
                                    {this.state.isOpen && (
                                        <div className="modal-overlay">
                                            <div className="modal-content">
                                                <button
                                                    className="close-model"
                                                    onClick={this.toggleModal}
                                                >
                                                    <AiFillCloseCircle />
                                                </button>
                                                <h1>Break Lounge</h1>
                                                <div className="form-model">
                                                    <div className="model-img">
                                                        <img
                                                            src={vape.image}
                                                            alt="img"
                                                        />
                                                        <button className="btn">
                                                            upload
                                                        </button>
                                                    </div>
                                                    <form className="form-controls">
                                                        <input
                                                            type="text"
                                                            placeholder="name"
                                                        />
                                                        <input
                                                            type="text"
                                                            placeholder="description"
                                                        />
                                                        <input
                                                            type="text"
                                                            placeholder="price"
                                                        />
                                                        <button className="btn">
                                                            submit
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="btn-fixer">
                        <Link to="/products" className="btn">
                            View More Product
                        </Link>
                    </div>
                </section>
            </div>
        );
    }
}

export default VapeAccesorieProduct;
