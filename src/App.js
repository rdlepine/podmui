import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './components/Login'
import { withStyles } from '@material-ui/core/styles'
import Main from './components/Main'
import {AppBar, Toolbar} from '@material-ui/core'

import './App.css';

const styles = {
  loginToolbar: {
    background: "linear-gradient(60deg, #667eea, #764ba2)",
  },
}

class App extends Component {

  state = {
    isLoggedIn: false,
  } 

  logIn = () => {
    this.setState({isLoggedIn: true})
  }

  logOut = () => {
    this.setState({isLoggedIn: false})
  }


  render() {

    const classes = this.props;

    return (
        <div className="App">
          <AppBar className={classes.loginToolbar} position="static">
            <Toolbar>
          
            </Toolbar>
            </AppBar>

          {this.state.isLoggedIn === false?
              <Login login={this.logIn} />
              :
              <Main logout={this.logOut} />
            
        }
      </div>
    );
  }
}

export default withStyles(styles)(App)
