import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'

//firebase
import {auth} from '../firebase'

const Admin = (props) => {

  const [ user, setUser] = useState(null)

  useEffect(() => {
    if(auth.currentUser){
      console.log('existe un usuario')
      setUser(auth.currentUser)
    }else{
      console.log('no existe un usuario')
      props.history.push('/login')
    }
  }, [props.history])

  return (
    <div>
      <h2>Ruta protegida</h2>
      {
        user && 
        (
          <h3>{user.email}</h3>
        )
      }
    </div>
  )
}

export default withRouter(Admin)