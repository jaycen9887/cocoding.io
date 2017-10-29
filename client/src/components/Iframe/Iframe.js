import React, { Component } from "react";
import ReactDOM from "react-dom";

class Iframe extends Component {
    constructor(props){
        super(props);
        this.state = {
            room: "",
            frameProps: {
                frameBorder: 0
            }
        }
    }

    componentDidMount = () => {
        this.setState({
            room: this.props.room
        })

        var frameBody = ReactDOM.findDOMNode(this).contentDocument.body, 
        el = document.createElement("div");
        frameBody.appendChild(el);
        this.el = el;
        this.updateIframeContents();

        console.log("ROOM: " + this.props.room);
    }

    updateIframeContents = () =>{
        ReactDOM.render((
            <div {...this.props}>Hello!</div>
        ), this.el);
    }

    componentDidUpdate = () =>{
        this.updateIframeContents();
    }

    render(){
        return(
          <iframe  width="100%" height={window.innerHeight + "px"}>{...this.props.frameProps}</iframe>  
        );
    }
}

export default Iframe;