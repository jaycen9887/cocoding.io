import React from "react";

const SignUpModal = () =>
    <div id="signUpModal" className="modal modal-fixed-footer center authModal blue">
        <div id="signUpBox">
            <div className="content">
                <div className="title">cocoding Sign Up</div>
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
