import React, {useState} from 'react'

function Navbar() {

  const [color, setColor] = useState('')
  const [colorTexto, setColorTexto] = useState('#000')

  return (
    <div style={
      {
        background: color,
        color: colorTexto,
      }
    }>
      <h1>Navbar</h1>
      <input 
        type="color"
        onChange={ e => setColor(e.target.value)}
      />
      <input 
        type="color"
        onChange={ e => setColorTexto(e.target.value)}
      />
    </div>
  )
}

export default Navbar
