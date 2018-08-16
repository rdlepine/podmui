import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import {Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse} from '@material-ui/core'
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'

const drawerWidth = 220;

const styles = {
    drawerPaper: {
      marginTop: 1,
      position: 'relative',
      width: drawerWidth,
      background: "linear-gradient(to right, #243949 0%, #517fa4 100%)",
      
    },
    menu: {
        marginTop: 30,
        
    },
    menuText: {
        color: "#FFFFFF",
    },
    mainToolBar: {
        background: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
    },
    logo: {
        width: 220,
        height: 60,
        
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
        color: "black",
    },
    iconSize: {
          maxWidth: 20,
          minWidth:20,
          height: 20,
          color: "#FFFFFF",
    },
}



class SideBar extends Component {

    handleReportsClick = () => {
        this.setState(state => ({ reportsOpen: !state.reportsOpen }));
    };

    handleConfigClick = () => {
        this.setState(state => ({ configOpen: !state.configOpen }));
    };
    
    state = {
        reportsOpen: false,
        configOpen: false,
    }

    render() {
        
        const {classes, open, variant} = this.props

        return (
            <Drawer
                open={open}
                variant={variant}
                classes={{
                     paper: classes.drawerPaper,
                     width: 0,
                }}
                >
                <List className={classes.menu}>
                <ListItem button component={Link} to="/dispatches">
                    <ListItemIcon>
                        <FontAwesomeIcon className={classes.iconSize}
                            icon="truck" size="lg"
                        />
                    </ListItemIcon>
                    <ListItemText inset primary="Dispatches" disableTypography={true} className={classes.menuText}/>
                </ListItem>
                <ListItem button component={Link} to="/details">
                    <ListItemIcon>
                        <FontAwesomeIcon className={classes.iconSize}
                            icon="list-ol" size="lg"
                        />
                    </ListItemIcon>
                    <ListItemText inset primary="Details" disableTypography={true} className={classes.menuText}/>
                </ListItem>

                <ListItem button onClick={this.handleConfigClick}>
                <ListItemIcon>
                    <FontAwesomeIcon className={classes.iconSize}
                         icon="wrench" size="lg"
                     />
                </ListItemIcon>
                <ListItemText inset primary="Maintenance" disableTypography={true} className={classes.menuText}/>
                {this.state.configOpen ? <ExpandLess className={classes.menuText}/> : <ExpandMore className={classes.menuText}/>}
                </ListItem>
                <Collapse in={this.state.configOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItem button className={classes.nested} component={Link} to="/drivers">
                        <ListItemIcon>
                            <StarBorder className={classes.menuText}/>
                        </ListItemIcon>
                        <ListItemText inset primary="Drivers" disableTypography={true} className={classes.menuText}/>
                    </ListItem>
                    </List>
                </Collapse>


                <ListItem button onClick={this.handleReportsClick}>
                <ListItemIcon>
                    <FontAwesomeIcon className={classes.iconSize}
                         icon="file" size="lg"
                     />
                </ListItemIcon>

                <ListItemText inset primary="Reports" disableTypography={true} className={classes.menuText}/>
                {this.state.reportsOpen ? <ExpandLess className={classes.menuText}/> : <ExpandMore className={classes.menuText}/>}
                </ListItem>
                <Collapse in={this.state.reportsOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <StarBorder className={classes.menuText}/>
                        </ListItemIcon>
                        <ListItemText inset primary="BBBB" disableTypography={true} className={classes.menuText}/>
                    </ListItem>
                    </List>
                </Collapse>
         
                </List>
                </Drawer>
        )
    }
}

export default withStyles(styles)(SideBar)