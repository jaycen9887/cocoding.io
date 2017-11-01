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
import {SideNav, SideNavItem, Button, Icon, Slide, Slider} from 'react-materialize';
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
            chatIsVisible: false,
            videoIsVisible: false,
            run: "this.query",
        };

        this.editorValue = "";
        this.theme = "rubyblue";
        this.mode = "javascript";
        this.chatVisible = "visible";
        this.videoVisible = "visible";

        this.toggleChat = this.toggleChat.bind(this);
        this.toggleVideo = this.toggleVideo.bind(this);
        
    }

    componentWillMount = () => {
        const previousValue = this.state.value;
        //console.log(this.roomsdb);

        /* this.database.on('child_added', snap ) */
        
    }

    toggleChat = () => {
        //let val;
        
        if(this.chatVisible === "invisible"){
            //console.log("invisible");
            //this.chatVisible = "visible";
            //val = true;
            //this.setState({chatIsVisible: "visible"});
            console.log("Chat: " +this.state.chatIsVisible);
        } else {
            //console.log("visible");
           //this.chatVisible = "invisible";
           //val = false;
           //this.setState({chatIsVisible: "invisible"});
           console.log("Chat: " + this.state.chatIsVisible);
        }
    }

    toggleVideo = () => {
        if(this.videoVisible === "invisible"){
            //console.log("invisible");
            //this.videoVisible = "visible";
            //this.setState({videoIsVisible: "visible"});
            console.log("Chat: " +this.state.videoIsVisible);
        } else {
            //console.log("visible");
            //this.videoVisible = "invisible";
            //this.setState({videoIsVisible: "invisible"});
            console.log("Chat: " +this.state.videoIsVisible);
        }
    }

    getTheme = (e) => {
        this.theme = e.target.value;
        console.log(this.theme);
        this.refs.editor.changeTheme(this.theme);
    }

    getMode = (e) => {
        this.mode = e.target.value;
        console.log(this.mode);
        this.refs.editor.changeMode(this.mode);
    }
        

    logOff = () => {
        console.log("logging off");
    }

    query = () => {
        let command = this.refs.editor.getCode();
        

        this.refs.SQLOutput.runQuery(command);
    }

    addPerson = () => {
        console.log("Person Added");
    }

    editorOnChange(value) {
       // console.log("#######################");
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

                                {/*<CCSideNav />*/}

                                {/*<nav className="sideNav blue-grey darken-4">*/}
                                    {/*<a href="" data-activates="slide-out" className="button-collapse show-on-large"><i class="small material-icons center" id="icons">apps</i></a>*/}
                                    {/*<br/>*/}

                                        {/*<i className="small material-icons center" id="icons">chat</i>*/}
                                        {/*<i className="small material-icons center" id="icons">voice_chat</i>*/}
                                        {/*<i className="small material-icons center" id="icons">person_add</i>*/}
                                        {/*<i className="small material-icons center" id="icons" onClick={this.query}>directions_run</i>*/}
                                        {/*<a id="logo-container " href="" class="brand-logo"></a>*/}
                                        {/*<ul id="nav-mobile" class="right hide-on-med-and-down">*/}
                                            {/*<li><a href="" id="isSignDiv"></a></li>*/}
                                        {/*</ul>*/}

                                    {/*<SideNav className="sideNav"*/}
                                             {/*trigger={<a href="" data-activates="slide-out" className="button-collapse show-on-large"><i class="small material-icons center" id="icons">apps</i></a>}*/}
                                             {/*options={{ closeOnClick: true }}*/}
                                    {/*>*/}

                                    {/*<ul id="slide-out" class="side-nav grey darken-1">*/}
                                        {/*<h3 class="black-text center">Settings</h3>*/}
                                        {/*<hr/>*/}
                                            {/*<h5 className="black-text">Syntax</h5>*/}
                                            {/*<select className="browser-default grey darken-1">*/}
                                                {/*<option value="" disabled selected>Choose your syntax</option>*/}
                                                {/*<option value="APL">APL</option>*/}
                                                {/*<option value="ASN-1">ASN.1</option>*/}
                                            {/*</select>*/}
                                        {/*<h5 className="black-text">Theme</h5>*/}
                                        {/*<select className="browser-default grey darken-1">*/}
                                            {/*<option value="" disabled selected>Choose your theme</option>*/}
                                            {/*<option value="default">default</option>*/}
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
                         <div className="splitter-horizontal"></div>

                        <div className="panel-bottom">
                            <div className='command'>
                                <Tabs>
                                    <Tab title="Output" id="output-tab" active><SQLEditor ref="SQLOutput"/></Tab>
                                    <Tab title="Terminal" id="terminal-tab">Testing {/* <Editor ref="cmd" readOnly={false} id="cmd" height={this.state.editorHeight} lineNumbers={false}/> */}</Tab>
                                    <Tab title="Live Mode" id="live-tab"><LiveMode html={this.editorValue}/></Tab>
                                </Tabs>
                            </div>
                            <div className="splitter-vertical"></div>
                            <div className="controllerNav">
                                <div>
                                    <a onClick={this.toggleChat}><Icon className="icon"  small>chat</Icon></a>
                                    <a onClick={this.toggleVideo}><Icon className="icon"  small>voice_chat</Icon></a>
                                    <a onClick={this.addPerson}><Icon className="icon" small>person_add</Icon></a>
                                    <a onClick={this.query}><Icon className="icon" small>directions_run</Icon></a>
                                    <a onClick={this.logOff}><Icon className="icon" small>account_box</Icon></a>
                                    <a onClick={this.saveFile}><Icon className="icon" small>save</Icon></a>
                                    {/* <a><Icon></Icon></a> */}
                                </div>
                                <div>
                                    <Row> 
                                        <Input s={6} type="select" label="Mode" onChange={this.getMode}> 
                                            <option value="APL">APL</option>
                                            <option value="ASN.1">ASN.1</option>
                                            <option value="Asterisk">Asterisk dialplan</option>
                                            <option value="Brainfuck">Brainfuck</option>
                                            <option value="C">C</option>
                                            <option value="C++">cPlusPlus</option>
                                            <option value="C#">cSharp</option>
                                            <option value="Ceylon">Ceylon</option>
                                            <option value="Clojure">Clojure</option>
                                            <option value="Closure-Stylesheet">Closure Stylesheets</option>
                                            <option value="CMake">CMake</option>
                                            <option value="COBOL">COBOL</option>
                                            <option value="CoffeeScript">CoffeeScript</option>
                                            <option value="Common Lisp">Common Lisp</option>
                                            <option value="Crystal">Crystal</option>
                                            <option value="CSS">CSS</option>
                                            <option value="Cypher">Cypher</option>
                                            <option value="Cython">Cython</option>
                                            <option value="D">D</option>
                                            <option value="Dart">Dart</option>
                                            <option value="Django">Django</option>
                                            <option value="Dockerfile">Dockerfile</option>
                                            <option value="diff">diff</option>
                                            <option value="DTD">DTD</option>
                                            <option value="Dylan">Dylan</option>
                                            <option value="EBNF">EBNF</option>
                                            <option value="ECL">ECL</option>
                                            <option value="Eiffel">Eiffel</option>
                                            <option value="Elixir">Elixir</option>
                                            <option value="Elm">Elm</option>
                                            <option value="Erlang">Erlang</option>
                                            <option value="Factor">Factor</option>
                                            <option value="FCL">FCL</option>
                                            <option value="Fortran">Fortran</option>
                                            <option value="Fourth">Fourth</option>
                                            <option value="F#">F#</option>
                                            <option value="Gas">Gas</option>
                                            <option value="Gherkin">Gherkin</option>
                                            <option value="Go">Go</option>
                                            <option value="Groovy">Groovy</option>
                                            <option value="HAML">HAML</option>
                                            <option value="Handlebars">Handlebars</option>
                                            <option value="Haskell">Haskell</option>
                                            <option value="Haxe">Haxe</option>
                                            <option value="HTML-embedded">HTML (JSP,ASP.net)</option>
                                            <option value="HTML-mix-mode">HTML mix-mode</option>
                                            <option value="HTTP">HTTP</option>
                                            <option value="IDL">IDL</option>
                                            <option value="Java">Java</option>
                                            <option value="javascript" selected>JavaScript</option>
                                            <option value="Jinja2">Jinja2</option>
                                            <option value="Julia">Julia</option>
                                            <option value="Kotlin">Kotlin</option>
                                            <option value="LESS">LESS</option>
                                            <option value="LiveScript">LiveScript</option>
                                            <option value="Lua">Lua</option>
                                            <option value="Markdown">Markdown</option>
                                            <option value="Mathematica">Mathematica</option>
                                            <option value="mbox">mbox</option>
                                            <option value="mIRC">mIRC</option>
                                            <option value="Modelica">Modelica</option>
                                            <option value="MSCGen">MscGen</option>
                                            <option value="MUMPS">MUMPS</option>
                                            <option value="Nginx">Nginx</option>
                                            <option value="NSIS">NSIS</option>
                                            <option value="N-Trip-N-Quad">N-Triples/N-Quads</option>
                                            <option value="Objective-C">Objective C</option>
                                            <option value="OCaml">OCaml</option>
                                            <option value="Octave">Octave</option>
                                            <option value="Oz">Oz</option>
                                            <option value="Pascal">Pascal</option>
                                            <option value="PEG">PEG.js</option>
                                            <option value="Perl">Perl</option>
                                            <option value="PGP">PGP</option>
                                            <option value="PHP">PHP</option>
                                            <option value="Pig Latin">Pig Latin</option>
                                            <option value="powershell">PowerShell</option>
                                            <option value="prop-files">Properties files</option>
                                            <option value="protoBuf">ProtoBuf</option>
                                            <option value="pug">Pug</option>
                                            <option value="puppet">Puppet</option>
                                            <option value="python">Python</option>
                                            <option value="Q">Q</option>
                                            <option value="R">R</option>
                                            <option value="RPM">RPM</option>
                                            <option value="reStructuredText">reStructuredText</option>
                                            <option value="Ruby">Ruby</option>
                                            <option value="Rust">Rust</option>
                                            <option value="SAS">SAS</option>
                                            <option value="Sass">Sass</option>
                                            <option value="Spreadsheet">Spreadsheet</option>
                                            <option value="Scala">Scala</option>
                                            <option value="Scheme">Scheme</option>
                                            <option value="SCSS">SCSS</option>
                                            <option value="shell">Shell</option>
                                            <option value="sieve">Sieve</option>
                                            <option value="slim">Slim</option>
                                            <option value="smalltalk">Smalltalk</option>
                                            <option value="smarty">Smarty</option>
                                            <option value="soir">Soir</option>
                                            <option value="soy">Soy</option>
                                            <option value="stylus">Stylus</option>
                                            <option value="sql">SQL</option>
                                            <option value="sparql">SPARQL</option>
                                            <option value="squirrel">Squirrel</option>
                                            <option value="swift">Swift</option>
                                            <option value="sTex-Latex">sTex LaTeX</option>
                                            <option value="TCL">Tcl</option>
                                            <option value="textile">Textile</option>
                                            <option value="tiddlywiki">Tiddlywiki</option>
                                            <option value="tikiwiki">Tiki wiki</option>
                                            <option value="toml">TOML</option>
                                            <option value="tornado">Tornado</option>
                                            <option value="troff">troff</option>
                                            <option value="ttcn">TTCN</option>
                                            <option value="ttcn-config">TTCN Configuration</option>
                                            <option value="turtle">Turtle</option>
                                            <option value="twig">Twig</option>
                                            <option value="vb.net">VB.NET</option>
                                            <option value="vbScript">VBScript</option>
                                            <option value="velocity">Velocity</option>
                                            <option value="verilog">Verilog</option>
                                            <option value="vhdl">VHDL</option>
                                            <option value="vue">Vue.js app</option>
                                            <option value="web-idl">Web IDL</option>
                                            <option value="html">XML/HTML</option>
                                            <option value="xquery">XQuery</option>
                                            <option value="yacas">Yacas</option>
                                            <option value="yaml">YAML</option>
                                            <option value="yaml-front">YAML frontmatter</option>
                                            <option value="z80">Z80</option>
                                            <option value="zenburn">zenburn.css</option>
                                        </Input>
 
                                        <Input s={6} type="select" label="Theme" onChange={this.getTheme}> 
                                            <option value="default">default</option>
                                            <option value="3024-day">3024-day</option>
                                            <option value="3024-night">3024-night</option>
                                            <option value="abcdef">abcdef</option>
                                            <option value="ambiance">ambiance</option>
                                            <option value="base16-dark">base16-dark</option>
                                            <option value="base16-light">base16-light</option>
                                            <option value="bespin">bespin</option>
                                            <option value="blackboard">blackboard</option>
                                            <option value="cobalt">cobalt</option>
                                            <option value="colorforth">colorforth</option>
                                            <option value="dracula">dracula</option>
                                            <option value="duotone-dark">duotone-dark</option>
                                            <option value="duotone-light">duotone-light</option>
                                            <option value="duotone-dark">duotone-dark</option>
                                            <option value="eclipse">eclipse</option>
                                            <option value="elegant">elegant</option>
                                            <option value="erlang-dark">erlang-dark</option>
                                            <option value="hopscotch">hopscotch</option>
                                            <option value="icecoder">icecoder</option>
                                            <option value="isotope">isotope</option>
                                            <option value="lesser-dark">lesser-dark</option>
                                            <option value="liquibyte">liquibyte</option>
                                            <option value="material">material</option>
                                            <option value="mbo">mbo</option>
                                            <option value="mdn-like">mdn-like</option>
                                            <option value="midnight">midnight</option>
                                            <option value="monokia">monokia</option>
                                            <option value="neat">neat</option>
                                            <option value="night">night</option>
                                            <option value="panda-syntax">panda-syntax</option>
                                            <option value="paraiso-dark">paraiso-dark</option>
                                            <option value="paraiso-light">paraiso-light</option>
                                            <option value="pastel-on-dark">pastel-on-dark</option>
                                            <option value="railscasts">railscasts</option>
                                            <option value="rubyblue" selected>rubyblue</option>
                                            <option value="seti">seti</option>
                                            <option value="solarized dark">solarized dark</option>
                                            <option value="solarized light">solarized light</option>
                                            <option value="the-matrix">the-matrix</option>
                                            <option value="tomorrow-night-bright">tomorrow-night-bright</option>
                                            <option value="tomorrow-night-eighties">tomorrow-night-eighties</option>
                                            <option value="ttcn">ttcn</option>
                                            <option value="twilight">twilight</option>
                                            <option value="vibrant-ink">vibrant-ink</option>
                                            <option value="xq-dark">xq-dark</option>
                                            <option value="xq-light">xq-light</option>
                                            <option value="yeti">yeti</option>
                                            <option value="zenburn">zenburn</option>
                                        </Input>
                                    </Row>    
                                </div>
                                <div>
                                    <div className={`text-chat ${this.chatVisible}`}>
                                        TEXT CHAT
                                    </div>
                                    <div className={`voice-chat ${this.videoVisible}`}>
                                        VIDEO CHAT
                                    </div>

                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>

    );
    }
}

export default Terminal;