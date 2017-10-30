import React, { Component } from 'react';
import { Icon } from "react-materialize";

class Controller extends Component{

    render() {
        return(
            <div>
                <Icon>chat</Icon>
                <Icon>voice-voice_chat</Icon>
                <Icon>person_add</Icon>
                <Icon>directions_run</Icon>
            </div>
        );
    }
}

export default Controller;
