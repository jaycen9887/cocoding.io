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

    /* divStyle = {
        height: "100%"
    } */

    componentDidMount() {
        let width = this.props.width;
        let height = this.props.height; 
        const cm = this.refs.editor.getCodeMirror();
        cm.setSize(width, height);
    }

    updateCode = (newCode) => {
        this.setState({
           code: newCode, 
        });
    }

    getCode = () => {
        console.log(this.state.code);

        return this.state.code;
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
            <CodeMirror ref="editor"  value={this.state.code} onChange={this.updateCode} options={options} id={this.props.id}/>
        );
    }
}

export default Editor;