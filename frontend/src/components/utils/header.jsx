import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const headerRef = useRef();

    useEffect(() => {

        window.addEventListener("scroll", function(){ 
            if  (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                headerRef.current.classList.add('elevated')
            }
            else
            {
                headerRef.current.classList.remove('elevated')
            }
        }, false);
         

    }, [])

    return (
        <header ref={headerRef}>
            <ul className="container grid desktop">
                <li>
                    <Link to="/" className="btn tab active">Home</Link>
                </li>
                <li>
                    <Link to="/" className="btn tab">Projects</Link>
                </li>
                <li>
                    <Link to="/" className="logo">
                        <div className="grid place-center logo">
                            <div id="logo"></div>
                            <p className="logo-name btn tab logo-link">mugisathedev</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="btn tab">Blog</Link>
                </li>
                <li>
                    <Link to="/" className="btn hire tab bg-primary txt-white ">Hire Me</Link>
                </li>
            </ul>
            <ul className="container grid mobile">
                <li>
                    <Link to="/" className="logo">
                        <div className="grid place-center logo">
                            <div id="logo"></div>
                            <p className="logo-name btn tab logo-link">mugisathedev</p>
                        </div>
                    </Link>
                </li>
            </ul>
        </header>
    );
}
 
export default Header;
