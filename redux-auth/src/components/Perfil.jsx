import React, {useState} from 'react'

import {useSelector, useDispatch} from 'react-redux'

//Tienda
import {
  actualizarUsuarioAccion,
  editarFotoAccion
} from '../redux/usuarioDuck'
//components
import Spinner from './Spinner'

function Perfil() {
  const {photoURL, displayName, email} = useSelector(store => store.usuario.user)
  const loading = useSelector( store => store.usuario.loading)

  const [nombreUsuario, setNombreUsuario] = useState(displayName)
  const [activarFormulario, setActivarFormulario] = useState(false)
  const [error, setError] = useState(false)

  const dispatch = useDispatch()

  const actualizarUsuario = () => {
    if(!nombreUsuario.trim()){
      console.log('nombre vacio')
      return
    }
    dispatch(actualizarUsuarioAccion(nombreUsuario))
    setActivarFormulario(false)
  }

  const selecionarArchivo = (imagen) => {
    console.log(imagen.target.files[0])
    const imagenCliente = imagen.target.files[0]
    if(imagenCliente === undefined){
      console.log('no se seleciono ninguna foto')
      return
    }
    if( imagenCliente.type === "image/png" || imagenCliente.type === "image/jpeg"){
      dispatch(editarFotoAccion(imagenCliente))
      setError(false)
    }else{
      setError(true)
    }
  }

  return (
    <div className="mt-5 text-center">
      <div className="card">
        <div className="card-body">
          <img src={photoURL} alt="img-of-user" width="30%" className="img-fluid"/>
          <h5 className="card-title">Nombre de usuario: {displayName}</h5>
          <p className="card-text">Email: {email}</p>
          <button 
            className="btn btn-success"
            onClick={()=> setActivarFormulario(true)}
            >
            Editar Nombre
          </button>
          {
            error &&
            <div className="alert alert-warning mt-2">
              Solo archivos PNG o JPG
            </div>
          }
          <div className="custom-file">
            <input 
              type="file" 
              className="custom-file-input" 
              id="inputGroupFile01" 
              style={{display: 'none'}}
              onChange={ e => selecionarArchivo(e)}
              disabled={loading}
              />
            <label 
              className={loading ? 
                "btn btn-success mt-2 disabled" : 
                "btn btn-success mt-2"
                }
              htmlFor="inputGroupFile01"
              >
                Actualizar Imagen
              </label>
          </div>
        </div>
        {
          loading &&
          <div className="card-body">
          <Spinner/>
          </div>
        }
        {
          activarFormulario && 
          (
            <div className="card-body">
              <div className="row justify-content-center">
                <div className="col-md-5">
                  <div className="input-group mb-3">
                    <input type="text" 
                      className="form-control" 
                      value={nombreUsuario}
                      onChange={ e => setNombreUsuario(e.target.value)}
                    />
                    <div className="input-group-append">
                      <button 
                        className="btn btn-success" 
                        type="button"
                        onClick={()=> actualizarUsuario()}
                      >
                        Actualizar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Perfil
