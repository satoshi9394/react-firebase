import React, {useContext} from 'react'
//context
import {ThemeContext} from '../context/ThemeProvider'

function Navbar() {
  const {theme, cambioColor} = useContext(ThemeContext)

  return (
    <div style={
      {
        background: theme.background,
        color: theme.color,
      }
    }>
      <h1>Navbar</h1>
      <label>Color de Fondo</label>
      <input 
        type="color"
        onChange={ e => cambioColor({...theme, background: e.target.value})}
      />
      <label>Color de texto</label>
      <input 
        type="color"
        onChange={ e => cambioColor({...theme, color: e.target.value})}
      />
    </div>
  )
}

export default Navbar
