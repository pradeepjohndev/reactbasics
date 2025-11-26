import React , {Component}from 'react';

class Message extends Component {


    constructor(){
        super()
        this.state ={
            Message: "hello there"
        }
    }

    changeMessage(){
        this.setState({
            Message:" welcome"
        })
    }


    render(){
        return (
        <div>
            <h1>{this.state.Message}</h1>
            <button onClick={()=> this.changeMessage()}>clcik me </button>
        </div>
        )
    }
}

export default Message; 