/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import Logo from "../img/Break-lounge-logo.png";
import Cookies from "universal-cookie";
import { Navigate } from "react-router-dom";

const cookies = new Cookies();

class Nav extends React.Component {
    state = {
        tokenExist: false,
    };

    componentDidMount() {
        if (cookies.get("access-token")) {
            this.setState({
                tokenExist: true,
            });
        } else {
            this.setState({
                tokenExist: false,
            });
        }
    }
    menuButton() {
        document
            .getElementsByClassName("nav-container")[0]
            .classList.toggle("nav-change");
        document
            .getElementsByClassName("nav-navigation")[0]
            .classList.toggle("nav-show");
        document
            .getElementsByClassName("nav-whole-nav")[0]
            .classList.toggle("nav-vertical");
    }

    handleLogOut(e) {
        cookies.remove("access-token");
        cookies.remove("role");
        this.setState({ tokenExist: false });
    }

    isLoggedIn() {
        if (this.state.tokenExist) {
            return (
                <>
                    <Link
                        to="/"
                        className="nav-login"
                        onClick={this.handleLogOut}
                    >
                        Logout
                    </Link>
                </>
            );
        } else {
            return (
                <>
                    <Link
                        to="/login"
                        className="nav-login"
                        onClick={(e) => this.menuButton()}
                    >
                        Login
                    </Link>
                    <Link
                        to="/register"
                        className="nav-register"
                        onClick={(e) => this.menuButton()}
                    >
                        Register
                    </Link>
                </>
            );
        }
    }
    render() {
        return (
            <div className="nav-main">
                <Link to="/">
                    <img src={Logo} alt="" className="nav-footer-logo batata" />
                </Link>
                <div className="nav-menu">
                    <div
                        className="nav-container"
                        onClick={(e) => this.menuButton()}
                    >
                        <div className="nav-bar1"></div>
                        <div className="nav-bar2"></div>
                        <div className="nav-bar3"></div>
                    </div>
                    <div className="nav-secondary">
                        <Link
                            to="/"
                            className="nav-home"
                            onClick={(e) => this.menuButton()}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="nav-about"
                            onClick={(e) => this.menuButton()}
                        >
                            About
                        </Link>
                        <Link
                            to="/categories"
                            className="nav-categories"
                            onClick={(e) => this.menuButton()}
                        >
                            Categories
                        </Link>
                        <Link
                            to="/products"
                            className="nav-products"
                            onClick={(e) => this.menuButton()}
                        >
                            Products
                        </Link>
                    </div>
                </div>
                <div className="nav-login-signup">{this.isLoggedIn()}</div>
            </div>
        );
    }
}

export default Nav;
