import React, {Component} from 'react';

class Child extends Component {
    state = {
        title:""

    }

    render() {
        return <div>
            child-{this.state.title}
        </div>
    }

    componentWillReceiveProps(nextProps, nextContext) {

        console.log("componentWillReceiveProps", this.props.text)
        // 最先获得父组件传来的属性，可以利用属性进行ajax或者逻辑处理
        // 把属性转化成孩子自己的状态
        this.setState({
            title:nextProps.text + "hiqiang"
        })
    }
}

class App extends Component {
    state = {
        text: "1111"
    }

    render() {
        return (
            <div>

                {
                    this.state.text
                }

                <button onClick={() => {
                    this.setState({
                        text: "2222"
                    })
                }}>click
                </button>

                <Child text={this.state.text}></Child>

            </div>
        );
    }
}

export default App;