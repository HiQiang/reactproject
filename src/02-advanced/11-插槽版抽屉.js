import React, {Component} from 'react';
// import Navbar from "../01-base/Navbar";
// import Sidebar from "../01-base/Sidebar";

class Navbar extends Component {
    render() {
        return <div style={{background: "red"}}>
            {this.props.children}
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
                <Navbar>
                    <button onClick={() => {
                        this.setState({
                            isShow: !this.state.isShow
                        })
                    }}>click
                    </button>
                </Navbar>

                {this.state.isShow && <Sidebar></Sidebar>}
            </div>
        );
    }

}

export default App;

class Swiper extends Component{
    render(){
        return <div>
            <div>11111</div>
            <div>22222</div>
            <div>33333</div>
        </div>
    }
}



//父传子：属性
//子传父：回调函数 callback

