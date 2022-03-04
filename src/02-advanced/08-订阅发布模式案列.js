import React, {Component} from 'react';
import axios from "axios"
import "./css/03-communication.css"

let bus = {
    list:[],
    subscribe(callback) {
        console.log(callback)
        this.list.push(callback)
    },
    publish(text) {
        //遍历所有的list，将回调函数执行
        console.log(this.list)
        this.list.forEach(callback=>{callback && callback(text)})

    }
}


//订阅者
bus.subscribe((value)=>{
    console.log("1111",value)
})
bus.subscribe((value)=>{
    console.log("2222",value)
})

//发布者
// bus.publish()

setTimeout(()=>{
    bus.publish("男人看了沉默")
},0)

setTimeout(()=>{
    bus.publish("男人看了沉默")
},1000)

setTimeout(()=>{
    bus.publish("男人看了沉默")
},2000)




class App extends Component {


    constructor() {
        super();
        this.state = {
            filmList: [],
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
                        <FilmItem key={item.filmId} {...item}></FilmItem>)
                }

                <FilmDetail></FilmDetail>


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

            bus.publish(synopsis)
        }
        }>
            <img src={poster} alt={name}/>
            <h4>{name}</h4>
            <div>观众评分:{grade}</div>
        </div>
    }

}


class FilmDetail extends Component {

    constructor() {
        super();
        this.state = {
            info:""
        }
        bus.subscribe((info)=>{
            console.log("我在filmdetail中定义",info)
            this.setState({
                info:info
            })
        })
    }

    render() {
        return <div className={"filmDetail"}>
            {this.state.info}

        </div>
    }
}