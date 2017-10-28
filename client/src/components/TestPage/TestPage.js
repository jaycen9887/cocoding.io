import React, { Component } from "react";

import {UnControlled as CodeMirror} from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import "codemirror/lib/codemirror.js";
import 'codemirror/mode/javascript/javascript';

var defaults = {
    markdown: '# Heading\n\nSome **bold** and _italic_ text\nBy [Jed Watson](https://github.com/JedWatson)',
    javascript: 'var component = {\n\tname: "react-codemirror",\n\tauthor: "Jed Watson",\n\trepo: "https://github.com/JedWatson/react-codemirror"\n};'
};

class TestPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            code: defaults.markdown,
            readOnly: false,
            mode: 'markdown',
        };
    }

updateCode = (newCode) => {
    this.setState({
        code: newCode
    });
}

changeMode = (e) => {
    var mode = e.target.value;
    this.setState({
        mode: mode,
        code: defaults[mode]
    });
}

testwrite = () => {

    this.setState({
        mode: 'javascript',
        code: "THIS IS CODE FROM THE DB"
    });
}

render() {
    var options = {
        lineNumbers: true,
        readOnly: this.state.readOnly,
        mode: this.state.mode
    };
    return (
        <div>

            <CodeMirror ref="editor" value={this.state.code}
                        onChange={(editor, metadata, value) => {
                        }} options={options} autoFocus={true} />
            <div style={{ marginTop: 10 }}>
                <button onClick={this.testwrite}>Toggle read-only mode (currently {this.state.readOnly ? 'on' : 'off'})</button>
            </div>
        </div>
    );
}

}

export default TestPage;