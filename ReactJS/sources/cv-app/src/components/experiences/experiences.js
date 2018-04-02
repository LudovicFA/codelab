import React, { Component } from 'react';
import './experience.css';
import Details from './details';
import Competences from './competences';
import Experience from './experience';

class Experiences extends React.Component {


  render() {
    var tabExp = [];
    for (var i = 0; i < this.props.experiences.length; i++) {
      const exp = <Experience experience={this.props.experiences[i]} />
      tabExp.push(exp);
    }

    return (
      <div>
        {tabExp}
        </div>
    );
  }
}

export default Experiences;
