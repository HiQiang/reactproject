import React, {Component} from 'react';

class App extends Component {
    state = {
        mytext:"11111"
    }
    render() {
        console.log("render")
        return (
            <div>
                <button onClick={()=>{this.setState({
                    mytext:"22222"
                })}}>click</button>
                {this.state.mytext}
            </div>
        );
    }

    // componentWillUpdate(nextProps, nextState, nextContext) {
    //     console.log("componentWillUpdate")
    // }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentdidupdate",snapshot)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate")
        return 100

    }

}

export default App;