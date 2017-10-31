import React, {Component} from 'react';
import * as firebase from 'firebase';
import "firebase/database";
import dbapp from "../../Config/firebaseConfig";
import CodeMirror from "react-codemirror";


//import {UnControlled as CodeMirror} from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import "codemirror/lib/codemirror.js";
import 'codemirror/mode/javascript/javascript';

//import 'codemirror/theme';
//import 'codemirror/mode';


import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/search/match-highlighter';


class Editor extends React.Component {
    constructor(props) {
        super(props);

        this.editordb = dbapp.database().ref().child('content');

        this.state = {
            code: "",
            editor: "",
            theme: "rubyblue",
            mode: "javascript"
        }
    }

    /* divStyle = {
        height: "100%"
    } */

    componentDidMount = () =>{
       // console.log("COMPONENT DID");
        let width = this.props.width;
        let height = this.props.height; 
        const cm = this.refs.editor.getCodeMirror();
        this.setState({editor: cm});
        cm.setSize(width, height);
        this.setState({code:this.getCodeDB});
        //console.log("THIS IS WHAT RETURNED: " + this.getCodeDB);





        //console.log("COMPONENT WILL");
        let previousValue = this.state.code;
        //console.log("TESTING: " + previousValue); 

        const roomsdb = firebase.database().ref().child("rooms/" + this.props.roomsdb);
        //console.log(this.state.roomsdb);
        //const content = roomsdb.ref().chil

        /* let updates = {};
        updates['/content/' + roomsdb] = {content: this.state.code}; */

        roomsdb.on('value', snap => {
            /* console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
            console.log(snap.val().content);  */
            if(snap.val() !== null){
                previousValue = snap.val().content; 

                this.setState({
                    code: previousValue
                });

                let cursor = this.state.editor.getCursor();
                let cursorLine = cursor.line;
                let cursorCh = cursor.ch;
                this.state.editor.getDoc().setValue(this.state.code);
                this.state.editor.setCursor({line: cursorLine, ch:cursorCh});

                this.state.editor.focus();
               
            }
        });

      





        //console.log(code);
    }

    getCodeDB = () => {
        let previousValue = this.state.code;
        
       // console.log("TESTING: " + previousValue);

        const roomsdb = firebase.database().ref().child("rooms/" + this.props.roomsdb);
        
        roomsdb.child('content').once('value', snap => {
           /*  console.log("#################################################################");
            console.log(snap.val()); */
            previousValue = previousValue + snap.val();
        });

        return "<getCodeDb>";
    }

    updateCode = (newCode) => {
       // console.log(newCode);
        this.setState({
           code: newCode, 
        });

        let updates = {};
        updates['/rooms/' + this.props.roomsdb + "/content"] = this.state.code;

        firebase.database().ref().update(updates); 
        //console.log(this.state.editor)
        this.state.editor.refresh();
        //this.render();
    }

    getCode = () => {
        //console.log(this.state.code);

        return this.state.code;
    }

    testChangeMode = () => {
        console.log("testCodeUpdate");
        this.setState({
            mode: "markdown",
            code: "TEST TEST TEST"
        });
    }

    render(){
        let options = {
            lineNumbers: this.props.lineNumbers,
            lineWrapping: true,
            viewportMargin: 10,
            showCursorWhenSelecting: true,
            theme: this.state.theme,
            mode:this.state.mode            
        };
        return(
            <div>

                {/*<div style={{ marginBottom: 10 }}>*/}
                    {/*<button onClick={this.testChangeMode}>Toggle</button>*/}
                {/*</div>*/}
                {/*<CodeMirror ref="editor" roomsdb={this.props.room} value={this.state.code} onChange={this.updateCode} options={options} id={this.props.id}/>*/}



                <CodeMirror ref="editor" roomsdb={this.props.room} value={this.state.code}
                            onChange={this.updateCode} options={options} autoFocus={true} />
            </div>
        );
    }
}

export default Editor;