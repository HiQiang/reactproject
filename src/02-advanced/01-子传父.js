import React, {Component} from 'react';
// import Navbar from "../01-base/Navbar";
// import Sidebar from "../01-base/Sidebar";

class Navbar extends Component {
    render() {
        return <div style={{background: "red"}}>

            <button onClick={() => {
                console.log("子通知父，让父的isShow取反", this.props.event)
                this.props.event() //调用父组件传来的回调函数

            }
            }>click
            </button>

            <span>navbar</span>
        </div>
    }
}

class Sidebar extends Component {
    render() {
        return <div style={{background: "yellow", width: "200px"}}>
            <ul>
                <li>111111</li>
                <li>111111</li>
                <li>111111</li>
                <li>111111</li>
                <li>111111</li>
                <li>111111</li>
                <li>111111</li>
                <li>111111</li>
                <li>111111</li>
                <li>111111</li>
                <li>111111</li>
            </ul>
        </div>

    }
}

class App
    extends Component {
    state = {
        isShow: true,
    }

    render() {
        return (
            <div>
                <Navbar event={() => {this.handleEvent()
                }}></Navbar>

                {/*<button onClick={()=>{*/}
                {/*    this.setState(*/}
                {/*        {*/}
                {/*            isShow: !this.state.isShow*/}
                {/*        }*/}
                {/*    )*/}
                {/*}}>click</button>*/}

                {this.state.isShow && <Sidebar></Sidebar>}
            </div>
        );
    }

    handleEvent = () => {
        this.setState({
            isShow: !this.state.isShow
        })
        console.log("父组件定义的event事件")

    }
}

export default App;

//父传子：属性
//子传父：回调函数 callback

