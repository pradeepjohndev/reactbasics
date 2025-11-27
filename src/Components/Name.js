import React from 'react'

function Namelist(){
    const persons = [
        {
            id: 1,
            age: 25,
            name : "pradeep",
            skill : "python"
        },{
            id : 2,
            age : 21,
            name: "ashimin",
            skill : "javascript"
        },{
            id : 3,
            age: 20,
            name : "agnesh",
            skill : "html"
        }
    ]
    const personlist = persons.map(person => 
    <h3>
        my name is {persons.name} and {person.age} years old 
    </h3>
    )
    return <div>{personlist}</div>
}

export default Namelist