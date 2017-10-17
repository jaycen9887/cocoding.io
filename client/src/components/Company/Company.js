import React from "react";

import "./Company.css"

const Company = () =>
<div>
    <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
            <div id="companiesDiv1">

                <div className="row">
                    <div className="row" id="howWorksTitle"></div>
                    <div className="row" id="howWorksTitle"></div>
                    <div className="row" id="howWorksTitle"></div>
                    <div className="row" id="howWorksTitle"></div>
                    <div className="col s6">
                        <h1 id="empowerText">"cocoding empowers companies by saving them time and money"</h1>
                        <h6 className="black-text" >-Meka Knepley, full stack developer</h6>
                    </div>
                    <div className="row" id="howWorksTitle"></div>
                    <h5 className="header col s12 light"><a className="btn modal-trigger pulse" data-target="signUpModal" href="#signUpModal">Start Now</a></h5>

                </div>
            </div>
        </div>

        <div className="parallax"><img src="img/companiesimage3.png" alt="Unsplashed background img 1"/></div>
    </div>

<div className="parallax-container valign-wrapper grey lighten-3 z-depth-3">
    <div className="section no-pad-bot">
        <div className="container">
            <div className="row" id="howWorksTitle">How Companies can use cocoding</div>
            <div className="row" id="howWorksTitle"></div>
            <div className="row">
                <div className="col s6">
                    <div className="card  teal lighten-1 z-depth-3">
                        <div className="card-content white-text">
                            <span className="card-title">Upskill</span>
                            <p>Even your most skilled developer still needs to be be current on the latest technology.
                                Companies could help their employees at the faction of the cost.</p>
                        </div>
                    </div>
                </div>
                <div className="col s6">
                    <div className="card  teal lighten-1 z-depth-3">
                        <div className="card-content white-text">
                            <span className="card-title">New Hire</span>
                            <p>New Hires can benefit from cocoding why receiving live feedback from their employers. Employers                                   will save valuable resources in preparing future employees with success.</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m6">
                    <div className="card  teal lighten-1 z-depth-3">
                        <div className="card-content white-text">
                            <span className="card-title">Cross Train</span>
                            <p>Employers can cross train employees to program in different languages which in turn save the company                                 money because they do not have to hire new people.I am a very simple card.</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m6">
                    <div className="card  teal lighten-1 z-depth-3">
                        <div className="card-content white-text">
                            <span className="card-title">Productivity</span>
                            <p>Employers can increase their productivity by having peer to peer code review without having to                                     schedule face to face meeting. Also, cutting down on travel time.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </div>
</div>


export default Company;
