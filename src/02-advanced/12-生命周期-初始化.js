import React, {Component} from 'react';

class App extends Component {
    state={
        myname:"hiqiang"
    }


    componentWillMount() {
        console.log("第一次willMount",this.state.myname,document.getElementById("myname"))
        //第一次上树前的 最后一次修改状态机会
        this.setState(
            {
                myname:"HiQiang"
            }
        )//初始化数据的作用
    }
    componentDidMount() {
        console.log("第一次DidMount", document.getElementById("myname"))
        //数据请求 axios
        //订阅函数的调用
        //setInterval
        //基于创建完的dom进行初始化。。。。。BetterScroll
    }


    render() {
        console.log("render")
        return (
            <div>
                <span id="myname">{this.state.myname}</span>
            </div>
        );
    }
}

export default App;