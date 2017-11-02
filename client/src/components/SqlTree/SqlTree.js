import React, { Component } from "react";
import Tree from 'react-ui-tree';
import cx from 'classnames';
import {Icon} from "react-materialize";
import "./SqlTree.css";
import * as firebase from "firebase";
import "firebase/database";
import "../../Config/firebaseConfig";

class FileTree extends Component{
    constructor(props){
        super(props);
        this.tree = {
            module: 'SCHEMAS',
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
        const uploads = userDb.child("database");

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
        
        console.log(itemChecking);
        
        if(itemChecking.type === "file"){
            obj["module"] = name + "." + itemChecking.Type;
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

    render(){
        return(
            
            <Tree
                paddingLeft={20}
                tree={this.state.tree}
                onChange={this.handleChange}
                isNodeCollapsed={this.isNodeCollapsed}
                renderNode={this.renderNode}
                className="tree"
            />
        );
    }
}

export default FileTree;