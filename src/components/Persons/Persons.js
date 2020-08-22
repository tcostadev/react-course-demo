import React from 'react';
import Person from './Person/Person'

const persons = (props) => 
    props.persons.map((pElement, index) => {
        return (
            <Person
                key={pElement.id} 
                name={pElement.name} 
                age={pElement.age} 
                click={() => props.clicked(index)}
                changed={(event) => props.changed(event, pElement.id)}
            />
        )
    })

export default persons;