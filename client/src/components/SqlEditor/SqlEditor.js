import React, {Component} from 'react';


import CodeMirror from 'react-codemirror';
import * as firebase from 'firebase';
import "firebase/database";
import {sqldb} from "../../Config/firebaseConfig";

import 'codemirror/lib/codemirror.css';
import "codemirror/lib/codemirror.js";
import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/rubyblue.css';
//import fb from '../Firebase'; 

import "./SqlEditor.css";


class SQLEditor extends Component{

    constructor(props){
        super(props);

        this.state = {
            commands: "",
            userDB: "",
            refTB: "",
            tables: "",
            username: "jaycenm",
            tableExists: false,
            databaseExists: false,
            output: "",
        }

        this.updateOutputState = this.updateOutputState.bind(this);

        this.userdb = firebase.database().ref().child(this.state.username);

     }

    /* ------------------------------------------------------------------------------------------------------- */
   


    //change jaycenm to users username
    
    componentWillMount = () =>{

        /* console.log("MOUNTED **************************************************");
        

        if(this.state.username === ""){
            
        }*/

        if(this.state.username !== ""){
            this.setState({
                userDB: firebase.database().ref().child(this.state.username)
            });
            
        }else {
            this.setState({
                username: "jaycenm",
            });

            this.setState({
                userDB: firebase.database().ref().child(this.state.username)
            });
        }

        console.log("STATE USERNAME: " + this.state.username);

       

        console.log("USERDB: " + this.state.userDB);

       this.clearOutput();

        const odb = firebase.database().ref().child(this.state.username + "/output");

        odb.on('value', snap => {
            //console.log(snap.val());
            this.setState({
                output: snap.val()
            })
        })

       /*  let cdb = this.userDB.child("currentDB");

        //let refOutput = this.state.userDB.child("output");

        cdb.on('value', function(snapshot){
            this.setState({
                refTB: this.state.userDB.child(snapshot.val()),
                tables: this.state.refTB.child("Tables")
            });
        }); */

        

        /* refOutput.on('value', function(snapshot){
            sqlEditor.getDoc().setValue(snapshot.val());
        }) */
    }

    /* ------------------------------------------------------------------------------------------------------- */

    /* updateCode = (newCode) => {
        this.setState({
           code: newCode, 
        });
        console.log(newCode);

    } */



    test = (command) => {
        console.log("THIS IS SQL: " + command);
    }

    runQuery = (input) => {
        let commands = input.split(';');

        this.setState({commands: commands});

        console.log(this.state.commands);

        for(let i = 0; i < commands.length; i++){
            this.query(commands[i]);
        }
    }

