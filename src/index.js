import React from 'react';
import ReactDOM from 'react-dom';

// create a new component. Component is a class

const App = function(){
  return <div>Hi</div>
}

// Deliver the component instance (from class created) to DOM. We need to place the app inside 
// div container in main page

ReactDOM.render(<App></App>, document.querySelector('.container'));

