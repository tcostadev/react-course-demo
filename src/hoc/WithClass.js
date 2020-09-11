import React from 'react';

const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props}/> {/* spread operator, isto divide todas as props em {key value} passando assim as props para o component principal*/} 
    </div>
  );
};

export default withClass;
