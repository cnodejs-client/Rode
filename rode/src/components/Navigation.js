import React, { Component } from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  }
}

class Navigation extends Component {

  constructor (props) {
    super(props)
    this.state = {
      value: 'recents',
    }
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { value } = this.state
    const { classes } = this.props

    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
        <BottomNavigationAction label="主页" value="recents" />
        <BottomNavigationAction label="消息" value="favorites"  />
        <BottomNavigationAction label="我的" value="nearby" />
        <BottomNavigationAction label="发布" value="folder" />
      </BottomNavigation>
    )
  }
}

export default withStyles(styles)(Navigation)