import React, {useState} from 'react'

//Thema ui
import {
  makeStyles, 
  Hidden
} from '@material-ui/core'

//components 
import Navbar from './Navbar'
import Cajon from './Cajon'

const estilos = makeStyles(theme => ({
  root:{
    display: 'flex'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}))

const Contenedor = () => {

  const {root, toolbar, content} = estilos()
  const [abrir, setAbrir] = useState(false)

  const accionAbrir = () => {
    console.log('entre a boton')
    setAbrir(!abrir)
  }

  return (
    <div className={root}>
      <Navbar accionAbrir={accionAbrir}/>
      <Hidden xsDown>
        <Cajon
          variant="permanent"
          open={true}
        />
      </Hidden>
      <Hidden smUp>
        <Cajon
          variant="temporary"
          open={abrir}
          onClose={accionAbrir}
        />
      </Hidden>
      <div className={content}>
        <div className={toolbar}></div>
        contenido
      </div>
    </div>
  )
}

export default Contenedor
