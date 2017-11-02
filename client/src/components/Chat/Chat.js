import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class Chat extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            input: ''
        };

        this.handleOnChange = this.handleOnChange.bind(this);
        this._handleMessageEvent = this._handleMessageEvent.bind(this);

        this.socket = socketIOClient("http://localhost:3001");
    }

    componentDidMount(){
        this._handleMessageEvent();

        //socket.on('chat message', data => this.setState({ response: data }));
    }

    _handleMessageEvent(){
        /*
        socket.on('chat message', (inboundMessage) => {
            this.props.newMessage({user: 'test_user', message: inboundMessage})
        });
        */
    }

    handleOnChange(ev) {
        console.log("change");
       this.setState({ input: ev.target.value });
    }

    handleOnSubmit = () => {
        console.log("submit");
        console.log(this.state.input);

        this.socket.emit('chat message', { message: this.state.input });

        //this.setState({ input: '' });
    }

    render() {
        return (
        /*<ChatLog messages={this.props.messages} />*/

        <div>
            <h2>Hello</h2>
        <input id="loginUsername" onChange={this.handleOnChange} type="text" />

        <button id="loginSubmit" onClick={this.handleOnSubmit}>Submit</button>
        </div>
        );
    }

    };

    export default Chat;