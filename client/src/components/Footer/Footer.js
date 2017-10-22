import React from "react";

const Footer = () =>
    <footer className="page-footer blue-grey darken-4">
        <div className="container">
            <div className="row">
                <div className="col l6 s12">
                    <h5 className="white-text">coCoding</h5>
                    <p>Write, run, and debug your code with our powerful coCoding IDE. Collaborate on your workspaces publicly, or keep it private. The choice is yours!</p>
                </div>
                <div className="col l3 s12">
                    <h5 className="white-text">About the team</h5>
                    <ul>
                        <li><a className="white-text" href="https://github.com/jaycen9887">Jacyen Milling</a></li>
                        <li><a className="white-text" href="https://github.com/mekaknepley">Meka Knepley</a></li>
                    </ul>
                </div>
                <div className="col l3 s12">
                    <h5 className="white-text">Contact Us</h5>
                    <ul>
                    <li>Email</li>
                    <li>FaceBook</li>
                    <li>Twitter</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <div className="container">
            </div>
        </div>

        <h6> © 2017 coCoding</h6>
    </footer>


export default Footer;
