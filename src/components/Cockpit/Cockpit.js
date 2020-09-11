import './Cockpit.css'
import React, { useEffect, useRef, useContext } from 'react';
import AuthContext from '../../context/auth-context';

// useEffect  => combines functional components with class based comp. -> React Hook

const Cockpit = (props) => {

  const toggleBtnRef = useRef(null); //criar ref para o button

  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  //useEffect => runs after render JSX code
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // trigger when updates
    // HTTP request...
    // setTimeout(()=>{
    //   //alert('Saved DATA - TEST!');
    // }, 1000);

    toggleBtnRef.current.click(); // click button after render JSX

    return () => {}; 
    // da para retornar uma função, essa função ira ser executada antes de o useEffect ser executado

  }, [props.personsLength]) 
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
  if (props.personsLength <= 2){
    assignedClasses.push('red');
  }
  if (props.personsLength <= 1){
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
          <button ref={toggleBtnRef} style={styleButton} onClick={props.clicked}> 
            Toggle Persons 
          </button>
          <button onClick={authContext.login}>Log in</button>
      </div>
  );
};

//export default Cockpit;
export default React.memo(Cockpit) ;
//prevent re-render -> optimization functional components