import React, { Component } from "react";
import Tree from 'react-ui-tree';
import cx from 'classnames';
import {Icon} from "react-materialize";
import "./filetree.css";
import * as firebase from "firebase";
import "firebase/database";
import "../../Config/firebaseConfig";

class FileTree extends Component{
    constructor(props){
        super(props);
        this.tree = {
            module: 'Presentation',
            children: []
        };
        this.state = {
            username: this.props.username,
            active: null,
            tree: this.tree,
        }

    }

    componentDidMount(){
        
        const userDb = firebase.database().ref().child(this.state.username);
        const uploads = userDb.child("uploads");

        uploads.on('value', snap => {

            this.tree["children"] = [];
            var value = snap.val();
           // console.log(value);
            for(var file in value){
                this.tree.children.push(this.checkFolder(value[file], file));
            }
           // console.log(this.tree);
        });
    }
    checkFolder = (itemChecking, name) => {
       
        var obj = {};
        //var obj = {};
        
        //console.log(itemChecking);
        
        if(itemChecking.type === "file"){
            obj["module"] = name + "." + itemChecking.fileType;
            obj["leaf"] = true;
        }else if(itemChecking.type === "folder"){
            obj["module"] = name;
            obj["collapsed"] = false;
            obj["children"] = [];

            //console.log(itemChecking);
            //console.log(Object.values(itemChecking));

           for(const child of Object.keys(itemChecking)){
              // console.log(child);
               //console.log(itemChecking[child]);
                if(typeof itemChecking[child] === 'object'){
                  obj["children"].push(this.checkFolder(itemChecking[child], child));
                }
            }
        }


        //this.tree["children"].push(obj);

        return obj;
    }

    handleChange = tree => {
        this.setState({
            tree: tree
        });
    }

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
        
        this.props.fileTreeChanged(node.module);
    };

    addFolder = () => {
        const userDb = firebase.database().ref().child(this.state.username);
        const uploads = userDb.child("uploads");
        //update database
        var obj = {};
        var folder = prompt("Name Folder");
        if(folder !== null){
            obj["module"] = folder;
            obj["collapsed"] = false;
            obj["children"] = [];
            this.tree["children"].push(obj);

            var updates = {};
            updates[folder + "/type"] = "folder";
            uploads.update(updates);

            this.setState({tree: this.tree});
        //update tree
        }
    }

    addFile = () => {
        const userDb = firebase.database().ref().child(this.state.username);
        const uploads = userDb.child("uploads");

        var obj = {};
        var file = prompt("Name File");
        if(file !== null) {
            obj["module"] = file;
            obj["leaf"] = true;
            this.tree["children"].push(obj);

            var updates = {};
            updates[file + "/fileType"] = "js";
            updates[file + "/type"] = file;
            updates[file + "/content"] = "    "; 
            uploads.update(updates);

            this.setState({tree: this.tree});
        }
    }
    

    render(){
        return(
            <div>
                <div>
                    <span className="createFiles">
                        <a onClick={this.addFile}><Icon>insert_drive_file</Icon></a>
                        <a onClick={this.addFolder}><Icon>create_new_folder</Icon></a>
                    </span>
                </div>
                <Tree
                    paddingLeft={20}
                    tree={this.state.tree}
                    onChange={this.handleChange}
                    isNodeCollapsed={this.isNodeCollapsed}
                    renderNode={this.renderNode}
                    className="tree"
                />
            </div>
        );
    }
}

export default FileTree;