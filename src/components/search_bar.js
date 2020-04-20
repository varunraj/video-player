import React from 'react';


class SearchBar extends React.Component {

    // define constructor to instantiate state

    constructor(props) {
        super(props);
        this.state = { term: 'Enter search'};
    
    }

    // override the render function from baseclass

    render()   {
        return (
            <div>     
                <input
                    value = {this.state.term} 
                    onChange = {event => this.setState( { term : event.target.value })} />
            </div>
        );
    }



}

export default SearchBar;