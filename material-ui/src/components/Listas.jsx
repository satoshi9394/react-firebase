import React from 'react'

//components UI
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@material-ui/core'

//icons
import {
  CloudQueue,
  Deck
} from '@material-ui/icons'

const Listas = () => {
  return (
    <div>
      <List component='nav'>
        <ListItem button>
          <ListItemIcon>
            <CloudQueue/>
          </ListItemIcon>
          <ListItemText primary="mi primer elemento" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Deck/>
          </ListItemIcon>
          <ListItemText primary="mi segundo elemento" />
        </ListItem>
        <Divider/>
      </List>
    </div>
  )
}

export default Listas
