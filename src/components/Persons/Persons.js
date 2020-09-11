import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends Component{
    // static getDerivedStateFromProps(props, state) {
    //   console.log('[Persons.js] getDerivedStateFromProps');
    //   return state;
    // }

    // componentWillReceiveProps(props) {
    //   console.log('[Persons.js] componentWillReceiveProps', props);
    // }

    //caso seja necessario verificar todas as props que sao recebidas neste componente para validar se é necessario fazer o update do componente ou nao
    //é possivel utilizar o PureComponent que ja faz o check de todas as props. é so necessario fazer o import e o extends do PureComponent
    //e assim deixa de ser utilizado o shouldComponentUpdate
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        // verifica se é necessario atualizar mesmo o component das Persons
        return nextProps.persons !== this.props.persons;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!' };
    }
    // componentWillUpdate() {
        //legacy
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');

    }

    render(){
        return (
            this.props.persons.map((pElement, index) => {
                return ( 
                    <Person
                        key={pElement.id} 
                        name={pElement.name} 
                        age={pElement.age} 
                        click={() => this.props.clicked(index)}
                        changed={(event) => this.props.changed(event, pElement.id)}
                    />
                )
            })
        );
    }
}
    

export default Persons;