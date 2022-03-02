import React, {Component} from "react";

export default class App extends Component{
    render() {
        return(
            <div>
                <Navbar>
                    {/*<div>111111</div>*/}
                </Navbar>
                <Swiper></Swiper>
                <Tabbar></Tabbar>
            </div>
        )
    }
}

class Child extends Component{
    render(){
        return <div>Child</div>
    }
}

class Navbar extends Component{
    render() {
        return <div>navbar
        <Child></Child>
        </div>
    }
}

function Swiper() {
    return <div>Swiper</div>
}

const Tabbar = ()=> <div>tabbar</div>
