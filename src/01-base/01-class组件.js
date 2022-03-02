// class Test{
//     constructor() {
//         this.a =1;
//     }
//     testa(){
//         console.log("testa")
//     }
// }
//
// class ChildTest extends Test{
//     testb(){
//         console.log('test b')
//     }
//
// }
//
// let obj = new ChildTest()
// obj.testa()
// obj.testb()
// console.log(obj.a)
import React from "react";

class App extends React.Component{
    render(){
        return (
        <div>hello world
            <ul>
                <li>1111</li>
                <li>2222</li>
            </ul>
        </div>)
    }
}

export default App
