import React from "react";

const Nav = () => (
    <nav className="blue-grey darken-4">
        <div className="nav-wrapper">
            <div id="navPosition">
                <img id="robotsSize"src="img/logorobot.png" alt="robotlogo"/>
                    <a id="logo-container " href="#" className="brand-logo">cocoding</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/companies">Companies</a></li>
                        <li><a href="/classNamerooms">classNamerooms</a></li>
                        <li><a className="btn modal-trigger" data-target="loginModal" href="#loginModal">Login</a></li>
                    </ul>
            </div>
        </div>
    </nav>
);

export default Nav;