import React, {useContext} from 'react'

//context
import {ThemeContext} from '../context/ThemeProvider'
import {HolaContext} from '../context/HolaProvider'

function Principal() {
  const {theme} = useContext(ThemeContext)
  const {hola} = useContext(HolaContext)
  return (
    <div
    style={
      {
        background: theme.background,
        color: theme.color,
        margin: "10px 0 10px 0",
        height: "100vh",
      }
    }
    >
      <h1>Contenido de mi sitio web</h1>
      <p>{hola}</p>
    </div>
  )
}

export default Principal
