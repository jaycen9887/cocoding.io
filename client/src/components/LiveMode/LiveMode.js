import React, { Component } from 'react';

class LiveMode extends Component{
    constructor(props){
        super(props);

        this.state = {
            html: ""
        }
    }

    setCode = (html) => {
        this.setState({
            html:html
        })
    };

    render(){
        return(
            <div className="liveModeDiv" dangerouslySetInnerHTML={{__html:this.state.html}}>

            </div>
        );
    }
}

export default LiveMode;