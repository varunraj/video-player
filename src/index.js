import React from 'react';
import ReactDOM from 'react-dom';
import { config } from '../config';
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search';

const API_KEY = config.youtube_key

YTSearch({key:API_KEY, term:'surfboards'}, function(response){
  console.log(response);
});


// create a new component. Component is a class

const App = () => {
  return (
        <div>
          <SearchBar />
        </div>
  );
}

// Deliver the component instance (from class created) to DOM. We need to place the app inside 
// div container in main page

ReactDOM.render(<App></App>, document.querySelector('.container'));

