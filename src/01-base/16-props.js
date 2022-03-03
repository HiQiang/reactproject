import React, {Component} from 'react';
import Navbar from "./Navbar/index"

class App
    extends Component {
    state = {
        a: 1
    }

    render() {
        let obj = {
            title: "测试",
            leftShow:false
        }
        return (
            //上面父组件传来的一个对象
            <div>
                <div>
                    <h2>首页</h2>
                    <Navbar title={"首页"} leftShow={false}></Navbar>
                </div>
                <div>
                    <h2>列表</h2>
                    <Navbar title={"列表"} leftShow={true}></Navbar>
                </div>
                <div>
                    <h2>购物车</h2>
                    <Navbar title={"购物车"} leftShow={true}></Navbar>
                </div>
                <Navbar title={obj.title} leftShow={obj.leftShow}></Navbar>
                <Navbar {...obj} />

            </div>
        );
    }
}


export default App;
