import React, { Component } from 'react';

import './App.css';
import 'jquery';
import Chat  from './components/Chat';

class App extends Component {
  render() {
    return (
      <div className="App">
        
          <h2>Welcome to chat app</h2>
          <Chat />
        </div>
    );
  }
}
export default App;
