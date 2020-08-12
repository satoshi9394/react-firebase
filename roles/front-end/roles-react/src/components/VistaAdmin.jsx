import React, {useState, useEffect} from 'react'
import {db, functions} from '../firebase'

const VistaAdmin = () => {
  const [usuarios, setUsuarios] = useState([])
  useEffect(() => {
    fetchUsuarios()
  }, [])

  const fetchUsuarios= async () => {
    try {
      const res = await db.collection('usuarios').get()
      const arrayUsuarios = res.docs.map(doc => doc.data())
      setUsuarios(arrayUsuarios)
    } catch (error) {
      console.error(error)
    }
  }
  const administrador = email => {
    if(!email.trim()){
      return console.log('email vacio')
    }
    const agregarRol = functions.httpsCallable('agregarAdministrador')
    agregarRol({email: email})
      .then( res => {
        console.log(res)
        if(res.data.error){
          console.error('no tiene permisos')
          return
        }
        db.collection('usuarios').doc(email).update({rol: 'admin'})
          .then(user => {
            console.log('usuario modificado rol administrador')
            fetchUsuarios()
          })
      })
  }
  return (
    <div>
      <h3>
        Administracion de usuarios
      </h3>
      {
        usuarios.map( usuario => (
          <div key={usuario.uid} className='mb-2'>
            {usuario.email} - Rol: {usuario.rol} 
            <button
              className='btn btn-danger mx-2'
              onClick={() => administrador(usuario.email)}
            >
              Administrador
            </button>
          </div>
        ))
      }
    </div>
  )
}

export default VistaAdmin
