import React, {useContext} from 'react';
import {ChatContext} from './context/ChatProvider'


//components
import Navbar from './components/Navbar';


function App() {
  const {saludo} = useContext(ChatContext)
  return (
    <div>
      <Navbar/>
      Chat {saludo}
    </div>
  );
}

export default App;
