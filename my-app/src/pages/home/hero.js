import "./hero.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const slides = [
    {
        title: "fresh coffee in the morning",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat labore, sint cupiditate distinctio tempora reiciendis.",
        background: require("../../images/home-img.jpeg"),
    },
    {
        title: "delicious cakes for every taste",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat labore, sint cupiditate distinctio tempora reiciendis.",
        background: require("../../images/product-desc-img-coffee01.jpg"),
    },
    {
        title: "healthy snacks for on the go",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat labore, sint cupiditate distinctio tempora reiciendis.",
        background: require("../../images/about-img.jpeg"),
    },
];

export class Hero extends Component {
    state = {
        slide: 0,
        backgroundImg: [
            "url(../../images/home-img.jpeg)",
            "url(../../images/product-desc-img-coffee01.jpg)",
            "url(../../images/about-img.jpeg)",
        ],
    };

    handlePrevClick = () => {
        this.setState((state) => ({
            slide:
                state.slide === 0
                    ? state.backgroundImg.length - 1
                    : state.slide - 1,
        }));
    };

    handleNextClick = () => {
        this.setState((state) => ({
            slide:
                state.slide === state.backgroundImg.length - 1
                    ? 0
                    : state.slide + 1,
        }));
    };

    render() {
        return (
            <div>
                <section
                    className="home"
                    id="home"
                    style={{
                        backgroundImage: `url(${
                            slides[this.state.slide].background
                        })`,
                        backgroundSize: "cover",
                    }}
                >
                    <div className="content">
                        <h3>{slides[this.state.slide].title}</h3>
                        <p>{slides[this.state.slide].description}</p>
                        <Link to="/categories" href="#" className="btn">
                            get yours now
                        </Link>
                    </div>
                </section>
                <div className="slide-controls">
                    <button onClick={this.handlePrevClick} className="btn-arrow">
                        <AiOutlineArrowLeft />
                    </button>
                    <button onClick={this.handleNextClick} className="btn-arrow">
                        <AiOutlineArrowRight />
                    </button>
                </div>
            </div>
        );
    }
}

export default Hero;
