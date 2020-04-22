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
            <div className="search-bar">     
                <input
                    value = {this.state.term} 
                    onChange = {event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);

    }

}

export default SearchBar;