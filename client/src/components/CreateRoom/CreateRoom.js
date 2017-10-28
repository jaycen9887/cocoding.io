import React, { Component } from 'react';
import "./CreateRoom.css";
/* import * as firebase from 'firebase';
import "firebase/database";
import DB_CONFIG from "../../Config/config"; */

class CreateRoom extends Component {
    constructor(props){
        super(props);

        this.state = {
            newRoom: ""
        }
    }

    handleNewRoom = id => {
        this.setState({
            newRoom: id.target.value,
        })
    }

    createRoom = () => {
        this.props.addRoom(this.state.newRoom);

        this.setState({
            newRoom: ''
        });
    }

    render(props){
        return (
            <div>
                <input className="roomInput" value={this.state.newRoom} onChange={this.handleNewRoom} placeholder="Give Room a Name"/>
                <a href="#" onClick={this.createRoom}>Create</a>
                {/* <button className="createRoomBtn" onClick={this.createRoom}>CREATE ROOM</button> */}
            </div>    
        );
        
    }

}

export default CreateRoom;