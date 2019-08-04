import React, {Component} from "react"; 

import DataTable from './DataTable';

const internals = {}

internals.filterWordsWhichContainKeyword = (keyword, array) => {
    return array.slice().filter((element) => element.word.toLowerCase().indexOf(keyword.toLowerCase()) > -1)
};

internals.sortByKeywordPosition = (keyword, array) => { 
    return array.slice().sort((firstElem, secondElem) => {
        return (firstElem.word.indexOf(keyword) -  secondElem.word.indexOf(keyword)) +
                (secondElem.number -  firstElem.number) + 
                (firstElem.word.length -  secondElem.word.length)
    })
}

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchInput: ''
        }
    }
    


    searchBarInputHandler = (e) => {
        this.setState({
            searchInput: e.target.value
        })
    }

    prioritizeSearch = () => {
        const {fileData} = this.props;
        const {searchInput} = this.state;
        let filterData = internals.filterWordsWhichContainKeyword(searchInput,fileData);
        filterData = internals.sortByKeywordPosition(searchInput, filterData);
        return filterData.slice(0, 25);

    }

    render(){
        // console.log(this.props, 'parent');
        return (
            <>
                <input type='text' placeholder="Search here..." 
                value={this.state.searchInput} 
                onChange={this.searchBarInputHandler}
                />
                <DataTable 
                filterData={this.prioritizeSearch()} 
                searchInput={this.state.searchInput}/>
            </>
        )
    }
}

export default SearchBar;