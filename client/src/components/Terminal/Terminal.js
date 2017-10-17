import React, { Component } from "react";
import {Button, Modal, Icon} from 'react-materialize';
import "./Terminal.css"

class Terminal extends Component {
    render() {
        return (
            <div className="panel-container">

                <div className="panel-left">
                    left panel
                </div>

                <div className="splitter">
                </div>

                <div className="panel-right">
                    <!--right panel-->
                    <div className="panel-container-vertical">
                        <div className="panel-top">
                            <!--top panel-->



                            <!--<nav className="sideNav blue-grey darken-4">-->
                            <!--&lt;!&ndash;<div className="sideNav">&ndash;&gt;-->
                            <!--&lt;!&ndash;<div id="navPosition">&ndash;&gt;-->
                            <!--<a href="#" data-activates="slide-out" className="button-collapse show-on-large"><i className="small material-icons center"                     id="icons">apps</i></a>-->
                            <!--<br>-->
                            <!--<i className="small material-icons center" id="icons">chat</i>-->
                            <!--<i className="small material-icons center" id="icons">voice_chat</i>-->
                            <!--<i className="small material-icons center" id="icons">person_add</i>-->
                            <!--<i className="small material-icons center" id="icons">directions_run</i>-->
                            <!--<a id="logo-container " href="#" className="brand-logo"></a>-->
                            <!--<ul id="nav-mobile" className="right hide-on-med-and-down">-->
                            <!--<li><a href="#" id="isSignDiv"></a></li>-->
                            <!--</ul>-->
                            <!--&lt;!&ndash;</div>&ndash;&gt;-->
                            <!--&lt;!&ndash;</div>&ndash;&gt;-->

                            <!--<ul id="slide-out" className="side-nav grey darken-1">-->
                            <!--<h3 className="black-text center">Settings</h3>-->
                            <!--<hr>-->
                            <!--<h5 className="black-text">Syntax</h5>-->
                            <!--<select className="browser-default grey darken-1">-->
                            <!--<option value="" disabled selected>Choose your syntax</option>-->
                            <!--<option value="#APL">APL</option>-->
                            <!--<option value="#ASN-1">ASN.1</option>-->
                            <!--<option value="#Asterisk">Asterisk dialplan</option>-->
                            <!--<option value="#Brainfuck">Brainfuck</option>-->
                            <!--<option value="#C">C</option>-->
                            <!--<option value="#C++">cPlusPlus</option>-->
                            <!--<option value="#C#">cSharp</option>-->
                            <!--<option value="#Ceylon">Ceylon</option>-->
                            <!--<option value="#Clojure">Clojure</option>-->
                            <!--<option value="#Closure-Stylesheet">Closure Stylesheets</option>-->
                            <!--<option value="#CMake">CMake</option>-->
                            <!--<option value="#COBOL">COBOL</option>-->
                            <!--<option value="#CoffeeScript">CoffeeScript</option>-->
                            <!--<option value="#Common Lisp">Common Lisp</option>-->
                            <!--<option value="#Crystal">Crystal</option>-->
                            <!--<option value="#CSS">CSS</option>-->
                            <!--<option value="#Cypher">Cypher</option>-->
                            <!--<option value="#Cython">Cython</option>-->
                            <!--<option value="#D">D</option>-->
                            <!--<option value="#Dart">Dart</option>-->
                            <!--<option value="#Django">Django</option>-->
                            <!--<option value="#Dockerfile">Dockerfile</option>-->
                            <!--<option value="#diff">diff</option>-->
                            <!--<option value="#DTD">DTD</option>-->
                            <!--<option value="#Dylan">Dylan</option>-->
                            <!--<option value="#EBNF">EBNF</option>-->
                            <!--<option value="#ECL">ECL</option>-->
                            <!--<option value="#Eiffel">Eiffel</option>-->
                            <!--<option value="#Elixir">Elixir</option>-->
                            <!--<option value="#Elm">Elm</option>-->
                            <!--<option value="#Erlang">Erlang</option>-->
                            <!--<option value="#Factor">Factor</option>-->
                            <!--<option value="#FCL">FCL</option>-->
                            <!--<option value="#Fortran">Fortran</option>-->
                            <!--<option value="#Fourth">Fourth</option>-->
                            <!--<option value="#F#">F#</option>-->
                            <!--<option value="#Gas">Gas</option>-->
                            <!--<option value="#Gherkin">Gherkin</option>-->
                            <!--<option value="#Go">Go</option>-->
                            <!--<option value="#Groovy">Groovy</option>-->
                            <!--<option value="#HAML">HAML</option>-->
                            <!--<option value=#Handlebars">Handlebars</option>-->
                            <!--<option value="#Haskell">Haskell</option>-->
                            <!--<option value="#Haxe">Haxe</option>-->
                            <!--<option value="#HTML-embedded">HTML (JSP,ASP.net)</option>-->
                            <!--<option value="#HTML-mix-mode">HTML mix-mode</option>-->
                            <!--<option value="#HTTP">HTTP</option>-->
                            <!--<option value="#IDL">IDL</option>-->
                            <!--<option value="#Java">Java</option>-->
                            <!--<option value="#js">JavaScript</option>-->
                            <!--<option value="#Jinja2">Jinja2</option>-->
                            <!--<option value="#Julia">Julia</option>-->
                            <!--<option value="#Kotlin">Kotlin</option>-->
                            <!--<option value="#LESS">LESS</option>-->
                            <!--<option value="#LiveScript">LiveScript</option>-->
                            <!--<option value="#Lua">Lua</option>-->
                            <!--<option value="#Markdown">Markdown</option>-->
                            <!--<option value="#Mathematica">Mathematica</option>-->
                            <!--<option value="#mbox">mbox</option>-->
                            <!--<option value="#mIRC">mIRC</option>-->
                            <!--<option value="#Modelica">Modelica</option>-->
                            <!--<option value="#MSCGen">MscGen</option>-->
                            <!--<option value="#MUMPS">MUMPS</option>-->
                            <!--<option value="#Nginx">Nginx</option>-->
                            <!--<option value="#NSIS">NSIS</option>-->
                            <!--<option value="#N-Trip-N-Quad">N-Triples/N-Quads</option>-->
                            <!--<option value="#Objective-C">Objective C</option>-->
                            <!--<option value="#OCaml">OCaml</option>-->
                            <!--<option value="#Octave">Octave</option>-->
                            <!--<option value="#Oz">Oz</option>-->
                            <!--<option value="#Pascal">Pascal</option>-->
                            <!--<option value="#PEG">PEG.js</option>-->
                            <!--<option value="#Perl">Perl</option>-->
                            <!--<option value="#PGP">PGP</option>-->
                            <!--<option value="#PHP">PHP</option>-->
                            <!--<option value="#Pig Latin">Pig Latin</option>-->
                            <!--<option value="#powershell">PowerShell</option>-->
                            <!--<option value="#prop-files">Properties files</option>-->
                            <!--<option value="#protoBuf">ProtoBuf</option>-->
                            <!--<option value="#pug">Pug</option>-->
                            <!--<option value="#puppet">Puppet</option>-->
                            <!--<option value="#python">Python</option>-->
                            <!--<option value="#Q">Q</option>-->
                            <!--<option value="#R">R</option>-->
                            <!--<option value="#RPM">RPM</option>-->
                            <!--<option value="#reStructuredText">reStructuredText</option>-->
                            <!--<option value="#Ruby">Ruby</option>-->
                            <!--<option value="#Rust">Rust</option>-->
                            <!--<option value="#SAS">SAS</option>-->
                            <!--<option value="#Sass">Sass</option>-->
                            <!--<option value="#Spreadsheet">Spreadsheet</option>-->
                            <!--<option value="#Scala">Scala</option>-->
                            <!--<option value="#Scheme">Scheme</option>-->
                            <!--<option value="#SCSS">SCSS</option>-->
                            <!--<option value="#shell">Shell</option>-->
                            <!--<option value="#sieve">Sieve</option>-->
                            <!--<option value="#slim">Slim</option>-->
                            <!--<option value="#smalltalk">Smalltalk</option>-->
                            <!--<option value="#smarty">Smarty</option>-->
                            <!--<option value="#soir">Soir</option>-->
                            <!--<option value="#soy">Soy</option>-->
                            <!--<option value="#stylus">Stylus</option>-->
                            <!--<option value="#sql">SQL</option>-->
                            <!--<option value="#sparql">SPARQL</option>-->
                            <!--<option value="#squirrel">Squirrel</option>-->
                            <!--<option value="#swift">Swift</option>-->
                            <!--<option value="#sTex-Latex">sTex LaTeX</option>-->
                            <!--<option value="#TCL">Tcl</option>-->
                            <!--<option value="#textile">Textile</option>-->
                            <!--<option value="#tiddlywiki">Tiddlywiki</option>-->
                            <!--<option value="#tikiwiki">Tiki wiki</option>-->
                            <!--<option value="#toml">TOML</option>-->
                            <!--<option value="#tornado">Tornado</option>-->
                            <!--<option value="#troff">troff</option>-->
                            <!--<option value="#ttcn">TTCN</option>-->
                            <!--<option value="#ttcn-config">TTCN Configuration</option>-->
                            <!--<option value="#turtle">Turtle</option>-->
                            <!--<option value="#twig">Twig</option>-->
                            <!--<option value="#vb.net">VB.NET</option>-->
                            <!--<option value="#vbScript">VBScript</option>-->
                            <!--<option value="#velocity">Velocity</option>-->
                            <!--<option value="#verilog">Verilog</option>-->
                            <!--<option value="#vhdl">VHDL</option>-->
                            <!--<option value="#vue">Vue.js app</option>-->
                            <!--<option value="#web-idl">Web IDL</option>-->
                            <!--<option value="#html">XML/HTML</option>-->
                            <!--<option value="#xquery">XQuery</option>-->
                            <!--<option value="#yacas">Yacas</option>-->
                            <!--<option value="#yaml">YAML</option>-->
                            <!--<option value="#yaml-front">YAML frontmatter</option>-->
                            <!--<option value="#z80">Z80</option>-->
                            <!--<option value="#zenburn">zenburn.css</option>-->
                            <!--</select>-->
                            <!--<h5 className="black-text">Theme</h5>-->
                            <!--<select className="browser-default grey darken-1">-->
                            <!--<option value="" disabled selected>Choose your theme</option>-->
                            <!--<option value="1">def</option>-->
                            <!--<option value="2">Option 2</option>-->
                            <!--<option value="3">Option 3</option>-->
                            <!--</select>-->

                            <!--&lt;!&ndash;<li><a href="#!">First Sidebar Link</a></li>&ndash;&gt;-->
                            <!--&lt;!&ndash;<li><a href="#!">Second Sidebar Link</a></li>&ndash;&gt;-->

                            <!--</ul>-->
                            <!--&lt;!&ndash;<a href="#" data-activates="slide-out" className="button-collapse show-on-large"><i className="small material-icons center" id="icons">apps</i></a>&ndash;&gt;-->
                            <!--</nav>-->

                            <div id="terminalBody">
                                <!--<nav className="sideNav blue-grey darken-4">-->
                                <!--</nav>-->
                                <form id="preview-form">
                                    <textarea className="codemirror-textarea" name="editor-value" id="editor-value" rows="4" cols="10">&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;&#13;&#10;</textarea>
                                    <br>
                                    <!--<input type="submit" name="submit" id="submit" value="submit">-->
                                </form>
                            </div>
                        </div>

                        <!--<div id="preview" className="header col s8 light z-depth-3 liveTerminal">-->

                        <!--</div>-->



                        <div className="splitter-horizontal">
                        </div>

                        <div className="panel-bottom">
                            bottom panel
                        </div>
                    </div>
                </div>
            {/*</div>*/}

    );
    }
}

export default Terminal;