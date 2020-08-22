import './Cockpit.css'
import React from 'react';

const cockpit = (props) => {

  // inline styling
  const styleButton = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    ':hover' : { // so é possivel com o radium 
      backgroundColor: 'lightgreen',
      color: 'black'
    }
  };

  let assignedClasses = [];
  if (props.persons.length <= 2){
    assignedClasses.push('red');
  }
  if (props.persons.length <= 1){
    assignedClasses.push('bold');
  }
 
  if (props.showPersons){
    //change style props dinamicamente
    styleButton.backgroundColor = 'red';
    styleButton[':hover'] = {
      backgroundColor: 'salmon',
      color: 'black'
    };
  }

  return(
      <div className="Cockpit">
          <h1>Hi, I'm a React App</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button style={styleButton} onClick={props.clicked}> Toggle Persons </button>
      </div>
  );
};

export default cockpit;