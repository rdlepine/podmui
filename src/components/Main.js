import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import SideBar from './SideBar'
import Content from './Content'

const styles = { 
    root: {
        display: "flex",
        flexGrow: 1,
      },
      appFrame: {
        height: 430,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
      },
      content: {
        flexGrow: 1,
        backgroundColor: '#ffffff',
        padding: 20,
        minWidth: 0,
      },
}

class Main extends Component {

    render () {

        const {classes} = this.props

        return (
            <div className={classes.root}>
                <SideBar />
                <main className={classes.content}>
                    <Content />
                </main>
            </div>
        )
    }

}

export default withStyles(styles)(Main)