import React from 'react';
import './App.css';
import TodoList from './TodoList';
import CountdownTimer from './CountdownTimer';

function App() {
  return (
    <div className="App">
      <TodoList />
      <CountdownTimer countFrom={5} />
    </div>
  );
}

export default App;
