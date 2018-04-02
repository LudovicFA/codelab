import React, { Component } from 'react';
import './App.css';

import data from './data.json';

import Header from './components/header/header';
import Profil from './components/profil/profil';
import Experiences from './components/experiences/experiences';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Mon super CV"/>
        <hr />

        <Router>
          <div>
            <ul className='navigation'>
              <li><Link to="/">Profil</Link></li>
              <li><Link to="/experiences">Expérience</Link></li>
            </ul>

            <Route exact path="/"  render={() => (
              <section>
                <Profil name={data.identification.name}/>
              </section>
            )}/>
            <Route exact path="/experiences" render={() => (
              <div>
                <Experiences experiences={data.experiences}></Experiences>
                </div>
            )}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
