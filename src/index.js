// for creating lagged version of a function =. throttling
import _ from 'lodash';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { config } from '../config';
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail';


const API_KEY = config.youtube_key




// create a new component. Component is a class

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      videos:[],
      selectedVideo : null
    };

    this.videoSearch('surfboards');
  }

    videoSearch(term) {
       YTSearch({key:API_KEY, term:term}, (videos) => {
          this.setState({
            videos,
            selectedVideo: videos[1] 
            }) ;
          });

        };
    

  render() {

    // create a lagged version of search so that page dont refresh every stroke. 300 ms throttle 
    const videoSearch = _.debounce((term)=> {this.videoSearch(term)}, 300 );

    return (
          <div>
            <SearchBar onSearchTermChange ={videoSearch}/>
            <VideoDetail video = {this.state.selectedVideo}/>
            <VideoList
              onVideoSelect = {selectedVideo => this.setState({selectedVideo})} 
              videos = {this.state.videos} />
          </div>
    );
  }
}

// Deliver the component instance (from class created) to DOM. We need to place the app inside 
// div container in main page

ReactDOM.render(<App></App>, document.querySelector('.container'));

