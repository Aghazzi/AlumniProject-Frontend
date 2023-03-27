import { Component } from "react";
import { Link } from "react-router-dom";
import "../categories/categories.css";
import pr1 from "../../images/product-1.png";
import pr2 from "../../images/product-2.png";
import pr3 from "../../images/product-3.png";
import Cookies from "universal-cookie";
import { AiFillCloseCircle } from "react-icons/ai";

const cookies = new Cookies();

class CoffeProduct extends Component {
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
        const CoffeePro = [
            {
                name: "Product Name",
                image: pr1,
                price: "$25.99",
                dis: "$30.00",
            },
            {
                name: "Product Name",
                image: pr2,
                price: "$25.99",
                dis: "$30.00",
            },
            {
                name: "Product Name",
                image: pr3,
                price: "$25.99",
                dis: "$30.00",
            },
        ];
        return (
            <div>
                <section className="categories coffee" id="Coffee">
                    <h1 className="heading">
                        our <span>Coffee</span>
                    </h1>
                    <div className="box-container">
                        {CoffeePro.map((coffee, index) => (
                            <div className="box">
                                <div className="image">
                                    <img src={coffee.image} alt="" />
                                </div>
                                <div className="content">
                                    <h3>{coffee.name}</h3>
                                </div>
                                <div className="price">
                                    {coffee.price} <span>{coffee.dis}</span>
                                </div>
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
                                                            src={coffee.image}
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
                    {/* second row  */}
                    <div className="box-container">
                        {CoffeePro.map((coffee, index) => (
                            <div key={index} className="box">
                                <div className="image">
                                    <img src={coffee.image} alt="" />
                                </div>
                                <div className="content">
                                    <h3>{coffee.name}</h3>
                                </div>
                                <div className="price">
                                    {coffee.price} <span>{coffee.dis}</span>
                                </div>
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
                                                            src={coffee.image}
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
                        <Link to="/products" className=" btn">
                            View More Product
                        </Link>
                    </div>
                </section>
            </div>
        );
    }
}

export default CoffeProduct;
