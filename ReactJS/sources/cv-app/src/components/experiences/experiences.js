import React, { Component } from 'react';
import './experience.css';
import Details from './details';
import Competences from './competences';
import Experience from './experience';

class Experiences extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log('componentWillUnmount()');
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    console.log('timer : ', this.state.date.toLocaleTimeString());
    var tabExp = [];
    for (var i = 0; i < this.props.experiences.length; i++) {
      const exp = <Experience experience={ this.props.experiences[i] } />
      tabExp.push(exp);
    }

    return (
      <div>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        {tabExp}
        </div>
    );
  }
}

export default Experiences;
