/// <reference path="index.d.ts" />

import * as React from "react";

import {Tabs, Tab} from "material-ui";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';



export default class RightContent extends React.Component<RightContentProps, RightContentState>{

    constructor(props:RightContentProps){
        super(props);

        this.state = {
            selectedTabIndex: 0
        }
    }

    renderHeaders(){

        if(this.props.recordList.length === 0) return <div />;

        var loopHeader = (obj:any) => {
            var list:any[] = [];

            let n = 0;
            for(let i in obj){
                list.push(
                    <li key={n++}>
                        <span className="text-main">{i}: </span>
                        {obj[i]}
                    </li>
                );
            }

            return list;
        }

        var record = this.props.recordList[this.props.selectedIndex];

        return <div className="tab-header">

                    {/** 总览 */}
                    <Card>
                        <CardHeader title="General" />
                        <CardText>
                            <ul>
                                <li>
                                    <span className="text-main">Resquest URL: </span>
                                    {record.requestHeader.host}
                                </li>
                                <li>
                                    <span className="text-main">Resquest Method: </span>
                                    GET
                                </li>
                                <li>
                                    <span className="text-main">State Code: </span>
                                    {record.statusCode}
                                </li>
                            </ul>
                        </CardText>
                    </Card>

                    {/** 响应头 */}
                    <Card>
                        <CardHeader title="Response Headers" />
                        <CardText>
                            <ul>
                                {loopHeader(record.responseHeader)}
                            </ul>
                        </CardText>
                    </Card>

                    {/** 请求头 */}
                    <Card>
                        <CardHeader title="Request Headers" />
                        <CardText>
                            <ul>
                                {loopHeader(record.requestHeader)}
                            </ul>
                        </CardText>
                    </Card>

                </div>;
        
    }

    changeTab(index:number){
        this.setState({
            selectedTabIndex: index
        })
    }

    render(){

        if(this.props.recordList.length === 0){
            return <div className="right-content">
                    
            </div>;
        }
        
        return <div className="right-content">
                        
                <Tabs value={this.state.selectedTabIndex} onChange={this.changeTab}>
                    <Tab  label="Header" value={0} onClick={this.changeTab.bind(this, 0)} style={{textTransform: "none"}}>
                        {this.renderHeaders()}
                    </Tab>
                    <Tab label="Preview" value={1} onClick={this.changeTab.bind(this, 1)} style={{textTransform: "none"}}>
                        <Card>
                            <CardText>{this.props.recordList[this.props.selectedIndex].responseBody}</CardText>
                        </Card>
                    </Tab>
                    <Tab label="Response" value={2} onClick={this.changeTab.bind(this, 2)} style={{textTransform: "none"}}>
                        <Card>
                            <CardText>{this.props.recordList[this.props.selectedIndex].responseBody}</CardText>
                        </Card>
                    </Tab>
                    <Tab label="Cookies" value={2} onClick={this.changeTab.bind(this, 2)} style={{textTransform: "none"}}>
                    </Tab>
                    
                </Tabs>
            </div>;
    }
}