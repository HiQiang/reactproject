import React, {Component} from 'react';
import axios from "axios"

class Cinema extends Component {
    constructor(props) {
        super(props);
        //axios.get(请求地址).then(res=>{}).catch(err=>{console.log(err)})

        // axios.get("https://m.maizuo.com/gateway?" +
        //     "cityId=110100&ticketFlag=1&k=7499488").then(res => {
        //     console.log(res)
        // }).catch(err => {console.log(err)})

        //axios 第三方库 专门用于请求数据
        this.state = {
            cinemaList: [],
            bakcinemaList: []
        }

        axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7499488",
            methd: "get",
            headers: {
                "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.0","e":"16462868986448579862331393","bc":"110100"}',
                "X-Host": ' mall.film-ticket.cinema.list'
            }
        }).then(res => {
            console.log(res)
            this.setState(
                {
                    cinemaList: res.data.data.cinemas,
                    bakcinemaList: res.data.data.cinemas
                }
            )
            //打印log
            console.log(this.state.cinemaList)
            // console.log(this.state)
        })
    }

    //后面讲的生命周期函数 更适合发送ajax

    render() {
        return (
            <div>


                <input onInput={this.handleInput} />

                {
                    this.state.cinemaList.map(item => <dl key={item.cinemaId}>
                        <dt>{item.name}</dt>
                        <dd>{item.address}</dd>
                    </dl>)
                }
            </div>
        );
    }

    handleInput = (event)=>{
        console.log("input",event.target.value)

        let newList = this.state.bakcinemaList.filter(item=>item.name.toUpperCase().includes(event.target.value.toUpperCase())
            || item.address.toUpperCase().includes(event.target.value.toUpperCase()))

        // console.log(newList)
        this.setState(
            {
                cinemaList:newList
            }
        )
        console.log(this.state.cinemaList)
        //cinemaList每次都会被重新覆盖
    }

}

export default Cinema;


//filter

// var arr =["aaa","bbb","ccc"]
// var newarr = arr.filter(item=>item.includes("a"))
// console.log(newarr,arr)



