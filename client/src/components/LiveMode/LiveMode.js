import React, { Component } from 'react';

class LiveMode extends Component{

    render(){
        return(
            <div dangerouslySetInnerHTML={{__html: this.props.html}}>

            </div>
        );
    }
}

export default LiveMode;