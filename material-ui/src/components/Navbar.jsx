import React from 'react'

import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
  Button
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title:{
    flexGrow: 1
  }
}))


const Navbar = () => {
  const {offset, menuButton, title} = useStyles()
  return (
    <div>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton aria-label="menu" color='inherit' 
          className={menuButton}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" className={title}>
            angel 
          </Typography>
          <Button variant='text' color='inherit'>
            loging
          </Button>
        </Toolbar>
      </AppBar>
      <div className={offset}>
      </div>
    </div>
  )
}

export default Navbar
