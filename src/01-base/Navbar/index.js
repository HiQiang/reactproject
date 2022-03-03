import React, {Component} from 'react';
import kerwinPropTypes from "prop-types";

console.log(kerwinPropTypes)

class Navbar extends Component {
    state = {
        //只能内部自己使用，外面无法改变
    }

    static propTypes =
        {
            title: kerwinPropTypes.string,
            leftShow: kerwinPropTypes.bool
        }

    static defaultProps =
        {
            leftShow: true
        }

    //属性是父组件传来的，this.props
    render() {
        console.log(this.props.title)
        console.log(this.props.leftShow)
        let {title, leftShow} = this.props

        // 接收属性 做验证

        return (

            <div>
                {leftShow && <button>返回</button>}
                navbar-{title}
                <button>home</button>
                <br/>
                <br/>
                <br/>
            </div>


        );
    }
}

export default Navbar;


class Test {
    a = 1
    static a = 100
}

let obj = new Test()
console.log(obj.a, Test.a)