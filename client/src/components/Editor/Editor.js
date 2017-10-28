import React, {Component} from 'react';
import * as firebase from 'firebase';
import "firebase/database";
import dbapp from "../../Config/firebaseConfig";


import CodeMirror from 'react-codemirror';

import 'codemirror/lib/codemirror.css';
import "codemirror/lib/codemirror.js";
import 'codemirror/mode/javascript/javascript';

//import 'codemirror/theme';
//import 'codemirror/mode';


import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/search/match-highlighter';


class Editor extends Component{
    constructor(props) {
        super(props);

        this.editordb = dbapp.database().ref().child('content');

        this.state = {
            code: "",
        }
    }

    /* divStyle = {
        height: "100%"
    } */

    componentDidMount = () =>{
        console.log("COMPONENT DID");
        let width = this.props.width;
        let height = this.props.height; 
        const cm = this.refs.editor.getCodeMirror();
        cm.setSize(width, height);
        this.setState({code:this.getCodeDB});
        console.log("THIS IS WHAT RETURNED: " + this.getCodeDB);

        //console.log(code);
    }

    componentWillMount = () => {

        

        /* console.log("COMPONENT WILL");
        let previousValue = this.state.code;

        console.log("TESTING: " + previousValue); */

        //const roomsdb = firebase.database().ref().child("rooms/" + this.props.roomsdb);
        //const content = roomsdb.ref().chil

        /* let updates = {};
        updates['/content/' + roomsdb] = {content: this.state.code}; */

        /* roomsdb.on('child_added', snap => {
             console.log("*********************************************************");
            //console.log(snap.val()); 
           previousValue = previousValue + snap.val(); */
           
            

            //this.updateCode(this.state.code);

            //console.log("THE STATE CODE IS NOW: " + this.state.code);
        //})

       /*  this.setState({
            code: previousValue
        }); */
       

    }

    getCodeDB = () => {
        let previousValue = this.state.code;
        
        console.log("TESTING: " + previousValue);

        const roomsdb = firebase.database().ref().child("rooms/" + this.props.roomsdb);

        /* roomsdb.on('value', snap => {
            console.log("*********************************************************");
            //console.log(snap.val()); 
            previousValue = previousValue + snap.val();
            
            
            this.setState({
                code: snap.val(),
            });

            console.log("ENDING VALUE: " + previousValue);
        });  */ 
        
        roomsdb.child('content').once('value', snap => {
            //console.log(snap.val());
            previousValue = previousValue + snap.val();
        });

        return previousValue;
    }

    updateCode = (newCode) => {
        console.log(newCode);
        this.setState({
           code: newCode, 
        });

        let updates = {};
        updates['/rooms/' + this.props.roomsdb + "/content"] = this.state.code;

        firebase.database().ref().update(updates); 
    }

    getCode = () => {
        console.log(this.state.code);

        return this.state.code;
    }


    render(){
        let options = {
            lineNumbers: this.props.lineNumbers,
            lineWrapping: true,
            viewportMargin: 10,
            showCursorWhenSelecting: true,
            theme: "rubyblue",
            readOnly: this.props.readOnly, 
            
        };
        return(
            <CodeMirror ref="editor" roomsdb={this.props.room} value={this.state.code} onChange={this.updateCode} options={options} id={this.props.id}/>
        );
    }
}

export default Editor;