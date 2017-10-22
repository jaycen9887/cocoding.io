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