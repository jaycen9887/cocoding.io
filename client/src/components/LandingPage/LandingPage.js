import React, { Component } from "react";
import {Parallax} from 'react-materialize';
import "./LandingPage.css"
import axios from "axios";
import Footer from "../Footer";
import Nav from "../Nav";


class LandingPage extends Component {
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
        axios.post('/signup', {
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
            console.log( "Sign Up Fail" );
        });
    }

    render() {
        return (
            <div>
                <Nav />
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

                <div className="parallax-container valign-wrapper  teal accent-1" id="coolFeatureDiv">
                    {/*teal accent-1*/}
                    <div className="section no-pad-bot">
                        <div className="container">
                            <div className="row center">
                                <h1 id="coolFeatureText">Cool Features</h1>
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
                                                    <img src="img/coCode.png"/>

                                                </div>
                                                <div className="card-content cyan accent-4">

                                                    <div className="row" id="head1">coCode</div>
                                                    <div className="row" id="head2">code with peeps</div>
                                                    <p id="head3">Code with other coders on projects. Its fun and easy just create a classroom and invite other coders to coCode with you.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div></div>
                                <div className="col s4"> <div className="row">
                                    <div className="col m12 m7">
                                        <div className="card z-depth-3 hoverable">
                                            <div className="card-image">
                                                <img src="img/theme.png"/>

                                            </div>
                                            <div className="card-content cyan accent-4">
                                                <div className="row" id="head1">Themes</div>
                                                <div className="row" id="head2">Colorful schemes</div>
                                                <p id="head3">Choose from over 30 themes to make your editor more colorful. Just pick the right schemes for your project.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div></div>
                                <div className="col s4"> <div className="row">
                                    <div className="col m12 m7">
                                        <div className="card z-depth-3 hoverable">
                                            <div className="card-image">
                                                <img src="img/chat.png"/>

                                            </div>
                                            <div className="card-content cyan accent-4">
                                                <div className="row" id="head1">Messaging</div>
                                                <div className="row" id="head2">Be able to chat with others</div>
                                                <p id="head3">coCoding allows coders to code and message live while you are coding. Be able to make changes faster and more efficient.</p>
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
                                                <img src="img/video.png"/>

                                            </div>
                                            <div className="card-content cyan accent-4">
                                                <div className="row" id="head1">Video Chat</div>
                                                <div className="row" id="head2">Be able to see the coder live</div>
                                                <p id="head3">Video chat face to face with other coders. This feature is great for interviews and off site coding.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div></div>
                                <div className="col s4"> <div className="row">
                                    <div className="col m12 m7">
                                        <div className="card z-depth-3 hoverable">
                                            <div className="card-image">
                                                <img src="img/database.png"/>

                                            </div>
                                            <div className="card-content cyan accent-4">
                                                <div className="row" id="head1">Database</div>
                                                <div className="row" id="head2">Create database faster</div>
                                                <p id="head3">create tables right in the editor. This features makes it so make and easier to space data in real time.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div></div>
                                <div className="col s4"> <div className="row">
                                    <div className="col m12 m7">
                                        <div className="card z-depth-3 hoverable">
                                            <div className="card-image">
                                                <img src="img/gitHub.png"/>

                                            </div>
                                            <div className="card-content cyan accent-4">
                                                <div className="row" id="head1">Github</div>
                                                <div className="row" id="head2">Be able to push to Github</div>
                                                <p id="head3">Be able to folk your coCoding project right to Github with just a click of a button and be able to pull your projects also.</p>
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

                <Parallax imageSrc="img/middlebg.png"/>

                <div className="langBox teal lighten-2">
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
                            <div className="row"></div>
                            <div className="row"></div>
                            <div className="row center">
                                {/*add video here*/}
                                <div class = "video-container" >
                                    <iframe width="640" height="360" src="https://www.powtoon.com/embed/bca98ppU5Jp/" frameborder="0"></iframe>
                                </div>
                                <div className="row"></div>
                                <div className="row"></div>
                                {/* <div className="col s12"id="div3Info"><h4>Start Learning to Code Today</h4></div> */}
                                <div className="row" id="howWorksTitle">Start coCoding Today</div>
                                <div className="row"></div>
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

