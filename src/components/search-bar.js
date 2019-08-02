import React, {Component} from "react"; 

import DataTable from './dataTable';

class SearchBar extends Component {
    constructor(){
        super();
        this.state = {
            searchInput: ''
        }
    }
    


    searchBarInputHandler = (e) => {
        this.setState({
            searchInput: e.target.value
        })
    }

    render(){
        // console.log(this.state.searchInput, 'parent');
        return (
            <>
                <input type='text' placeholder="Search here..." 
                value={this.state.searchInput} 
                onChange={this.searchBarInputHandler}
                />
                <DataTable searchInput={this.state.searchInput}/>
            </>
        )
    }
}

export default SearchBar;