import React, {Component} from 'react';
import axios from "axios"
import "./css/03-communication.css"

const GlobalContext = React.createContext()  //创建context上下文对象

class App extends Component {


    constructor() {
        super();
        this.state = {
            filmList: [],
            info:""
        }


        axios.get(`/test.json`).then(res => {
            // console.log(res.data.data.films)
            this.setState(
                {
                    filmList: res.data.data.films
                }
            )
        })
    }

    render() {
        return (
            <GlobalContext.Provider value={{
                call: "打电话",
                sms: "短信服务",
                info:this.state.info,
                changeInfo:(value)=>{
                    this.setState(
                        {
                             info:value,
                        }
                    )

                }
            }}>
                <div>
                    {/*{this.state.info}*/}

                    {
                        this.state.filmList.map(item =>
                            <FilmItem key={item.filmId} {...item}></FilmItem>)
                    }

                    <FilmDetail></FilmDetail>


                </div>
            </GlobalContext.Provider>
        );
    }
}

export default App;

//受控组件

class FilmItem extends Component {
    render() {
        // console.log(this.props)
        let {name, poster, grade, synopsis} = this.props

        // console.log(name)
        // console.log(poster)
        // console.log(synopsis)

        return (
            <GlobalContext.Consumer>
                {
                    (value) => {
                        console.log(value)

                        return <div className={"filmitem"} onClick={() => {
                            console.log(synopsis)
                            // value.info = "222"
                            // this.props.onEvent(synopsis)
                            value.changeInfo(synopsis)
                        }
                        }>
                            <img src={poster} alt={name}/>
                            <h4>{name}</h4>
                            <div>观众评分:{grade}</div>
                        </div>
                    }
                }

            </GlobalContext.Consumer>)
    }

}


class FilmDetail extends Component {
    render() {
        return (
            <GlobalContext.Consumer>
                {
                    (value) => <div className={"filmDetail"}>
                        detail-{value.info}

                    </div>
                }
            </GlobalContext.Consumer>
        )
    }
}