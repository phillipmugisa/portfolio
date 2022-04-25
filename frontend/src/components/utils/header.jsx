import React from "react";

const Header = () => {
    return (
        <header>
            <ul className="container grid desktop">
                <li>
                    <a href="" className="btn tab active">Home</a>
                </li>
                <li>
                    <a href="" className="btn tab">Projects</a>
                </li>
                <li>
                    <a href="" className="logo">
                        <div className="grid place-center logo">
                            <div id="logo"></div>
                            <p className="logo-name btn tab logo-link">mugisathedev</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="" className="btn tab">Blog</a>
                </li>
                <li>
                    <a href="" className="btn tab bg-primary txt-white ">Hire Me</a>
                </li>
            </ul>
        </header>
    );
}
 
export default Header;