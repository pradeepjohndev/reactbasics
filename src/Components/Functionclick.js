import React from 'react'

function Functionclick(){
    function clickHandle(){
        console.log("button clicked")
    }

    return(
        <div>
            <button onClick={clickHandle}>click me </button>
        </div>
    )
}

export default Functionclick