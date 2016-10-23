/// <reference path="index.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RaisedButton, FlatButton, AppBar, List, ListItem, Tabs, Tab} from 'material-ui';

import LeftList from "./LeftList";
import RightContent from "./RightContent";

import * as socketIO from "socket.io-client";

import "../scss/index.scss";


export default class App extends React.Component<HelloProps, AppState> {

    public recordList: any[] = [];

    /**
     * SocketIO实例， 监听来自服务器的请求记录
     */
    public socketIO: SocketIOClient.Socket;

    constructor() {
        super();

        this.state = {
            selectedIndex: 0,
            recordList: []
        };
        
        this.initEvent();
    }

    initEvent(){
        this.socketIO = socketIO("http://localhost:8000",  {forceNew: true});
        this.socketIO.on("new", (data:any) => {
            console.log(data);
        });
        this.socketIO.on("record", (data:any) => {
            console.log(data.message);

            if(data.status === 0){
                this.recordList.push(data.record);
            }

            this.setState({});
        });
    }

    /**
     * 左侧记录列表改变回调
     */
    changeSelected(index:number){
        console.log("en, 我变了", index);
        this.setState({
            selectedIndex: index
        });
    }

    render() {
        return (
            <MuiThemeProvider>
            
                <div className="container">

                    <LeftList onChange={this.changeSelected.bind(this)} recordList={this.recordList} />
                    
                    <RightContent selectedIndex={this.state.selectedIndex} recordList={this.recordList}></RightContent>
                    
                </div>

            </MuiThemeProvider>
            
        );
    }
}

