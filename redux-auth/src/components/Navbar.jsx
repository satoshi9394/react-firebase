import React from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import {cerrarSesionAccion} from '../redux/usuarioDuck'

function Navbar({history}) {

  const dispatch = useDispatch()  
  const cerrarSession = () => {
    dispatch(cerrarSesionAccion())
    history.push('/login')
  }
  const activo = useSelector(store => store.usuario.activo)

  return (
    <div className="navbar navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        APP POKE
      </Link>
      <div className="d-flex">
        {
          activo ? (
            <>
              <NavLink className="btn btn-dark mr-2" to="/" exact>
                Inicio
              </NavLink>
              <button className="btn btn-dark mr-2"
                onClick={() => cerrarSession()}
              >
                Cerrar
              </button>
            </>
          ) : (
            <NavLink className="btn btn-dark mr-2" to="/login" exact>
              Login
            </NavLink>
          )
        }
      </div>
    </div>
  )
}

export default withRouter(Navbar)
