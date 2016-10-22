/// <reference path="index.d.ts" />

import * as React from "react";

import {AppBar, List, ListItem} from "material-ui";
import {makeSelectable} from "material-ui/List";



let SelectableList = makeSelectable(List);

// SelectableList = wrapState(SelectableList);

/**
 * 左侧网络请求记录列表栏
 */
export default class LeftList extends React.Component<LeftListProps, LeftListState>{

    constructor(prop: LeftListProps){
        super(prop);

        this.state = {
            selectedIndex: (this.props.recordList.length > 0 ? 0 : null)
        }
    }

    componentWillMount() {
        this.setState({
            selectedIndex: 0,
        });
    }

    handleChange(index:number){

        if(this.state.selectedIndex === index) return;

        this.props.onChange(index);
        this.setState({
            selectedIndex: index
        })
    }

    renderMenuList(){
        var list:any[] = [];

        this.props.recordList.forEach((record:any, index:number) => {
            list.push(
                <ListItem 
                    key={index}
                    value={index}
                    primaryText={record.requestHeader.host} 
                    onClick={this.handleChange.bind(this, index)}
                />
                
                );
        })

        return list;
    }

    render(){
        return <div className="left-menu">

            <AppBar title="WebDebug"></AppBar>

            <SelectableList value={this.state.selectedIndex}>
                {this.renderMenuList()}
            </SelectableList>
                            
        </div>
    }

}