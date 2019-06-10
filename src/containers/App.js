import React, { Component } from "react";
import SearchField from "./../components/SearchField";
import DataLoader from "./../components/DataLoader";
import "./App.css";
import UrlField from "../components/UrlField";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { searchField: "", url: "", dataSet: [] };
    this.onSearchFieldChange = event => {
      this.setState({ searchField: event.target.value });
    };
    this.onUrlFieldChanged = async event => {
      this.setState({ url: event.target.value });
      if (event.keyCode !== 13) return;

      await this.getData();
    };
  }

  async getData() {
    try {
      const response = await fetch(this.state.url);
      const data = await response.json();
      this.setState({ dataSet: data });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return Array.isArray(this.state.dataSet) ? (
      <div>
        <h1>API Testing</h1>
        <UrlField urlFieldChanged={this.onUrlFieldChanged} />
        <SearchField key="searchField" changeEvent={this.onSearchFieldChange} />
        <DataLoader
          key="dataLoader"
          dataSet={this.state.dataSet.filter(d =>
            String(Object.values(d))
              .toLowerCase()
              .includes(this.state.searchField.toLowerCase())
          )}
        />
      </div>
    ) : (
      <div>
        <h1>Unknown URL. Please reload.</h1>
      </div>
    );
  }
}

export default App;
