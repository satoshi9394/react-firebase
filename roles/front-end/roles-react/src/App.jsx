import React, { useContext} from 'react'

//components
import Navbar from './components/Navbar'
import VistaAdmin from './components/VistaAdmin'

import { UsuarioContext } from './context/UsuarioProvider'

const App = () => {

  const { usuario } = useContext(UsuarioContext) 
  return (
    <div>
      <Navbar/>
      <div className="container">
        {
          usuario.rol === 'admin' && <VistaAdmin/>
        }
      </div>
    </div>
  )
}

export default App
