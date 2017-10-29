import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer";
import CreateRoom from "../CreateRoom";
import * as firebase from 'firebase';
import 'firebase/database';
import dbapp from "../../Config/firebaseConfig";
import RoomSetup from "../RoomSetup";
import Nav from "../Nav";

class Room extends Component {
    constructor(props) {
        super(props);

        this.database = dbapp.database().ref().child('rooms');

        this.state = {
            rooms: []
        };
        //this.handleCreateRoomClick = this.handleCreateRoomClick.bind(this);
    }

    componentWillMount = () =>{
        const previousRooms = this.state.rooms;
    
        this.database.on('child_added', snap => {
         
          previousRooms.push({
            id: snap.key,
          })
    
          this.setState({
            rooms: previousRooms
          })
        });
    
        this.database.on('child_removed', snap => {
          for(var i = 0; i < previousRooms.length; i++){
            if(previousRooms[i].id === snap.val().id){
              previousRooms.splice(i, 1);
          
            }
          }
          
          this.setState({
            rooms:previousRooms,
          })
        });
      }

    addRoom = room => {
        const roomsRef = this.database.ref.child(room).set({
          content: "<h1>Happy Coding</h1>",
        })
        console.log(room);
    }

    removeRoom = roomId => {
        console.log(roomId);
        this.database.child(roomId).remove();
    }
    

    /* loadRooms() {
        console.log("loading rooms");
        axios.get("/roomlist")
            .then(res =>
                this.setState({ rooms: res.data })
            )
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.loadRooms();

    } */

    /* handleCreateRoomClick(e) {
        e.preventDefault();
        console.log("creating room");
        axios.get('/createroom')
            .then(function(response) {
                console.log(response);
                //window.location.href = "/room";
            })
            .catch(function(error) {
                console.log( "Create Room Fail" );
            });
    } */

        render() {
            return(
                <div>
                    <Nav />
                    <div className="section no-pad-bot teal lighten-1">
                        <div id="spaceDiv2"></div>
                        {/*<div imageSrc="img/codebg.png"></div>*/}
                        <div className="row" id="texture">
                            <div className="col s12">
                                <div className="row"></div>
                                <div className="row"></div>

                                <h5 className="black-text center" id="howWorksTitle">Create a classroom here</h5>
                                <hr/>
                                <div className="row"></div>
                            </div>
                            <div className="row">
                                <div className="col s3"></div>
                                <div className="col s3 m3 center">
                                    <div className="card  white center">
                                        <div className="card-content black-text hoverable z-depth-4">
                                            <i className="large material-icons white" id="icons">person_add</i>
                                            <span className="card-title">Create classroom</span>
                                            <p>Create a new classroom by clicking the "Create" button.</p>
                                        </div>
                                        <div className="card-action">
                                            {/* <a href="#" onClick={this.handleCreateRoomClick}>Create</a> */}
                                            <CreateRoom addRoom={this.addRoom}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col s3 m3 ">
                                    <div className="card  white center">
                                        <div className="card-content black-text center hoverable z-depth-4">
                                            <i className="large material-icons white" id="icons">supervisor_account</i>
                                            <span className="card-title">Join classroom</span>
                                            <p></p>
                                        </div>
                                        {/*{this.state.rooms.length}*/}
                                        {this.state.rooms.length ? (
                                        this.state.rooms.map(room => (
                                            
                                            <RoomSetup roomId={room.id} removeRoom={this.removeRoom} />
                                            
                                        ))
                                        ) : (
                                            <div className="card-action"><a>No Rooms to Display</a></div>
                                        )}

                                    </div>
                                </div>
                                <div className="col s3"></div>
                            </div>
                        </div>
                    </div>
                    <div className="teal lighten-1" id="spaceDiv"></div>

                    <Footer />

                </div>
            )}
}

export default Room;
