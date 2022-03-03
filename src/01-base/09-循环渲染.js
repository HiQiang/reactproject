import React, {Component} from 'react';

class App
    extends Component {
    state = {
        list: [
            {id:1,
            text:"111"},
            {id:2,
            text:"222"},
            {id:3,
            text:"333"}
        ]
    }

    render() {

        // let newlist = this.state.list.map(item=><li>{item}</li>)

        return (
            <div>
                <ul>
                    {
                        this.state.list.map((item,index)=>
                            <li key={index}>{item.text}</li>)
                        // newlist
                    }
                </ul>
            </div>
        );
    }
}

export default App;
// var list =["aa","bb","cc"]
// var newlist = list.map(item=>`<li>${item}</li>`)
// console.log(newlist.join(""))

// 为了列表的复用和重排设置key值，提高性能
// 理想key item.id
// 不涉及到列表的增加，删除，重排，设置成索引没有问题