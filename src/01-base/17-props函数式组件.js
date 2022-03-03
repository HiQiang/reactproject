import React, {Component} from 'react';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

class

App
extends
Component
{
    render()
    {
        return (
            <div>
                {/*// 类组件接收属性*/}
                <Navbar title={"导航"}></Navbar>
                <Sidebar bg={"yellow"} position={"left"}></Sidebar>
            </div>
        );
    }
}

export default App;