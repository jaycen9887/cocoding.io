import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./RoomSetup.css";
/* import * as firebase from 'firebase';
import "firebase/database";
import DB_CONFIG from "../../Config/config"; */

class RoomSetup extends Component {
    constructor(props){
        super(props);
        this.newRoom;
    }

    handleRemoveRoom = id => {
        //console.log("THIS IS MY ID" + id);
        this.props.removeRoom(id);
    }

    render(props){
        return (
            <div className="card-action">
                <Link to={"/terminal/" + this.props.roomId}>OPEN ROOM {this.props.roomId}</Link>
                <span className="deletebtn" onClick={() => this.handleRemoveRoom(this.props.roomId)}>DELETE ROOM {this.props.roomId}</span>
                
            </div>
                //<button>ROOM {this.props.roomId}</button>
                //<span className="deletebtn" onClick={() => this.handleRemoveRoom(this.roomId)}>X</span>
                //<Link to={"/deleteroom/" + this.props.roomId}>DELETE ROOM {this.props.room}</Link>
        );
        
    }

}

export default RoomSetup;