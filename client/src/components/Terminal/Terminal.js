import React, { Component } from "react";
import {Button, Modal, Icon} from 'react-materialize';
import "./Terminal.css";
import axios from "axios";


class Terminal extends React.Component {
    render() {
        return (
            <div className="panel-container">

                <div className="panel-left">
                    left panel
                </div>

                <div className="splitter">
                </div>

                <div className="panel-right">

                    <div className="panel-container-vertical">
                        <div className="panel-top">

                            <div id="terminalBody">
                                <nav className="sideNav blue-grey darken-4">
                                    <a href="#" data-activates="slide-out" className="button-collapse show-on-large"><i class="small material-icons center"                     id="icons">apps</i></a>
                                    <br/>
                                        <i className="small material-icons center" id="icons">chat</i>
                                        <i className="small material-icons center" id="icons">voice_chat</i>
                                        <i className="small material-icons center" id="icons">person_add</i>
                                        <i className="small material-icons center" id="icons">directions_run</i>
                                        <a id="logo-container " href="#" class="brand-logo"></a>
                                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                                            <li><a href="#" id="isSignDiv"></a></li>
                                        </ul>
                                </nav>
                                <form id="preview-form">
                                    <textarea className="codemirror-textarea" name="editor-value" id="editor-value" rows="4" cols="10">&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;</textarea>
                                    <br/>
                                    {/*<!--<input type="submit" name="submit" id="submit" value="submit">-->*/}
                                </form>
                            </div>
                        </div>

                        {/*<!--<div id="preview" className="header col s8 light z-depth-3 liveTerminal">-->*/}

                        {/*<!--</div>-->*/}



                        <div className="splitter-horizontal">
                        </div>

                        <div className="panel-bottom">
                            bottom panel
                        </div>
                    </div>
                </div>
            </div>

    );
    }
}

export default Terminal;