    query = (command) => {
        
        let q = command.split(' ');
        let term = q[0].toUpperCase();
        console.log(command);
        console.log(q);
        switch(term){
            case "CREATE": 
                switch(q[1].toUpperCase()){
                    case "TABLE":
                        //let columns = [];
                        let table_name = q[2];
                        //check if table already exists
                        this.ifTableExists(table_name);
                        if(this.state.tableExists === true){
                            console.log("Error: Table Already Exists.");
                        }else {
                            let col = {
                                Columns: {}
                            }
                            for(let i = 3; i < q.length; i++){
                                let current = q[i];
                                
                                if(current[0] === "("){
                                    q[i] = current.slice(1, current.length);
                                }
                                
                                if(current[current.length - 1] === ")" || current[current.length - 1] === "," ){
                                    q[i] = current.slice(0, (current.length - 1));
                                }
    
                                if(q[i + 1][q[i + 1].length - 1] === ")" || q[i + 1][q[i + 1].length - 1] === ","){
                                    q[i + 1] = q[i + 1].slice(0, (q[i + 1].length - 1));
                                }
                                
                                // console.log("CURRENT: " + current);
    
                                col.Columns[q[i]] = {};
                                
                                col.Columns[q[i]]["Type"] = q[i + 1];
                                col.Columns[q[i]]["Value"] = "";
                                i++;
                            }
                            
                            this.createTable(this.state.refTB, table_name, col);
                        }
    
                        //CREATE TABLE table_name (column_1 datatype, column_2 datatype, column_3 datatype);
                        break;
                    case "DATABASE":
                        let database_name = q[2];
                        this.ifDatabaseExists(database_name);
                        if(this.state.databaseExists === "true"){
                            this.updateOutput( "Error: Database '" + database_name + "' Already Exists.\n");
                            //console.log("Error: Database '" + database_name + "' Already Exists.");
                        } else {
                            this.createDB(database_name);
                        }
                        break;    
                    default:
                        let error = "ERROR: " + q[1] + " is not a valid command."
                        //console.log(error);
                        this.updateOutput(error);
                }
                break;
            case "SELECT":
                switch(q[1].toUpperCase()){
                    case "*":
                        let w = false;
                        if(q.includes("WHERE") || q.includes("Where") || q.includes("where")){
                            w = true;
                        }
                        switch(w){
                            case true: 
                                //code
                                let table_name = [];
                                let constraints = [];
    
                                let index = 0;
                                if(q.indexOf("WHERE") > -1 ){
                                    index = q.indexOf("WHERE");
                                } else if (q.indexOf("Where") > -1){
                                    index = q.indexOf("Where");
                                    
                                } else if (q.indexOf("where") > -1){
                                    index = q.indexOf("where");
                                }
    
                                for(let i = 3; i < index; i++){
                                    let current = q[i];
                                    if(current[current.length - 1] === ","){
                                        current = current.substring(0, (current.length - 1));
                                    }
                                    table_name.push(current);
                                    //console.log(i,current);
                                }
    
                                for(let j = (index + 1); j < q.length; j++){
                                    //console.log("j:",q[j]);
                                    constraints.push(q[j]);
                                }
    
                                this.selectAllWhere(table_name, constraints);
    
                                //console.log(true);
                                break;
                            case false: 
                                this.selectAll(q[3]);
                                break;
                        }
                        
                        break;
                    default:
                        //code
                        break;
                }
                break;
            case "USE":
                if(q[1]){
                    this.useDB(q[1]);
                } else {
                    // console.log("Invalid Argument");
                    this.updateOutput("Error: Invalid Argument - '" + command + "'\n");
                    /*  $("#output").append("<p style='color: red;'> <i class='fa fa-exclamation-circle fa-lg'></i> Invalid Argument</p>"); */
                }
                
                break;    
            case "DELETE":
                //code 
                break;
            case "INSERT":
                let table_name = q[2];
            
                let selection = this.state.tables.child(table_name);
                let columns = selection.child("Columns");
                let count = 0;
                columns.once('value', function(snapshot){
                    //console.log(snapshot.val());
                    snapshot.forEach(function(child){
                        count++;
                    }); 
                });
                console.log("COUNT: ", count);
                
                //code
                break;
            case "ORDER":
                //code
                break;
        }
        
    }

    ifTableExists = (table_name) =>{
        //console.log("THE TABLE NAME: " + table_name);
        this.state.tables.once('value', function(snapshot) {
            if(snapshot.hasChild(table_name)){
                
                this.updateOutput("Table '" + table_name + "' already exists.\n");
                //console.log(true);
                this.setState({tableExists: true});
            }
            //console.log(false); 
            });
    }
    
    ifDatabaseExists = (database_name) =>{
        this.state.userDB.once('value', function(snapshot){
            if(snapshot.hasChild(database_name)){
                this.setState({databaseExists: true});
                this.updateOutput("Database '" + database_name + "' already exists.\n");
            }
        });
    }

    createTable = (database_name, table_name, columns) => {
        console.log("Database: " + database_name + "\nTable: " + table_name + "\nColumns: " + columns);
        //console.log(columns);
        let nTB = database_name.child("Tables");
        if(database_name === "" || database_name === undefined) {
            this.updateOutput("Command invalid.\n");
            console.log("invalid command");
    
        } else {
            console.log("valid command");
            let updates;
    
            //console.log(tables);
            nTB.once("value", function(snapshot) {
                updates = snapshot.val();
                console.log(snapshot.val());
                console.log(updates);
                updates[table_name] = {"Columns": columns.Columns};
                console.log(updates);
         
                database_name.update({Tables: updates}); 
        
                this.updateOutput("Table '" + table_name + "' successfully created.\n");
            });
            
            
            
        }
        
    }
    
