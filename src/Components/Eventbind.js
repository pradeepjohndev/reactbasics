import React, {Component} from "react";


class Eventbind extends Component{

    constructor(props){
        super(props)

        this.state ={
            Message : "clicked"
        }
        //bind in constructor
       /*  this.clickHandler = this.clickHandler.bind(this) */
    }
/* 
    clickHandler(){
        this.setState({
            Message : "clicked already"
        })
       console.log(this)
    }  */

    //using arrow function in method
/*     clickHandler = () =>{
        this.setState({
            Message : "clicked"
        })
    } */

    render(){
        return(
            <div>
                <div>{this.state.Message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Clicked</button> */}
                {/* <button onClick={()=> this.clickHandler()}>click me </button> */}
                {/* <button onClick={this.clickHandler}>click me </button> */}
            </div>
        )
    }
}

export default Eventbind