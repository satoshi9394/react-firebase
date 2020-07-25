import React from 'react';

//components UI
import {
  Button,
} from '@material-ui/core'

//theme from ui
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './themaConfig'



function App() {

  return (
    <ThemeProvider theme={theme}>
      <Button  variant='contained' color='primary'>
        Mi boton personalizado
      </Button>
      <Button  variant='contained' color='secondary'>
        Mi boton personalizado
      </Button>
    </ThemeProvider>
  );
}

export default App;
