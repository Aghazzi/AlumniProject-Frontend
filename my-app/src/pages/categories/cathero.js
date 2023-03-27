import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./categories.css";

export class CatHero extends Component {
    scrollToSection = () => {
        const sectionElement = document.getElementById("Categoriess");
        sectionElement.scrollIntoView({ behavior: "smooth" });
    };
    render() {
        return (
            <div>
                <section className="home homee" id="home">
                    <div className="content">
                        <h3>fresh coffee in the morning</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Placeat labore, sint cupiditate distinctio
                            tempora reiciendis.
                        </p>
                        <button
                            onClick={this.scrollToSection}
                            href="#categories"
                            className="btn"
                        >
                            Shop Now
                        </button>
                    </div>
                </section>
            </div>
        );
    }
}
export default CatHero;
