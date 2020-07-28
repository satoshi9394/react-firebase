import React from 'react';

//components UI
import {
  Button,
} from '@material-ui/core'

//theme from ui
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './themaConfig'

//components React
import Navbar from './components/Navbar';
import Listas from './components/Listas';
import Oculto from './components/Oculto';


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Button  variant='contained' color='primary'>
        Mi boton personalizado
      </Button>
      <Button  variant='contained' color='secondary'>
        Mi boton personalizado
      </Button>
      <Listas/>
      <Oculto/>
    </ThemeProvider>
  );
}

export default App;
