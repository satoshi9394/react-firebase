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

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]:{
      display: 'none',
    },
  },
  title:{
    flexGrow: 1
  },
  appBar: {
    [theme.breakpoints.up('sm')]:{
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    }
  }
}))


const Navbar = ({accionAbrir}) => {
  const {menuButton, title, appBar} = useStyles()
  return (
    <AppBar position="fixed" color="primary" className={appBar}>
      <Toolbar>
        <IconButton aria-label="menu" color='inherit' 
        className={menuButton}
        onClick={() => accionAbrir()}
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
  )
}

export default Navbar
