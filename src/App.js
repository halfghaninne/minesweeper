import React, { Component } from 'react';
import Board from './components/Board'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Board difficultyLevel={3} numberOfMines={1}/>
        </header>
      </div>
    );
  }
}

export default App;
