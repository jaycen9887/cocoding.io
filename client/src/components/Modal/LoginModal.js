import React from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const LoginModal = (props) =>
    <Modal
        isOpen={props.isOpen}
        // onAfterOpen={afterOpenFn}
        onRequestClose={props.isClosed}
        // closeTimeoutMS={n}
        // style={customStyle}
        contentLabel="LoginModal">
    <div id="loginModal" className="modal modal-fixed-footer center authModal blue">
        <div id="loginBox">
            <div className="content">
                <div className="title">cocoding Login</div>
                <input id="loginUsername" type="text" placeholder="Coder Name"/>
                <input id="loginPassword" type="password" placeholder="Password"/>
                <input type="checkbox" id="rememberMe"/>
                <label for="rememberMe"></label><span>I have read and agree to the <a href="#">Terms of Use </a>and <a href="#">Privacy                Policy</a></span>
                <button id="loginSubmit">Sign In</button>
                <div className="social"> <span>or sign in with social media</span></div>
                <div className="buttons">
                    <button className="facebook"><i className="fa fa-facebook"></i>Facebook</button>
                    <button className="twitter"><i className="fa fa-twitter"></i>Twitter</button>
                    <button className="google"><i className="fa fa-google-plus"></i>Google</button>
                </div>
            </div>
        </div>
    </div>
        </Modal>
export default LoginModal;

