import React, { Component } from 'react';
import DataCard from './DataCard';
import './DataLoader.css';

class DataLoader extends Component {
    render() { 
        return ( <div className="cardContainer" >
           {this.props.dataSet.map(d => <DataCard key={Date.now() / Math.random(1,100)} data={d} />)}
        </div>  );
    }
}
 
export default DataLoader;