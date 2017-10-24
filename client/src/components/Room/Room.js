import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer"

class Room extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: []
        };
        this.handleCreateRoomClick = this.handleCreateRoomClick.bind(this);
    }

    loadRooms() {
        console.log("loading rooms");
        axios.get("/roomlist")
            .then(res =>
                this.setState({ rooms: res.data })
            )
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.loadRooms();

    }

    handleCreateRoomClick(e) {
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
    }

        render() {
            return(
                <div>
                    <div className="section no-pad-bot teal lighten-1">
                        <div id="spaceDiv2"></div>
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
                                            <a href="#" onClick={this.handleCreateRoomClick}>Create</a>
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
                                            <div className="card-action">
                                                <Link to={"/terminal/" + room.id}>OPEN ROOM {room.id}</Link>
                                                <Link to={"/deleteroom/" + room.id}>DELETE ROOM {room.id}</Link>
                                            </div>
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

                </div>
            )}
}

export default Room;