    createDB = (database_name) => {
        console.log(" CREATING DATABASE: " + database_name);
        let current;
        let updates = {};
        this.state.userDB.once('value', function(snapshot){
            current = snapshot.val();
            if(current !== ""){
                updates = current;
            }
            
            updates[database_name] = { 
                "Tables": {
                    id: 0
                }
            };
            this.state.userDB.update(updates);
        });
        
        this.updateOutput("Database '" + database_name + "' successfully created.\n");        
    }

     useDB = (database_name) => {
        console.log("USE: " + this.state.userDB);
         this.state.userDB.once('value', snapshot => {
             if(snapshot.hasChild(database_name)){
                 this.setState( { refTB: this.state.userDB.child(database_name)});
                 //console.log('...Using ' + database_name);
                 let updates = {};
                 updates["currentDB"] = database_name;
                 this.state.userDB.update(updates);
                 this.updateOutput("...Using " + database_name + "\n");
                 //$("#output").append("<p style='color:green;'><i class='fa fa-check-circle-o fa-lg' aria-hidden='true'></i> ...Using " + database_name + "</p>");
                 //console.log(refTB);
                 
             } else {
                // console.log("'" + database_name + "' does not exists");
                 this.updateOutput("'" + database_name + "' does not exist.\n");
                 //$("#output").append("<p style='color: red;'> <i class='fa fa-exclamation-circle fa-lg'></i> '" + database_name + "' does not exist.</p>");
                 
             }
         })
         
     
     }
     
