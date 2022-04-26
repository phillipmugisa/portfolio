import React, { useEffect, useRef } from "react";

const Header = () => {

    const headerRef = useRef();

    useEffect(() => {

        window.addEventListener("scroll", function(){ 
            var st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > 10){
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
            <ul className="container grid mobile">
                <li>
                    <a href="" className="logo">
                        <div className="grid place-center logo">
                            <div id="logo"></div>
                            <p className="logo-name btn tab logo-link">mugisathedev</p>
                        </div>
                    </a>
                </li>
            </ul>
        </header>
    );
}
 
export default Header;