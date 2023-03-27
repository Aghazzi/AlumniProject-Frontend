import React, { Component } from "react";
import "./login.css";
import axios from "axios";
import Cookies from "universal-cookie";
import { Navigate } from "react-router-dom";
import Nav from "../../components/nav";

const cookies = new Cookies();

export class Login extends Component {
    state = {
        email: "",
        password: "",
        isLoggedIn: false,
    };
    componentDidMount() {
        console.log(cookies);
        if (cookies.get("access-token")) {
        }
    }

    handleLogin = async (e, user) => {
        e.preventDefault();
        const response = await axios.post(
            "https://break-lounge-api-yrhd.onrender.com/user/login",
            user
        );
        this.setState({
            isLoggedIn: true,
        });

        cookies.set("access-token", response.data.token);
        cookies.set("role", response.data.role);
    };
    render() {
        if (cookies.get("access-token")) {
            return <Navigate to="/" />;
        } else {
            return (
                <>
                    <Nav />
                    <div className="form-wrapper">
                        <div className="main-form-admin">
                            <h1 className="form-admin">Welcome back</h1>
                            <form
                                onSubmit={(e) => {
                                    this.handleLogin(e, {
                                        email: this.state.email,
                                        password: this.state.password,
                                    });
                                }}
                            >
                                <input
                                    type="email"
                                    className="login-email"
                                    placeholder="Your Email"
                                    onChange={(e) => {
                                        this.setState({
                                            email: e.target.value,
                                        });
                                    }}
                                />
                                <br />
                                <input
                                    type="password"
                                    className="login-password"
                                    placeholder="Your Password"
                                    onChange={(e) => {
                                        this.setState({
                                            password: e.target.value,
                                        });
                                    }}
                                />
                                <br />
                                <input
                                    type="submit"
                                    className="btn"
                                    value="Submit"
                                />
                            </form>
                        </div>
                    </div>
                </>
            );
        }
    }
}

export default Login;
