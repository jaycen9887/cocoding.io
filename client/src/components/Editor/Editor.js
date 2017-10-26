import React, {Component} from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import "codemirror/lib/codemirror.js";
import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/rubyblue.css';

class Editor extends Component{
    state = {
        code: "",
    }
    updateCode = (newCode) => {
        this.setState({
           code: newCode, 
        });
    }
    render(){
        let options = {
            lineNumbers: true,
            lineWrapping: true,
            viewportMargin: 10,
            showCursorWhenSelecting: true,
            theme: "rubyblue",
            readOnly: this.props.readOnly, 
        };
        return(
            <CodeMirror  value={this.state.code} onChange={this.updateCode} options={options}/>
        );
    }
}

export default Editor;