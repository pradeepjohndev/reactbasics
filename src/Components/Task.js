import React, {Component} from 'react';

class Task extends Component{

    constructor(){
        super()

        this.state = {
            count : 0
        };
    }

    increment= () => {
        this.setState({
            count : this.state.count + 1
        });
    }

    render(){
        return(
            <div>
                <h1>count : {this.state.count}</h1>
                <button onClick={this.increment}>click me</button>
            </div>
        );
    }
}

export default Task;