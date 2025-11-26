import React , {Component} from 'react'
import Childcomponent from './Childcomponent'

class Methodprops extends Component{

    constructor(props){
        super(props)


        this.state = {
            parentname: "parent"
        }

        this.greetparent = this.greetparent.bind(this)
    }


    greetparent(){
        alert(`hello ${this.state.parentname}`)
    }

    render(){
        return (
            <div>
                <Childcomponent greetHandler = {this.greetparent}/>
            </div>
        )
    }
}

export default Methodprops