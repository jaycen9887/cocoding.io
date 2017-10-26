import React from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import axios from "axios";

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

class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loginUserName: '', loginPassword: ''};

        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleUserNameChange(event) { this.setState({loginUserName: event.target.value}); }
    handlePasswordChange(event) { this.setState({loginPassword: event.target.value}); }

    handleLoginClick = () => {
        //console.log('this is:', this);
        axios.post('/login', {
            params: {
                username: this.state.loginUserName,
                password: this.state.loginPassword
            }
        })
        .then(function(response) {
            console.log(response);
            //window.location.href = "/room";
        })
        .catch(function(error) {
            console.log( "Login Fail" );
        });
    }

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                // onAfterOpen={afterOpenFn}
                onRequestClose={this.props.isClosed}
                // closeTimeoutMS={n}
                style={style}
                contentLabel="#LoginModal">
                <div id="loginModal" className="center blue">
                    <div id="loginBox">
                        <div className="content">
                            <div className="title">coCoding Login</div>
                            <input id="loginUsername" onChange={this.handleUserNameChange} type="text" placeholder="Coder Name"/>
                            <input id="loginPassword" onChange={this.handlePasswordChange} type="password" placeholder="Password"/>
                            <input type="checkbox" id="rememberMe"/>
                            <label for="rememberMe"></label><span>I have read and agree to the <a
                            href="#">Terms of Use </a>and <a href="#">Privacy                Policy</a></span>
                            <button id="loginSubmit" onClick={this.handleLoginClick}>Sign In</button>
                            <div className="social"><span>or sign in with social media</span></div>
                            <div className="buttons">
                                <button className="facebook"><i className="fa fa-facebook"></i>Facebook</button>
                                <button className="twitter"><i className="fa fa-twitter"></i>Twitter</button>
                                <button className="google"><i className="fa fa-google-plus"></i>Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default LoginModal;

