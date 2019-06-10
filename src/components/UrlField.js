import React, { Component } from 'react';

class UrlField extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div key='urlField'>
                <input type="url" onKeyUp={this.props.urlFieldChanged} placeholder='Url'/>
            </div>
          );
    }
}
 
export default UrlField;