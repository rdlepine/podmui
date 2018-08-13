import React, {Component} from 'react'
import classNames from 'classnames';
import { withStyles} from '@material-ui/core/styles'
import {Paper, FormControl, TextField, InputAdornment, Avatar, Button} from '@material-ui/core'
import driverPic from '../../images/pat.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = {
    paper: {
        height: 700,
        width: 800,
        color: "green",
        marginLeft: 50,
    },
    form: {
        marginTop: 150,
    },
    avatar: {
        marginTop: 10,
        marginBottom: 20,
        marginLeft: 0,
    },
    bigAvatar: {
        width: 90,
        height: 90,
    },
    padding: {
        marginTop: 20,
    }
    
}

class Driver extends Component {

    render() {

        const {classes} = this.props

        return (
            <div>
                <Paper className={classes.paper}>
                    <div className="paperTitleDiv">
                        <FontAwesomeIcon className="headerIcon"
                            icon="users" size="lg"
                        />
                        <h2 className="headerTitle">Driver</h2>
                    </div>
                    <div className="paperForm">
                        <form className="formColumn">
                            <FormControl>
                                <Avatar
                                    alt="Adelle Charles"
                                    src={driverPic}
                                    className={classNames(classes.avatar, classes.bigAvatar)}
                                />
                            </FormControl>
                            <FormControl >
                                <TextField className="textField"
                                    id="user"
                                    label="First Name"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <FontAwesomeIcon className="fieldIcon"
                                                icon="user" size="sm"
                                                /> 
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <FormControl >
                                <TextField className="textField"
                                    id="user"
                                    label="Last Name"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <FontAwesomeIcon className="fieldIcon"
                                                icon="user" size="sm"
                                                /> 
                                        </InputAdornment>
                                    }
                                />
                                
                            </FormControl>
                            
                            <FormControl className={classes.padding}>
                                <Button variant="contained" className={"formButton"} color="primary">Submit</Button>
                            </FormControl>
                        </form>
                    </div>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(Driver)