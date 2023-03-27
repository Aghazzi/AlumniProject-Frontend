import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import AllRoutes from "./components/allroutes";

class App extends Component {
    render() {
        return (
            <div className="app">
                <BrowserRouter>
                    <AllRoutes />
                    <Footer />
                </BrowserRouter>
            </div>
        );
    }
}
export default App;
