import React, {Component} from "react";

export class VertSplitter extends Component {

    componentDidMount(){
        window.addEventListener('resize', this._handleWindowResize);
    }

    render(){
        return(
        <div className="splitter">
        </div>
        );
    }
}
