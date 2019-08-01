import React, {Component} from "react";

class SearchBar extends Component {
    state = {
        searchInput: ''
    }

    tsvToJsonCovertHandler = () => {
        
    }



    searchBarInputHandler = (e) => {
        this.setState({
            searchInput: e.target.value
        })
    }

    render(){
        return (
            <>
                <input type='text' placeholder="Search here..." 
                value={this.state.searchInput} 
                onChange={this.searchBarInputHandler}
                />
            </>
        )
    }
}

export default SearchBar;