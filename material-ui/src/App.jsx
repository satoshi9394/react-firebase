import React from 'react';

//theme from ui
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './themaConfig'


//components React
import Contenedor from './components/Contenedor';


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Contenedor/>
    </ThemeProvider>
  );
}

export default App;
