import React, {Component} from 'react';
import { getDataSetAsJsonFromTSV } from '../tsvToJson';

const internals = {}

internals.filterWordsWhichContainKeyword = (keyword, array) => {
    return array.slice().filter((element) => element.word.toLowerCase().indexOf(keyword.toLowerCase()) > -1)
};

internals.sortByKeywordPosition = (keyword, array) => { 
    return array.slice().sort((firstElem, secondElem) => {
        return firstElem.word.indexOf(keyword) -  secondElem.word.indexOf(keyword)
    })
}

class DataTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            fileData : []
        }
    }

    componentDidMount(){
        getDataSetAsJsonFromTSV().then((dataset) => {
            this.setState({
                fileData : dataset
            })
        })
    }
    prioritizeSearch(){
        const {searchInput} = this.props;
        const {fileData} = this.state;
        let filterData = internals.filterWordsWhichContainKeyword(searchInput,fileData)
        return internals.sortByKeywordPosition(searchInput, filterData)
    }

    render() {
        let filterData  =  this.prioritizeSearch();
        
        return (
            <>
                <ul>
                    {filterData && filterData.slice(0,25).map(value => (
                        <li key={value.number}>{value.word}</li>
                    ))}
                </ul>
            </>
        )
    }
}

export default DataTable;