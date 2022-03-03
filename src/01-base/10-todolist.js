import React, {Component} from 'react';
import "./css/01-index.css"

class App
    extends Component {
    a = 100
    myref = React.createRef()
    state = {
        list: [
            {
                id: 1,
                mytext: "aaa",
            },
            {
                id: 2,
                mytext: "bbb",
            },
            {
                id: 3,
                mytext: "ccc",
            }
        ]
    }

    render() {
        return (
            <div>
                {/*<input ref="myText"/>*/}
                <input ref={this.myref}/>
                {/*<button onClick={() => {*/}
                {/*    // console.log("click",this.refs.myText.value)*/}
                {/*    console.log("click",this.myref.current.value)*/}
                {/*}}>add*/}
                {/*</button>*/}
                <button onClick={this.handleClick2.bind(this)}>add2</button>
                <ul>
                    {
                        this.state.list.map((item, index) =>
                            <li key={item.id}>
                                {/*{item.mytext}*/}
                                {/*富文本展示*/}

                                <span dangerouslySetInnerHTML={
                                    {
                                        __html: item.mytext
                                    }
                                }></span>

                                <button onClick={this.handleDelClick.bind(this,index)}>del</button>
                                {/*<button onClick={() => {*/}
                                {/*    this.handleDelClick(index)*/}
                                {/*}}>del*/}
                                {/*</button>*/}
                            </li>)
                    }
                </ul>

                {/*{this.state.list.length ? null : <div>暂无待办事项</div>}*/}
                {/*{this.state.list.length === 0 && <div>暂无待办事项</div>}*/}
                <div className={this.state.list.length !== 0 ? "hidden" : ""}>暂无待办事项</div>

            </div>
        );
    }

    handleClick2() {
        console.log("click2", this.myref.current.value)
        // 不要直接修改状态，可能会造成不可预期的问题
        // this.state.list.push(this.myref.current.value)

        // let newlist = this.state.list  //引用赋值
        // newlist.push(this.myref.current.value)

        let newlist = [...this.state.list]
        newlist.push(
            {
                id: Math.random() * 10000,
                mytext: this.myref.current.value
            })

        this.setState(
            {list: newlist}
        )

        //清空输入框
        this.myref.current.value = ""
    }

    handleDelClick(index) {
        console.log("删除", index)
        // 不要直接修改原状态
        let newlist = this.state.list.slice()
        newlist.splice(index, 1)
        this.setState(
            {list: newlist}
        )
    }
}

export default App

