import React from 'react';

//components UI
import {
  Button,
} from '@material-ui/core'
//icons UI
import {Delete} from '@material-ui/icons'

function App() {
  return (
    <div>
      <Button 
        variant='contained'
        color="secondary"
        startIcon={<Delete/>}
        >
        Borrado
      </Button>
    </div>
  );
}

export default App;
