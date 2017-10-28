import React, { Component } from "react";
import cx from 'classnames';
import {Tabs, Tab, Col, Row, Input} from 'react-materialize';
import Tree from 'react-ui-tree';
import "./Terminal.css";
import * as firebase from 'firebase';
import "firebase/database";
import dbapp from "../../Config/firebaseConfig";
//import axios from "axios";
//import Editor from "./editor"; 
//import {VertSplitter, HorizSplitter} from "../Splitter";
import Editor from "../Editor";
<<<<<<< HEAD
import SQLEditor from "../SqlEditor";
=======
import CCSideNav from "../CCSideNav"
import {SideNav, SideNavItem, Button, Icon} from 'react-materialize';
>>>>>>> 53f10efe23a2af0d3b313ba833d33414c1b02839

const tree = {
    module: 'react-ui-tree',
    children: [
        {
            module: 'dist',
            collapsed: true,
            children: [
                {
                    module: 'node.js',
                    leaf: true
                },
                {
                    module: 'react-ui-tree.css',
                    leaf: true
                },
                {
                    module: 'react-ui-tree.js',
                    leaf: true
                },
                {
                    module: 'tree.js',
                    leaf: true
                }
            ]
        },
        {
            module: 'example',
            children: [
                {
                    module: 'app.js',
                    leaf: true
                },
                {
                    module: 'app.less',
                    leaf: true
                },
                {
                    module: 'index.html',
                    leaf: true
                }
            ]
        },
        {
            module: 'lib',
            children: [
                {
                    module: 'node.js',
                    leaf: true
                },
                {
                    module: 'react-ui-tree.js',
                    leaf: true
                },
                {
                    module: 'react-ui-tree.less',
                    leaf: true
                },
                {
                    module: 'tree.js',
                    leaf: true
                }
            ]
        },
        {
            module: '.gitiignore',
            leaf: true
        },
        {
            module: 'index.js',
            leaf: true
        },
        {
            module: 'LICENSE',
            leaf: true
        },
        {
            module: 'Makefile',
            leaf: true
        },
        {
            module: 'package.json',
            leaf: true
        },
        {
            module: 'README.md',
            leaf: true
        },
        {
            module: 'webpack.config.js',
            leaf: true
        }
    ]
};

class Terminal extends Component {

    constructor(props) {
        super(props);

        //this.terminalApp = firebase.initializeApp(DB_CONFIG);
        this.path = this.props.location.pathname.split('/');
        this.currentLocation = this.path[this.path.length - 1];
        this.roomsdb = dbapp.database().ref().child(this.currentLocation);

        this.state = {
            active: null,
            tree: tree,
            editorHeight: 400,
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

    handleChange = tree => {
        this.setState({
            tree: tree
        });
    };


    renderNode = node => {
        return (
            <span
                className={cx('node', {
                    'is-active': node === this.state.active
                })}
                onClick={this.onClickNode.bind(null, node)}
                onDoubleClick={this.onDoubleClickNode.bind(null, node)}
            >
        {node.module}
      </span>
        );
    };

    onDoubleClickNode = node => {
        const { tree } = this.state;
        var newName = prompt("Rename this file", node.module);
        node.module = newName;
        this.setState({
            tree: tree
        });
    }

    onClickNode = node => {
        this.setState({
            active: node
        });
    };

    handlethischange = e => {
        console.log("HANDLE!!!!!!!!! " + e.target.value);
    }

    render() {
        return (
            <div className="panel-container">

                <div className="panel-left">
                    <Tree
                        paddingLeft={20}
                        tree={this.state.tree}
                        onChange={this.handleChange}
                        isNodeCollapsed={this.isNodeCollapsed}
                        renderNode={this.renderNode}
                    />
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
                                        {/*<i className="small material-icons center" id="icons">directions_run</i>*/}
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



                                <Editor ref="editor" onChange={() => this.handlethischange} roomsdb={this.currentLocation} height={this.state.editorHeight} readOnly={false} id='editor' lineNumbers={true}/>

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
                            <Tabs className='command'>
                                <Tab title="Output" id="output-tab"><SQLEditor ref="SQLOutput"/></Tab>
                                <Tab title="Terminal" id="terminal-tab">Testing {/* <Editor ref="cmd" readOnly={false} id="cmd" height={this.state.editorHeight} lineNumbers={false}/> */}</Tab>
                                <Tab title="Live Mode" id="live-tab"></Tab>
                            </Tabs>    
                        </div>
                    </div>
                </div>
            </div>

    );
    }
}

export default Terminal;