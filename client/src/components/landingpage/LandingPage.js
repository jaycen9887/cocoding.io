import React from "react";

const LandingPage = () =>
    <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
            <!--<div className="container">-->
            <div id="signUpAndTagDiv">

                <div className="row">
                    <div className="col s6">
                        <div id="signUpBoxMainPage">
                            <div className="content">
                                <div className="title">Coder Sign Up</div>
                                <input id="signUpUsernameMainPage" type="text" placeholder="Coder Name"/>
                                <input id="signUpPasswordMainPage" type="password" placeholder="Password"/>
                                <input type="checkbox" id="rememberMe"/>
                                <label for="rememberMe"></label><span>I have read and agree to the <a href="#">Terms of Use </a>and <a href="#">Privacy Policy</a></span>
                                <button id="signUpSubmitMainPage">Create Account</button>
                                <div className="social"> <span>or sign up with social media</span></div>
                                <div className="buttons">
                                    <button className="facebook"><i className="fa fa-facebook"></i>Facebook</button>
                                    <button className="twitter"><i className="fa fa-twitter"></i>Twitter</button>
                                    <button className="google"><i className="fa fa-google-plus"></i>Google</button>
                                </div>
                                <div className="already">Already have an account? <a className="modal-trigger" data-target="loginModal" href="#loginModal">Sign In</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="col s6">
                        <p id="tagLine"><strong>All the <u>tools</u><br> you need
                            to code<br> on one website</strong></p>
                        <p id="tagLine2">cocoding offers free file sharing,<br> choose from over 100 languages.<br> Learn to code and be able to access<br>the tools needed for development anywhere, <br>anytime with no installations required.  <br> </p>

                    </div>

                </div>
            </div>
        </div>

        <div className="parallax"><img src="img/layingimage.png" alt="Unsplashed background img 1"/></div>
    </div>

<div className="blue-grey lighten-4">
    <div className="container ">
        <div className="section ">

            <!--   Icon Section   -->
            <div className="row" id="howWorksTitle">How cocoding Works</div>
            <div className="row ">
                <div className="col s12 m4">
                    <div className="icon-block">
                        <!--<h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>-->
                        <h5 className="center">Sign up and share your screen with others</h5>

                    </div>
                </div>

                <div className="col s12 m4">
                    <div className="icon-block">
                        <h5 className="center">Code in over 100 languages without downloading plugins</h5>
                    </div>
                </div>

                <div className="col s12 m4">
                    <div className="icon-block">
                        <!--<h2 className="center brown-text"><i className="material-icons">settings</i></h2>-->
                        <h5 className="center">just save your files to the cocoding cloud.</h5>

                    </div>
                </div>
            </div>        <div className="row ">
            <div className="col s12 m4">
                <div className="icon-block center">

                    <img className="z-depth-4"id="image1"src="img/step1image.png"  alt="imageforstep1"/>
                </div>
            </div>

            <div className="col s12 m4">
                <div className="icon-block center">

                    <img className="z-depth-4"id="image1"src="img/step3image.png" alt="imageforstep1"/>
                </div>
            </div>

            <div className="col s12 m4">
                <div className="icon-block center">

                    <img className="z-depth-4" id="image1"src="img/step4image.png" alt="imageforstep1"/>
                </div>
            </div>
        </div>

        </div>
    </div>
</div>


<div className="parallax-container valign-wrapper">
    <div className="section no-pad-bot">
        <div className="container">
            <div className="row center">
                <h5 className="header col s12 light"></h5>
            </div>
        </div>
    </div>
    <div className="parallax blue-grey darken-2"><img src="img/codebg.png" alt="Unsplashed background img 2"/></div>
</div>

<div className="langBox blue-grey darken-4">
    <div className="container ">
        <div className="section">
            <div className="row ">
                <div className="col s12 center">
                    <h3><i className="mdi-content-send brown-text"></i></h3>
                    <h4>cocoding offers over 100 different coding languages</h4>
                    <h4>Be able code with others with all the languages in one file</h4>
                    <p className="left-align light"></p>
                </div>
            </div>

        </div>
    </div>
</div>

<div className="parallax-container valign-wrapper blue-grey lighten-3">
    <div className="section no-pad-bot">
        <div className="container">
            <div className="row center">
                {/*add video here*/}
                <div className="col s12"id="div3Info"></div>
                <div className="col s12"id="div3Info"></div>
                <!--<div className="col s12"id="div3Info"><h4>Start Learning to Code Today</h4></div>-->
                <div className="row" id="howWorksTitle">Start Learning to Code Today</div>
                <h5 className="header col s12 light"><a className="btn modal-trigger pulse" data-target="signUpModal" href="#signUpModal">Start                       Now</a></h5>
            </div>
        </div>
    </div>
</div>


export default LandingPage;
