import React, { Component } from 'react';
import Login from './components/security/Login'
import { withStyles } from '@material-ui/core/styles'
import Main from './components/Main'
import {AppBar, Toolbar, IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Logo from './images/pod_logo.png'
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { faEnvelope, faKey, faTruck, faWrench, faListOl, faFile, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'

library.add(faEnvelope, faTruck, faWrench, faKey, faListOl, faFile, faUser, faUsers)

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
    drawerOpen: true,
    variant: 'permanent',
  }

  handleMenuClick = () => {
    let drawerState = ""
    const {drawerOpen, variant} = this.state
    
    if(variant === "permanent") {
      drawerState = "temporary"
    } else {
      drawerState = "permanent"
    }

    this.setState({
      drawerOpen: !this.state.drawerOpen,
      variant: drawerState,
    })
  }

  render() {

    const {classes} = this.props;
    const {user} = this.props;
    const {drawerOpen, variant} = this.state

    return (
        <div className="App">
          <AppBar position="static" className={classes.mainToolBar}>
            <Toolbar>
            {user.isLoggedIn && (
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.handleMenuClick}>
              <MenuIcon />
            </IconButton>
            )}
             <img className={classes.logo} src={Logo} alt="PODVerify" />
            </Toolbar>
            </AppBar>

          {user.isLoggedIn === null || user.isLoggedIn === false?
              <Login login={this.logIn} />
              :
              <Main logout={this.logOut} className={classes.main} open={drawerOpen} variant={variant}/>
            
        }
      </div>
    );
  }
}



const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
  };
};

export default withRouter(connect(mapStateToProps)(withStyles(styles)(App)))
