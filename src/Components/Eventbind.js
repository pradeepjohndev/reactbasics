import React, {Component} from "react";


class Eventbind extends Component{

    constructor(props){
        super(props)

        this.state ={
            Message : "clicked"
        }
    }

    clickHandler(){
        /* this.setState({
            Message : "clicked already"
        })*/
       console.log()
    } 
    render(){
        return(
            <div>
                <div>{this.state.Message}</div>
                <button onClick={this.clickHandler}>Clicked</button>
            </div>
        )
    }
}

export default Eventbind