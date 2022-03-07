import React, {Component} from 'react';
import axios from "axios"
import "./css/03-communication.css"

class App extends Component {


    constructor() {
        super();
        this.state = {
            filmList: [],
            info: ""
        }
        // axios({
        //     url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=5522254",
        //     methd: "get",
        //     headers: {
        //         "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.0","e":"16462868986448579862331393","bc":"110100"}',
        //         "X-Host": ' mall.film-ticket.cinema.list'
        //     }
        // }).then(res => {
        //     console.log(res)
        //     this.setState(
        //         {
        //             filmList:res.data.data.films
        //         }
        //     )
        // })


    }

    componentDidMount() {
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
            <div>
                {/*{this.state.info}*/}

                {
                    this.state.filmList.map(item =>
                        <FilmItem key={item.filmId} {...item} onEvent={(value) => {
                            // console.log("父组件接收", value)
                            this.setState({
                                info: value
                            })

                        }}></FilmItem>)
                }

                <FilmDetail info={this.state.info}></FilmDetail>


            </div>
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

        return <div className={"filmitem"} onClick={() => {
            // console.log(synopsis)
            this.props.onEvent(synopsis)
        }
        }>
            <img src={poster} alt={name}/>
            <h4>{name}</h4>
            <div>观众评分:{grade}</div>
        </div>
    }

}


class FilmDetail extends Component {
    render() {
        return <div className={"filmDetail"}>
            {this.props.info}

        </div>
    }
}