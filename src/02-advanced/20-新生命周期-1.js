import React, {Component} from 'react';


class App extends Component {

    state = {
        myname:"kerwin",
        myage:100
    }

    //componentWillMount 初始化

    static getDerivedStateFromProps(nextProps, nextState) {
        console.log("getDerivedStateFromProps", nextState)
        return {
            myname:nextState.myname.substring(0,1).toUpperCase()+nextState.myname.substring(1)
        }
    }

    render() {
        return (
            <div>

                <button onClick={()=>{
                    this.setState(
                        {
                            myname:"xiaoming"
                        }
                    )
                }}>click</button>
                app-{this.state.myname}-{this.state.myage}

            </div>
        );
    }
}

export default App;