import React, {Component} from 'react';

class App
    extends Component {

    state = {
        myhtml: `<div>hahah</div>`
    }

    render() {
        return (
            <div dangerouslySetInnerHTML={
                {__html: this.state.myhtml}
            }>


            </div>
        );
    }
}

export default App;