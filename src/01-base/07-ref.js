import React, {Component} from 'react';

class

App
extends
Component {
    a = 100
    myref = React.createRef()
    render() {
        return (
            <div>
                {/*<input ref="myText"/>*/}
                <input ref={this.myref}/>
                <button onClick={() => {
                    // console.log("click",this.refs.myText.value)
                    console.log("click",this.myref.current.value)
                }}>add
                </button>

                <button onClick={this.handleClick2.bind(this)}>add2</button>
            </div>
        );
    }
    handleClick2(){
        console.log("click2",this.myref.current.value)
    }
}

export default App

