import React, {Component} from 'react';

import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/WithClass';
import classes from './Person.module.css'
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props){
        super(props);

        this.inputElementRef = React.createRef(); // cria uma ref para determinado element // versoes mais recentes do react
    }

    static contextType = AuthContext;

    componentDidMount(){
        console.log("[Person.js] rendered person");
        
        //this.inputElement.focus(); // focus last person input
        this.inputElementRef.current.focus(); // focus last person input

        console.log(this.context.authenticated);
    };

    render(){
        console.log('[Person.js] rendering...');
        
        // console.log(classes);

        // return (
        //     <div className="Person">
        //         <p onClick={this.props.click}>I'm {this.props.name} and {this.props.age} age!</p>
        //         <p>{this.props.children}</p>
        //         <input type="text" onChange={this.props.changed} value={this.props.name}/>
        //     </div>
        // );

        //esta é uma maneira de retornar varios elementos JSX sem estarem dentro de um parent
        //tambem da se retornar um array de JSX element's
        //check pdf document
        //hoc => higher order components
        return (
            <Aux>
                {this.context.authenticated ? (<p>Authenticated!</p>) : (<p>Please log in</p>)}

                <p onClick={this.props.click}>I'm {this.props.name} and {this.props.age} age!</p>
                <p>{this.props.children}</p>
                <input 
                    //ref={(inputEl) => {this.inputElement = inputEl}} => versoes mais antigas do react
                    ref={this.inputElementRef} // assign ref criada no constructor a este input, para depois fazer o focus
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}
                    />
            </Aux>
        );
        // faz a mesma coisa que o Auxiliary.js
        // return (
        //     <React.Fragment>
        //         <p onClick={this.props.click}>I'm {this.props.name} and {this.props.age} age!</p>
        //         <p>{this.props.children}</p>
        //         <input type="text" onChange={this.props.changed} value={this.props.name}/>
        //     </React.Fragment>
        // );
    };
}

// proptypes é um utility para definir o tipo das props que o component recebe
// caso seja passado um tipo diferente, dá erro !
// npm install --save prop-types
Person.propTypes = {
    click: PropTypes.func,
    changed: PropTypes.func,
    age: PropTypes.number,
    name: PropTypes.string
};

//export default Person;
export default withClass(Person, classes.Person);