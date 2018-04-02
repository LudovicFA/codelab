import React, { Component } from 'react';

class Details extends React.Component {

  constructor(props) {
   super(props);
  
 }
 

  render() {
    var tabDetails = [];
    var content = "";
    for (var i = 0; i < this.props.details.length; i++) {
      tabDetails.push(
          <li className={(this.props.details[i].important ? 'overline' : 'normal')}>{ this.props.details[i].content }</li>
      );
    }

    content = <ul className="list_details">
                {tabDetails}
              </ul>;
    return (
      <div>
        { content }
      </div>
    );
  }
}

export default Details;
