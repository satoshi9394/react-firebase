import React from 'react'

//Material UI
import {
  Box
} from '@material-ui/core'

const Cajita = () => {
  return (
    <div>
      <Box
        color='primary.main'
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing.
      </Box>
      <Box
        color='primary.contrastText'
        bgcolor='primary.main'
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing.
      </Box>
      <Box
        color='primary.contrastText'
        bgcolor='primary.main'
        mt={2}
        p={5}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing.
      </Box>
      <Box
        m={2}
        p={5}
        border={2}
        borderColor="error.main"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing.
      </Box>
    </div>
  )
}

export default Cajita
