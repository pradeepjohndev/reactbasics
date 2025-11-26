import React, {Components} from 'react';

class Classclick extends Components{


    clickhandler(){
        console.log("clicked")
    }

    render(){
        return(
            <div>
                <button onClick={this.clickhandler}>class click</button>
            </div>
        )
    }
}

export default Classclick