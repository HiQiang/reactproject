import React, {Component} from 'react';

class Box extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(this.props.current === this.props.index  || nextProps.current ===nextProps.index){
            return true
        }
        return false
    }

    render() {
        console.log("box",this.props.index,"更新")
        return <div style={{width: "100px", height: "100px",
            border: this.props.current===this.props.index?"5px solid red":"1px solid gray",
            margin: "10px", float: "left"}}>

        </div>
    }
}

class App extends Component {
    state = {
        list: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"],
        current:0
    }

    render() {
        console.log(this.state.current)
        return (
            <div>
                <input type="number" onChange={(evt)=>{
                    this.setState({
                        current:Number(evt.target.value)
                    })
                }}/>
                <div style={{overflow: "hidden"}}>
                    {

                        this.state.list.map((item,index) =>
                            <Box key={item} current={this.state.current} index={index}/>
                        )

                    }
                </div>


            </div>
        );
    }
}

export default App;