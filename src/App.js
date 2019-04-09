import React, { Component } from 'react';
import './App.scss';
import TreeView from './components/TreeView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tree view</h1>
        </header>
        <div>
          <TreeView />
        </div>
      </div>
    );
  }
}

export default App;
