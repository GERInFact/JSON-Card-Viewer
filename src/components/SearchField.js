import React, { Component } from "react";
import './SearchField.css';

class SearchField extends Component {
  render() {
    return (
      <div key='searchField'>
        <input type="text" onChange={this.props.changeEvent} placeholder='Search'/>
      </div>
    );
  }
}

export default SearchField;
