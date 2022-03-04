import React, {Component} from 'react';
import {defaultKeyMap} from "@testing-library/user-event/dist/keyboard/keyMap";

class Tabbar extends Component {

    state = {
        list: [
            {
                id: 1,
                text: "电影"
            },
            {
                id: 2,
                text: "影院"
            },
            {
                id: 3,
                text: "我的"
            },
        ],
        current: this.props.defaultValue
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map((item, index) =>
                            <li key={item.id} className={index === this.state.current ? "active" : ""}
                                onClick={() => {
                                    this.handleClick(index)
                                }}>{item.text}</li>)
                    }
                </ul>

            </div>
        );
    }

    handleClick(index) {
        // console.log(index)
        this.setState({
            current: index
        })
        //通知父组件，修改父组件的状态
        this.props.myevent(index)

    }
}

export default Tabbar;