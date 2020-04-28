import React from 'react';
import logo from './logo.svg';
import './App.css';
import FancyButton from './FancyButton';
import InputField from './InputField';

const obj = {
  name: 'Brian',
  occupation: 'engineer',
  favoriteFood: 'sushi'
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <FancyButton objToDisplay={obj} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <InputField />
      </header>
    </div>
  );
}

export default App;
