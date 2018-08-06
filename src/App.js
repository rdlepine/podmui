import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './components/Login'
import Main from './components/Main'
import './App.css';

class App extends Component {

  state = {
    isLoggedIn: false,
  } 

  render() {
    return (
      <div className="App">
          {this.state.isLoggedIn === false?
              <Login />
              :
              <Main />
            
        }
      </div>
    );
  }
}

export default App;
