import React from "react";

const Room = () =>
<div>
    <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
            <div id="spaceDiv2"></div>
            <div className="row" id="texture">
                <div className="col s12">
                    <div className="row"></div>
                    <div className="row"></div>

                    <h5 className="black-text center" id="howWorksTitle">Create a classNameroom here</h5>
                    <hr/>
                        <div className="row"></div>
                </div>
                <div className="row">
                    <div className="col s3"></div>
                    <div className="col s3 m3 center">
                        <div className="card  white center">
                            <div className="card-content black-text hoverable z-depth-4">
                                <i className="large material-icons white" id="icons">person_add</i>
                                <span className="card-title">Create classNameroom</span>
                                <p>Create a new classNameroom by clicking the "Create" button. You can also delete a classNameroom by clicking                                 the "Delete" button.</p>
                            </div>
                            <div className="card-action">
                                <a href="/createroom">Create</a>
                                <a href="#">Delete</a>
                            </div>
                        </div>
                    </div>

                    <div className="col s3 m3">
                        <div className="card  white center">
                            <div className="card-content black-text center hoverable z-depth-4">
                                <i className="large material-icons white" id="icons">supervisor_account</i>
                                <span className="card-title">Join classNameroom</span>
                                <p></p>
                            </div>
                            {{#each rooms}}
                            <div className="card-action">
                                <a href="/terminal/{{id}}">OPEN ROOM {{id}}</a>
                                <a href="/deleteroom/{{id}}">DELETE {{id}}</a>
                            </div>
                            {{/each}}
                            {/* <!--<a href="#">This is a link</a>--> */}
                        </div>
                    </div>
                    <div className="col s3"></div>
                </div>



            </div>
        </div>
        <div id="spaceDiv"></div>
        <div className="parallax"><img src="img/roomimage4.png" alt="Unsplashed background img 1"/></div>
    </div>
</div>
export default Room;
