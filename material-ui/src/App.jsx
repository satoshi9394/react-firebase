import React from 'react';

//components UI
import {
  Button,
  IconButton,
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
      <IconButton aria-label="delete">
        <Delete color='primary'/>
      </IconButton>
    </div>
  );
}

export default App;
