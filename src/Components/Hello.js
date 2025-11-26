import React from 'react';

/* export const Hello = () => {
    return (
        <div>
            <h1>this is pradeep</h1>
        </div>
    )

    return React.createElement(
        'div', 
        {id:'hello', className:'demo'}, 
        React.createElement('h1',null, 'this is a create element method'))
} */

const Hello = (props) => {
    return (
        <div>
            <h1>my name is {props.name} and {props.heroname}</h1>
            <h2>{props.children}</h2>
        </div>
    );
}


export default Hello;


