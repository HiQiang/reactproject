import React, {Component} from 'react';

class Field extends Component {
    render() {
        return <div style={{background: "yellow"}}>
            <label>{this.props.label}</label>
            <input type={this.props.tpye} onChange={
                (evt) => {
                    // console.log(evt.target.value )
                    this.props.onChangeEvent(evt.target.value)
                }
            } value={this.props.value}/>
        </div>
    }
}

class App

    extends Component {

    state = {
        username:localStorage.getItem("username"),
        password:""
    }

    render() {
        return (
            <div>
                <h1>登录页面</h1>

                <Field label={"用户名"} tpye={"text"} onChangeEvent={(value) => {
                    // console.log(value)
                    this.setState({
                        username:value
                    })
                }} value={this.state.username}></Field>

                <Field label={"密码"} tpye={"password"} onChangeEvent={(value) => {
                    // console.log(value)
                    this.setState({
                        password:value,
                    })
                }} value={this.state.password}></Field>

                <button onClick={()=>{
                    console.log(this.state.username, this.state.password,"发送后端进行验证")
                }}>登录</button>
                <button onClick={()=>{
                    this.setState(
                        {
                            username:"",
                            password:""
                        }
                    )
                }}>取消</button>
            </div>
        );
    }
}

export default App;