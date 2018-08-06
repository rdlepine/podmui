import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import {Drawer, Button, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import {Email, Lock, ExpandMore} from '@material-ui/icons'
import Logo from '../images/pod_logo.png'


const drawerWidth = 240;
const styles = {
    drawerPaper: {
      position: 'relative',
      width: drawerWidth,
    },
    linkButton: {
        border: '0 0 0 0',
        background: '#ffffff',
        marginTop: 30,
    }
}

class Main extends Component {
    render () {
        
        const {classes} = this.props

        return (
            <div>
            <Drawer
                variant="permanent"
                classes={{
                paper: classes.drawerPaper,
                }}
                >
                <Button color="primary" className={classes.linkButton} >Dispatches</Button>
                <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                <Typography className={classes.heading}>Expansion Panel 1</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            </Drawer>
            </div>
        )
    }

}

export default withStyles(styles)(Main)