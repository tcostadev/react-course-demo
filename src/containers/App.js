import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
    // fetch data from external server
  }

  shouldComponentUpdate(){
    console.log('[App.js] shouldComponentUpdate');
    return true; 
    // necessario retornar true/false para identificar se o componente ira atualizar ou nao
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
    // fetch data from external server
  }

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
    console.log('[App.js] render');

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
        <button onClick={() => {this.setState({showCockpit:false})}}>Remove Cockipt</button>

        {
          this.state.showCockpit?
            <Cockpit 
              title={this.props.appTitle} //estas props são passdas atraves do index.js
              persons={this.state.persons} 
              showPersons={this.state.showPersons}
              clicked={this.togglePersonsHandler}
            />
            : null
        }
     
        {personsContent}
      </div>
    );
  }
}

export default App;