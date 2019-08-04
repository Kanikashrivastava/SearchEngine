import React,{Component} from 'react';
import './App.css'; 
import { getDataSetAsJsonFromTSV } from './tsvToJson';
import SearchBar from './components/SearchBar';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      fileData: []
    }
  }

   componentDidMount(){
        getDataSetAsJsonFromTSV().then((dataset) => {
            this.setState({
                fileData : dataset
            })
        })
    }

  render() {
    return (
      <div className="App">
        <SearchBar fileData={this.state.fileData}/>
      </div>
    )
  }
}

export default App;
