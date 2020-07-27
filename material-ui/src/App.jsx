import React from 'react';

//components UI
import {
  Button,
  Typography
} from '@material-ui/core'

//theme from ui
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './themaConfig'

//components React
import Navbar from './components/Navbar';



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
      <Typography variant="h4" color="initial">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi doloribus cupiditate natus blanditiis! Eveniet, molestiae.
      </Typography>
    </ThemeProvider>
  );
}

export default App;
