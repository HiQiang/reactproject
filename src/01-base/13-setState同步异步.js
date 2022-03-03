import React, {Component} from 'react';

class App
    extends Component {
    state = {
        count: 1
    }

    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={this.handleAdd1}>Add1</button>
                <button onClick={this.handleAdd2}>Add2</button>
            </div>
        );
    }

    handleAdd1 = () => {
        this.setState(
            {
                count: this.state.count + 1
            },()=>{
                console.log(this.state.count)
            }
        )

        this.setState(
            {
                count: this.state.count + 1
            },()=>{
                console.log(this.state.count)
            }
        )

        this.setState(
            {
                count: this.state.count + 1
            },()=>{
                console.log(this.state.count)
                //状态和真实dom已经更新完了
            }
        )

    }
    handleAdd2 = () => {
        setTimeout(()=>{
                    this.setState(
            {
                count: this.state.count + 1
            }
        )
        console.log(this.state.count)
        this.setState(
            {
                count: this.state.count + 1
            }
        )
        console.log(this.state.count)
        this.setState(
            {
                count: this.state.count + 1
            }
        )
        console.log(this.state.count)
        },0)

    }

}

export default App;

//setState 处在同步的逻辑中 异步更新状态 更新真实dom
//setState 处在异步的逻辑中 同步更新状态 同步更新dom
//setState 接收第二个参数，第二个参数是回调函数，状态和dom更新完后就会被触发