/* eslint-disable no-unused-vars */
import "./ourCategories.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaShoppingCart, FaHeart } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import Cookies from "universal-cookie";
import axios from "axios";
import placeholder from "../../images/blog-1.jpeg";

const cookies = new Cookies();

export class Categories extends Component {
    state = {
        isAdmin: false,
        showEdit: "hide-edit",
        isOpen: false,
        category: [],
        formData: { name: "", price: "", file: "" },
    };

    componentDidMount() {
        if (cookies.get("role") === "admin") {
            this.setState({ isAdmin: true });
        } else {
            this.setState({ isAdmin: false });
        }
        this.getCategories();
    }

    toggleModal = () => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
            formData: { name: "", price: "", file: "" },
        }));
    };

    toggleEdit = () => {
        if (this.state.isAdmin) {
            this.setState({
                showEdit: "show-edit",
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

    checkInputs = () => {
        return (
            this.state.formData.name &&
            this.state.formData.price &&
            this.state.formData.file
        );
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        let token = cookies.get("access-token");
        if (token) {
            const config = {
                headers: {
                    "access-token": token,
                },
            };
            console.log(config);
            if (!this.checkInputs()) {
                return;
            } else {
                this.handleEdit(config);
            }
        }
    };

    handleChange = (e) => {
        this.setState({
            formData: {
                ...this.state.formData,
                [e.target.name]: e.target.value,
            },
        });
    };

    handleEdit = async (config) => {
        let error = null;

        if (
            !this.state.formData.name ||
            !this.state.formData.price ||
            !this.state.formData.file
        ) {
            error = "All fields are required.";
        }
        const formData = new FormData();
        formData.append("file", this.state.formData.file);
        formData.append("name", this.state.formData.name);
        formData.append("price", this.state.formData.price);

        if (error !== null) {
            alert(error);
        } else if (this.state.formData._id) {
            await axios
                .patch(
                    `https://break-lounge-api-yrhd.onrender.com/category/${this.state.formData._id}`,
                    formData,
                    config
                )
                .then((res) => {
                    this.getCategories();
                    this.toggleModal();
                })
                .catch((err) => {
                    alert("Editing Failed");
                    console.log(err);
                });
        } else {
            await axios
                .post(
                    `https://break-lounge-api-yrhd.onrender.com/category`,
                    formData,
                    config
                )
                .then((res) => {
                    this.getCategories();
                    this.toggleModal();
                })
                .catch((err) => {
                    alert("Adding Failed");
                    console.log(err);
                });
        }
    };

    handleImage = (e) => {
        this.setState({
            formData: {
                ...this.state.formData,
                [e.target.name]: e.target.files[0],
            },
        });
    };

    getCategories = async () => {
        await axios
            .get("https://break-lounge-api-yrhd.onrender.com/category")
            .then((res) => {
                this.setState({ category: res.data.response });
            })
            .catch((err) => {
                console.error(err);
            });
    };

    handleDelete = async (id) => {
        try {
            const token = cookies.get("access-token");
            if (token) {
                const config = {
                    headers: {
                        "access-token": token,
                    },
                };
                if (
                    !window.confirm(
                        "Are you sure you want to delete this category?"
                    )
                ) {
                    // If the user cancels the confirmation, do nothing
                    return;
                }
                await axios.delete(
                    `https://break-lounge-api-yrhd.onrender.com/category/${id}`,
                    config
                );
                this.getCategories();
                alert("Deleted Successfully");
            }
        } catch (err) {
            console.error(err);
        }
    };

    render() {
        return (
            <div>
                <section className="categories" id="categories">
                    <h1 className="heading">
                        our <span>categories</span>
                        <span className={`${this.state.showEdit}`}>
                            <button
                                className="btn btn-add"
                                onClick={this.toggleModal}
                            >
                                add
                            </button>
                        </span>
                    </h1>
                    <div className="box-container">
                        {this.state.category.map((category, index) => (
                            <div>
                                <div className="btn-modal">
                                    <button
                                        className={`btn ${this.state.showEdit}`}
                                        onClick={() =>
                                            this.handleDelete(category._id)
                                        }
                                    >
                                        delete
                                    </button>
                                    <button
                                        className={`btn ${this.state.showEdit}`}
                                        onClick={() => {
                                            this.toggleModal();
                                            this.setState({
                                                formData: category,
                                            });
                                        }}
                                    >
                                        edit
                                    </button>
                                </div>
                                <div key={category.id} className="box">
                                    <div className="image">
                                        <img
                                            src={`https://break-lounge-api-yrhd.onrender.com/${category.file}`}
                                            alt=""
                                        />
                                    </div>
                                    <div className="content">
                                        <h3>{category.name}</h3>
                                        <div className="stars">
                                            <i>
                                                <FaStar />
                                            </i>
                                            <i>
                                                <FaStar />
                                            </i>
                                            <i>
                                                <FaStar />
                                            </i>
                                            <i>
                                                <FaStar />
                                            </i>
                                            <i>
                                                <FaStarHalfAlt />
                                            </i>
                                        </div>
                                        <div className="price">
                                            {category.price}{" "}
                                            <span>{category.discount}</span>
                                        </div>
                                        <div
                                            onMouseOver={this.toggleEdit}
                                            // onMouseLeave={this.toggleOff}
                                            className="btn-fixer"
                                        >
                                            <div className="icons btn-icons">
                                                {/* <Link
                                                to="/"
                                                className="fas fa-shopping-cart btn"
                                            >
                                                <FaShoppingCart />
                                            </Link> */}
                                                <div className="btn">
                                                    <Link to="/categories">
                                                        view more
                                                    </Link>
                                                </div>
                                                {/* <Link
                                                to="/"
                                                className="fas fa-heart btn"
                                            >
                                                <FaHeart />
                                            </Link> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {this.state.isOpen && (
                            <div className="modal-overlay">
                                <div className="modal-content">
                                    <button
                                        className="close-model"
                                        onClick={() => {
                                            this.toggleModal();
                                        }}
                                    >
                                        <AiFillCloseCircle />
                                    </button>
                                    <h1>{this.state.formData.name}</h1>
                                    <div className="form-model">
                                        <div className="model-img">
                                            <img
                                                src={`https://break-lounge-api-yrhd.onrender.com/${this.state.formData.file}`}
                                                alt="img"
                                            />
                                            <input
                                                className="btn btn-upload"
                                                type="file"
                                                name="file"
                                                id="category-iamge"
                                                onChange={this.handleImage}
                                            />
                                        </div>
                                        <form
                                            className="form-controls"
                                            onSubmit={this.handleSubmit}
                                        >
                                            <input
                                                type="text"
                                                defaultValue={
                                                    this.state.formData.name
                                                }
                                                name="name"
                                                placeholder="name"
                                                onChange={this.handleChange}
                                            />
                                            <input
                                                type="text"
                                                defaultValue={
                                                    this.state.formData.price
                                                }
                                                name="price"
                                                placeholder="price"
                                                onChange={this.handleChange}
                                            />
                                            <button
                                                type="submit"
                                                className="btn"
                                            >
                                                submit
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        );
    }
}

export default Categories;
