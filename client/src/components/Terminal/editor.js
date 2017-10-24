import React from 'react';
import CodeMirror from 'codemirror';

const Editor = React.createClass({
    propTypes: {
        theme: React.PropTypes.string,
        readOnly: React.PropTypes.bool,
        codeText: React.propTypes.string,
        onChange: React.propTypes.func,
        style: React.propTypes.object,
        className: React.PropTypes.string
    },
    componentDidMount() {
        this.editor = CodeMirror.fromTextArea(this.refs.editor.getDOMNode(), {
            mode: 'javascript',
            lineNumbers: true,
            lineWrapping: true,
            smartIndent: true,
            matchBrackets: true,
            viewportMargin: 10,
            showCursorWhenSelecting: true,
            theme: this.props.theme, 
            readOnly: this.propTypes.readOnly
        });
        //this.editor.on('change', this._handleChange);
    }
});

export default Editor;