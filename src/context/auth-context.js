import React from 'react';

// o context serve para utilizar as props em components especificos, sem ser preciso passar essas props pelos componenets todos
// por exemplo, o state do App.js tem um bool que é preciso ser acedido no Person.js.. ~
// normalmente passava-se essa props atraves de toda a tree de components => Persons => Person
// com o context, é possivel aceder a essas props so no component desejado!!

const authContext = React.createContext({
  authenticated: false,
  login: () => {}
});

export default authContext;
