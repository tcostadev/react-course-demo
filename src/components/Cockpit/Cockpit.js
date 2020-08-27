import './Cockpit.css'
import React, { useEffect } from 'react';

// useEffect  => combines functional components with class based comp. -> React Hook

const Cockpit = (props) => {

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // trigger when updates
    // HTTP request...
    setTimeout(()=>{
      alert('Saved DATA - TEST!');
    }, 1000);

    return () => {}; 
    // da para retornar uma função, essa função ira ser executada antes de o useEffect ser executado

  }, [props.persons]) 
  // lista de props que determina se o useEffect é triggered (change dessas props);
  // se for necessario chamar o useEfect so da primeira vez, passar um array EMPTY []. 
  // assim a dependicy list é vazia, log o não sera feito o trigger do useEffect

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
          <h1>{props.title}</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button style={styleButton} onClick={props.clicked}> Toggle Persons </button>
      </div>
  );
};

export default Cockpit;