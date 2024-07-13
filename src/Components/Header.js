import { LOGO_URL } from "../Utils/constants"
import { useEffect, useState } from "react";

const Header = () => {
    const [btn, setbtn] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                    src={LOGO_URL}
                />
            </div>
            <div className="header-li">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button onClick={() => {
                        btn === "Login"
                            ? setbtn("LogOut")
                            : setbtn("Login")
                    }
                    }>
                        {btn}
                    </button>
                </ul>
            </div>
        </div>
    );
}

export default Header;