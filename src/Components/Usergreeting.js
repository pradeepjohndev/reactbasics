import React, {Component} from 'react'

class Usergreeting extends Component{


    constructor(props){
        super(props)

        this.state = {
            isLoggin : true
        }
    }
    render(){
        /* if(this.state.isLoggin){
            return <div>welcome everyone</div>
        }else{
            return <div>welcome guest</div>   
        }  */  
       
        /* let message 
        if(this.state.isLoggin){
            message = <div>welcome everyone</div>
        }else{
            message =  <div>welcome guest</div>
        } 
        return <div>{message}</div> */

        return(
            this.state.isLoggin ?
            <div>welcome viswa</div>:
            <div>welcome guest</div>
        )

    }
}
export default Usergreeting