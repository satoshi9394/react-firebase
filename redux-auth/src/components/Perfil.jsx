import React from 'react'

import {useSelector} from 'react-redux'

function Perfil() {

  const {photoURL, displayName, email} = useSelector(store => store.usuario.user)
  return (
    <div className="mt-5 text-center">
      <div className="card">
        <div className="card-body">
          <img src={photoURL} alt="img-of-user" width="100px" className="img-fluid"/>
          <h5 className="card-title">Nombre de usuario: {displayName}</h5>
          <p className="card-text">Email: {email}</p>
          <button className="btn btn-success">
            Editar Nombre
          </button>
        </div>
      </div>
    </div>
  )
}

export default Perfil
