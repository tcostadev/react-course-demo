import React, {Component} from 'react';
import Person from './Person/Person'

class Persons extends Component{
    // static getDerivedStateFromProps(props, state) {
    //   console.log('[Persons.js] getDerivedStateFromProps');
    //   return state;
    // }

    // componentWillReceiveProps(props) {
    //   console.log('[Persons.js] componentWillReceiveProps', props);
    // }

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