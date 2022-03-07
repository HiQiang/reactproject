import React, {Component} from 'react';

class App extends Component {
    state = {
        isCreated: true
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState({
                    isCreated: !this.state.isCreated
                })}>click
                </button>
                {this.state.isCreated && <Child/>}
            </div>
        );
    }
}

export default App;

class Child extends Component {
    render() {
        return (
            <div>
                child
            </div>
        );
    }

    componentDidMount() {
        window.onresize = () => {
            console.log("resize")
        }
        this.timer = setInterval(() => {
                console.log("111")
            }, 1000)
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
        window.onresize = null
        clearInterval(this.timer)

    }


}