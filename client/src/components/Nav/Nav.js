import React, { Component } from "react";
import {Button, Modal, Icon} from 'react-materialize';
import "./Nav.css";
import LoginModal from "../Modal";

class Nav extends Component {
    state={isOpen:false}

    toggleOpen = () =>{
        this.setState({isOpen: true});
    }

    toggleClose = () => {
        this.setState({isOpen: false});
    }

    render() {
        return (
    <nav className="blue-grey darken-4">
        <div className="nav-wrapper">
            <div id="navPosition">
                <img id="robotsSize"src="/img/logorobot.png" alt="robotlogo" />
                    <a id="logo-container " href="/" className="brand-logo">cocoding</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/companies">Companies</a></li>
                        <li><a href="/classrooms">Classrooms</a></li>
                        <li><a href="#" onClick={this.toggleOpen}>Login</a></li>
                    </ul>
            </div>
        </div>
        <LoginModal isOpen={this.state.isOpen} isClosed={this.toggleClose}/>
    </nav>
        );
    }
}

export default Nav;