/* eslint-disable no-useless-escape */
import React, { Component } from "react";
import "./register.css";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import Nav from "../../components/nav";
import axios from "axios";
import { Navigate } from "react-router-dom";

export class Register extends Component {
    state = {
        FullName: "",
        phoneNumber: "",
        city: "",
        street: "",
        email: "",
        password: "",
        password2: "",
        isRegistered: false,
    };

    FullNameRef = React.createRef();
    phoneNumberRef = React.createRef();
    cityRef = React.createRef();
    streetRef = React.createRef();
    emailRef = React.createRef();
    passwordRef = React.createRef();
    password2Ref = React.createRef();

    handleSubmit = async (e) => {
        e.preventDefault();
        this.checkInputs();
        const user = {
            email: this.state.email,
            password: this.state.password,
            fullName: this.state.FullName,
            street: this.state.street,
            city: this.state.city,
            phoneNumber: this.state.phoneNumber,
        };
        const response = await axios.post(
            "https://break-lounge-api-yrhd.onrender.com/user/signup",
            user
        );
        if (response && this.checkInputs()) {
            this.setState({
                isRegistered: true,
            });
        }
    };

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    };

    isEmail(email) {
        const re =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    handleEmail = (event) => {
        this.setState({ email: event.target.value });
    };

    checkInputs = () => {
        const {
            FullName,
            phoneNumber,
            city,
            street,
            email,
            password,
            password2,
        } = this.state;

        if (FullName.trim() === "") {
            this.setErrorFor(
                this.FullNameRef.current,
                "FullName cannot be blank"
            );
            // return false;
        } else {
            this.setSuccessFor(this.FullNameRef.current);
        }

        if (phoneNumber.trim() === "") {
            this.setErrorFor(
                this.phoneNumberRef.current,
                "Phone number cannot be blank"
            );
            // return false;
        } else {
            this.setSuccessFor(this.phoneNumberRef.current);
        }

        if (city.trim() === "") {
            this.setErrorFor(this.cityRef.current, "City cannot be blank");
            // return false;
        } else {
            this.setSuccessFor(this.cityRef.current);
        }

        if (street.trim() === "") {
            this.setErrorFor(this.streetRef.current, "Street cannot be blank");
            // return false;
        } else {
            this.setSuccessFor(this.streetRef.current);
        }

        if (email.trim() === "") {
            this.setErrorFor(this.emailRef.current, "Email cannot be blank");
            // return false;
        } else if (!this.isEmail(email.trim())) {
            this.setErrorFor(this.emailRef.current, "Not a valid email");
            return false;
        } else {
            this.setSuccessFor(this.emailRef.current);
        }

        if (password.trim() === "") {
            this.setErrorFor(
                this.passwordRef.current,
                "Password cannot be blank"
            );
            // return false;
        } else {
            this.setSuccessFor(this.passwordRef.current);
        }

        if (password2.trim() === "") {
            this.setErrorFor(
                this.password2Ref.current,
                "Password cannot be blank"
            );
            return false;
        } else if (password.trim() !== password2.trim()) {
            this.setErrorFor(
                this.password2Ref.current,
                "Passwords do not match"
            );
            return false;
        } else {
            this.setSuccessFor(this.password2Ref.current);
        }
        return true;
    };

    setErrorFor = (input, message) => {
        const errControl = input.parentElement;
        const small = errControl.querySelector("small");
        errControl.className = "form-control error";
        small.innerText = message;
    };

    setSuccessFor = (input) => {
        const formControl = input.parentElement;
        formControl.className = "form-control success";
    };

    render() {
        if (this.state.isRegistered) {
            return <Navigate to="/login" />;
        } else {
            return (
                <>
                    <Nav />
                    <div className="parent">
                        <div className="container">
                            <div className="header">
                                <h2>Create Account</h2>
                            </div>
                            <form
                                id="form"
                                className="form"
                                onSubmit={this.handleSubmit}
                            >
                                <div className="form-control">
                                    <label htmlFor="FullName">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        id="FullName"
                                        ref={this.FullNameRef}
                                        onChange={this.handleChange}
                                    />
                                    <i className="fa-check-circle">
                                        <FaCheckCircle
                                            className={this.formControl}
                                        />
                                    </i>
                                    <i className="fa-exclamation-circle">
                                        <FaExclamationCircle
                                            className={this.errControl}
                                        />
                                    </i>
                                    <small>{this.small}</small>
                                </div>
                                <div className="form-control">
                                    <label htmlFor="phoneNumber">Phone</label>
                                    <input
                                        type="tel"
                                        placeholder=""
                                        id="phoneNumber"
                                        ref={this.phoneNumberRef}
                                        onChange={this.handleChange}
                                        maxLength={8}
                                        minLength={8}
                                    />
                                    <i className="fa-check-circle">
                                        <FaCheckCircle
                                            className={this.formControl}
                                        />
                                    </i>
                                    <i className="fa-exclamation-circle">
                                        <FaExclamationCircle
                                            className={this.errControl}
                                        />
                                    </i>
                                    <small>{this.small}</small>
                                </div>
                                <div className="form-control">
                                    <label htmlFor="city">City</label>
                                    <input
                                        type="city"
                                        placeholder=""
                                        id="city"
                                        ref={this.cityRef}
                                        onChange={this.handleChange}
                                    />
                                    <i className="fa-check-circle">
                                        <FaCheckCircle
                                            className={this.formControl}
                                        />
                                    </i>
                                    <i className="fa-exclamation-circle">
                                        <FaExclamationCircle
                                            className={this.errControl}
                                        />
                                    </i>
                                    <small>{this.small}</small>
                                </div>
                                <div className="form-control">
                                    <label htmlFor="street">Street</label>
                                    <input
                                        type="street"
                                        placeholder=""
                                        id="street"
                                        ref={this.streetRef}
                                        onChange={this.handleChange}
                                    />
                                    <i className="fa-check-circle">
                                        <FaCheckCircle
                                            className={this.formControl}
                                        />
                                    </i>
                                    <i className="fa-exclamation-circle">
                                        <FaExclamationCircle
                                            className={this.errControl}
                                        />
                                    </i>
                                    <small>{this.small}</small>
                                </div>
                                <div className="form-control">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        placeholder=""
                                        id="email"
                                        ref={this.emailRef}
                                        onChange={this.handleChange}
                                    />
                                    <i className="fa-check-circle">
                                        <FaCheckCircle
                                            className={this.formControl}
                                        />
                                    </i>
                                    <i className="fa-exclamation-circle">
                                        <FaExclamationCircle
                                            className={this.formControl}
                                        />
                                    </i>
                                    <small>{this.small}</small>
                                </div>
                                <div className="form-control">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        placeholder=""
                                        id="password"
                                        ref={this.passwordRef}
                                        onChange={this.handleChange}
                                        minLength={8}
                                        maxLength={32}
                                    />
                                    <i className="fa-check-circle">
                                        <FaCheckCircle
                                            className={this.formControl}
                                        />
                                    </i>
                                    <i className="fa-exclamation-circle">
                                        <FaExclamationCircle
                                            className={this.formControl}
                                        />
                                    </i>
                                    <small>{this.small}</small>
                                </div>
                                <div className="form-control">
                                    <label htmlFor="password2">
                                        Password check
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="re-enter"
                                        id="password2"
                                        ref={this.password2Ref}
                                        onChange={this.handleChange}
                                    />
                                    <i className="fa-check-circle">
                                        <FaCheckCircle
                                            className={this.formControl}
                                        />
                                    </i>
                                    <i className="fa-exclamation-circle">
                                        <FaExclamationCircle
                                            className={this.formControl}
                                        />
                                    </i>
                                    <small>{this.small}</small>
                                </div>
                                <div className="btn-fixed">
                                    <button type="submit" className="btn">
                                        submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            );
        }
    }
}

export default Register;
