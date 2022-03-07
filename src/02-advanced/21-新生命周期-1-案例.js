import React, {Component} from 'react';
import axios from "axios"

class App extends Component {
    state = {
        type: 1,
    }

    render() {
        return (
            <div>
                <ul>
                    <li onClick={() => {
                        this.setState({
                            type: 1
                        })
                    }}>正在热映
                    </li>
                    <li onClick={() => {
                        this.setState(
                            {
                                type: 2
                            }
                        )
                    }}>即将上映
                    </li>
                </ul>

                <FilmList type={this.state.type}></FilmList>

            </div>
        );
    }
}

export default App;

class FilmList extends Component {
    state = {
        list: []
    }

    componentDidMount() {
        // 初始化-执行一次
        if (this.props.type === 1) {
            // 请求卖座正在热映的数据
            console.log("请求正在热映的数据")
            axios({
                url: "https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=258594",
                headers: {
                    "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.0","e":"16462868986448579862331393"}',
                    "X-Host": "mall.film-ticket.film.list"
                }
            }).then(res => {
                console.log(res.data.data.films)
                this.setState({
                    list: res.data.data.films
                })
            })


        } else {
            // 请求卖座即将热映的数据
            console.log("请求即将上映的数据")
            axios({
                url: "https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=2&k=6527125",
                headers: {
                    "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.0","e":"16462868986448579862331393"}',
                    "X-Host": "mall.film-ticket.film.list"
                }
            }).then(res => {
                console.log(res.data.data.films)
                this.setState({
                    list: res.data.data.films
                })
            })
        }
    }

    static getDerivedStateFromProps(nextProps, nextState) {
        console.log("getDerivedStateFromProps", nextProps)

        return {
            type: nextProps.type

        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state.type)
        if(this.state.type === prevState.type){
            return
        }




        if (this.state.type === 1) {
            // 请求卖座正在热映的数据
            console.log("请求卖座正在热映的数据")
            axios({
                url: "https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=258594",
                headers: {
                    "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.0","e":"16462868986448579862331393"}',
                    "X-Host": "mall.film-ticket.film.list"
                }
            }).then(res => {
                console.log(res.data.data.films)
                this.setState({
                    list: res.data.data.films
                })
            })

        } else {
            // 请求卖座即将热映的数据
            console.log("请求卖座正在热映的数据")
            axios({
                url: "https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=2&k=9196227",
                headers: {
                    "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.0","e":"16462868986448579862331393"}',
                    "X-Host": "mall.film-ticket.film.list"
                }
            }).then(res => {
                console.log(res.data.data.films)
                this.setState({
                    list: res.data.data.films
                })

            })
        }
    }


    render() {
        return <ul>
            {
                this.state.list.map(item =>
                    <li key={item.filmId}>{item.name}</li>)
            }
        </ul>
    }
}