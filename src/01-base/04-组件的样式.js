import React, {Component} from 'react';
import './css/01-index.css'  //导入css模块， webpack支持

class

App
extends
Component
{
    render()
    {
        let myname = "HiQiang"
        let obj = {backgroundColor:"yellow",fontSize:"30px"}
        return (
            <div>
                {10+20}-{myname}
                {10>20?'aaa':'bbb'}
                <div style={obj}>
                    11111
                </div>
                <div style={{backgroundColor:"red"}}>
                    22222
                </div>
                {/*React推荐我们使用行内样式，因为React觉得每一个组件都是一个独立的整体*/}
                <div className="active">33333333</div>
                <div id="myapp">55555</div>
                <label htmlFor="username">用户名：</label>
                <input type="text" id="username"/>
            </div>
        );
    }
}

export default App;