import React, {Component} from 'react';

class DataTable extends Component {
  

    render() {
        let {filterData}  =  this.props;
        console.log(this.props);
        
        return (
            <>
                <ul>
                    {filterData && filterData.map(value => (
                        <li key={value.number}>{value.word}</li>
                    ))}
                </ul>
            </>
        )
    }
}

export default DataTable;