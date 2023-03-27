import "./footer.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa";
import Logo from "../img/Break-lounge-logo.png";

export class Footer extends Component {
    render() {
        return (
            <section className="footer">
                <div className="share">
                    <Link
                        to="https://www.facebook.com/timaation"
                        target="_blank"
                        className="fab fa-facebook-f"
                    >
                        <FaFacebookF />
                    </Link>
                    <Link to="/" className="fab fa-twitter">
                        <FaTwitter />
                    </Link>
                    <Link
                        to="https://instagram.com/timaanation "
                        target="_blank"
                        className="fab fa-instagram"
                    >
                        <FaInstagram />
                    </Link>
                    <Link to="/" className="fab fa-linkedin">
                        <FaLinkedin />
                    </Link>
                </div>
                <div className="contact">
                    <h1>
                        Contact <span>us</span>
                    </h1>
                </div>
                <div className="credit">
                    <Link to="/logo">
                        <img src={Logo} alt="" className="nav-footer-logo" />
                    </Link>
                </div>
            </section>
        );
    }
}

export default Footer;
