import React, { Component } from 'react';

class Competences extends React.Component {

  constructor(props) {
   super(props);
 }

  render() {
    var tabDetails = [];
    if(this.props.important === true){
      for (var i = 0; i < this.props.competences.length; i++) {
        if(this.props.competences[i].important == true){
          tabDetails.push(
            <span className='competence'>{ this.props.competences[i].content }</span> 
          );
        }
      }
    } else {
      for (var i = 0; i < this.props.competences.length; i++) {
        tabDetails.push(
            <span className={(this.props.competences[i].important ? 'competence overline' : 'competence')}>{ this.props.competences[i].content }</span> 
        );
      }
    }

    return (
      <div className="list_competences">
        { tabDetails }
      </div>
    );
  }
}

export default Competences;
