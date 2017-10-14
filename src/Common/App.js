import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import logo from './Assets/logo.png';

import GithubProfile from '../GithubProfile';
import RepositoryCommits from '../Repositories/repositoryCommits';
import GistFiles from '../Gists/gistFiles';
import './App.css';

/**
 * Root App Component to define & render Header and Router Components
 */
export class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
            <img src={logo} className='logo' alt="logo" />
        </header>
        <Router>
          <div className="container">
              <Route exact path="/" component={GithubProfile}/>
              <Route path="/:repoName/commits" component={RepositoryCommits}/>
              <Route path="/gist/:gistId" component={GistFiles}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
