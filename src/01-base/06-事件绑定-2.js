import React, {Component} from 'react';

class

App
extends
Component {
    a = 100

    render() {
        return (
            <div>
                <input/>
                <button onClick={() => {console.log("click", "如果处理逻辑过多，不推荐这种写法", this.a)}}>add</button>
                <button onClick={this.handleClick2.bind(this)}>add 不推荐这种写法</button>
                <button onClick={this.handleClick3}>add 推荐</button>
                <button onClick={()=>this.handleClick4()}>add 非常推荐 传参</button>  {/*比较推荐*/}
            </div>
        );
    }

    handleClick2() {
        console.log("click2",this.a)
    }

    handleClick3 = (evt)=>{
        console.log("click3",this.a)
        console.log(evt)
        console.log(evt.target)
    }

    handleClick4 = ()=>{
        console.log("click4", this.a)
    }
}
/*
React并不会真正的绑定事件到每一个具体的元素上，而是采用事件代理的模式
 */


export default App;

/*
call  改变this指向 自动执行函数
apply  改变this指向 自动执行函数
bind  改变this指向 不会自动执行函数，需要手动执行
 */

let obj1 = {
    name:"obj1",
    getName(){
        console.log(this.name);
    }
}

let obj2 = {
    name:"obj2",
    getName(){
        console.log(this.name);
    }
}

obj1.getName.call(obj2)
obj2.getName.apply(obj1)
obj1.getName.bind(obj2)()