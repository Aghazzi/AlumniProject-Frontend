/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./ourProducts.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import product1 from "../../images/blog-1.jpeg";
import product2 from "../../images/blog-2.jpeg";
import product3 from "../../images/blog-3.jpeg";
import { AiFillCloseCircle } from "react-icons/ai";
import Cookies from "universal-cookie";
import axios from "axios";

const cookies = new Cookies();

export class Products extends Component {
    state = {
        isAdmin: false,
        showEdit: "hide-edit",
        isOpen: false,
        product: [],
        formData: {
            name: "",
            price: "",
            file: "",
            doneBy: "",
            description: "",
        },
    };

    componentDidMount() {
        if (cookies.get("role") === "admin") {
            this.setState({ isAdmin: true });
        } else {
            this.setState({ isAdmin: false });
        }
        this.getProducts();
    }

    toggleModal = () => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
            formData: {
                name: "",
                price: "",
                file: "",
                doneBy: "",
                description: "",
            },
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

    checkInputs = () => {
        return (
            this.state.formData.name &&
            this.state.formData.price &&
            this.state.formData.file &&
            this.state.formData.description &&
            this.state.formData.doneBy
        );
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        if (!this.checkInputs()) {
            return;
        }
        let token = cookies.get("access-token");
        if (token) {
            const config = {
                headers: {
                    "access-token": token,
                },
            };
            console.log(config);
            this.handleEdit(config);
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
            !this.state.formData.file ||
            !this.state.formData.doneBy ||
            !this.state.formData.description
        ) {
            error = "All fields are required.";
        }
        const formData = new FormData();
        formData.append("file", this.state.formData.file);
        formData.append("name", this.state.formData.name);
        formData.append("price", this.state.formData.price);
        formData.append("doneBy", this.state.formData.doneBy);
        formData.append("description", this.state.formData.description);

        if (error !== null) {
            alert(error);
        } else if (this.state.formData._id) {
            await axios
                .patch(
                    `https://break-lounge-api-yrhd.onrender.com/product/${this.state.formData._id}`,
                    formData,
                    config
                )
                .then((res) => {
                    this.getProducts();
                    this.toggleModal();
                })
                .catch((err) => {
                    alert("Editing Failed");
                    console.log(err);
                });
        } else {
            await axios
                .post(
                    "https://break-lounge-api-yrhd.onrender.com/product",
                    formData,
                    config
                )
                .then((res) => {
                    this.getProducts();
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
                file: e.target.files[0],
            },
        });
    };

    getProducts = async () => {
        await axios
            .get("https://break-lounge-api-yrhd.onrender.com/product")
            .then((res) => {
                this.setState({ product: res.data.response });
            })
            .catch((err) => {
                console.error(err);
            });
    };

    handleDeletes = async (id) => {
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
                    `https://break-lounge-api-yrhd.onrender.com/product/${id}`,
                    config
                );
                this.getProducts();
                alert("Deleted Successfully");
            }
        } catch (err) {
            console.error(err);
        }
    };

    render() {
        return (
            <div>
                <section className="products" id="products">
                    <h1 className="heading">
                        our <span>products</span>
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
                        {this.state.product.map((product, index) => (
                            <div>
                                <div className="btn-modal">
                                    <button
                                        className={`btn ${this.state.showEdit}`}
                                        onClick={() =>
                                            this.handleDeletes(product._id)
                                        }
                                    >
                                        delete
                                    </button>
                                    <button
                                        className={`btn ${this.state.showEdit}`}
                                        onClick={() => {
                                            this.toggleModal();
                                            this.setState({
                                                formData: product,
                                            });
                                        }}
                                    >
                                        edit
                                    </button>
                                </div>
                                <div key={product.id} className="box">
                                    <div className="image">
                                        <img
                                            src={`https://break-lounge-api-yrhd.onrender.com/${product.file}`}
                                            alt=""
                                        />
                                    </div>
                                    <div className="content">
                                        <span className="title">
                                            {product.name}
                                        </span>
                                        <span>{product.doneBy}</span>
                                        <p>{product.description}</p>
                                        <div
                                            className="btn-fixer"
                                            onMouseOver={this.toggleEdit}
                                        >
                                            <Link
                                                to="/products"
                                                className="btn"
                                            >
                                                view more
                                            </Link>
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
                                                        <h1>
                                                            {
                                                                this.state
                                                                    .formData
                                                                    .name
                                                            }
                                                        </h1>
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
                                                                    id="product-iamge"
                                                                    onChange={
                                                                        this
                                                                            .handleImage
                                                                    }
                                                                />
                                                            </div>
                                                            <form
                                                                className="form-controls"
                                                                onSubmit={
                                                                    this
                                                                        .handleSubmit
                                                                }
                                                            >
                                                                <input
                                                                    type="text"
                                                                    defaultValue={
                                                                        this
                                                                            .state
                                                                            .formData
                                                                            .name
                                                                    }
                                                                    name="name"
                                                                    placeholder="name"
                                                                    onChange={
                                                                        this
                                                                            .handleChange
                                                                    }
                                                                />
                                                                <input
                                                                    type="text"
                                                                    defaultValue={
                                                                        this
                                                                            .state
                                                                            .formData
                                                                            .price
                                                                    }
                                                                    name="price"
                                                                    placeholder="price"
                                                                    onChange={
                                                                        this
                                                                            .handleChange
                                                                    }
                                                                />
                                                                <input
                                                                    type="text"
                                                                    name="doneBy"
                                                                    placeholder="doneBy"
                                                                    defaultValue={
                                                                        this
                                                                            .state
                                                                            .formData
                                                                            .doneBy
                                                                    }
                                                                    onChange={
                                                                        this
                                                                            .handleChange
                                                                    }
                                                                />
                                                                <input
                                                                    type="text"
                                                                    name="description"
                                                                    placeholder="description"
                                                                    defaultValue={
                                                                        this
                                                                            .state
                                                                            .formData
                                                                            .description
                                                                    }
                                                                    onChange={
                                                                        this
                                                                            .handleChange
                                                                    }
                                                                />
                                                                <button
                                                                    className="btn"
                                                                    type="submit"
                                                                >
                                                                    submit
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        );
    }
}

export default Products;
