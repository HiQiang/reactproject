import React, {Component} from 'react';

class App
    extends Component {
    render() {
        return (
            <div>
                app
            </div>
        );
    }
}

export default App;

//调度中心

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





















