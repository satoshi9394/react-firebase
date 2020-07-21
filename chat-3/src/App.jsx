import React, {useContext} from 'react';
import {ChatContext} from './context/ChatProvider'


//components
import Navbar from './components/Navbar';


function App() {
  const {usuario} = useContext(ChatContext)
  return usuario!== null ?(
    <div>
      <Navbar/>
      Chat 
    </div>
  ) : (
  <div>
    Cargando...
  </div>
  )
}

export default App;
