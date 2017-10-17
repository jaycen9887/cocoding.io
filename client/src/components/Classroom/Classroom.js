import React, { Component } from "react";
import {Parallax} from 'react-materialize';
import "./Classroom.css"

class Classroom extends Component {
    render() {
        return (
<div>

        <div className="section no-pad-bot">
            <div id="signUpAndTagDiv">

                <div className="row">
                    <div className="row" id="howWorksTitle"></div>
                    <div className="row" id="howWorksTitle"></div>
                    <div className="row" id="howWorksTitle"></div>
                    <div className="row" id="howWorksTitle"></div>
                    <div className="col s6">
                        <h1 id="empowerText">"I wanted to make cocoding to help coders learn without the hassle"</h1>
                        <h6 className="black-text" >-Jaycen Milling, Full Stack developer</h6>
                    </div>
                    <div className="row" id="howWorksTitle"></div>
                    <h5 className="header col s12 light"><a className="btn modal-trigger pulse" data-target="signUpModal" href="#signUpModal">Start                       Now</a></h5>

                </div>
            </div>
        </div>

{/*<Parallax imageSrc="img/rotbotbg.png" />*/}
    {/*     <!--<div className="parallax"><img src="img/rotbotbg.png" id="robotBg" alt="Unsplashed background img 3"/></div>--> */}

    <div className="section no-pad-bot">
        <div className="container">
            <div className="row" id="howWorksTitle">Why learn with cocoding?</div>
            <div className="row" id="howWorksTitle"></div>
            <div className="row" id="howWorksTitle"></div>
            <div className="row" id="howWorksTitle"></div>
            <div className="row" id="howWorksTitle"></div>
            <div className="row">
                <div className="col s4 center">
                    <i className="small material-icons black" id="icons">apps</i>
                    <h5 className="text-black">No Plugins</h5>
                    <p className="black-text"> Code without having to download any plugins</p>
                </div>
                <div className="col s4 center">
                    <i className="small material-icons black">apps</i>
                    <h5 className="text-black">Community</h5>
                    <p className="black-text center"> Use cocoding community to learn to code or simply to get better at coding.</p>
                </div>
                <div className="col s4 center">
                    <i className="small material-icons black">apps</i>
                    <h5 className="text-black">No Hassle</h5>
                    <p className="black-text">Learn to code with no hassles of finding the templates to start coding.</p>
                </div>
            </div>
            <div className="row">
                <div className="col s4 center">
                    <i className="small material-icons black">apps</i>
                    <h5 className="text-black">Live Video Chat</h5>
                    <p className="black-text">Be able to video chat with another coder from around the world.</p>
                </div>
                <div className="col s4 center">
                    <i className="small material-icons black">apps</i>
                    <h5 className="text-black">Instant Feedback</h5>
                    <p className="black-text">Live code and get instant feedback on your work.</p>
                </div>
                <div className="col s4 center">
                    <i className="small material-icons black">apps</i>
                    <h5 className="text-black">Endless languages</h5>
                    <p className="black-text">Choose from over a hundred languages and be able to pick the language that is right from                       you.</p>
                </div>
            </div>

        </div>
    </div>
    {/*<Parallax imageSrc="img/companiesimage.png" />*/}
    {/*<div className="parallax"><img src="img/companiesimage.png" alt="Unsplashed background img 1"/></div>*/}

    <div className="section no-pad-bot">
       {/*  <!--<div className="container">--> */}
        <div id="signUpAndTagDiv2">

            <div className="row">
                <div className="row" id="howWorksTitle"></div>
                <div className="row" id="howWorksTitle"></div>
                <div className="row" id="howWorksTitle"></div>
                <div className="row" id="howWorksTitle"></div>
                <div className="col s6">
                    <h1 id="empowerText">"cocoding is a good way people can code peer to peer."</h1>
                    <h6 className="black-text" ></h6>
                </div>
                <div className="row" id="howWorksTitle"></div>
                <h5 className="header col s12 light"><a className="btn modal-trigger pulse" data-target="signUpModal" href="#signUpModal">Start Now</a></h5>

            </div>
        </div>
    </div>

</div>
        );
    }
}

export default Classroom;
