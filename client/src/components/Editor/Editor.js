import React, {Component} from 'react';
import * as firebase from 'firebase';
import "firebase/database";
import dbapp from "../../Config/firebaseConfig";
import CodeMirror from "react-codemirror";


//import {UnControlled as CodeMirror} from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import "codemirror/lib/codemirror.js";

import 'codemirror/mode/apl/apl';
import 'codemirror/mode/asciiarmor/asciiarmor';
import 'codemirror/mode/asn.1/asn.1';
import 'codemirror/mode/asterisk/asterisk';
import 'codemirror/mode/brainfuck/brainfuck';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/clojure/clojure';
import 'codemirror/mode/cmake/cmake';
import 'codemirror/mode/cobol/cobol';
import 'codemirror/mode/coffeescript/coffeescript';
import 'codemirror/mode/commonlisp/commonlisp';
import 'codemirror/mode/crystal/crystal';
import 'codemirror/mode/css/css';
import 'codemirror/mode/cypher/cypher';
import 'codemirror/mode/d/d';
import 'codemirror/mode/dart/dart';
import 'codemirror/mode/diff/diff';
import 'codemirror/mode/django/django';
import 'codemirror/mode/dockerfile/dockerfile';
import 'codemirror/mode/dtd/dtd';
import 'codemirror/mode/dylan/dylan';
import 'codemirror/mode/ebnf/ebnf';
import 'codemirror/mode/ecl/ecl';
import 'codemirror/mode/eiffel/eiffel';
import 'codemirror/mode/elm/elm';
import 'codemirror/mode/erlang/erlang';
import 'codemirror/mode/factor/factor';
import 'codemirror/mode/fcl/fcl';
import 'codemirror/mode/forth/forth';
import 'codemirror/mode/fortran/fortran';
import 'codemirror/mode/gas/gas';
import 'codemirror/mode/gfm/gfm';
import 'codemirror/mode/gherkin/gherkin';
import 'codemirror/mode/go/go';
import 'codemirror/mode/groovy/groovy';
import 'codemirror/mode/haml/haml';
import 'codemirror/mode/handlebars/handlebars';
import 'codemirror/mode/haskell/haskell';
import 'codemirror/mode/haskell-literate/haskell-literate';
import 'codemirror/mode/haxe/haxe';
import 'codemirror/mode/htmlembedded/htmlembedded';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/http/http';
import 'codemirror/mode/idl/idl';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jinja2/jinja2';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/julia/julia';
import 'codemirror/mode/livescript/livescript';
import 'codemirror/mode/lua/lua';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/mathematica/mathematica';
import 'codemirror/mode/mbox/mbox';
import 'codemirror/mode/mirc/mirc';
import 'codemirror/mode/mllike/mllike';
import 'codemirror/mode/modelica/modelica';
import 'codemirror/mode/mscgen/mscgen';
import 'codemirror/mode/mumps/mumps';
import 'codemirror/mode/nginx/nginx';
import 'codemirror/mode/nsis/nsis';
import 'codemirror/mode/ntriples/ntriples';
import 'codemirror/mode/octave/octave';
import 'codemirror/mode/oz/oz';
import 'codemirror/mode/pascal/pascal';
import 'codemirror/mode/pegjs/pegjs';
import 'codemirror/mode/perl/perl';
import 'codemirror/mode/php/php';
import 'codemirror/mode/pig/pig';
import 'codemirror/mode/powershell/powershell';
import 'codemirror/mode/properties/properties';
import 'codemirror/mode/protobuf/protobuf';
import 'codemirror/mode/pug/pug';
import 'codemirror/mode/puppet/puppet';
import 'codemirror/mode/python/python';
import 'codemirror/mode/q/q';
import 'codemirror/mode/r/r';
import 'codemirror/mode/rpm/rpm';
import 'codemirror/mode/rst/rst';
import 'codemirror/mode/ruby/ruby';
import 'codemirror/mode/rust/rust';
import 'codemirror/mode/sas/sas';
import 'codemirror/mode/sass/sass';
import 'codemirror/mode/scheme/scheme';
import 'codemirror/mode/shell/shell';
import 'codemirror/mode/sieve/sieve';
import 'codemirror/mode/slim/slim';
import 'codemirror/mode/smalltalk/smalltalk';
import 'codemirror/mode/smarty/smarty';
import 'codemirror/mode/solr/solr';
import 'codemirror/mode/soy/soy';
import 'codemirror/mode/sparql/sparql';
import 'codemirror/mode/spreadsheet/spreadsheet';
import 'codemirror/mode/sql/sql';
import 'codemirror/mode/stex/stex';
import 'codemirror/mode/stylus/stylus';
import 'codemirror/mode/swift/swift';
import 'codemirror/mode/tcl/tcl';
import 'codemirror/mode/textile/textile';
import 'codemirror/mode/tiddlywiki/tiddlywiki';
import 'codemirror/mode/tiki/tiki';
import 'codemirror/mode/toml/toml';
import 'codemirror/mode/tornado/tornado';
import 'codemirror/mode/troff/troff';
import 'codemirror/mode/ttcn/ttcn';
import 'codemirror/mode/ttcn-cfg/ttcn-cfg';
import 'codemirror/mode/turtle/turtle';
import 'codemirror/mode/twig/twig';
import 'codemirror/mode/vb/vb';
import 'codemirror/mode/vbscript/vbscript';
import 'codemirror/mode/velocity/velocity';
import 'codemirror/mode/verilog/verilog';
import 'codemirror/mode/vhdl/vhdl';
import 'codemirror/mode/vue/vue';
import 'codemirror/mode/webidl/webidl';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/xquery/xquery';
import 'codemirror/mode/yacas/yacas';
import 'codemirror/mode/yaml/yaml';
import 'codemirror/mode/yaml-frontmatter/yaml-frontmatter';
import 'codemirror/mode/z80/z80';


