import React, { Component } from "react";
import Tree from 'react-ui-tree';
import cx from 'classnames';
import {Icon} from "react-materialize";
import "./filetree.css";

class FileTree extends Component{
    constructor(props){
        super(props);

        this.state = {
            tree: {
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
            }
        }
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

    render(){
        return(
            <div>
                <div>
                    <span className="createFiles">
                        <a><Icon>insert_drive_file</Icon></a>
                        <a><Icon>create_new_folder</Icon></a>
                    </span>
                </div>
                <Tree
                    paddingLeft={20}
                    tree={this.state.tree}
                    onChange={this.handleChange}
                    isNodeCollapsed={this.isNodeCollapsed}
                    renderNode={this.renderNode}
                />
            </div>
        );
    }
}

export default FileTree;