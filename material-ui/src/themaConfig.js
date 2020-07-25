import {createMuiTheme} from '@material-ui/core/styles'
import {purple, 
  lightGreen
} from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette:{
    primary: {
      main: purple[700]
    },
    secondary: {
      main: lightGreen[500]
    }
  }
})

export default theme;