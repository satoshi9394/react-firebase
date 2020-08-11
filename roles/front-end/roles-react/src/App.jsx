import React from 'react'

//components
import Navbar from './components/Navbar'
import VistaAdmin from './components/VistaAdmin'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <VistaAdmin/>
      </div>
    </div>
  )
}

export default App