     selectAllWhere = (table_name, constraints) => {
         //console.log('selectAllWhere');
     
         //console.log("Tables: ", table_name);
         //console.log("Contraints: ", constraints);
         
         for(let i = 0; i < table_name.length; i++){
     
             let selection = this.statetables.child(table_name[i]);
             let columns = selection.child("Columns");
             //console.log("Selection: ", selection);
     
             columns.once('value', function(snapshot){
                 snapshot.forEach(function(child){
                     //console.log("CHILD: ", child.key);
                     if(child.key === constraints[0]){
                         //console.log(child.key);
                        // console.log("ID VAL: ", child.val().Value);
                        switch(constraints[1].toUpperCase()){
                            case "=":
                                 //code
                                 var tableOutput = [];
                                 for(var a = 0; a < child.val().Value.length; a++){
                                     if(parseInt(Object.keys(child.val().Value)[a], 10) ===  parseInt(constraints[2], 10)){
                                         //console.log(child.key, Object.keys(child.val().Value)[a]);
                                         tableOutput.push(child.key);
                                         tableOutput.push(Object.keys(child.val().Value)[a]);
                                     }
                                 }
     
                                 var s = "";
                                 
                                 for (var k = 0; k < tableOutput.length; k++){
                                     s = s + tableOutput[k] + "  |   " + tableOutput[k + 1] + "\n";
                                     k++;
                                 }
                                 this.updateOutput(s);
                                 //console.log(s);
                                 break;
                             case "<>":
                                 var tableOutput = [];
                                 for(var a = 0; a < child.val().Value.length; a++){
                                     if(parseInt(Object.keys(child.val().Value)[a], 10) !==  parseInt(constraints[2], 10)){
                                         //console.log(child.key, Object.keys(child.val().Value)[a]);
                                         tableOutput.push(child.key);
                                         tableOutput.push(Object.keys(child.val().Value)[a]);
                                     }
                                 } 
                                 var s = "";
                                 
                                 for (var k = 0; k < tableOutput.length; k++){
                                     s = s + tableOutput[k] + "  |   " + tableOutput[k + 1] + "\n";
                                     k++;
                                 }
                                 this.updateOutput(s);
                                 //console.log(s);
                                 //code 
                                 break;
                             case ">":
                                 //code 
                                 var tableOutput = [];
                                 for(var a = 0; a < child.val().Value.length; a++){
                                     if(parseInt(Object.keys(child.val().Value)[a], 10) >  parseInt(constraints[2], 10)){
                                         //console.log(child.key, Object.keys(child.val().Value)[a]);
                                         tableOutput.push(child.key);
                                         tableOutput.push(Object.keys(child.val().Value)[a]);
                                     }
                                 }
                                 var s = "";
                                 
                                 for (var k = 0; k < tableOutput.length; k++){
                                     s = s + tableOutput[k] + "  |   " + tableOutput[k + 1] + "\n";
                                     k++;
                                 }
                                 this.updateOutput(s);
                                 //console.log(s);
                                 break;
                             case "<":
                                 //code
                                 var tableOutput = [];
                                 for(var a = 0; a < child.val().Value.length; a++){
                                     if(parseInt(Object.keys(child.val().Value)[a], 10) <  parseInt(constraints[2], 10)){
                                         console.log(child.key, Object.keys(child.val().Value)[a]);
                                         tableOutput.push(child.key);
                                         tableOutput.push(Object.keys(child.val().Value)[a]);
                                     }
                                 }
     
                                 var s = "";
                                 
                                 for (var k = 0; k < tableOutput.length; k++){
                                     s = s + tableOutput[k] + "  |   " + tableOutput[k + 1] + "\n";
                                     k++;
                                 }
                                 this.updateOutput(s);
                                 //console.log(s);
                                 break;
                             case ">=":
                                 //code
                                 var tableOutput = [];
                                 for(var a = 0; a < child.val().Value.length; a++){
                                     if(parseInt(Object.keys(child.val().Value)[a], 10) >=  parseInt(constraints[2], 10)){
                                        // console.log(child.key, Object.keys(child.val().Value)[a]);
                                         tableOutput.push(child.key);
                                         tableOutput.push(Object.keys(child.val().Value)[a]);
                                     }
                                 }
                                 var s = "";
                                 
                                 for (var k = 0; k < tableOutput.length; k++){
                                     s = s + tableOutput[k] + "  |   " + tableOutput[k + 1] + "\n";
                                     k++;
                                 }
                                 this.updateOutput(s);
                                 //console.log(s);
                                 break;
                             case "<=":
                                 //code
                                 var tableOutput = [];
                                 for(var a = 0; a < child.val().Value.length; a++){
                                     if(parseInt(Object.keys(child.val().Value)[a], 10) <=  parseInt(constraints[2], 10)){
                                         //console.log(child.key, Object.keys(child.val().Value)[a]);
                                         tableOutput.push(child.key);
                                         tableOutput.push(Object.keys(child.val().Value)[a]);
                                     }
                                 } 
                                 var s = "";
                                 
                                 for (var k = 0; k < tableOutput.length; k++){
                                     s = s + tableOutput[k] + "  |   " + tableOutput[k + 1] + "\n";
                                     k++;
                                 }
                                 this.updateOutput(s);
                                 //console.log(s);
                                 break;
                             case "BETWEEN":
                                 //code 
                                 break;
                             case "LIKE":
                                 //code 
                                 break;
                             case "IN":
                                 //code 
                                 break;         
                        }
                            
                     }
                 });
             });
         } 
     }

      selectAll = (table_name) => {
        let selection = this.state.tables.child(table_name);
        let columns = selection.child("Columns");
        let tableOutput = [];
    
        columns.orderByChild('id').once('value', function(snapshot){
            //console.log("*************************\n" + snapshot.key + "\n****************************");
        });
        columns.once('value', function(snapshot){
            //console.log(snapshot.val());
            snapshot.forEach(function(child){
                tableOutput.push(child.key, child.val());
            }); 
    
            let index = 0;
            let l = tableOutput[0].length;
            for(let j = 1; j < tableOutput.length; j++){
                if(l < tableOutput[j].length){
                    l = tableOutput[j].length;
                    index = j;
                }
                j++;
            }
           // console.log("l: " + l);
            //console.log("index: " + index);
    
            for(let p = 0; p < tableOutput.length; p++){
                
                if(p !== index){
                     if((l - tableOutput[p].length) > 0){
                        let temp = (l - tableOutput[p].length);
                        //console.log(temp);
                        for(let b = 0; b < temp.length; b++){
                            tableOutput[p] = tableOutput[p] + "";
                        }
                     }
                }
                p++;
            }
            
            let headers = [];
            let rows = [];
            for(let i = 0; i < tableOutput.length; i++){
                headers.push(tableOutput[i]);
                let temp = [];
                //let b = 0;
                let current = tableOutput[i + 1];
                //console.log(typeof current);
    
                for(var key in current){
                    if(current.hasOwnProperty(key)){
                        temp.push(current[key]);
                    }
                }
    
                /* for(let c = 0; c < Object.keys(current).length; c++){
                    temp.push(current[c]);
                    b++;
                }
    
                current.forEach(function(item){
                    
                }); */
                rows.push(temp);
                //console.log(tableOutput[i] + "      |       ", tableOutput[i + 1]);
                i++;
            }
            this.formatOutput(headers, rows);
        });
        
        //console.log(tableOutput);
    }
    
