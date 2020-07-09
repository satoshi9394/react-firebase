import React from 'react'
import {useDispatch} from 'react-redux'

import {
  ingresoUsuarioAction
} 
from '../redux/usuarioDuck'

function Login() {

  const dispatch = useDispatch()
  return (
    <div className="mt-5 text-center">
      <h3>Ingreso con Google</h3>
      <hr/>
      <button className="btn btn-dark"
        onClick={() => dispatch(ingresoUsuarioAction())}
        >
        Acceder
      </button>
    </div>
  )
}

export default Login