/* THEMES */
import 'codemirror/theme/rubyblue.css';
import 'codemirror/theme/3024-day.css';
import 'codemirror/theme/3024-night.css';
import 'codemirror/theme/abcdef.css';
import 'codemirror/theme/ambiance.css';
import 'codemirror/theme/base16-dark.css';
import 'codemirror/theme/blackboard.css';
import 'codemirror/theme/cobalt.css';
import 'codemirror/theme/colorforth.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/duotone-dark.css';
import 'codemirror/theme/duotone-light.css';
import 'codemirror/theme/eclipse.css';
import 'codemirror/theme/elegant.css';
import 'codemirror/theme/erlang-dark.css';
import 'codemirror/theme/hopscotch.css';
import 'codemirror/theme/icecoder.css';
import 'codemirror/theme/isotope.css';
import 'codemirror/theme/lesser-dark.css';
import 'codemirror/theme/liquibyte.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/mbo.css';
import 'codemirror/theme/mdn-like.css';
import 'codemirror/theme/midnight.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/theme/neat.css';
import 'codemirror/theme/neo.css';
import 'codemirror/theme/night.css';
import 'codemirror/theme/panda-syntax.css';
import 'codemirror/theme/paraiso-dark.css';
import 'codemirror/theme/pastel-on-dark.css';
import 'codemirror/theme/railscasts.css';
import 'codemirror/theme/seti.css';
import 'codemirror/theme/solarized.css';
import 'codemirror/theme/the-matrix.css';
import 'codemirror/theme/tomorrow-night-bright.css';
import 'codemirror/theme/tomorrow-night-eighties.css';
import 'codemirror/theme/ttcn.css';
import 'codemirror/theme/twilight.css';
import 'codemirror/theme/vibrant-ink.css';
import 'codemirror/theme/xq-dark.css';
import 'codemirror/theme/xq-light.css';
import 'codemirror/theme/yeti.css';
import 'codemirror/theme/zenburn.css';

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
            mode: "javascript",
            username: this.props.username
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

    changeTheme = (theme) => {
        console.log("THEME CHANGED TO: " + theme);
        this.setState({theme: theme});
        this.state.editor.focus();
        this.state.editor.refresh();
    }

    changeMode = (mode) => {
        console.log("MODE CHANGED TO: " + mode);
        this.setState({mode: mode});
        this.state.editor.focus();
        this.state.editor.refresh();
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

        //return "<getCodeDb>";
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

    changeFile = (file) => {
        file = file.split(".");
        //console.log(file[0]);
        const userDb = firebase.database().ref().child(this.state.username);
        const uploads = userDb.child("uploads");
        //console.log(userDb);
        //console.log(uploads);
        uploads.on("value", snap => {
            let val = snap.val()[file[0]].content;
                this.updateCode(val);
        
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