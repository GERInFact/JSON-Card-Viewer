import React, { Component } from 'react';

class UrlField extends Component {
    render() { 
        return (
            <div key='urlField'>
                <input type="url" onKeyUp={this.props.urlFieldChanged} placeholder='Url'/>
            </div>
          );
    }
}
 
export default UrlField;