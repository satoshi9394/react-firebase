import React, {useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {withRouter} from 'react-router-dom'

import {
  ingresoUsuarioAction
} 
from '../redux/usuarioDuck'

function Login(props) {
  const loading = useSelector(store => store.usuario.loading)
  const activo = useSelector(store => store.usuario.activo)
  useEffect(() => {
    if(activo){
      props.history.push('/')
    }
  }, [activo, props ])

  const dispatch = useDispatch()
  return (
    <div className="mt-5 text-center">
      <h3>Ingreso con Google</h3>
      <hr/>
      <button className="btn btn-dark"
        onClick={() => dispatch(ingresoUsuarioAction())}
        disabled={loading}
        >
        Acceder
      </button>
    </div>
  )
}

export default withRouter(Login)