   formatOutput = (headers, rows) => {
        //headers[] and rows {}
        let h = "";
        let r = "";
        //console.log(rows);
        for(var i = 0; i < headers.length; i++){
            let spaceCount = 0;
            //let space = "&nbsp;";
            
            h = h + headers[i] + "      |       ";
            //console.log("HEADERS: " + headers[i]);
    
            let v = 0;
            for(var a = 1; a < rows[i].length; a++){
                //console.log("ROWS[i][a][0]" + rows[i][a][0]);
                //console.log("ROWS[i][a][1]" + rows[i][a][1]);
                for(var b = 0; b < rows[i][a].length; b++){
                    console.log("v: " + v);
                    console.log("a: " + a);
                    console.log("i: " + i);
                    console.log("********************************");
                    r = r + rows[b][1][i] + "      |     ";
                    
                    if( v < rows[v][a].length) {
                        v++;
                    }
                }
            
            }
            /* r = r + "\n"; */
        }
    
        //console.log(h);
        
    
        //console.log(r);
    
    }

    updateOutputState = (output) => {
        console.log(this);
        this.setState({
            output: output
        }); 
    }

    /* onChange = (c) => {
        console.log('THIS IS CCCCCCCCCCCCCCCC');
        console.log(c);
        this.setState({
            code: c
        })
    } */
    
    
    updateOutput = (update) => {
        let currentOutput = "";
        let tbRef = firebase.database().ref().child(this.state.username + '/output');
        let usersDB = firebase.database().ref().child(this.state.username + "/");
        const updates = {};
    
        tbRef.once("value", snap =>{
            /* console.log(snap.val()); */
            currentOutput = snap.val();
            if(currentOutput !== ""){
                currentOutput = currentOutput + "------------------------------\n";
            }
            
            /* console.log(currentOutput); */
            currentOutput = currentOutput + update;

            updates["output"] = currentOutput;
            /* console.log("**************************************");
            console.log(updates); */
            usersDB.update(updates);

            
        })

        this.updateOutputState(currentOutput);

        //this.setState({output: currentOutput});
        
    }
    
    clearOutput = () => {
        const dbref = this.state.username + "/output";
        const updates = {};
        updates[dbref] = '';
        firebase.database().ref().update(updates);
    }

    formatHTML = () => {
        const out = this.state.output;
        let o = out.split('------------------------------');
        let newHtml = [];
        for(var i = 0; i < o.length; i++){
            newHtml.push("<span>" + o[i] +"</span>");
        }
        /* console.log("############################################");
        console.log(newHtml);
        console.log("############################################"); */
        this.setHTML(out);
    }

    setHTML = () => {
        const out = this.state.output;
        let o = out.split('------------------------------');
        let newHtml = [];
        for(var i = 0; i < o.length; i++){
            console.log(o[i]);
            newHtml.push("<p>" + o[i] +"</p>");
        }

        newHtml = newHtml.reverse();


        return {__html: newHtml.join("")}
    }


    render(){
    
        return(
            <div ref="Editor" classname="sqlEditorDiv" dangerouslySetInnerHTML={this.setHTML()}  >
                
            </div>
        );
    }
}

export default SQLEditor;