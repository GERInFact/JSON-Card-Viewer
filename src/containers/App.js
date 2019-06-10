import React, { Component } from "react";
import SearchField from "./../components/SearchField";
import DataLoader from "./../components/DataLoader";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { searchField: "", dataSet: [] };
    this.onSearchFieldChange = event => {
      this.setState({ searchField: event.target.value });
    };
  }

  async getData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums"
      );
      const data = await response.json();
      this.setState({ dataSet: data });
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return !this.state.dataSet.length ? (
      <h1>Loading...</h1>
    ) : (
      <div>
        <h1>API Testing</h1>
        <SearchField key="searchField" changeEvent={this.onSearchFieldChange} />
        <DataLoader
          key="dataLoader"
          dataSet={this.state.dataSet.filter(d =>
            String(Object.values(d)).toLowerCase().includes(
              this.state.searchField.toLowerCase()
            )
          )}
        />
      </div>
    );
  }
}

export default App;
