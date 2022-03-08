import React, {Component} from 'react';

class App extends Component {
    state = {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }

    myref = React.createRef()

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // 获取容器高度
        console.log(this.myref.current.scrollHeight)
        return this.myref.current.scrollHeight

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.myref.current.scrollHeight)
        this.myref.current.scrollTop += this.myref.current.scrollHeight - snapshot
    }




    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.setState({
                        list:[...[11,12,13,14,15,16,17,18,19],...this.state.list]
                    })
                }}>click</button>
                <h1>邮箱应用</h1>
                <div style={{height: "200px", overflow: "auto"}} ref={this.myref}>
                    <ul>
                        {
                            this.state.list.map(item =>
                                <li key={item} style={{height: "100px", background: "yellow"}}>{item}</li>
                            )
                        }
                    </ul>
                </div>

            </div>
        );
    }
}

export default App;