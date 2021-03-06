import React, { Component } from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { withStyles } from '@material-ui/core/styles'
import ListIcon from '@material-ui/icons/List'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import MessageIcon from '@material-ui/icons/Message'
import SendIcon from '@material-ui/icons/Send'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

const styles = {
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  }
}

class Navigation extends Component {

  handleChange = (event, value) => {
    this.props.history.push(value)
  }

  render() {
    const { classes, location } = this.props

    return (
      <BottomNavigation value={location.pathname} onChange={this.handleChange} className={classes.root}>
        <BottomNavigationAction label="主页" value="/list" icon={<ListIcon/>}/>
        <BottomNavigationAction label="消息" value="/message" icon={<MessageIcon/>} />
        <BottomNavigationAction label="我的" value="/user" icon={<AccountCircleIcon/>} />
        <BottomNavigationAction label="发布" value="/editor" icon={<SendIcon/>}/>
      </BottomNavigation>
    )
  }
}

export default compose(withRouter, withStyles(styles))(Navigation)