import React, { Component } from 'react';
import Login from './components/security/Login'
import { withStyles } from '@material-ui/core/styles'
import Main from './components/Main'
import {AppBar, Toolbar, IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Logo from './images/pod_logo.png'
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faKey, faTruck, faWrench, faListOl, faFile } from '@fortawesome/free-solid-svg-icons'

library.add(faEnvelope, faTruck, faWrench, faKey, faListOl, faFile)

const styles = {
  mainToolBar: {
    //background: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
    background: '#ffffff',
  },
  logo: {
    background: "transparent",
    width: 220,
    height: 60,
    
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: "black",
  },
  main: {
    marginTop: 10,
  }
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

    const {classes} = this.props;
    const {isLoggedIn} = this.state;

    return (
        <div className="App">
          <AppBar position="static" className={classes.mainToolBar}>
            <Toolbar>
            {isLoggedIn && (
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            )}
             <img className={classes.logo} src={Logo} alt="PODVerify" />
            </Toolbar>
            </AppBar>

          {this.state.isLoggedIn === false?
              <Login login={this.logIn} />
              :
              <Main logout={this.logOut} className={classes.main}/>
            
        }
      </div>
    );
  }
}

export default withStyles(styles)(App)
