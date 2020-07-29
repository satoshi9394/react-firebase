import React from 'react'
//Thema ui
import {
  makeStyles,
  Drawer,
  Divider,
} from '@material-ui/core'

//components
import Listas from './Listas'

const drawerWidth = 240

const estilos = makeStyles( theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
}))

const Cajon = ({variant, open, onClose}) => {
  const {drawer, drawerPaper, toolbar} = estilos()
  return (
    <Drawer
      className={drawer}
      classes={{
        paper: drawerPaper,
      }}
      anchor='left'
      variant={variant}
      open={open}
      onClose={onClose ? onClose : null}
    >
      <div className={toolbar}></div>
      <Divider/>
      <Listas></Listas>
    </Drawer>
  )
}

export default Cajon
