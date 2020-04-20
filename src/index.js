import React from 'react';
import ReactDOM from 'react-dom';
import { config } from '../config';

const API_KEY = config.youtube_key

// create a new component. Component is a class

const App = () => {
  return <div>Hi</div>
}

// Deliver the component instance (from class created) to DOM. We need to place the app inside 
// div container in main page

ReactDOM.render(<App></App>, document.querySelector('.container'));

