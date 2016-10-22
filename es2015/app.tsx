/// <reference path="index.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RaisedButton, FlatButton, AppBar, List, ListItem, Tabs, Tab} from 'material-ui';

import LeftList from "./LeftList";
import RightContent from "./RightContent";

import "../scss/index.scss";

export interface HelloProps { compiler: string; framework: string; }

export default class App extends React.Component<HelloProps, AppState> {

    public recordList: any[] = [];

    constructor() {
        super();

        this.state = {
            selectedIndex: 0
        };
        

        this.recordList.push({
            "id": 1, 
            "requestHeader": {
                "host": "test.quba360.com", 
                "proxy-connection": "keep-alive", 
                "upgrade-insecure-requests": "1", 
                "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36", 
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8", 
                "dnt": "1", 
                "accept-encoding": "gzip, deflate, sdch", 
                "accept-language": "zh-CN,zh;q=0.8", 
                "cookie": "sid=173148bb-2d7c-4eba-bdf9-bcae855b8ee6; Hm_lvt_2de8b2b1aede01d7c5fa5eb928f3b1ce=1476880555; Hm_lpvt_2de8b2b1aede01d7c5fa5eb928f3b1ce=1477109618", 
                "origin": "http://evil.com/"
            }, 
            "statusCode": 200, 
            "responseHeader": {
                "server": "Apache-Coyote/1.1", 
                "set-cookie": [], 
                "access-control-allow-origin": "*", 
                "content-type": "application/json;charset=utf-8", 
                "content-length": "43", 
                "date": "Sat, 22 Oct 2016 08:11:13 GMT", 
                "connection": "close"
            }, 
            "responseBody": "{\"message\":\"获取头像成功\",\"status\":0}"
        });

        this.recordList.push({
            "id": 1, 
            "requestHeader": {
                "host": "test.quba360.com", 
                "proxy-connection": "keep-alive", 
                "cache-control": "max-age=0", 
                "upgrade-insecure-requests": "1", 
                "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36", 
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8", 
                "dnt": "1", 
                "accept-encoding": "gzip, deflate, sdch", 
                "accept-language": "zh-CN,zh;q=0.8", 
                "cookie": "gsScrollPos=; JSESSIONID=D6627C3A14351BC9C99F00AEB0E3B4BC; sid=f599a9d6-1a21-42c6-a5d0-cd8e953c4f43; Hm_lvt_2de8b2b1aede01d7c5fa5eb928f3b1ce=1476880555; Hm_lpvt_2de8b2b1aede01d7c5fa5eb928f3b1ce=1477109618", 
                "origin": "http://evil.com/"
            }, 
            "statusCode": 200, 
            "responseHeader": {
                "server": "Apache-Coyote/1.1", 
                "access-control-allow-origin": "*", 
                "content-type": "application/json;charset=utf-8", 
                "content-length": "2941", 
                "date": "Sat, 22 Oct 2016 09:52:33 GMT", 
                "connection": "close"
            }, 
            "responseBody": "{\"data\":{\"paintGroups\":[{\"busiCode\":\"262\",\"busiKey\":\"user.paints\",\"busiType\":\"1\",\"busiTypeName\":\"插画 - 商业插画\",\"coverUrl\":\"http://7xnnxr.com2.z0.glb.qiniucdn.com/qubacover_14706380026078024595084\",\"createTime\":1470638002000,\"id\":11312,\"name\":\"好烦呀，听说标题要非常非常的长。大约\",\"praiseCount\":0,\"remark\":\"4364364363463\",\"resourceCount\":1,\"sysOwnership\":false,\"sysTags\":\"Q版头像,艺术设计大赛,\",\"tags\":\"Q版头像,艺术设计大赛,\",\"viewCount\":1,\"visible\":true},{\"busiCode\":\"262\",\"busiKey\":\"user.paints\",\"busiType\":\"1\",\"busiTypeName\":\"插画 - 商业插画\",\"coverUrl\":\"http://7xnnxr.com2.z0.glb.qiniucdn.com/qubacover_14700208616622706015521\",\"createTime\":1470020861000,\"id\":11311,\"name\":\"tt\",\"praiseCount\":0,\"remark\":\"tt\",\"resourceCount\":1,\"sysOwnership\":false,\"sysTags\":\"Q版头像,艺术设计大赛,\",\"tags\":\"Q版头像,艺术设计大赛,\",\"viewCount\":4,\"visible\":true},{\"busiCode\":\"262\",\"busiKey\":\"user.paints\",\"busiType\":\"20\",\"busiTypeName\":\"平面 - VI/CI\",\"coverUrl\":\"http://7xnnxr.com2.z0.glb.qiniucdn.com/qubacover_14699664590490127032812\",\"createTime\":1469966459000,\"id\":11310,\"name\":\"你变了吗？\",\"praiseCount\":0,\"remark\":\"325252\",\"resourceCount\":1,\"sysOwnership\":false,\"sysTags\":\"341,艺术设计大赛,二次元,\",\"tags\":\"341,艺术设计大赛,二次元,\",\"viewCount\":1,\"visible\":true},{\"busiCode\":\"262\",\"busiKey\":\"user.paints\",\"busiType\":\"1\",\"busiTypeName\":\"插画 - 商业插画\",\"coverUrl\":\"http://7xnnxr.com2.z0.glb.qiniucdn.com/qubacover_14698831327487999836181\",\"createTime\":1469883132000,\"id\":11309,\"name\":\"36262\",\"praiseCount\":0,\"remark\":\"6236262\",\"resourceCount\":1,\"sysOwnership\":false,\"sysTags\":\"吊丝,\",\"tags\":\"吊丝,\",\"viewCount\":0,\"visible\":true}],\"painterInfo\":{\"acceptCategories\":\"2,5,15\",\"acceptCategoriesNames\":\"概念设定,涂鸦/潮流,绘本\",\"address\":\"吉林省 四平市\",\"attentionCount\":0,\"authTime\":1471876672000,\"authUser\":{\"avatarUrl\":\"http://7xj3uz.com2.z0.glb.qiniucdn.com/userquba_14598311788459504171456\",\"easemobId\":\"21232f297a57a5a743894a0e4a801fc3\",\"isAttention\":0,\"nickName\":\"趣吧\",\"userId\":1,\"userName\":\"admin\"},\"avatarUrl\":\"http://7xj3uz.com2.z0.glb.qiniucdn.com/user_default_avatar_nan_2.jpg\",\"bindMail\":false,\"bindPhone\":true,\"cooperateWay\":2,\"createTime\":1449198713000,\"description\":\"好嘞\",\"fansCount\":0,\"gender\":1,\"groupCount\":11,\"mail\":\"coffee@wangchaoyi.com\",\"nickName\":\"打发斯蒂芬\",\"onSite\":false,\"painterType\":2,\"phone\":\"13482493190\",\"phoneCode\":\"+86\",\"popularity\":4526715,\"praiseCount\":0,\"qq\":\"21213\",\"realName\":\"陈伟\",\"regionCode\":\"2203000000\",\"regionFullName\":\"吉林省 四平市\",\"regionName\":\"四平市\",\"regionPath\":\"2200000000,2203000000\",\"updateTime\":1471876672000,\"userId\":262,\"userName\":\"\",\"worklong\":1,\"worklongName\":\"超过30小时／周\"},\"printGroupTags\":[\"偏写实\",\"Q版头像\",\"艺术设计大赛\",\"我是标签\",\"吊丝\",\"341\",\"二次元\",\"迪斯尼\"]},\"message\":\"获取主页数据成功\",\"status\":0}"
        });
    }

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

