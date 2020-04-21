import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { config } from '../config';
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'


const API_KEY = config.youtube_key




// create a new component. Component is a class

class App extends Component {

  constructor(props){
    super(props);
    this.state = {videos:[]};

    YTSearch({key:API_KEY, term:'surfboards'}, (videos) => {
      this.setState({ videos }) ;
    });

  }

  render(){
    return (
          <div>
            <SearchBar />
            <VideoList videos = {this.state.videos} />
          </div>
    )}
}

// Deliver the component instance (from class created) to DOM. We need to place the app inside 
// div container in main page

ReactDOM.render(<App></App>, document.querySelector('.container'));

