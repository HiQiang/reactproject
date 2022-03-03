import React, {Component} from 'react';

class

App
extends
Component
{
    a = 1
    // state = {
    //     text: "收藏",
    //     myShow:true
    // }

    constructor() {
        super()
        this.state = {
            text: "收藏",
            myShow:true,
            myName:"小红"
        }
    }




    render()
    {
        // let text = "收藏"
        return (
            <div>
                <h1>欢迎来到react开发</h1>
                <button onClick={()=>{
                    this.setState({
                        // text: "取消收藏"
                        myShow:!this.state.myShow,
                        myName:"小明"
                    })  // 间接修改状态

                    if(this.state.myShow){
                        console.log("收藏的逻辑")
                    }else{
                        console.log("取消收藏的逻辑")
                    }
                    }}>{this.state.myShow?"收藏":"取消收藏"}</button>
            </div>
        );
    }
}

export default App;