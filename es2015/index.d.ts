
interface AppState{
    /**
     * 左侧列表的选中值
     */
    selectedIndex?:number

}

interface RecordProps{
    /**
     * 网络请求记录列表
     */
    recordList:any;
}

interface LeftListProps extends RecordProps{
    /**
     * 列表选中改变的回调
     */
    onChange(index:number):void;
}

interface LeftListState{
    /**
     * 列表选中值
     */
    selectedIndex: number
}

interface RightContentProps extends RecordProps{
    /**
     * 列表选中值
     */
    selectedIndex: number
}

interface RightContentState{
    selectedTabIndex:number
}