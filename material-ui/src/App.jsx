import React from 'react';

//components UI
import {
  Button,
  IconButton,
  Typography
} from '@material-ui/core'
//icons UI
import {
  Delete
} from '@material-ui/icons'
//styles UI
import {makeStyles} from '@material-ui/core/styles'

const useStyle = makeStyles({
  botonPersonalizado: {
    background: 'linear-gradient(45deg, #fe688b 30%, #ff8e53 90%)',
    color: 'white',
    height: 48,
  }
})

function App() {
  const classes = useStyle()
  return (
    <div>
      <Button className={classes.botonPersonalizado}>
        Mi boton personalizado
      </Button>
    </div>
  );
}

export default App;
