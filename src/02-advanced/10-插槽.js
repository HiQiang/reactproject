import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <div>
                <Child>
                    <div>11111</div>
                    <div>22222</div>
                    <div>1333</div>
                    <div>44444</div>
                    {
                        // children
                    }
                </Child>

            </div>
        );
    }
}

export default App;

class Child extends Component {
    render(){
        return(
            <div>
                Child

                {/*{插槽}*/}

                {this.props.children[0]}
                {this.props.children[3]}
            </div>
        )
    }
}

//为了复用
//一定程度减少父子通信