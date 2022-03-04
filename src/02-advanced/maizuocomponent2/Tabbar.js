import React, {Component} from 'react';
import {defaultKeyMap} from "@testing-library/user-event/dist/keyboard/keyMap";

// class Tabbar extends Component {
//
//     state = {
//
//
//     }
//
//     render() {
//         return (
//             <div>
//                 <ul>
//                     {
//                         this.props.list.map((item, index) =>
//                             <li key={item.id} className={index === this.props.current ? "active" : ""}
//                                 onClick={() => {
//                                     this.handleClick(index)
//                                 }}>{item.text}</li>)
//                     }
//                 </ul>
//
//             </div>
//         );
//     }
//
//     handleClick(index) {
//         // console.log(index)
//         this.setState({
//             current: index
//         })
//         //通知父组件，修改父组件的状态
//         this.props.myevent(index)
//
//     }
// }
//
// export default Tabbar;

const Tabbar = (props) => {
    function handleClick(index) {
        props.myevent(index)
    }
    return <div>
        <ul>
            {
                props.list.map((item, index) =>
                    <li key={item.id} className={index === props.current ? "active" : ""}
                        onClick={() => {
                            handleClick(index)
                        }}>{item.text}</li>)
            }
        </ul>
    </div>
}

export default Tabbar