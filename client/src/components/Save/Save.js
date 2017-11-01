import React, { Component } from "react";
import { Icon, Modal, Input } from "react-materialize";
import * as firebase from "firebase";

class Save extends Component{
    constructor(props){
        super(props);

    }

    save = () => {
        let fileType = this.props.fileType;
        let fileName = this.props.fileName;
        let body = this.props.body;

        let file = {};
        file.body = body;
        file.name = fileName + "." + fileType;

    }

    render(){
        return(
            <Modal 
            header="Save"
            trigger={<a><Icon>Save</Icon></a>}>
                <Row>
                    <Input s={6} placeholder="File Name" label="File Name" />
                    <Input s={6} placeholder="File Type" label="File Type" />
                </Row>
            </Modal>
        );
    }
}