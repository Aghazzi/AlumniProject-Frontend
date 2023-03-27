import "./about.css";
import React, { Component } from "react";
import vd from "../about/vd.mp4";
import Nav from "../../components/nav";
// import { Products } from "./section";

export class About extends Component {
    render() {
        return (
            <>
                <Nav />
                {/* <Products /> */}
                <section className="about" id="about">
                    <div className="content">
                        <video
                            src={vd}
                            autoPlay
                            muted
                            loop
                            className="video-bg "
                        />
                        <div className="bg-overplay"></div>
                        <h2>Omnia incipit cum capulus et fumus...</h2>
                        <p>
                            Diem tuum incipias cum poculo capulus et fac per
                            diem tuum consolationis et umbilici sensum genera
                            optima fumi et saporis habemus, quae totum diem
                            refrigescant manere. Satus dies tuus cum capulus ac
                            finem cum delectamento capulus
                        </p>
                        {/* <div className="container">
      <div className="section1">vipses</div>
      <div className="section2">coffee</div>
      <div className="section3">food</div>
</div> */}
                    </div>
                </section>
            </>
        );
    }
}

export default About;
