import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import {CardHeader, FormControl, InputLabel, Input, InputAdornment, Button, Avatar} from '@material-ui/core'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import {AccountCircle} from '@material-ui/icons'
import Logo from '../images/pod_logo.png'

const styles = {
    card: {
       
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 'auto',
        marginTop: 200,
        height: 400,
        width: 400,
      
        backgroundColor: 'white'
      
    },
    login: {
        marginTop: 30,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    margin: {
        marginTop: 40,
    },
    header: {
        
        height: 40,
        width: 40,
        borderRadius: 10,
        backgroundColor: 'blue',
        position: 'absolute',
        marginTop: -30,
        marginLeft: 10,
    },
    logo: {
        width: 300,
        height: 80,
        marginTop: 20,
    }
  };

class Login extends Component {

    render () {
        const {classes} = this.props
        return (
            <div>
                <Card className={classes.card}>
                    
                    <CardHeader className={classes.header} avatar={
                        <Avatar>
                            <AccountCircle />
                        </Avatar>
                    }>
                    </CardHeader>
                    <CardContent>
                    <img className={classes.logo} src={Logo} />
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor="user">Email</InputLabel>
                        <Input
                        id="user"
                        startAdornment={
                            <InputAdornment position="start">
                            <AccountCircle />
                            </InputAdornment>
                        }
                        />
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                        id="password"
                        startAdornment={
                            <InputAdornment position="start">
                            <AccountCircle />
                            </InputAdornment>
                        }
                        />
                        <Button variant="contained" color="primary" className={classes.login}>LOGIN</Button>
                     </FormControl>
                    </CardContent>
                </Card>
            </div>
        )
    }

}

export default withStyles(styles)(Login)