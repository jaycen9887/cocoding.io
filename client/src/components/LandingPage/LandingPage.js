import React, { Component } from "react";
import {Parallax} from 'react-materialize';
import "./LandingPage.css"
import axios from "axios";
import Footer from "../Footer"


class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {signUpUserName: '', signUpPassword: ''};

        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleUserNameChange(event) { this.setState({signUpUserName: event.target.value}); }
    handlePasswordChange(event) { this.setState({signUpPassword: event.target.value}); }

    handleSignUpClick = () => {
        //console.log('this is:', this);
        axios.post('/login', {
            params: {
                username: this.state.signUpUserName,
                password: this.state.signUpPassword
            }
        })
        .then(function(response) {
            //console.log(response);
            window.location.href = "/room";
        })
        .catch(function(error) {
            console.log( "Login Fail" );
        });
    }

    render() {
        return (
            <div>

                <div className="section no-pad-bot">
                    {/* <div className="container"> */}
                    <div id="layingimageDiv">

                        <div className="row">
                            <div className="col s6">
                                <div id="signUpBoxMainPage">
                                    <div className="content">
                                        <div className="title">Coder Sign Up</div>
                                        <input onChange={this.handleUserNameChange} id="signUpUsernameMainPage" type="text" placeholder="Coder Name"/>
                                        <input onChange={this.handlePasswordChange} id="signUpPasswordMainPage" type="password" placeholder="Password"/>
                                        <input type="checkbox" id="rememberMe"/>
                                        <label for="rememberMe"></label><span>I have read and agree to the <a
                                        href="#">Terms of Use </a>and <a href="#">Privacy Policy</a></span>
                                        <button id="signUpSubmitMainPage" onClick={this.handleSignUpClick}>Create Account</button>
                                        <div className="social"><span>or sign up with social media</span></div>
                                        <div className="buttons">
                                            <button className="facebook"><i className="fa fa-facebook"></i>Facebook
                                            </button>
                                            <button className="twitter"><i className="fa fa-twitter"></i>Twitter
                                            </button>
                                            <button className="google"><i className="fa fa-google-plus"></i>Google
                                            </button>
                                        </div>
                                        <div className="already">Already have an account? <a
                                            className="modal-trigger" data-target="loginModal" href="#loginModal">Sign
                                            In</a></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col s6">
                                <p id="tagLine"><strong>All the <u>tools</u><br/> you need
                                    to code<br/> on one website</strong></p>
                                <p id="tagLine2">coCoding offers free file sharing,<br/> choose from over 100
                                    languages.<br/> Learn to code and be able to access<br/>the tools needed for
                                    development anywhere, <br/>anytime with no installations required. <br/></p>

                            </div>
                        </div>
                    </div>
                </div>

                {/*<Parallax imageSrc="img/layingimage.png" />*/}

                <div className="z-depth-4 white">
                    <div className="container ">
                        <div className="section ">

                            {/*  Icon Section */}
                            <div className="row" id="howWorksTitle">How coCoding Works</div>
                            <div className="row ">
                                <div className="col s12 m4">
                                    <div className="icon-block">
                                        {/* <h2 className="center brown-text"><i            className="material-icons">flash_on</i></h2> */}
                                        <h5 className="center">Sign up and share your screen with others</h5>

                                    </div>
                                </div>

                                <div className="col s12 m4 ">
                                    <div className="icon-block">
                                        <h5 className="center">Code in over 100 languages without downloading
                                            plugins</h5>
                                    </div>
                                </div>

                                <div className="col s12 m4">
                                    <div className="icon-block">
                                        {/* <h2 className="center brown-text"><i className="material-icons">settings</i></h2> */}
                                        <h5 className="center">just save your files to the coCoding cloud.</h5>

                                    </div>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col s12 m4">
                                    <div className="icon-block center">

                                        <img className="z-depth-4" id="image1" src="img/step1image.png"
                                             alt="imageforstep1"/>
                                    </div>
                                </div>

                                <div className="col s12 m4">
                                    <div className="icon-block center">

                                        <img className="z-depth-4" id="image1" src="img/step3image.png"
                                             alt="imageforstep1"/>
                                    </div>
                                </div>

                                <div className="col s12 m4">
                                    <div className="icon-block center">

                                        <img className="z-depth-4" id="image1" src="img/step4image.png"
                                             alt="imageforstep1"/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/*<div id="codebgDiv">*/}

                <div className="parallax-container valign-wrapper blue-grey lighten-2">
                    <div className="section no-pad-bot">
                        <div className="container">
                            <div className="row center">
                                <h1 id="howWorksTitle">Cool Features</h1>
                            </div>
                            {/*<!--<div className="row center">-->*/}
                            {/*<!--<h5 className="header col s12 light"></h5>-->*/}
                            {/*<!--</div>-->*/}
                            <div className="row center">
                                <div className="col s4">
                                    <div className="row ">
                                        <div className="col m12 m7 ">
                                            <div className="card z-depth-3 hoverable">
                                                <div className="card-image">
                                                    <img src="img/step3image.png"/>

                                                </div>
                                                <div className="card-content blue">
                                                    <h4>coCode</h4>
                                                    <p>I am a very simple card. I am good at containing small bits of information.
                                                        I am convenient because I require little markup to use effectively.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div></div>
                                <div className="col s4"> <div className="row">
                                    <div className="col m12 m7">
                                        <div className="card z-depth-3 hoverable">
                                            <div className="card-image">
                                                <img src="img/step3image.png"/>

                                            </div>
                                            <div className="card-content blue">
                                                <h4>Themes</h4>
                                                <p>I am a very simple card. I am good at containing small bits of information.
                                                    I am convenient because I require little markup to use effectively.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div></div>
                                <div className="col s4"> <div className="row">
                                    <div className="col m12 m7">
                                        <div className="card z-depth-3 hoverable">
                                            <div className="card-image">
                                                <img src="img/step3image.png"/>

                                            </div>
                                            <div className="card-content blue">
                                                <h4>Chat</h4>
                                                <p>I am a very simple card. I am good at containing small bits of information.
                                                    I am convenient because I require little markup to use effectively.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div></div>
                            </div>
                            <div className="row center">
                                <div className="col s4"> <div className="row">
                                    <div className="col m12 m7">
                                        <div className="card z-depth-3 hoverable">
                                            <div className="card-image">
                                                <img src="img/step3image.png"/>

                                            </div>
                                            <div className="card-content blue">
                                                <h4>Video Chat</h4>
                                                <p>I am a very simple card. I am good at containing small bits of information.
                                                    I am convenient because I require little markup to use effectively.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div></div>
                                <div className="col s4"> <div className="row">
                                    <div className="col m12 m7">
                                        <div className="card z-depth-3 hoverable">
                                            <div className="card-image">
                                                <img src="img/step3image.png"/>

                                            </div>
                                            <div className="card-content blue">
                                                <h4>Database</h4>
                                                <p>I am a very simple card. I am good at containing small bits of information.
                                                    I am convenient because I require little markup to use effectively.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div></div>
                                <div className="col s4"> <div className="row">
                                    <div className="col m12 m7">
                                        <div className="card z-depth-3 hoverable">
                                            <div className="card-image">
                                                <img src="img/step3image.png"/>

                                            </div>
                                            <div className="card-content blue">
                                                <h4>Push to Git</h4>
                                                <p>I am a very simple card. I am good at containing small bits of information.
                                                    I am convenient because I require little markup to use effectively.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div></div>
                            </div>
                        </div>
                    </div>
                    {/*<div className="parallax blue-grey darken-2"><img src="img/codebg.png" alt="Unsplashed background img 2"/>*/}
                    {/*</div>*/}
                </div>

                <Parallax imageSrc="img/codebg.png"/>

                <div className="langBox blue-grey darken-4">
                    <div className="container ">
                        <div className="section">
                            <div className="row ">
                                <div className="col s12 center">
                                    <h3><i className="mdi-content-send brown-text"></i></h3>
                                    <h4>coCoding offers over 100 different coding languages</h4>
                                    <h4>Be able code with others with all the languages in one file</h4>
                                    <p className="left-align light"></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="parallax-container valign-wrapper white">
                    <div className="section no-pad-bot">
                        <div className="container">
                            <div className="col s12" id="div3Info"></div>

                            <div className="row center">
                                {/*add video here*/}
                                <div class = "video-container" >
                                    <iframe width = "540" height = "500"
                                            src = "https://www.youtube.com/embed/Q8TXgCzxEnw?rel=0"
                                            frameborder = "0" allowfullscreen ></iframe>
                                </div>
                                <div className="col s12" id="div3Info"></div>
                                {/* <div className="col s12"id="div3Info"><h4>Start Learning to Code Today</h4></div> */}
                                <div className="row" id="howWorksTitle">Start coCoding Today</div>
                                <h5 className="header col s12 light"><a className="btn modal-trigger pulse"
                                                                        data-target="signUpModal" href="#signUpModal">Start
                                    Now</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        );
    }

}

export default LandingPage;

