import React from "react";
import "./SignUpModal.css"

const style = {
    overlay: {
    },
    content: {
        border: '0',
        // borderRadius: '4px',
        bottom: 'auto',
        left: '10%',
        // padding: '2rem',
        position: 'fixed',
        right: 'auto',
        top: '10%', // start from center
        width: '40%',
        maxWidth: '40rem',
        background: 'rgba(0,130,225,1)'
    }
};

const SignUpModal = () =>
    <div id="signUpModal" className="center blue">
        <div id="signUpBox">
            <div className="content">
                <div className="title">coCoding Sign Up</div>
                <input id="signUpUsername" type="text" placeholder="Coder Name"/>
                <input id="signUpPassword" type="password" placeholder="Password"/>
                <input type="checkbox" id="rememberMe"/>
                <label for="rememberMe"></label><span>I have read and agree to the <a href="#">Terms of Use </a>and <a href="#">Privacy                Policy</a></span>
                <button id="signUpSubmit">Sign Up</button>
                <div className="social"> <span>or sign in with social media</span></div>
                <div className="buttons">
                    <button className="facebook"><i className="fa fa-facebook"></i>Facebook</button>
                    <button className="twitter"><i className="fa fa-twitter"></i>Twitter</button>
                    <button className="google"><i className="fa fa-google-plus"></i>Google</button>
                </div>
            </div>
        </div>
    </div>

export default SignUpModal;
