import React, { Component } from "react";
import cx from 'classnames';
import {Button, Modal, Icon} from 'react-materialize';
import Tree from 'react-ui-tree';
import "./Terminal.css";
import axios from "axios";
import Editor from "./editor"; 

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

class Terminal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: null,
            tree: tree
        };
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
            >
        {node.module}
      </span>
        );
    };

    onClickNode = node => {
        this.setState({
            active: node
        });
    };

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

                                <Editor 
                                    className="codemirror-textarea"
                                    theme={"rubyblue"}
                                    readOnly={false}
                                />
                                 {/* <form id="preview-form">
                                    <textarea className="codemirror-textarea" name="editor-value" id="editor-value" rows="4" cols="10">&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;</textarea>
                                    <br/>
                                    
                                </form>  */}
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