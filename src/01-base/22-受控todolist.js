import React, {Component} from 'react';
import "./css/01-index.css"

class App
    extends Component {
    a = 100
    // myref = React.createRef()
    state = {
        mytext: "",
        list: [
            {
                id: 1,
                mytext: "aaa",
                isChecked: false
            },
            {
                id: 2,
                mytext: "bbb",
                isChecked: false
            },
            {
                id: 3,
                mytext: "ccc",
                isChecked: false
            }
        ]
    }

    render() {
        return (
            <div>
                {/*<input ref="myText"/>*/}
                <input value={this.state.mytext} onChange={(evt) => {
                    this.setState(
                        {
                            mytext: evt.target.value
                        }
                    )
                }}/>
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
                                <input type={"checkbox"} checked={item.isChecked}
                                       onChange={() => this.handleChecked(index)}/>



                                {/*富文本展示*/}

                                <span dangerouslySetInnerHTML={
                                    {
                                        __html: item.mytext
                                    }
                                } style={{textDecoration:item.isChecked?"line-through":""}}></span>
                                {/*<button>done</button>*/}
                                <button onClick={this.handleDelClick.bind(this, index)}>del</button>
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

    handleChecked = (index)=> {
        console.log(index)
        let newlist = [...this.state.list]
        newlist[index].isChecked = !newlist[index].isChecked
        this.setState(
            {
                list:newlist
            }
        )

    }


    handleClick2() {
        console.log("click2", this.state.mytext)
        // 不要直接修改状态，可能会造成不可预期的问题
        // this.state.list.push(this.myref.current.value)

        // let newlist = this.state.list  //引用赋值
        // newlist.push(this.myref.current.value)

        let newlist = [...this.state.list]
        newlist.push(
            {
                id: Math.random() * 10000,
                mytext: this.state.mytext
            })

        this.setState(
            {
                list: newlist,
                mytext: ""
            }
        )

        //清空输入框
        // this.myref.current.value = ""
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

