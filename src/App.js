import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import UserLandingPage from './containers/userlandingpage.js';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
      <Router>
        <div>
          <nav className="navbar navbar-expand-md bg-primary navbar-dark">
            <div className="container">
              <a className="navbar-brand" href="/"><i className="fa d-inline fa-lg fa-hand-paper-o"></i><b className = "app-title">   Roll Call</b></a>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/about"><i className="fa d-inline fa-lg"></i>About</a>
                  </li>
                </ul>
              </div>
          </nav>
          <Route exact path="/" component={UserLandingPage} />
        </div>
      </Router>

      <div className="text-white bg-primary footer">
            <div className = "footer-text">
              <p></p>
            </div>
      </div>
</div >
)
  }
}

export default App;