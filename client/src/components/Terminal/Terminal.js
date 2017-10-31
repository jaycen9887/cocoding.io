import React, { Component } from "react";

import {Tabs, Tab, Col, Row, Input} from 'react-materialize';
import Tree from '../FileTree';
import "./Terminal.css";
import * as firebase from 'firebase';
import "firebase/database";
import dbapp from "../../Config/firebaseConfig";
//import axios from "axios";
//import Editor from "./editor"; 
//import {VertSplitter, HorizSplitter} from "../Splitter";
import Editor from "../Editor";
import SQLEditor from "../SqlEditor";
import CCSideNav from "../CCSideNav";
import {SideNav, SideNavItem, Button, Icon} from 'react-materialize';
import LiveMode from "../LiveMode";



class Terminal extends Component {

    constructor(props) {
        super(props);

        //this.terminalApp = firebase.initializeApp(DB_CONFIG);
        this.path = this.props.location.pathname.split('/');
        this.currentLocation = this.path[this.path.length - 1];
        this.roomsdb = dbapp.database().ref().child(this.currentLocation);

        this.state = {
            active: null,
            //tree: tree,
            editorHeight: 400,
            editorWidth: window.innerWidth,
            value: "",
            theme: "rubyblue",
            mode: "javascript",
            sqlOutput: "",
        };

        this.editorValue = "";
        this.theme = "rubyblue";
        this.mode = "javascript";
    }

    componentWillMount = () => {
        const previousValue = this.state.value;
        //console.log(this.roomsdb);

        /* this.database.on('child_added', snap ) */
        
    }

    query = () => {
        let command = this.refs.editor.getCode();
        

        this.refs.SQLOutput.runQuery(command);
    }

    editorOnChange(value) {
       // console.log("########################");
        this.editorValue = value;
        //console.log(this.editorValue);
      }
    

    getEditorCode = () => {
       //return this.refs.editor.getCode();
    }

    render() {
        return (
            <div className="panel-container">

                <div className="panel-left">
                    <Tree />
                </div>
                {/* <VertSplitter /> */}
                 <div className="splitter">
                </div>

                <div className="panel-right">

                    <div className="panel-container-vertical">
                        <div className="panel-top">

                            <div id="terminalBody">

                                <CCSideNav />

                                {/*<nav className="sideNav blue-grey darken-4">*/}
                                    {/*<a href="#" data-activates="slide-out" className="button-collapse show-on-large"><i class="small material-icons center" id="icons">apps</i></a>*/}
                                    {/*<br/>*/}

                                        {/*<i className="small material-icons center" id="icons">chat</i>*/}
                                        {/*<i className="small material-icons center" id="icons">voice_chat</i>*/}
                                        {/*<i className="small material-icons center" id="icons">person_add</i>*/}
                                        {/*<i className="small material-icons center" id="icons" onClick={this.query}>directions_run</i>*/}
                                        {/*<a id="logo-container " href="#" class="brand-logo"></a>*/}
                                        {/*<ul id="nav-mobile" class="right hide-on-med-and-down">*/}
                                            {/*<li><a href="#" id="isSignDiv"></a></li>*/}
                                        {/*</ul>*/}

                                    {/*<SideNav className="sideNav"*/}
                                             {/*trigger={<a href="#" data-activates="slide-out" className="button-collapse show-on-large"><i class="small material-icons center" id="icons">apps</i></a>}*/}
                                             {/*options={{ closeOnClick: true }}*/}
                                    {/*>*/}

                                    {/*<ul id="slide-out" class="side-nav grey darken-1">*/}
                                        {/*<h3 class="black-text center">Settings</h3>*/}
                                        {/*<hr/>*/}
                                            {/*<h5 className="black-text">Syntax</h5>*/}
                                            {/*<select className="browser-default grey darken-1">*/}
                                                {/*<option value="" disabled selected>Choose your syntax</option>*/}
                                                {/*<option value="#APL">APL</option>*/}
                                                {/*<option value="#ASN-1">ASN.1</option>*/}
                                            {/*</select>*/}
                                        {/*<h5 className="black-text">Theme</h5>*/}
                                        {/*<select className="browser-default grey darken-1">*/}
                                            {/*<option value="" disabled selected>Choose your theme</option>*/}
                                            {/*<option value="#default">default</option>*/}
                                        {/*</select>*/}
                                    {/*</ul>*/}
                                        {/*</SideNav>*/}
                                {/*</nav>*/}



                                <Editor ref="editor" onChange={() => this.handlethischange} roomsdb={this.currentLocation} width={this.state.editorWidth} height={this.state.editorHeight} readOnly={false} id='editor' lineNumbers={true}/>

                                {/* <Editor
                                    className="codemirror-textarea"
                                    theme={"rubyblue"}
                                    readOnly={false}
                                />
                                  <form id="preview-form">
                                    <textarea className="codemirror-textarea" name="editor-value" id="editor-value" rows="4" cols="10">&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;</textarea>
                                    <br/>
                                </form> */}
                            </div>
                        </div>

                        {/*<!--<div id="preview" className="header col s8 light z-depth-3 liveTerminal">-->*/}

                        {/*<!--</div>-->*/}


                        {/*<HorizSplitter />*/}
                         <div className="splitter-horizontal">
                        </div>

                        <div className="panel-bottom">
                            <div className='command'>
                                <Tabs>
                                    <Tab title="Output" id="output-tab" active><SQLEditor ref="SQLOutput"/></Tab>
                                    <Tab title="Terminal" id="terminal-tab">Testing {/* <Editor ref="cmd" readOnly={false} id="cmd" height={this.state.editorHeight} lineNumbers={false}/> */}</Tab>
                                    <Tab title="Live Mode" id="live-tab"><LiveMode html={this.editorValue}/></Tab>
                                </Tabs>
                            </div>
                            <div className="splitter-vertical"/>
                            <div>
                                
                            </div>    
                        </div>
                    </div>
                </div>
            </div>

    );
    }
}

export default Terminal;