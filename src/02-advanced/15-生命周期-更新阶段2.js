import React, {Component} from 'react';

class App extends Component {
    state = ({
        myname: "hi强"
    })

    render() {
        console.log("render")
        return (
            <div>
                <button onClick={() =>this.setState({
                    myname:"小明",
                })}>click</button>
                {this.state.myname}
            </div>
        );
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // return true; // 应该更新
        // return false; // 阻止更新
        // if (老的状态 ！= 新的状态){return true}
        // return false
        // this.state.myname 老的状态
        if (JSON.stringify(this.state) !== JSON.stringify(nextState)){
            return true;
        }
        return false

    }


    UNSAFE_componentWillUpdate() {
        console.log("UNSAFE_componentWillUpdate")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate")
    }

}

export default App;