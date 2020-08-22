import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  nameChangedHandler = (event, idPerson) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === idPerson;
    });

    //copiar o elemento -> o spread tambem funciona em objectos
    const person = {
      ...this.state.persons[personIndex]
    };
    
    //tambem da assim, para objectos
    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    // atualizar agora a lista de Persons, sem alterar a original
    // para depoois atualizar o state
    const allPersons = [...this.state.persons];
    allPersons[personIndex] = person;

    this.setState(
      { persons: allPersons }
    );
  }

  togglePersonsHandler = () => {
      
      const doesShow = this.state.showPersons;
      this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex)=> {
    //var allPersons = this.state.persons.slice();
    
    var allPersonsSpread = [...this.state.persons];
    //  -> melhor maneira de copiar um array
    // ou entao usar o operator spread, para copiar o arrray do state para um novo;

    // o slice copia o array para uma nova variavel,
    // sem o slice, como os arrays são reference types, irá copiar so um apontador para o array original, alterando assim esse
    // alterar o array original +e uma ma pratica

    allPersonsSpread.splice(personIndex, 1);
    this.setState({ persons: allPersonsSpread });
  }

  render() {

    let personsContent = null;

    //conditional content
    if (this.state.showPersons){
      personsContent = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }
    return (   
      <div className="App">
        <Cockpit 
          persons={this.state.persons} 
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        />        
        {personsContent}
      </div>
    );
  }
}

export default App;