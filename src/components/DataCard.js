import React, { Component } from "react";
import "./DataCard.css";

class DataCard extends Component {
  constructor(props) {
    super(props);
  }

  buildLayout() {
    return Object.keys(this.props.data).map(k => {
      return (
        <p key={Math.random()}>
          {String(k).toUpperCase()}: {this.props.data[k]}
        </p>
      );
    });
  }
  render() {
    return <div className="card">{this.buildLayout()}</div>;
  }
}

export default DataCard;
