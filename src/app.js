import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./Components/Header";
import Body from "./Components/Body";


const Footer = () => {
    return (
        <div className="footer">

        </div>
    );
}

const AppLayOut = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut />);