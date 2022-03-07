import React, {Component} from 'react';
import axios from "axios";
import BetterScroll from "better-scroll";

class App extends Component {

    state = {
        myname: "HiQiang",
        list: []
    }

    componentDidMount() {
        axios.get("/test.json").then(res => {
                console.log(res.data.data.films)
                this.setState(
                    {
                        list: res.data.data.films
                    })
                    // 访问
                    // new BetterScroll("#wrapper")
            }
        )
    }


    render() {
        console.log("render")
        return (
            <div>
                <button onClick={() => {
                    this.setState(
                        {
                            myname: "haha"
                        }
                    )
                }}>click
                </button>
                <span id={"myname"}>{this.state.myname}</span>
                <div id={"wrapper"} style={{
                    height:"100px",
                    overflow:"hidden",
                    background:"yellow"
                }}>
                    <ul>
                        {
                            this.state.list.map(item=><li key={item.filmId}>{item.name}</li>)
                        }
                    </ul>
                </div>

            </div>
        );
    }

    componentWillUpdate() {
        console.log("willUpdate", document.getElementById("myname").innerHTML)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("didUpdate", document.getElementById("myname").innerHTML)

        console.log(prevState.list)
        if(prevState.list.length === 0)
        {
            new BetterScroll("#wrapper")
        }


        //更新后，想要获取dom节点 更新

    }
}

export default App;