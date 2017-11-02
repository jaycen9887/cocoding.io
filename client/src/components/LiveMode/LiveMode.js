import React, { Component } from 'react';

class LiveMode extends Component{

    setCode = (html) => {
        return {
            __html: html
        };
    };

    render(){
        return(
            <div dangerouslySetInnerHTML={this.setCode()}>

            </div>
        );
    }
}

export default LiveMode;