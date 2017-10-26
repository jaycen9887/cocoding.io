import React, {Component} from "react";
import Resizable from "react-resizeable";

export class HorizSplitter extends Component {
    state = {
        position : 0
    }

    componentDidMount(){
        window.addEventListener('resize', this._handleWindowResize);
    }

    

    handleChange(){
        /* $(".panel-left").resizable({
            handleSelector: ".splitter",
            resizeHeight: false
        });
        $(".panel-top").resizable({
            handleSelector: ".splitter-horizontal",
            resizeWidth: false,
            resize: function() {
                setSize($(this).width(), $(this).height());
                $(".CodeMirror").refresh();
            }
        }); */
    }

    render(){
        return(
            <div className="splitter-horizontal">
            </div>
        );
    }
}

