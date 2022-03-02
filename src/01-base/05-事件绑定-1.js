import React, {Component} from 'react';

class

App
extends
Component {
    a = 100

    render() {
        return (
            <div>
                <input/>
                <button onClick={() => {
                    console.log("click", "如果处理逻辑过多，不推荐这种写法", this.a)
                }}>add
                </button>
                <button onClick={this.handleClick2}>add</button>
                <button onClick={this.handleClick3}>add</button>
                <button onClick={()=>{this.handleClick4()}}>add</button>  {/*比较推荐*/}

            </div>
        );
    }

    handleClick2() {
        console.log("click2")
    }

    handleClick3 = ()=>{
        console.log("click3")
    }

    handleClick4 = ()=>{
        console.log("click4")
    }
}


export default App;